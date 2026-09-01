"use client";

import Image from "next/image";
import { ImageDroplets } from "@/components/effects/ImageDroplets";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-brand-black"
      data-surface="image"
    >
      {/* Layer stack: image → gradient → droplets → content */}
      <div className="absolute inset-0 animate-hero-fade-in">
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-end px-5 pb-16 pt-[calc(var(--header-height)+1.5rem)] lg:px-10 lg:pb-24">
        {/* Row height is driven by the text block; awards scale to that height */}
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16">
          <div className="@container min-w-0 w-full flex-1">
            <h1 className="animate-hero-fade-up text-[clamp(1.1rem,4.9cqi,4.25rem)] font-bold uppercase leading-[1.05] tracking-wide text-brand-white">
              <span className="whitespace-nowrap">
                Pensacola&apos;s dive community
              </span>
              <br />
              <span className="text-brand-yellow">since 1988</span>
            </h1>
            <p className="animate-hero-fade-up animate-hero-delay-1 mt-5 max-w-xl text-base leading-relaxed text-brand-white sm:text-lg">
              Learn to dive in our 54,000-gallon heated indoor pool. Then take
              your skills into the Gulf.
            </p>
            <div className="animate-hero-fade-up animate-hero-delay-2 mt-8">
              <Button href="/courses">View courses</Button>
            </div>
          </div>

          {/* Out-of-flow image so intrinsic size can't inflate the row */}
          <div className="animate-hero-fade-up animate-hero-delay-3 relative w-full max-w-[180px] self-end sm:max-w-[200px] lg:w-[220px] lg:max-w-none lg:shrink-0 lg:self-stretch">
            <div className="relative aspect-[560/846] w-full lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src="/best-of-bay.png"
                alt="Best of the Bay awards from the Pensacola News Journal, 2017 through 2022"
                fill
                className="object-contain object-right drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                sizes="220px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-5 z-10 hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand-white/55 sm:flex lg:left-10">
        <span className="h-8 w-px bg-brand-yellow" aria-hidden />
        Scroll
      </div>
    </section>
  );
}
