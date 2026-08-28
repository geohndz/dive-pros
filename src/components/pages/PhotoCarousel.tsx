"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import type { PageGalleryImage } from "@/lib/pages/types";

type PhotoCarouselProps = {
  heading?: string;
  images: PageGalleryImage[];
};

export function PhotoCarousel({
  heading = "May 17, 2006",
  images,
}: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const current = images[index];

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((value) => (value + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused || total < 2) return;
    const id = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(id);
  }, [go, paused, total]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!current) return null;

  const padded = String(index + 1).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");

  return (
    <section
      className="border-t border-white/10 bg-brand-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={heading}
    >
      <div className="relative min-h-[55vh] overflow-hidden lg:min-h-[72vh]">
        {images.map((image, imageIndex) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={imageIndex === 0}
            className={`object-cover transition-opacity duration-700 ease-out ${
              imageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />

        <Container className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-6 pb-8 pt-24 lg:flex-row lg:items-end lg:justify-between lg:pb-10">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
              {heading}
              <span className="ml-4 text-brand-white/50">
                {padded} / {paddedTotal}
              </span>
            </p>
            <p className="mt-3 max-w-xl text-lg font-bold uppercase tracking-wide text-brand-white lg:text-2xl">
              {current.caption ?? current.alt}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="h-12 px-5 text-xs font-medium uppercase tracking-[0.18em] text-brand-white ring-1 ring-white/20 transition-colors hover:bg-brand-white hover:text-brand-black"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="h-12 px-5 text-xs font-medium uppercase tracking-[0.18em] text-brand-white ring-1 ring-white/20 transition-colors hover:bg-brand-white hover:text-brand-black"
            >
              Next
            </button>
          </div>
        </Container>
      </div>

      <div
        className={
          total <= 4
            ? `grid border-t border-white/10 ${total === 3 ? "grid-cols-3" : "grid-cols-4"}`
            : "grid grid-cols-4 border-t border-white/10 lg:grid-cols-8"
        }
      >
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(imageIndex)}
            aria-label={image.alt}
            aria-current={imageIndex === index ? true : undefined}
            className={`relative aspect-[16/10] overflow-hidden border-r border-white/10 last:border-r-0 ${
              imageIndex === index
                ? "opacity-100 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand-yellow"
                : "opacity-45 hover:opacity-80"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 25vw, 12.5vw"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
