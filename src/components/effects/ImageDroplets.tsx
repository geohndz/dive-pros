"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { VERT, FRAG, TRAIL_FRAG } from "@/components/effects/droplets-shaders";
import type { DropletsOptions } from "@/components/effects/Droplets";

export type ImageDropletsProps = DropletsOptions & {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  /** CSS linear-gradient layered over the image before the effect. */
  gradient?: string;
};

const DEFAULTS: Required<DropletsOptions> = {
  intensity: 0.5,
  speed: 1,
  scale: 0.4,
  dropWidth: 1,
  dropLength: 1,
  refraction: 0.2,
  blur: 0,
  vignette: 0,
  fallSpeed: 1,
  wiggle: 1,
  staticDrops: 0.2,
  interactive: true,
  interactionRadius: 0.3,
  interactionStrength: 0.6,
  interactionDistortion: 3,
  tint: [1, 1, 1],
  tintStrength: 0,
};

/**
 * Canvas UI Droplets effect driven by an image texture (WebGL2).
 * Works without the experimental html-in-canvas API.
 */
export function ImageDroplets({
  src,
  alt = "",
  className,
  style,
  gradient = "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.40) 100%)",
  ...options
}: ImageDropletsProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const wrap = wrapRef.current;
    const outputEl = outputRef.current;
    if (!wrap || !outputEl) return;
    const output = outputEl;

    const gl = output.getContext("webgl2", {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: true,
    });
    if (!gl) {
      setFailed(true);
      return;
    }

    const config = { ...DEFAULTS, ...optionsRef.current };
    const staging = document.createElement("canvas");
    const stagingCtx = staging.getContext("2d");
    if (!stagingCtx) {
      setFailed(true);
      return;
    }

    let destroyed = false;
    let running = false;
    let visible = true;
    let raf = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let contentDirty = false;
    let hasContent = false;
    let image: HTMLImageElement | null = null;

    function compile(type: number, text: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, text);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error("ImageDroplets shader error:", gl!.getShaderInfoLog(shader));
      }
      return shader;
    }

    const vertexShader = compile(gl.VERTEX_SHADER, VERT);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, FRAG);
    const trailShader = compile(gl.FRAGMENT_SHADER, TRAIL_FRAG);

    function link(fragment: WebGLShader) {
      const prog = gl!.createProgram()!;
      gl!.attachShader(prog, vertexShader);
      gl!.attachShader(prog, fragment);
      gl!.linkProgram(prog);
      const locations: Record<string, WebGLUniformLocation> = {};
      const total = gl!.getProgramParameter(prog, gl!.ACTIVE_UNIFORMS);
      for (let i = 0; i < total; i++) {
        const info = gl!.getActiveUniform(prog, i)!;
        locations[info.name] = gl!.getUniformLocation(prog, info.name)!;
      }
      return { program: prog, uniforms: locations };
    }

    const { program, uniforms } = link(fragmentShader);
    const { program: trailProgram, uniforms: trailUniforms } = link(trailShader);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const contentTexture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, contentTexture);
    // LINEAR (no mipmaps): avoids incomplete-texture black sampling on resize
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    let trailWidth = 0;
    let trailHeight = 0;
    const trailTextures: WebGLTexture[] = [];
    const trailFramebuffers: WebGLFramebuffer[] = [];
    let trailIndex = 0;

    const pointer = {
      x: 0.5,
      y: 0.5,
      px: 0.5,
      py: 0.5,
      seen: false,
      moved: false,
    };

    function drawCover(
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      width: number,
      height: number,
    ) {
      const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (width - w) / 2;
      const y = (height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
    }

    function paintStaging() {
      if (!image || !stagingCtx) return false;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssW = Math.max(1, Math.round(output.clientWidth));
      const cssH = Math.max(1, Math.round(output.clientHeight));
      const width = Math.max(1, Math.round(cssW * dpr));
      const height = Math.max(1, Math.round(cssH * dpr));

      if (staging.width !== width || staging.height !== height) {
        staging.width = width;
        staging.height = height;
      }

      stagingCtx.setTransform(1, 0, 0, 1, 0, 0);
      stagingCtx.clearRect(0, 0, width, height);
      stagingCtx.fillStyle = "#d3d3d3";
      stagingCtx.fillRect(0, 0, width, height);
      drawCover(stagingCtx, image, width, height);

      // Gradient overlay (image → gradient → droplets)
      const grad = stagingCtx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0.5, "rgba(0, 0, 0, 0)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0.40)");
      stagingCtx.fillStyle = grad;
      stagingCtx.fillRect(0, 0, width, height);

      contentDirty = true;
      hasContent = true;
      return true;
    }

    function syncCanvasSize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(output.clientWidth * dpr));
      const height = Math.max(1, Math.round(output.clientHeight * dpr));
      if (output.width !== width || output.height !== height) {
        output.width = width;
        output.height = height;
      }
      paintStaging();
    }

    function ensureTrailTargets() {
      const width = Math.max(1, Math.round(output.width / 4));
      const height = Math.max(1, Math.round(output.height / 4));
      if (width === trailWidth && height === trailHeight && trailTextures.length)
        return;
      trailWidth = width;
      trailHeight = height;
      for (const texture of trailTextures) gl!.deleteTexture(texture);
      for (const framebuffer of trailFramebuffers)
        gl!.deleteFramebuffer(framebuffer);
      trailTextures.length = 0;
      trailFramebuffers.length = 0;
      for (let i = 0; i < 2; i++) {
        const texture = gl!.createTexture()!;
        gl!.bindTexture(gl!.TEXTURE_2D, texture);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
        gl!.texImage2D(
          gl!.TEXTURE_2D,
          0,
          gl!.RGBA,
          width,
          height,
          0,
          gl!.RGBA,
          gl!.UNSIGNED_BYTE,
          null,
        );
        const framebuffer = gl!.createFramebuffer()!;
        gl!.bindFramebuffer(gl!.FRAMEBUFFER, framebuffer);
        gl!.framebufferTexture2D(
          gl!.FRAMEBUFFER,
          gl!.COLOR_ATTACHMENT0,
          gl!.TEXTURE_2D,
          texture,
          0,
        );
        gl!.clearColor(0, 0, 0, 1);
        gl!.clear(gl!.COLOR_BUFFER_BIT);
        trailTextures.push(texture);
        trailFramebuffers.push(framebuffer);
      }
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
    }

    function updateTrail(delta: number) {
      ensureTrailTargets();
      gl!.useProgram(trailProgram);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, trailTextures[trailIndex]);
      gl!.uniform1i(trailUniforms.uPrev, 0);
      gl!.uniform1f(trailUniforms.uDecay, Math.exp(-delta * 0.5));
      gl!.uniform1f(trailUniforms.uDrain, delta * 0.3);
      gl!.uniform1f(
        trailUniforms.uAspect,
        output.width / Math.max(output.height, 1),
      );
      gl!.uniform2f(trailUniforms.uFrom, pointer.px, pointer.py);
      gl!.uniform2f(trailUniforms.uTo, pointer.x, pointer.y);
      gl!.uniform1f(
        trailUniforms.uRadius,
        Math.max(config.interactionRadius, 0.01),
      );
      gl!.uniform1f(
        trailUniforms.uSplat,
        config.interactive && pointer.moved ? 1 : 0,
      );
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, trailFramebuffers[1 - trailIndex]);
      gl!.viewport(0, 0, trailWidth, trailHeight);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      trailIndex = 1 - trailIndex;
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.moved = false;
    }

    function uploadContent() {
      if (!contentDirty || !hasContent) return;
      contentDirty = false;
      gl!.bindTexture(gl!.TEXTURE_2D, contentTexture);
      gl!.texImage2D(
        gl!.TEXTURE_2D,
        0,
        gl!.RGBA,
        gl!.RGBA,
        gl!.UNSIGNED_BYTE,
        staging,
      );
    }

    function render(timeSec: number) {
      if (!hasContent) return;
      Object.assign(config, optionsRef.current);
      uploadContent();
      gl!.useProgram(program);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, contentTexture);
      gl!.uniform1i(uniforms.uContent, 0);
      gl!.uniform1f(uniforms.uHasContent, 1);
      gl!.uniform2f(uniforms.uResolution, output.width, output.height);
      gl!.uniform2f(uniforms.uOffset, 0, 0);
      gl!.uniform1f(uniforms.uTime, timeSec);
      gl!.uniform1f(uniforms.uIntensity, config.intensity);
      gl!.uniform1f(uniforms.uScale, Math.max(config.scale, 0.01));
      gl!.uniform1f(uniforms.uDropWidth, Math.max(config.dropWidth, 0.05));
      gl!.uniform1f(uniforms.uDropLength, Math.max(config.dropLength, 0.05));
      gl!.uniform1f(uniforms.uRefraction, config.refraction);
      gl!.uniform1f(uniforms.uBlur, Math.max(config.blur, 0));
      gl!.uniform1f(uniforms.uVignette, config.vignette);
      gl!.uniform1f(uniforms.uFallSpeed, config.fallSpeed);
      gl!.uniform1f(uniforms.uWiggle, config.wiggle);
      gl!.uniform1f(uniforms.uStaticDrops, config.staticDrops);
      gl!.uniform1f(uniforms.uMaxX, 1);
      gl!.activeTexture(gl!.TEXTURE1);
      gl!.bindTexture(gl!.TEXTURE_2D, trailTextures[trailIndex]);
      gl!.uniform1i(uniforms.uTrail, 1);
      gl!.uniform1f(
        uniforms.uWipe,
        config.interactive
          ? Math.min(Math.max(config.interactionStrength, 0), 1)
          : 0,
      );
      gl!.uniform1f(
        uniforms.uWipeDistort,
        Math.max(config.interactionDistortion, 0),
      );
      gl!.uniform3f(
        uniforms.uTint,
        config.tint[0],
        config.tint[1],
        config.tint[2],
      );
      gl!.uniform1f(uniforms.uTintStrength, config.tintStrength);
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      gl!.viewport(0, 0, output.width, output.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;

    function frame(now: number) {
      if (destroyed) return;
      if (!visible) {
        running = false;
        return;
      }
      const delta = Math.min((now - lastTime) / 1000, 1 / 30);
      lastTime = now;
      elapsed += delta * config.speed;
      updateTrail(delta);
      render(elapsed);
      if (reducedMotion) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (destroyed || running || !visible || !hasContent) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(frame);
    }

    function onMotionChange() {
      reducedMotion = motionQuery.matches;
      start();
    }
    motionQuery.addEventListener("change", onMotionChange);

    const observer = new ResizeObserver(() => {
      syncCanvasSize();
      start();
    });
    observer.observe(output);

    const intersection = new IntersectionObserver((entries) => {
      visible = entries[entries.length - 1]?.isIntersecting ?? true;
      if (visible) start();
    });
    intersection.observe(output);

    function onPointerMove(event: PointerEvent) {
      if (!config.interactive || reducedMotion) return;
      const rect = output.getBoundingClientRect();
      const x = (event.clientX - rect.left) / Math.max(rect.width, 1);
      const y = 1 - (event.clientY - rect.top) / Math.max(rect.height, 1);
      if (!pointer.seen) {
        pointer.seen = true;
        pointer.px = x;
        pointer.py = y;
      }
      pointer.x = x;
      pointer.y = y;
      pointer.moved = true;
      start();
    }

    function onPointerLeave() {
      pointer.seen = false;
    }

    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerleave", onPointerLeave);

    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (destroyed) return;
      image = img;
      syncCanvasSize();
      // Force a render even if an earlier loop already exited
      running = false;
      setReady(true);
      start();
    };
    img.onerror = () => {
      if (!destroyed) setFailed(true);
    };
    img.src = src;

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      intersection.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      gl.deleteTexture(contentTexture);
      for (const texture of trailTextures) gl.deleteTexture(texture);
      for (const framebuffer of trailFramebuffers)
        gl.deleteFramebuffer(framebuffer);
      gl.deleteProgram(program);
      gl.deleteProgram(trailProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteShader(trailShader);
      gl.deleteBuffer(quad);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- options read via optionsRef; gradient baked into paint
  }, [src]);

  if (failed) {
    return (
      <div
        className={className}
        style={{
          position: "relative",
          background: `${gradient}, url(${src}) lightgray 50% / cover no-repeat`,
          ...style,
        }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: "relative", ...style }}
    >
      {/* Static fallback until WebGL first frame is ready */}
      {!ready ? (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `${gradient}, url(${src}) lightgray 50% / cover no-repeat`,
          }}
        />
      ) : null}
      <canvas
        ref={outputRef}
        aria-label={alt}
        role="img"
        className="absolute inset-0 h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
