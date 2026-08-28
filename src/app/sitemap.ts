import type { MetadataRoute } from "next";
import { sitemapEntries, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    ...(entry.image
      ? {
          images: [absoluteUrl(entry.image)],
        }
      : {}),
  }));
}
