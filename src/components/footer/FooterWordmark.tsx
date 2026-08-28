"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

function waveClip(fill: number, time: number) {
  const amount = Math.min(1, Math.max(0, fill));
  const top = (1 - amount) * 100;
  const amp = amount > 0.02 && amount < 0.98 ? 4.5 : 0;
  const steps = 14;
  const points = [`0% 110%`, `0% ${top}%`];

  for (let i = 1; i <= steps; i += 1) {
    const x = (i / steps) * 100;
    const y = top + Math.sin(time + i * 0.65) * amp;
    points.push(`${x}% ${y}%`);
  }

  points.push("100% 110%");
  return `polygon(${points.join(",")})`;
}

export function FooterWordmark() {
  const root = useRef<HTMLDivElement>(null);
  const scaler = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const wrap = root.current;
      const type = scaler.current;
      const liquid = fill.current;
      if (!wrap || !type || !liquid) return;

      const footer = wrap.closest("footer") ?? wrap;
      const state = { fill: 0, t: 0 };

      const applyFill = () => {
        const clip = waveClip(state.fill, state.t);
        liquid.style.clipPath = clip;
        liquid.style.setProperty("-webkit-clip-path", clip);
      };

      const fit = () => {
        const current = Number(gsap.getProperty(type, "scale")) || 1;
        gsap.set(type, { scale: 1, fontSize: "100px" });
        const fitted = 100 * (wrap.clientWidth / Math.max(type.scrollWidth, 1));
        gsap.set(type, { fontSize: `${fitted}px` });
        wrap.style.height = `${type.offsetHeight}px`;
        gsap.set(type, { scale: current, transformOrigin: "left bottom" });
      };

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        fit();
        state.fill = 0;
        applyFill();
        gsap.set(type, { scale: 0.42, transformOrigin: "left bottom" });

        gsap.fromTo(
          type,
          { scale: 0.42 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: footer,
              start: "top bottom",
              end: "max",
              scrub: 0.5,
              invalidateOnRefresh: true,
              onRefresh: fit,
            },
          },
        );

        const fillTween = gsap.fromTo(
          state,
          { fill: 0, t: 0 },
          {
            fill: 1,
            t: 14,
            duration: 1.8,
            delay: 0.4,
            ease: "none",
            paused: true,
            immediateRender: true,
            onUpdate: applyFill,
          },
        );

        ScrollTrigger.create({
          trigger: wrap,
          start: "top 88%",
          invalidateOnRefresh: true,
          onEnter: () => fillTween.restart(),
          onEnterBack: () => fillTween.restart(),
          onLeaveBack: () => {
            fillTween.pause(0);
            state.fill = 0;
            state.t = 0;
            applyFill();
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        fit();
        gsap.set(type, { scale: 1, transformOrigin: "left bottom" });
        state.fill = 1;
        applyFill();
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={root} className="relative mt-14 w-full overflow-x-clip">
      <div
        ref={scaler}
        className="absolute bottom-0 left-0 origin-bottom-left whitespace-nowrap font-bold uppercase leading-none tracking-[0.02em] text-[100px] will-change-transform"
      >
        <span className="relative inline-block">
          <span className="text-brand-white/15">Dive Pros</span>
          <span
            ref={fill}
            aria-hidden
            className="absolute inset-0 text-brand-yellow"
          >
            Dive Pros
          </span>
        </span>
      </div>
    </div>
  );
}
