import type { Metadata } from "next";
import { getAllPages, getPage } from "@/lib/pages";
import type { EditorialPageData } from "@/lib/pages/types";
import { site } from "@/lib/site";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.florida-divepros.com";

export const DEFAULT_OG_IMAGE = {
  url: "/hero.jpg",
  width: 4502,
  height: 3001,
  alt: "Divers underwater with sunlight streaming from the surface. Dive Pros, Pensacola",
} as const;

const HOME_TITLE = "Dive Pros | PADI SCUBA Shop in Pensacola, FL";
const HOME_DESCRIPTION =
  "PADI SCUBA shop in Pensacola. Open Water certification, Nitrox, Rescue Diver, gear service, air fills, and USS Oriskany charters. 12′ indoor heated training tank.";

/** Search-facing titles. On-page H1s stay editorial; these populate <title> and Open Graph. */
const seoTitles: Record<string, string> = {
  "/": HOME_TITLE,
  "/courses": "PADI SCUBA Courses in Pensacola",
  "/courses/discover-scuba": "PADI Discover Scuba Diving in Pensacola",
  "/courses/open-water": "PADI Open Water Certification in Pensacola",
  "/courses/schedule": "SCUBA Class Schedule in Pensacola",
  "/courses/advanced-open-water": "PADI Advanced Open Water in Pensacola",
  "/courses/nitrox": "PADI Nitrox Course in Pensacola",
  "/courses/rescue-diver": "PADI Rescue Diver Course in Pensacola",
  "/courses/specialties": "PADI Specialty Diver Courses in Pensacola",
  "/courses/master-diver": "PADI Master Scuba Diver in Pensacola",
  "/courses/divemaster": "PADI Divemaster & Instructor Course in Pensacola",
  "/courses/technical": "Technical Diving Courses in Pensacola",
  "/courses/adaptive": "Adaptive SCUBA Training in Pensacola",
  "/dive": "Pensacola Dive Sites & Gulf Charters",
  "/dive/charters": "Pensacola SCUBA Dive Charters",
  "/dive/guided-trips": "Guided SCUBA Dives in Pensacola",
  "/dive/shore-dives": "Pensacola Beach & Shore Dives",
  "/dive/nearshore": "Nearshore Pensacola Wrecks & Reefs",
  "/dive/midshore": "Midshore Pensacola Dive Sites",
  "/dive/offshore": "Offshore Pensacola Dive Sites",
  "/dive/artificial-reefs": "Pensacola Artificial Reefs",
  "/dive/uss-oriskany": "Dive the USS Oriskany in Pensacola",
  "/dive/all-sites": "All Pensacola Dive Sites",
  "/dive/spearfishing": "Spearfishing the Northern Gulf",
  "/shop": "Dive Shop & Equipment Service in Pensacola",
  "/shop/air-fills": "SCUBA Air & Nitrox Fills in Pensacola",
  "/shop/repairs": "SCUBA Equipment Repair in Pensacola",
  "/shop/rentals": "SCUBA Gear Rental in Pensacola",
  "/shop/tank-inspection": "SCUBA Tank Inspection in Pensacola",
  "/shop/gear-service": "SCUBA Gear Service in Pensacola",
  "/about": "Pensacola PADI Dive Shop",
  "/about/facilities": "Indoor Training Tank & Shop Facilities",
  "/about/staff": "Dive Pros Instructors & Staff",
  "/about/links": "Dive Forms, Tides & Resources",
  "/contact": "Contact the Pensacola Dive Shop",
  "/gallery": "Pensacola SCUBA & Gulf Diving Gallery",
};

const HUB_PATHS = new Set(["/courses", "/dive", "/shop", "/about", "/contact"]);
const HIGH_PRIORITY = new Set([
  "/",
  "/courses/open-water",
  "/dive/uss-oriskany",
  "/courses",
  "/contact",
]);

const COURSE_PATHS = new Set([
  "/courses/discover-scuba",
  "/courses/open-water",
  "/courses/advanced-open-water",
  "/courses/nitrox",
  "/courses/rescue-diver",
  "/courses/specialties",
  "/courses/master-diver",
  "/courses/divemaster",
  "/courses/technical",
  "/courses/adaptive",
]);

