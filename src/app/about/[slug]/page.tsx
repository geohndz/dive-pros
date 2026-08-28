import type { Metadata } from "next";
import { EditorialRoute, metadataFor } from "@/lib/editorial";
import { getChildSlugs } from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getChildSlugs("/about").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return metadataFor(`/about/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <EditorialRoute path={`/about/${slug}`} />;
}
