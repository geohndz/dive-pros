import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { diveSites } from "@/lib/site";
import { objectPosition } from "@/lib/image-focus";

export function Sites() {
  return (
    <section className="bg-brand-black">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display lg:col-span-7 text-brand-white">Local diving</h2>
          <p className="log lg:col-span-5 text-brand-white/80">
            Shore to 50′. Nearshore wrecks. Midshore reefs. Twenty-plus miles
            offshore to the Mighty O.
          </p>
        </div>
      </Container>

      <div className="group/sites grid border-t border-white/10 sm:grid-cols-2 lg:flex">
        {diveSites.map((site) => (
          <Link
            key={site.href}
            href={site.href}
            className="group min-w-0 border-b border-white/10 sm:border-r sm:last:border-r-0 lg:flex-1 lg:basis-0 lg:border-r lg:last:border-r-0 lg:transition-[flex-grow] lg:duration-500 lg:ease-[cubic-bezier(0.23,1,0.32,1)] lg:group-hover/sites:grow-[0.7] lg:hover:grow-[2.3]! lg:focus-visible:grow-[2.3]! motion-reduce:lg:transition-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[min(32rem,72vh)]">
              <Image
                src={site.image}
                alt={site.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: objectPosition(site.image) }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <h3 className="flex items-center justify-between gap-2 font-sans text-xl font-bold uppercase tracking-wide text-brand-white">
                  {site.title}
                  <ArrowUpRight className="size-5 opacity-70 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.16em] text-brand-white/70">
                  {site.range} · {site.depth}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="group relative min-h-[85vh] overflow-hidden lg:min-h-[calc(100vh-var(--header-height))]"
        data-surface="image"
        data-pin
      >
        <Image
          src="/photos/wreck-hatch.jpg"
          alt="Divers silhouetted in a wreck hatch"
          fill
          className="object-cover"
          style={{ objectPosition: objectPosition("/photos/wreck-hatch.jpg") }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/45 to-brand-black/20" />
        <Container className="relative flex min-h-[85vh] flex-col justify-end py-16 lg:min-h-[calc(100vh-var(--header-height))] lg:py-24">
          <p className="instrument text-sm font-medium text-brand-yellow">
            CV-34 · May 17, 2006
          </p>
          <p className="instrument mt-4 whitespace-nowrap font-bold uppercase leading-[0.78] tracking-tight text-brand-yellow text-[clamp(4.6rem,16vw,12.75rem)]">
            911 ft
          </p>
          <h3 className="display mt-3 max-w-4xl text-brand-white">
            USS Oriskany
          </h3>
          <p className="log mt-6 text-brand-white">
            Sunk 26.5 NM southeast of Pensacola Pass. Island at 84′. Sand at
            212′. Not a first dive.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-brand-white/70">
            <span>26.5 NM</span>
            <span>84′ island</span>
            <span>212′ sand</span>
          </div>
          <div className="mt-8">
            <Button href="/dive/uss-oriskany" variant="outline">
              Explore the Oriskany
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
