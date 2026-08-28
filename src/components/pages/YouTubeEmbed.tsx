import { Container } from "@/components/ui/Container";

export function YouTubeEmbed({
  youtubeId,
  title,
  heading,
}: {
  youtubeId: string;
  title: string;
  heading?: string;
}) {
  return (
    <section className="border-t border-white/10">
      <Container className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          {heading ? (
            <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
              {heading}
            </p>
          ) : null}
          <div className="relative aspect-video overflow-hidden bg-brand-black ring-1 ring-white/10">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
