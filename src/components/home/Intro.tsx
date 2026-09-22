import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/site";

export function Intro() {
  return (
    <section className="border-b border-white/10 bg-brand-black">
      <Container className="py-20 lg:py-28">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-yellow">
          12′
        </p>
        <h2 className="display mt-4 text-brand-white">The tank</h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-white/80 sm:text-lg">
          You train in a 54,000-gallon indoor pool, 12 feet deep and heated.
          Two classrooms sit a few steps from the water. The Gulf is the rest
          of the course.
        </p>
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
                <p className="text-4xl font-bold uppercase tracking-wide text-brand-yellow sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-white/50">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
