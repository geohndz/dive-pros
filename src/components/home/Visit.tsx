import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hours, site } from "@/lib/site";

export function Visit() {
  return (
    <section className="bg-brand-yellow text-brand-black">
      <Container className="py-20 lg:py-28">
        <h2 className="display">7203 W. Hwy. 98</h2>
        <p className="log mt-8 text-brand-black/80">
          Walk in. Call. The shop that certified you is still on the highway
          when you need a fill, a wrench, or a boat.
        </p>

        <div className="mt-16 grid gap-12 border-t border-brand-black/15 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-sans text-2xl font-bold uppercase tracking-wide">
              {site.address}
              <br />
              {site.city}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="inverse">
                Contact Us
              </Button>
              <Button
                href={site.mapsHref}
                variant="outlineDark"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {[hours.summer, hours.winter].map((season) => (
              <div key={season.label}>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-black/50">
                  {season.label}
                </p>
                <p className="mt-1 text-sm text-brand-black/70">{season.range}</p>
                <ul className="mt-4 space-y-2">
                  {season.days.map((row) => (
                    <li
                      key={row.days}
                      className="flex justify-between gap-4 border-b border-brand-black/15 py-2 font-sans text-sm font-medium uppercase tracking-wide"
                    >
                      <span>{row.days}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 font-sans text-sm font-medium uppercase tracking-[0.16em]">
          <a href={site.phoneHref} className="hover:underline">
            {site.phone}
          </a>
          <span className="mx-3 text-brand-black/30">/</span>
          <a href={site.emailHref} className="hover:underline">
            {site.email}
          </a>
        </p>
      </Container>
    </section>
  );
}