const SERVICE_PATHS = new Set([
  "/shop/air-fills",
  "/shop/repairs",
  "/shop/rentals",
  "/shop/tank-inspection",
  "/shop/gear-service",
  "/dive/charters",
  "/dive/guided-trips",
]);

const SEGMENT_LABELS: Record<string, string> = {
  courses: "PADI Courses",
  dive: "Dive the Gulf",
  shop: "Shop & Service",
  about: "About",
  contact: "Contact",
  gallery: "Gallery",
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function seoTitleFor(path: string, fallback: string) {
  return seoTitles[path] ?? fallback;
}

type PageMetaInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE.url,
  imageAlt = DEFAULT_OG_IMAGE.alt,
}: PageMetaInput): Metadata {
  const isHome = path === "/";
  const searchTitle = seoTitleFor(path, title);
  const branded = isHome ? HOME_TITLE : `${searchTitle} | Dive Pros`;
  const canonical = isHome ? "/" : path;
  const ogImage = {
    url: image,
    alt: imageAlt,
    ...(image === DEFAULT_OG_IMAGE.url
      ? { width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height }
      : {}),
  };

  return {
    title: isHome ? { absolute: HOME_TITLE } : searchTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: absoluteUrl(canonical),
      siteName: site.name,
      title: branded,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [image],
    },
  };
}

export const homeDescription = HOME_DESCRIPTION;

export function homeMetadata(): Metadata {
  return pageMetadata({
    path: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    image: DEFAULT_OG_IMAGE.url,
    imageAlt: DEFAULT_OG_IMAGE.alt,
  });
}

export type SitemapEntry = {
  path: string;
  image?: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export function sitemapEntries(): SitemapEntry[] {
  const extras: Array<{ path: string; image: string }> = [
    { path: "/", image: DEFAULT_OG_IMAGE.url },
    { path: "/contact", image: "/photos/storefront.jpg" },
    { path: "/gallery", image: "/photos/godrays.jpg" },
  ];

  const editorial = getAllPages().map((page) => ({
    path: page.path,
    image: page.image,
  }));

  return [...extras, ...editorial].map(({ path, image }) => ({
    path,
    image,
    changeFrequency: HUB_PATHS.has(path) || path === "/" ? "weekly" : "monthly",
    priority: HIGH_PRIORITY.has(path)
      ? path === "/"
        ? 1
        : 0.9
      : HUB_PATHS.has(path)
        ? 0.8
        : 0.7,
  }));
}

type JsonLd = Record<string, unknown>;

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function openingHours() {
  const summer = [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { days: ["Saturday"], opens: "07:00", closes: "19:00" },
    { days: ["Sunday"], opens: "09:00", closes: "17:00" },
  ];
  const winter = [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "18:00" },
    { days: ["Sunday"], opens: "09:00", closes: "17:00" },
  ];

  return [
    ...seasonSpec(summer, "04-01", "10-31"),
    ...seasonSpec(winter, "11-01", "03-31"),
  ];
}

function seasonSpec(
  rows: Array<{ days: string[]; opens: string; closes: string }>,
  validFrom: string,
  validThrough: string,
) {
  return rows.map((row) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: row.days,
    opens: row.opens,
    closes: row.closes,
    validFrom,
    validThrough,
  }));
}

export function siteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "SportingGoodsStore"],
        "@id": BUSINESS_ID,
        name: site.name,
        alternateName: ["Florida Dive Pros", "Dive Pros Pensacola"],
        description: HOME_DESCRIPTION,
        url: SITE_URL,
        telephone: "+18504568845",
        faxNumber: "+18504560025",
        email: site.email,
        image: [
          absoluteUrl("/hero.jpg"),
          absoluteUrl("/photos/storefront.jpg"),
          absoluteUrl("/photos/aqua-pair.jpg"),
          absoluteUrl("/photos/shop-floor.jpg"),
        ],
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/logo.png"),
          width: 300,
          height: 91,
        },
        priceRange: "$$",
        currenciesAccepted: "USD",
        foundingDate: "1988",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7203 W. Hwy. 98",
          addressLocality: "Pensacola",
          addressRegion: "FL",
          postalCode: "32506",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.latitude,
          longitude: site.longitude,
        },
        hasMap: site.mapsHref,
        sameAs: [site.facebook],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.googleRating,
          reviewCount: site.googleReviewCount,
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: openingHours(),
        areaServed: [
          { "@type": "City", name: "Pensacola" },
          { "@type": "City", name: "Gulf Breeze" },
          { "@type": "AdministrativeArea", name: "Escambia County" },
          { "@type": "AdministrativeArea", name: "Santa Rosa County" },
          { "@type": "AdministrativeArea", name: "Florida Panhandle" },
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Indoor heated training tank",
            value: "12 feet, 54,000 gallons",
          },
        ],
        knowsAbout: [
          "PADI SCUBA training",
          "Open Water certification",
          "Nitrox",
          "USS Oriskany",
          "Pensacola wreck diving",
          "SCUBA equipment service",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: site.name,
        description: site.tagline,
        publisher: { "@id": BUSINESS_ID },
        inLanguage: "en-US",
      },
    ],
  };
}

