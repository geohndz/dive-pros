import type { Metadata } from "next";
import { EditorialRoute, metadataFor } from "@/lib/editorial";

export const metadata: Metadata = metadataFor("/dive");

export default function Page() {
  return <EditorialRoute path="/dive" />;
}
