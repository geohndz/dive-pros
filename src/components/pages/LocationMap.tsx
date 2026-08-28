import { site } from "@/lib/site";

export function LocationMap({ title }: { title: string }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;

  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}
