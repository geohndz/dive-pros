import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SiteCatalog } from "@/components/pages/SiteCatalog";
import { LocationMap } from "@/components/pages/LocationMap";
import { StaffDirectory } from "@/components/pages/StaffDirectory";
import { PhotoCarousel } from "@/components/pages/PhotoCarousel";
import { YouTubeEmbed } from "@/components/pages/YouTubeEmbed";
import { ServiceCards } from "@/components/pages/ServiceCards";
import { SwooshRow } from "@/components/ui/SwooshRow";
import { objectPosition } from "@/lib/image-focus";
import { site } from "@/lib/site";
import type { EditorialPageData } from "@/lib/pages";

export function EditorialPage({ page }: { page: EditorialPageData }) {
  const hasBody =
    Boolean(page.modules?.length) ||
    Boolean(page.sections?.length) ||
    Boolean(page.sites?.length) ||
    Boolean(page.rateGroups?.length) ||
    Boolean(page.operators?.length) ||
    Boolean(page.catalog?.items.length) ||
    Boolean(page.tables?.length) ||
    Boolean(page.related?.length) ||
    Boolean(page.footnote) ||
    Boolean(page.staff) ||
    Boolean(page.gallery?.images.length) ||
    Boolean(page.video) ||
    Boolean(page.map);

  return (
    <article className="bg-brand-black">
      <header
        className="relative min-h-[70vh] overflow-hidden bg-brand-black lg:min-h-[82vh]"
        data-surface="image"
      >
        <Image
          src={page.image}
          alt={page.imageAlt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: objectPosition(page.image) }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/25" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-12 pt-[calc(var(--header-height)+2rem)] lg:min-h-[82vh] lg:pb-16">
          <h1 className="display max-w-5xl text-brand-white">{page.title}</h1>
          {page.cta ? (
            <div className="mt-8">
              <Button href={page.cta.href}>{page.cta.label}</Button>
            </div>
          ) : null}
        </Container>
      </header>

      <div className="border-t border-white/10">
        <Container className="py-12 lg:py-16">
          <p className="log text-brand-white/85 lg:text-[1.35rem]">
            {page.intro}
          </p>
        </Container>
      </div>

      {page.stats?.length ? (
        <div className="border-t border-white/10">
          <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-16">
            {page.stats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`}>
                <p className="display-stat text-brand-yellow">{stat.value}</p>
                <p className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </Container>
        </div>
      ) : null}

      {page.gallery?.images.length ? (
        <PhotoCarousel
          heading={page.gallery.heading}
          images={page.gallery.images}
        />
      ) : null}

      {page.paths?.length ? (
        <section className="border-t border-brand-black/10 bg-brand-white text-brand-black">
          <Container className="py-16 lg:py-24">
            <ul>
              {page.paths.map((item) => (
                <li key={item.href} className="border-b border-brand-black/10">
                  <SwooshRow href={item.href} className="py-5">
                    <span className="flex min-w-0 items-baseline gap-5">
                      <span className="text-lg font-bold uppercase tracking-wide sm:text-2xl">
                        {item.title}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-brand-gray transition-colors duration-500 group-hover:text-brand-black sm:inline">
                        {item.note}
                      </span>
                      <ArrowUpRight className="size-5 text-brand-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </SwooshRow>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {page.modules?.length ? (
        <section className="border-t border-white/10">
          <Container className="py-16 lg:py-24">
            <ol
              className={`grid ${
                page.modules.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
              }`}
            >
              {page.modules.map((module, index) => (
                <li
                  key={module.index}
                  className="border-b border-white/10 py-10 lg:border-b-0 lg:border-r lg:border-white/10 lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <Reveal delay={index * 0.05}>
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-brand-white/5">
                      <Image
                        src={module.image}
                        alt={module.imageAlt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: objectPosition(module.image) }}
                        sizes="(min-width: 1024px) 30vw, 100vw"
                      />
                    </div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
                      {module.index}
                    </p>
                    <h2 className="mt-4 text-xl font-bold uppercase tracking-wide text-brand-white sm:text-2xl">
                      {module.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-brand-white/65">
                      {module.body}
                    </p>
                    {module.list ? (
                      <ul className="mt-6">
                        {module.list.map((item) => (
                          <li
                            key={item}
                            className="border-b border-white/10 py-3 text-sm font-medium tracking-tight text-brand-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <RequiredTags tags={module.tags} />
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {page.sections?.map((section, index) => (
        <section
          key={section.heading ?? `section-${index}`}
          className="border-t border-white/10"
        >
          <Container className="grid gap-8 py-12 lg:grid-cols-12 lg:py-16">
            {section.heading ? (
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow lg:col-span-4">
                {section.heading}
              </h2>
            ) : null}
            <div
              className={`space-y-4 text-base leading-relaxed text-brand-white/75 ${
                section.heading ? "lg:col-span-8" : "lg:col-span-8 lg:col-start-5"
              }`}
            >
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && !section.cards ? (
                <ul className="mt-4">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/10 py-3 text-sm font-medium tracking-tight text-brand-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.cards?.length ? (
                <div className="pt-4">
                  <ServiceCards cards={section.cards} />
                </div>
              ) : null}
              <RequiredTags tags={section.tags} />
            </div>
          </Container>
          {section.after?.length ? (
            <Container className="border-t border-white/10 py-12 lg:py-16">
              <div className="space-y-4 text-base leading-relaxed text-brand-white/75 lg:ml-[calc(33.333%+2rem)] lg:max-w-3xl">
                {section.after.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Container>
          ) : null}
        </section>
      ))}

      {page.video ? (
        <YouTubeEmbed
          heading={page.video.heading}
          youtubeId={page.video.youtubeId}
          title={page.video.title}
        />
      ) : null}

      {page.sites?.length ? (
        <section className="border-t border-white/10">
          <Container className="py-16 lg:py-24">
            <ul className="grid gap-0 sm:grid-cols-2">
              {page.sites.map((site) => (
                <li
                  key={site.name}
                  className="border-t border-white/10 py-10 sm:px-8 sm:odd:pl-0 sm:even:pr-0 sm:odd:border-r"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-yellow">
                    {site.depth}
                  </p>
                  <h2 className="mt-3 text-xl font-bold uppercase tracking-wide text-brand-white sm:text-2xl">
                    {site.name}
                  </h2>
                  {site.location ? (
                    <p className="mt-3 text-sm text-brand-white/50">{site.location}</p>
                  ) : null}
                  {site.coords ? (
                    <p className="mt-1 text-xs uppercase tracking-wide text-brand-white/40">
                      {site.coords}
                    </p>
                  ) : null}
                  {site.body ? (
                    <p className="mt-4 text-sm leading-relaxed text-brand-white/65">
                      {site.body}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {page.rateGroups?.map((group) => (
        <section key={group.heading} className="border-t border-white/10">
          <Container className="py-12 lg:py-16">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
              {group.heading}
            </h2>
            <ul className="mt-8">
              {group.rates.map((rate) => (
                <li
                  key={`${rate.item}-${rate.price}`}
                  className="grid grid-cols-12 items-baseline gap-4 border-b border-white/10 py-4"
                >
                  <span className="col-span-7 text-sm font-medium tracking-tight text-brand-white sm:col-span-6">
                    {rate.item}
                  </span>
                  <span className="col-span-5 text-right text-sm font-bold tracking-tight text-brand-yellow sm:col-span-2">
                    {rate.price}
                  </span>
                  <span className="col-span-12 text-xs tracking-tight text-brand-white/40 sm:col-span-4 sm:text-right">
                    {rate.note ?? ""}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      {page.catalog?.items.length ? (
        <section className="border-t border-white/10">
          <Container className="py-16 lg:py-24">
            {page.catalog.heading ? (
              <h2 className="text-xl font-bold uppercase tracking-wide text-brand-white sm:text-2xl">
                {page.catalog.heading}
              </h2>
            ) : null}
            <ul className={page.catalog.heading ? "mt-10" : undefined}>
              {page.catalog.items.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-6 border-t border-white/10 py-12 lg:grid-cols-12"
                >
                  <div className="lg:col-span-4">
                    <h2 className="text-xl font-bold uppercase tracking-wide text-brand-white sm:text-2xl">
                      {item.title}
                    </h2>
                    {item.meta ? (
                      <p className="mt-3 text-sm font-medium tracking-tight text-brand-yellow">
                        {item.meta}
                      </p>
                    ) : null}
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base leading-relaxed text-brand-white/70">
                      {item.body}
                    </p>
                    <RequiredTags tags={item.tags} />
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {page.operators?.length ? (
        <section className="border-t border-white/10">
          <Container className="py-16 lg:py-24">
            <ul>
              {page.operators.map((operator) => (
                <li
                  key={operator.name}
                  className="grid gap-6 border-t border-white/10 py-12 lg:grid-cols-12"
                >
                  <div className="lg:col-span-4">
                    <h2 className="text-xl font-bold uppercase tracking-wide text-brand-white sm:text-2xl">
                      {operator.name}
                    </h2>
                    <p className="mt-3 text-sm font-medium tracking-tight text-brand-yellow">
                      {operator.contact}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-brand-white/70 lg:col-span-8">
                    {operator.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {page.tables?.length ? <SiteCatalog tables={page.tables} /> : null}

      {page.staff ? <StaffDirectory /> : null}

      {page.map ? (
        <section className="border-t border-white/10">
          <Container className="grid gap-10 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
            <div className="lg:col-span-5">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
                {page.map.heading}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-brand-white/75">
                {page.map.body}
              </p>
            </div>
            <div className="lg:col-span-7 lg:text-right">
              <p className="text-2xl font-bold uppercase tracking-wide text-brand-white">
                {page.map.name}
              </p>
              {page.map.lines.map((line) => (
                <p
                  key={line}
                  className="text-2xl font-bold uppercase tracking-wide text-brand-white"
                >
                  {line}
                </p>
              ))}
              <div className="mt-8 lg:flex lg:justify-end">
                <Button
                  href={site.mapsHref}
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </Button>
              </div>
            </div>
          </Container>
          <div className="relative min-h-[55vh] border-t border-white/10 lg:min-h-[72vh]">
            <LocationMap
              title={`${page.map.name}: ${page.map.lines.join(", ")}`}
            />
          </div>
        </section>
      ) : null}

      {page.related?.length ? (
        <section className="border-t border-white/10">
          <Container className="py-12 lg:py-16">
            <ul>
              {page.related.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-5 text-lg font-bold uppercase tracking-wide text-brand-white hover:text-brand-yellow"
                  >
                    {item.label}
                    <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {page.footnote ? (
        <Container className="border-t border-white/10 py-10">
          <p className="max-w-3xl text-sm leading-relaxed text-brand-white/40">
            {page.footnote}
          </p>
        </Container>
      ) : null}

      {page.cta && hasBody ? (
        <section className="bg-brand-yellow text-brand-black">
          <Container className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-end lg:py-20">
            <div>
              <h2 className="display">Ready when you are.</h2>
            </div>
            <Button href={page.cta.href} variant="inverse" className="shrink-0">
              {page.cta.label}
            </Button>
          </Container>
        </section>
      ) : null}
    </article>
  );
}

function RequiredTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-brand-white/45">
        Required
      </p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="bg-brand-yellow/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-brand-yellow"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
