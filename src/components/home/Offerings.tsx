"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container, SectionIndex } from "@/components/ui/Container";
import { offerings } from "@/lib/site";
import { objectPosition } from "@/lib/image-focus";
import { cx } from "@/lib/cx";

const CYCLE_MS = 8000;

export function Offerings() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const current = offerings[active];

  function activate(index: number) {
    setActive(index);
    setCycle((value) => value + 1);
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const id = window.setTimeout(() => {
      setActive((currentIndex) => (currentIndex + 1) % offerings.length);
      setCycle((value) => value + 1);
    }, CYCLE_MS);

    return () => window.clearTimeout(id);
  }, [active, cycle]);

  return (
    <section className="border-b border-white/10 bg-brand-black">
      <Container className="py-20 lg:py-28">
        <SectionIndex index="02" label="What we do" />
        <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="display max-w-3xl text-brand-white">The shop</h2>
          <p className="max-w-sm text-sm leading-relaxed text-brand-white/65 lg:mb-2">
            From Open Water to the Oriskany, it starts at 7203 W. Hwy. 98.
          </p>
        </div>
      </Container>

      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[16/10] border-t border-white/10 lg:hidden">
          <Image
            src={current.image}
            alt={current.imageAlt}
            fill
            className="object-cover"
            style={{ objectPosition: objectPosition(current.image) }}
            sizes="100vw"
          />
        </div>
        <ul className="border-t border-white/10">
          {offerings.map((item, index) => {
            const isActive = index === active;
            return (
              <li key={item.index} className="relative border-b border-white/10">
                <Link
                  href={item.href}
                  className="group block px-5 py-8 lg:px-10 lg:py-10"
                  onMouseEnter={() => activate(index)}
                  onFocus={() => activate(index)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p
                        className={cx(
                          "text-[0.7rem] font-medium uppercase tracking-[0.22em]",
                          isActive ? "text-brand-yellow" : "text-brand-white/40",
                        )}
                      >
                        {item.index}
                      </p>
                      <h3
                        className={cx(
                          "mt-3 text-2xl font-bold uppercase tracking-wide sm:text-3xl lg:text-4xl",
                          isActive ? "text-brand-white" : "text-brand-white/45",
                        )}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={cx(
                          "mt-3 max-w-md text-sm leading-relaxed sm:text-base",
                          isActive ? "text-brand-white/70" : "text-brand-white/35",
                        )}
                      >
                        {item.body}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={cx(
                        "mt-1 size-6 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        isActive ? "text-brand-yellow" : "text-brand-white/25",
                      )}
                    />
                  </div>
                </Link>
                {isActive ? (
                  <span
                    key={cycle}
                    className="offering-progress pointer-events-none absolute inset-x-0 bottom-0 h-px bg-brand-white"
                    aria-hidden
                  />
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="relative hidden min-h-[560px] border-t border-l border-white/10 lg:block">
          {offerings.map((item, index) => (
            <div
              key={item.image}
              className={cx(
                "absolute inset-0 transition-opacity duration-500",
                index === active ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: objectPosition(item.image) }}
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
              <p className="absolute bottom-8 left-8 text-xs font-medium uppercase tracking-[0.2em] text-brand-white">
                {current.cta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
