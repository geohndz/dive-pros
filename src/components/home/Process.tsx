import { Container, SectionIndex } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="border-b border-white/10 bg-brand-black">
      <Container className="py-20 lg:py-28">
        <Reveal>
          <SectionIndex index="06" label="Process" />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-brand-white">How it works</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-brand-white/70">
              You walk in, you train here, you dive local sites. Same sequence
              whether you&apos;re ten or going pro.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.index}
              className={`border-b border-white/10 py-10 lg:border-b-0 ${
                index < processSteps.length - 1
                  ? "lg:border-r lg:border-white/10 lg:pr-8"
                  : ""
              } ${index > 0 ? "lg:pl-8" : ""} ${
                index % 2 === 1 ? "sm:pl-8" : ""
              }`}
            >
              <Reveal delay={index * 0.06}>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
                  {step.index}
                </p>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-wide text-brand-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-white/65">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
