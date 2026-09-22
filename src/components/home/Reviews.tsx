"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { reviews, site } from "@/lib/site";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const padded = String(index + 1).padStart(2, "0");
  const total = String(reviews.length).padStart(2, "0");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + reviews.length) % reviews.length);
  }

  return (
    <section className="border-b border-white/10 bg-brand-black">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="display-stat text-brand-yellow">{site.googleRating}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-white/45">
              Google · {site.googleReviewCount} reviews
            </p>
          </div>
          <Button
            href={site.googleReviewsHref}
            variant="outline"
            target="_blank"
            rel="noreferrer"
          >
            Read on Google
          </Button>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-12 lg:pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-white/40 lg:col-span-2">
            {padded} / {total}
          </p>

          <div className="lg:col-span-10">
            <blockquote>
              <p
                key={index}
                className="review-swap text-2xl font-medium leading-snug tracking-tight text-brand-white sm:text-3xl lg:text-4xl lg:leading-[1.2]"
              >
                “{review.quote}”
              </p>
              <footer className="mt-10 flex flex-col gap-1">
                <cite className="text-base font-bold not-italic tracking-tight text-brand-yellow">
                  {review.name}
                </cite>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-white/45">
                  {review.source}
                </span>
              </footer>
            </blockquote>

            <div className="mt-12 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                className="chrome-press h-12 px-5 text-xs font-medium uppercase tracking-[0.18em] text-brand-white ring-1 ring-white/20 hover:bg-brand-white hover:text-brand-black"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="chrome-press h-12 px-5 text-xs font-medium uppercase tracking-[0.18em] text-brand-white ring-1 ring-white/20 hover:bg-brand-white hover:text-brand-black"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
