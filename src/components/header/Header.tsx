"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navItems } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { MegaNav } from "@/components/header/MegaNav";
import { MobileNav } from "@/components/header/MobileNav";

export function Header() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRegionId = useId();

  const activeItem = navItems.find((item) => item.id === activeId) ?? null;
  const panelOpen = Boolean(activeItem?.columns?.length);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openItem(id: string) {
    clearCloseTimer();
    const item = navItems.find((entry) => entry.id === id);
    if (item?.columns?.length) {
      setActiveId(id);
    } else {
      setActiveId(null);
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setActiveId(null), 120);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveId(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-40 bg-brand-black"
        onMouseLeave={scheduleClose}
      >
        <div className="relative mx-auto grid h-[var(--header-height)] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 lg:px-10">
          <Link
            href="/"
            className="relative z-10 justify-self-start"
            aria-label="Dive Pros home"
          >
            <Image
              src="/logo.png"
              alt="Dive Pros Pensacola, FL"
              width={180}
              height={54}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav
            className="relative z-10 hidden h-full lg:flex"
            aria-label="Primary"
          >
            <ul className="flex h-full items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id && Boolean(item.columns?.length);
                const hasMenu = Boolean(item.columns?.length);

                return (
                  <li
                    key={item.id}
                    className="flex h-full items-center"
                    onMouseEnter={() => openItem(item.id)}
                    onFocus={() => openItem(item.id)}
                  >
                    {hasMenu ? (
                      <Link
                        href={item.href}
                        className={`relative flex h-full items-center px-4 text-base font-medium transition-colors ${
                          isActive
                            ? "text-brand-yellow after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:bg-brand-yellow"
                            : "text-brand-white hover:text-brand-white/80"
                        }`}
                        aria-expanded={isActive}
                        aria-controls={panelOpen ? navRegionId : undefined}
                        onClick={() => setActiveId(null)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex h-full items-center px-4 text-base font-medium text-brand-white transition-colors hover:text-brand-white/80"
                        onMouseEnter={() => setActiveId(null)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center justify-self-end gap-3">
            <div className="hidden lg:block">
              <Button href="/contact">Contact Us</Button>
            </div>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center text-brand-white transition-colors hover:bg-brand-white/10 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-full hidden lg:block">
          <div
            id={navRegionId}
            className={`transition-[opacity,transform] duration-200 ${
              panelOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none invisible -translate-y-1 opacity-0"
            }`}
          >
            {activeItem?.columns ? (
              <MegaNav
                key={activeItem.id}
                item={activeItem}
                onNavigate={() => setActiveId(null)}
              />
            ) : null}
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