function breadcrumbsFor(path: string, leafTitle: string): JsonLd {
  const items = [{ name: "Home", path: "/" }];

  if (path !== "/") {
    const segments = path.split("/").filter(Boolean);
    let cursor = "";
    segments.forEach((segment, index) => {
      cursor += `/${segment}`;
      const isLeaf = index === segments.length - 1;
      const page = getPage(cursor);
      items.push({
        name: isLeaf
          ? leafTitle
          : (page ? seoTitleFor(page.path, page.title) : SEGMENT_LABELS[segment] ?? segment),
        path: cursor,
      });
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function usdFromStats(page: EditorialPageData) {
  const priced = (page.stats ?? [])
    .map((stat) => stat.value.match(/\$([0-9]+(?:\.[0-9]+)?)/)?.[1])
    .filter((value): value is string => Boolean(value));
  return priced;
}

function courseJsonLd(page: EditorialPageData): JsonLd {
  const prices = usdFromStats(page);
  const offers =
    prices.length === 0
      ? undefined
      : prices.length === 1
        ? {
            "@type": "Offer",
            price: prices[0],
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(page.path),
          }
        : {
            "@type": "AggregateOffer",
            lowPrice: prices[0],
            highPrice: prices[prices.length - 1],
            priceCurrency: "USD",
            url: absoluteUrl(page.path),
          };

  return {
    "@type": "Course",
    name: seoTitleFor(page.path, page.title),
    description: page.description,
    url: absoluteUrl(page.path),
    provider: { "@id": BUSINESS_ID },
    image: absoluteUrl(page.image),
    inLanguage: "en-US",
    ...(offers ? { offers } : {}),
  };
}

function serviceJsonLd(page: EditorialPageData): JsonLd {
  return {
    "@type": "Service",
    name: seoTitleFor(page.path, page.title),
    description: page.description,
    url: absoluteUrl(page.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Pensacola" },
    image: absoluteUrl(page.image),
  };
}

function oriskanyJsonLd(page: EditorialPageData): JsonLd {
  return {
    "@type": "TouristAttraction",
    name: "USS Oriskany (CV-34)",
    alternateName: ["The Mighty O", "The Great Carrier Reef"],
    description: page.description,
    url: absoluteUrl(page.path),
    image: absoluteUrl(page.image),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.042583,
      longitude: -87.006617,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pensacola",
      addressRegion: "FL",
      addressCountry: "US",
    },
    isAccessibleForFree: false,
    touristType: "SCUBA divers",
  };
}

function webPageJsonLd(input: {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: string;
}): JsonLd {
  const url = absoluteUrl(input.path);
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: seoTitleFor(input.path, input.title),
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
    ...(input.image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl(input.image),
          },
        }
      : {}),
  };
}

export function editorialJsonLd(page: EditorialPageData): JsonLd {
  const graph: JsonLd[] = [
    webPageJsonLd({
      path: page.path,
      title: page.title,
      description: page.description,
      image: page.image,
    }),
    breadcrumbsFor(page.path, seoTitleFor(page.path, page.title)),
  ];

  if (COURSE_PATHS.has(page.path)) graph.push(courseJsonLd(page));
  if (SERVICE_PATHS.has(page.path)) graph.push(serviceJsonLd(page));
  if (page.path === "/dive/uss-oriskany") graph.push(oriskanyJsonLd(page));

  return { "@context": "https://schema.org", "@graph": graph };
}

export function staticPageJsonLd(input: {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageJsonLd(input),
      breadcrumbsFor(input.path, seoTitleFor(input.path, input.title)),
    ],
  };
}
