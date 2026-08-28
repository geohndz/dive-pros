import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, SectionIndex } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { diveSites } from "@/lib/site";
import { objectPosition } from "@/lib/image-focus";

export function Sites() {
  return (
    <section className="bg-brand-black">
      <Container className="py-20 lg:py-28">
        <Reveal>
          <SectionIndex index="04" label="Dive sites" />
        </Reveal>
        <Reveal className="mt-10 max-w-4xl">
          <h2 className="display text-brand-white">
            From the beach to the Mighty O.
          </h2>
        </Reveal>
      </Container>

      <div className="group/sites grid border-t border-white/10 sm:grid-cols-2 lg:flex">
        {diveSites.map((site) => (
          <Link
            key={site.href}
            href={site.href}
            className="group min-w-0 border-b border-white/10 sm:border-r sm:last:border-r-0 lg:flex-1 lg:basis-0 lg:border-r lg:last:border-r-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover/sites:grow-[0.7] lg:hover:grow-[2.3]! lg:focus-visible:grow-[2.3]! motion-reduce:lg:transition-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[min(32rem,72vh)]">
              <Image
                src={site.image}
                alt={site.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: objectPosition(site.image) }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
                  {site.index}
                </p>
                <h3 className="mt-2 flex items-center justify-between gap-2 text-xl font-bold uppercase tracking-wide text-brand-white">
                  {site.title}
                  <ArrowUpRight className="size-5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-brand-white/70">
                  {site.range} · {site.depth}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="group relative min-h-[70vh] overflow-hidden" data-surface="image">
        <Image
          src="/photos/wreck-hatch.jpg"
          alt="Divers silhouetted in a wreck hatch"
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: objectPosition("/photos/wreck-hatch.jpg") }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/45 to-brand-black/20" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end py-16 lg:py-24">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
            05 · USS Oriskany · CV-34
          </p>
          <h3 className="display mt-4 max-w-4xl text-brand-white">
            The Great Carrier Reef.
          </h3>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-white/80">
            911 feet of aircraft carrier, sunk 26.5 NM southeast of Pensacola
            Pass. Island at 84′. Sand at 212′. World-class, and not a first
            dive.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-white/70">
            <span>May 17, 2006</span>
            <span>26.5 NM</span>
            <span>84′ – 212′</span>
          </div>
          <div className="mt-8">
            <Button href="/dive/uss-oriskany" variant="outline">
              Dive the Mighty O
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
