import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/nav";
import { hours, site } from "@/lib/site";
import { FooterWordmark } from "@/components/footer/FooterWordmark";

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Dive Pros home">
              <Image
                src="/logo.png"
                alt="Dive Pros Pensacola, FL"
                width={180}
                height={54}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-brand-white/60">
              PADI training, SCUBAPRO and Aqua Lung on the floor, and a service
              bench that treats gear as life support.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-white/40">
                Navigation
              </p>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium tracking-tight text-brand-white hover:text-brand-yellow"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/about/links"
                    className="text-sm font-medium tracking-tight text-brand-white hover:text-brand-yellow"
                  >
                    Links
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-medium tracking-tight text-brand-white hover:text-brand-yellow"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-white/40">
                Hours
              </p>
              <p className="mt-4 text-sm font-medium tracking-tight">
                {hours.summer.label}
              </p>
              <p className="text-xs text-brand-white/50">{hours.summer.range}</p>
              <ul className="mt-2 space-y-1 text-sm text-brand-white/75">
                {hours.summer.days.map((row) => (
                  <li key={row.days}>
                    {row.days} · {row.time}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium tracking-tight">
                {hours.winter.label}
              </p>
              <p className="text-xs text-brand-white/50">{hours.winter.range}</p>
              <ul className="mt-2 space-y-1 text-sm text-brand-white/75">
                {hours.winter.days.map((row) => (
                  <li key={row.days}>
                    {row.days} · {row.time}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-white/40">
                Contact
              </p>
              <address className="mt-4 space-y-2 text-sm not-italic text-brand-white/80">
                <p>
                  {site.address}
                  <br />
                  {site.city}
                </p>
                <p>
                  <a href={site.phoneHref} className="hover:text-brand-yellow">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={site.emailHref} className="hover:text-brand-yellow">
                    {site.email}
                  </a>
                </p>
                <p>
                  <a
                    href={site.facebook}
                    className="hover:text-brand-yellow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <FooterWordmark />

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-brand-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Dive Pros · Pensacola, FL</span>
          <span>7203 W. Hwy. 98</span>
        </div>
      </Container>
    </footer>
  );
}
