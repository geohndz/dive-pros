import type { Metadata } from "next";
import { EditorialRoute, metadataFor } from "@/lib/editorial";

export const metadata: Metadata = metadataFor("/shop");

export default function Page() {
  return <EditorialRoute path="/shop" />;
}
