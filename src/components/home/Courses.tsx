import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SwooshRow } from "@/components/ui/SwooshRow";
import { Container } from "@/components/ui/Container";
import { courses, stats } from "@/lib/site";
import { objectPosition } from "@/lib/image-focus";

export function Courses() {
  return (
    <section className="bg-brand-white text-brand-black">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="display text-brand-black">12′</p>
            <h2 className="display display-sm mt-3">The tank</h2>
          </div>
          <p className="log lg:col-span-5 text-brand-black/75">
            You train in a 54,000-gallon indoor pool, 12 feet deep and heated.
            Two classrooms sit a few steps from the water. The Gulf is the rest
            of the course.
          </p>
        </div>
      </Container>

      <div className="border-t border-brand-black/10">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`px-0 py-8 lg:py-10 ${
                  index % 2 === 1 ? "lg:pl-8" : ""
                } ${index > 0 ? "lg:border-l lg:border-brand-black/10 lg:pl-8" : ""} ${
                  index % 2 === 1 ? "border-l border-brand-black/10 pl-6 sm:pl-8" : ""
                }`}
              >
                <p className="instrument text-4xl font-bold uppercase tracking-wide text-brand-black sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-brand-black/45">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Container className="border-t border-brand-black/10 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-black">
              <Image
                src="/photos/aqua-pair.jpg"
                alt="Buddy pair in clear water during a training dive"
                fill
                className="object-cover"
                style={{ objectPosition: objectPosition("/photos/aqua-pair.jpg") }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="mt-8">
              <h3 className="display display-sm">Open Water</h3>
              <p className="log mt-6 text-brand-black/70">
                12′ indoor heated tank on site. Two classrooms. New classes
                every week. $389, or $359 for active duty and veterans.
              </p>
              <div className="mt-8">
                <Button href="/courses/open-water">View Open Water</Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <ul>
              {courses.map((course) => (
                <li key={course.href} className="border-b border-brand-black/10">
                  <SwooshRow href={course.href} className="py-5">
                    <span className="flex min-w-0 items-baseline gap-5">
                      <span className="w-8 shrink-0 font-sans text-xs font-medium uppercase tracking-[0.18em] text-brand-gray transition-colors duration-200 group-hover:text-brand-black">
                        {course.index}
                      </span>
                      <span className="font-sans text-lg font-bold uppercase tracking-wide sm:text-2xl">
                        {course.title}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      <span className="hidden font-sans text-xs font-medium uppercase tracking-[0.16em] text-brand-gray transition-colors duration-200 group-hover:text-brand-black sm:inline">
                        {course.note}
                      </span>
                      <ArrowUpRight className="size-5 text-brand-black transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </SwooshRow>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
