import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on this chart. Head back to Dive Pros.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-brand-black pt-[var(--header-height)]">
      <Container className="py-24">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
          404
        </p>
          <h1 className="display mt-6 text-brand-white">Off the shot line</h1>
          <p className="mt-6 max-w-md text-brand-white/70">
            That page isn&apos;t on this chart. Head back to the surface.
          </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Home</Button>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
        <p className="mt-8 text-sm text-brand-white/40">
          Or start at{" "}
          <Link href="/courses" className="text-brand-yellow hover:underline">
            courses
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
