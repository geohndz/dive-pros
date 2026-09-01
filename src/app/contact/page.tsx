import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, SectionIndex } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { hours, site } from "@/lib/site";
import { objectPosition } from "@/lib/image-focus";
import { StaffDirectory } from "@/components/pages/StaffDirectory";
import { pageMetadata, staticPageJsonLd } from "@/lib/seo";

const contactDescription =
  "Visit Dive Pros at 7203 W. Hwy. 98, Pensacola, FL 32506. Call (850) 456-8845 or email info@florida-divepros.com. Open seven days a week.";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description: contactDescription,
  image: "/photos/storefront.jpg",
  imageAlt:
    "Dive Pros shopfront on W. Hwy. 98 in Pensacola: red awning, diver-down stripe, and OPEN sign",
});

export default function ContactPage() {
  return (
    <article className="bg-brand-black pt-[var(--header-height)]">
      <JsonLd
        data={staticPageJsonLd({
          path: "/contact",
          title: "Contact",
          description: contactDescription,
          image: "/photos/storefront.jpg",
          type: "ContactPage",
        })}
      />
      <Container className="grid items-end gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-5">
          <SectionIndex index="-" label="Contact" />
          <h1 className="display display-sm mt-8 text-brand-white">
            Walk in
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-brand-white/75">
            Call, write, or come to the counter. We&apos;d rather talk you into
            the right class than sell you the wrong gear.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black lg:col-span-7">
          <Image
            src="/photos/storefront.jpg"
            alt="Dive Pros shopfront on W. Hwy. 98 in Pensacola: red awning, diver-down stripe, and OPEN sign"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: objectPosition("/photos/storefront.jpg") }}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <address className="lg:col-span-5 not-italic">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-white/40">
              Address
            </p>
            <p className="mt-4 text-2xl font-bold uppercase tracking-wide text-brand-white">
              {site.address}
              <br />
              {site.city}
            </p>
            <ul className="mt-8 space-y-3 text-base text-brand-white/80">
              <li>
                Local{" "}
                <a href={site.phoneHref} className="text-brand-yellow hover:underline">
                  {site.phone}
                </a>
              </li>
              <li>Toll free {site.tollFree}</li>
              <li>Fax {site.fax}</li>
              <li>
                <a href={site.emailHref} className="text-brand-yellow hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={site.phoneHref}>Call the shop</Button>
              <Button
                href={site.mapsHref}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </Button>
            </div>
          </address>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {[hours.summer, hours.winter].map((season) => (
              <div key={season.label} className="border-t border-white/10 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-yellow">
                  {season.label}
                </p>
                <p className="mt-2 text-sm text-brand-white/50">{season.range}</p>
                <ul className="mt-4">
                  {season.days.map((row) => (
                    <li
                      key={row.days}
                      className="flex justify-between gap-4 border-b border-white/10 py-3 text-sm font-medium uppercase tracking-wide"
                    >
                      <span>{row.days}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <StaffDirectory />
    </article>
  );
}
