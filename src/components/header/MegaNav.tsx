"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { NavItem } from "@/lib/nav";
import { objectPosition } from "@/lib/image-focus";
import { gsap, useGSAP } from "@/lib/gsap";

type MegaNavProps = {
  item: NavItem;
  onNavigate?: () => void;
};

export function MegaNav({ item, onNavigate }: MegaNavProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || !item.columns?.length) return;

      const columns = root.querySelectorAll<HTMLElement>("[data-mega-col]");
      const links = root.querySelectorAll<HTMLElement>("[data-mega-col] li");
      const viewAll = root.querySelector<HTMLElement>("[data-mega-all]");
      const featured = root.querySelector<HTMLElement>("[data-mega-featured]");

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          columns,
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.09 },
          0,
        );

        if (links.length) {
          tl.fromTo(
            links,
            { y: 8, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.32, stagger: 0.028, ease: "power2.out" },
            0.08,
          );
        }

        if (viewAll) {
          tl.fromTo(
            viewAll,
            { y: 10, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.35 },
            0.22,
          );
        }

        if (featured) {
          tl.fromTo(
            featured,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 0.55 },
            0.06,
          );
        }
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [item.id] },
  );

  if (!item.columns?.length) return null;

  const featuredCols =
    item.columns.length <= 1 ? 7 : item.columns.length === 2 ? 6 : 5;

  return (
    <div
      ref={rootRef}
      className="border-t border-white/10 bg-brand-black text-brand-white"
      role="region"
      aria-label={`${item.label} menu`}
    >
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div
          className="flex flex-col justify-between px-5 py-10 lg:px-10 lg:py-12"
          style={{ gridColumn: `span ${12 - featuredCols} / span ${12 - featuredCols}` }}
        >
          <div
            className="grid gap-10"
            style={{
              gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))`,
            }}
          >
            {item.columns.map((column) => (
              <div key={column.title} data-mega-col>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
                  {column.title}
                </p>
                <ul className="mt-5">
                  {column.links.map((link, index) => (
                    <li key={link.href} className="border-b border-white/10">
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        className="group flex items-baseline gap-3 py-3 text-sm font-bold uppercase tracking-wide text-brand-white transition-colors hover:text-brand-yellow"
                      >
                        <span className="w-6 shrink-0 text-[0.65rem] font-medium tracking-[0.18em] text-brand-white/35 transition-colors group-hover:text-brand-yellow">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href={item.href}
            onClick={onNavigate}
            data-mega-all
            className="mt-10 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-white/50 transition-colors hover:text-brand-yellow"
          >
            {item.viewAll ?? `All ${item.label}`}
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {item.featured ? (
          <Link
            href={item.featured.cta.href}
            onClick={onNavigate}
            className="group relative min-h-[280px] overflow-hidden border-t border-white/10 lg:min-h-[380px] lg:border-t-0 lg:border-l"
            style={{ gridColumn: `span ${featuredCols} / span ${featuredCols}` }}
            data-surface="image"
            data-mega-featured
          >
            <Image
              src={item.featured.image}
              alt={item.featured.imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ objectPosition: objectPosition(item.featured.image) }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
                {item.featured.label}
              </p>
              <h3 className="mt-3 max-w-md text-2xl font-bold uppercase tracking-wide text-brand-white lg:text-3xl">
                {item.featured.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-white/80">
                {item.featured.description}
              </p>
              <span className="btn relative isolate mt-6 inline-flex h-12 shrink-0 items-center overflow-hidden whitespace-nowrap bg-brand-yellow px-6 text-base font-medium text-brand-black">
                <span className="btn-swoosh" aria-hidden>
                  <span className="btn-swoosh-fill" />
                  <span className="btn-swoosh-gap" />
                  <span className="btn-swoosh-line" />
                </span>
                <span className="relative z-10">{item.featured.cta.label}</span>
              </span>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
