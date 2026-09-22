"use client";

import { ImageDroplets } from "@/components/effects/ImageDroplets";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-brand-black"
      data-surface="image"
    >
      <div className="absolute inset-0">
        <ImageDroplets
          className="h-full min-h-screen w-full"
          src="/hero.jpg"
          alt="Divers underwater with sunlight streaming from the surface"
          intensity={0.85}
          speed={1}
          scale={0.35}
          refraction={0.28}
          fallSpeed={1}
          staticDrops={0.55}
          dropWidth={1.1}
          dropLength={1.15}
          interactive
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-end px-(--page-gutter) pb-16 pt-[calc(var(--header-height)+1.5rem)] lg:pb-24">
        <div className="min-w-0 w-full max-w-6xl">
          <h1 className="animate-hero-fade-up display max-w-none text-[clamp(1.7rem,5.4vw,5.5rem)] text-brand-white">
            <span className="block max-w-[16ch] lg:max-w-none lg:whitespace-nowrap">
              Pensacola&apos;s dive community
            </span>
            <span className="block text-brand-yellow">since 1988</span>
          </h1>
          <p className="animate-hero-fade-up animate-hero-delay-1 log mt-8 text-brand-white">
            Learn to dive in our 54,000-gallon heated indoor pool. Then take
            your skills into the Gulf.
          </p>
          <div className="animate-hero-fade-up animate-hero-delay-2 mt-10">
            <Button href="/courses">View courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
