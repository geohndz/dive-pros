import { Container, SectionIndex } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { stats } from "@/lib/site";

export function Intro() {
  return (
    <section className="border-b border-white/10 bg-brand-black">
      <Container className="py-20 lg:py-28">
        <Reveal>
          <SectionIndex index="01" label="About" />
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <h2 className="display text-brand-white">
              <span className="lg:whitespace-nowrap">Not just certified.</span>
              <br />
              <span className="text-brand-yellow">Qualified.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-brand-white/80 sm:text-lg">
              The Dive Pros have been serving Florida Panhandle divers and
              the Pensacola and Gulf Breeze communities since 1988. Award-winning
              training. A real service bay. Retail that can actually kit you.
              One shop. The Gulf as your classroom.
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-brand-white/45">
              Pensacola, Florida
            </p>
          </Reveal>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`px-0 py-8 lg:py-10 ${
                  index % 2 === 1 ? "lg:pl-8" : ""
                } ${index > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${
                  index % 2 === 1 ? "border-l border-white/10 pl-6 sm:pl-8" : ""
                }`}
              >
                <Reveal delay={index * 0.05}>
                  <p className="text-4xl font-bold uppercase tracking-wide text-brand-yellow sm:text-5xl lg:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-white/50">
                    {stat.label}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
