"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
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
    <section className="bg-brand-black">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display lg:col-span-7 text-brand-white">The shop</h2>
          <p className="log lg:col-span-5 text-brand-white/80">
            From Open Water to the Oriskany, it starts at 7203 W. Hwy. 98.
          </p>
        </div>
      </Container>

      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[16/10] border-t border-white/10 lg:hidden">
          {offerings.map((item, index) => (
            <div
              key={item.image}
              className={cx(
                "absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none",
                index === active ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: objectPosition(item.image) }}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <ul className="border-t border-white/10">
          {offerings.map((item, index) => {
            const isActive = index === active;
            return (
              <li key={item.title} className="relative border-b border-white/10">
                <Link
                  href={item.href}
                  className="group block px-(--page-gutter) py-8 lg:py-10"
                  onMouseEnter={() => activate(index)}
                  onFocus={() => activate(index)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3
                        className={cx(
                          "font-sans text-2xl font-bold uppercase tracking-wide sm:text-3xl lg:text-4xl",
                          isActive ? "text-brand-white" : "text-brand-white/45",
                        )}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={cx(
                          "mt-3 max-w-md text-base leading-relaxed",
                          isActive ? "text-brand-white/75" : "text-brand-white/40",
                        )}
                      >
                        {item.body}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={cx(
                        "mt-1 size-6 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        isActive ? "text-brand-yellow" : "text-brand-white/25",
                      )}
                    />
                  </div>
                </Link>
                {isActive ? (
                  <span
                    key={cycle}
                    className="offering-progress pointer-events-none absolute inset-x-0 bottom-0 h-px bg-brand-yellow"
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
                "absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none",
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
            </div>
          ))}
          <p className="pointer-events-none absolute bottom-8 left-8 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-white">
            {current.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
