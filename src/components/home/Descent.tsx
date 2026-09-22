"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

function headerOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();
  return Number.parseFloat(raw) || 88;
}

export function Descent({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrap = root.current;
    if (!wrap) return;
    const pinEl = wrap.querySelector<HTMLElement>("[data-pin]");
    if (!pinEl) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const headerPx = headerOffset();
        ScrollTrigger.create({
          trigger: pinEl,
          start: `top ${headerPx}px`,
          end: () => `+=${Math.round(window.innerHeight * 0.85)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      },
    );
    return () => mm.revert();
  });

  return <div ref={root}>{children}</div>;
}
