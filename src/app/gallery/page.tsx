import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { objectPosition } from "@/lib/image-focus";
import { pageMetadata, staticPageJsonLd } from "@/lib/seo";

const galleryDescription =
  "Dive Pros gallery: Gulf Coast SCUBA diving, Pensacola wrecks and reefs, USS Oriskany, and the water we train in.";

export const metadata = pageMetadata({
  path: "/gallery",
  title: "Gallery",
  description: galleryDescription,
  image: "/photos/godrays.jpg",
  imageAlt: "Divers silhouetted against sunlight at the surface",
});

const frames = [
  {
    src: "/photos/godrays.jpg",
    alt: "Divers silhouetted against sunlight at the surface",
    className: "lg:col-span-2 lg:row-span-2",
  },
  { src: "/photos/baitball.jpg", alt: "Diver approaching a bait ball" },
  { src: "/photos/portrait.jpg", alt: "Diver facing camera in open blue water" },
  { src: "/photos/wreck-team.jpg", alt: "Team on a wreck with a dive light" },
  { src: "/photos/boat-gear.jpg", alt: "Kits staged on a dive boat" },
  {
    src: "/photos/aqua-pair.jpg",
    alt: "Two divers along a wall in sunlit water",
    className: "lg:col-span-2",
  },
  { src: "/photos/yellow-fins.jpg", alt: "Diver with yellow fins under barracuda" },
  { src: "/photos/pier-tank.jpg", alt: "Tank and regulator on a pier" },
  { src: "/photos/sand-team.jpg", alt: "Group swimming over sand" },
  { src: "/photos/reef-pair.jpg", alt: "Buddy pair over a reef" },
  { src: "/photos/surface.jpg", alt: "Diver at the waterline" },
  { src: "/photos/silhouette.jpg", alt: "Silhouette of a diver under the sun" },
  { src: "/photos/lime-diver.jpg", alt: "Diver with lime fins in deep water" },
  { src: "/photos/barracuda.jpg", alt: "Divers under a school of barracuda" },
  { src: "/photos/reef-ascent.jpg", alt: "Diver looking up from the reef" },
  { src: "/photos/pool-check.jpg", alt: "Diver checking inflator hose in the pool" },
  { src: "/photos/pool-orange.jpg", alt: "Diver standing waist-deep in kit" },
  {
    src: "/photos/pool-overhead.jpg",
    alt: "Diver just below the surface of the training pool",
    className: "lg:col-span-2",
  },
  { src: "/photos/tank-valves.jpg", alt: "Rows of cylinder valves" },
  { src: "/photos/tanks-wall.jpg", alt: "Two cylinders staged against a wall" },
  { src: "/photos/boat-fins.jpg", alt: "Fins hanging on a boat rail" },
  { src: "/photos/shaka.jpg", alt: "Diver making a shaka sign in blue water" },
  { src: "/photos/wreck-hatch.jpg", alt: "Two divers silhouetted in a wreck hatch", className: "lg:col-span-2" },
  {
    src: "/photos/oriskany/07-descent.jpg",
    alt: "USS Oriskany going down by the stern",
    className: "lg:col-span-2",
  },
  { src: "/photos/shop-floor.jpg", alt: "Retail floor at Dive Pros in Pensacola" },
  { src: "/photos/fill-station.jpg", alt: "Enriched Air Nitrox fill station at Dive Pros" },
  { src: "/hero.jpg", alt: "Buddy team in sunlit water" },
];

export default function GalleryPage() {
  return (
    <article className="bg-brand-black">
      <JsonLd
        data={staticPageJsonLd({
          path: "/gallery",
          title: "Gallery",
          description: galleryDescription,
          image: "/photos/godrays.jpg",
          type: "ImageGallery",
        })}
      />
      <header className="relative min-h-[70vh] overflow-hidden bg-brand-black lg:min-h-[82vh]">
        <Image
          src="/photos/godrays.jpg"
          alt="Divers silhouetted against sunlight at the surface"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: objectPosition("/photos/godrays.jpg") }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/25" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-12 pt-[calc(var(--header-height)+2rem)] lg:min-h-[82vh] lg:pb-16">
          <h1 className="display max-w-4xl text-brand-white">
            The water we work in
          </h1>
        </Container>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {frames.map((frame, i) => (
          <div
            key={`${frame.src}-${i}`}
            className={`relative min-h-[280px] overflow-hidden bg-brand-black sm:min-h-[340px] ${frame.className ?? ""}`}
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              className="object-cover"
              style={{ objectPosition: objectPosition(frame.src) }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
