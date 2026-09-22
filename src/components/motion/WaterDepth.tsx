"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Current gulf navy at the top of the page. */
const SURFACE = { r: 6, g: 16, b: 30 };
/** Almost-black we used before the lift. */
const ABYSS = { r: 5, g: 7, b: 14 };

function hex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((n) =>
      Math.round(n)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

export function WaterDepth() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    function paint() {
      frame = 0;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const raw = Math.min(1, Math.max(0, window.scrollY / max));
      const t = raw * raw;
      root.style.setProperty(
        "--brand-black",
        hex(
          SURFACE.r + (ABYSS.r - SURFACE.r) * t,
          SURFACE.g + (ABYSS.g - SURFACE.g) * t,
          SURFACE.b + (ABYSS.b - SURFACE.b) * t,
        ),
      );
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(paint);
    }

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty("--brand-black");
    };
  }, [pathname]);

  return null;
}
