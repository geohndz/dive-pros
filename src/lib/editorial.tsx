import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EditorialPage } from "@/components/pages/EditorialPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage } from "@/lib/pages";
import { editorialJsonLd, pageMetadata } from "@/lib/seo";

export function metadataFor(path: string): Metadata {
  const page = getPage(path);
  if (!page) return {};
  return pageMetadata({
    path: page.path,
    title: page.title,
    description: page.description,
    image: page.image,
    imageAlt: page.imageAlt,
  });
}

export function EditorialRoute({ path }: { path: string }) {
  const page = getPage(path);
  if (!page) notFound();
  return (
    <>
      <JsonLd data={editorialJsonLd(page)} />
      <EditorialPage page={page} />
    </>
  );
}
