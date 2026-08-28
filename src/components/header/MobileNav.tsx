"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { objectPosition } from "@/lib/image-focus";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-brand-black/70"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-brand-black text-brand-white shadow-xl">
        <div className="flex h-[var(--header-height)] items-center justify-between px-5">
          <p className="text-lg font-bold uppercase tracking-wide">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center text-brand-white transition-colors hover:bg-brand-white/10"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 pb-8" aria-label="Mobile">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const hasColumns = Boolean(item.columns?.length);
              const expanded = expandedId === item.id;

              return (
                <li key={item.id} className="border-b border-brand-white/15">
                  {hasColumns ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4 text-left text-base font-medium"
                        aria-expanded={expanded}
                        onClick={() =>
                          setExpandedId(expanded ? null : item.id)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expanded ? (
                        <div className="pb-4 pl-2">
                          {item.columns!.map((column) => (
                            <div key={column.title} className="mb-4 last:mb-0">
                              <div className="mb-2">
                                <p className="text-sm font-medium text-brand-gray">
                                  {column.title}
                                </p>
                                <div
                                  className="mt-1 h-px w-1/4 bg-brand-gray"
                                  aria-hidden
                                />
                              </div>
                              <ul className="flex flex-col gap-2">
                                {column.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className="block py-1 text-base font-medium text-brand-white/90 hover:text-brand-yellow"
                                      onClick={onClose}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="mb-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-white/50 hover:text-brand-yellow"
                          >
                            {item.viewAll ?? `All ${item.label}`}
                          </Link>
                          {item.featured ? (
                            <Link
                              href={item.featured.cta.href}
                              onClick={onClose}
                              className="relative mt-1 block overflow-hidden"
                            >
                              <div className="relative aspect-[16/8]">
                                <Image
                                  src={item.featured.image}
                                  alt={item.featured.imageAlt}
                                  fill
                                  className="object-cover"
                                  style={{
                                    objectPosition: objectPosition(
                                      item.featured.image,
                                    ),
                                  }}
                                  sizes="(max-width: 1024px) 100vw, 28rem"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-yellow">
                                    {item.featured.label}
                                  </p>
                                  <p className="mt-1 text-sm font-bold uppercase tracking-wide">
                                    {item.featured.title}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ) : null}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-base font-medium"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6">
            <Button href="/contact" fullWidth onClick={onClose}>
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
