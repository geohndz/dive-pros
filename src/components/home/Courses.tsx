import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SwooshRow } from "@/components/ui/SwooshRow";
import { Container, SectionIndex } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { courses } from "@/lib/site";
import { objectPosition } from "@/lib/image-focus";

export function Courses() {
  return (
    <section className="border-b border-brand-black/10 bg-brand-white text-brand-black">
      <Container className="py-20 lg:py-28">
        <Reveal>
          <SectionIndex index="03" label="Training" tone="dark" />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-black">
              <Image
                src="/photos/facility-pool.jpg"
                alt="Indoor heated training tank at Dive Pros"
                fill
                className="object-cover"
                style={{ objectPosition: objectPosition("/photos/facility-pool.jpg") }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="mt-8">
              <h2 className="display display-sm">
                Become a diver.
                <br />
                Stay one.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-brand-black/70">
                On-site 12′ indoor heated tank. Two classrooms. New Open Water
                classes every week. $389, or $359 for active duty and veterans.
              </p>
              <div className="mt-8">
                <Button href="/courses/open-water">Open Water Course</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 lg:pt-2">
            <ul>
              {courses.map((course) => (
                <li key={course.href} className="border-b border-brand-black/10">
                  <SwooshRow href={course.href} className="py-5">
                    <span className="flex min-w-0 items-baseline gap-5">
                      <span className="w-8 shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-brand-gray transition-colors duration-500 group-hover:text-brand-black">
                        {course.index}
                      </span>
                      <span className="text-lg font-bold uppercase tracking-wide sm:text-2xl">
                        {course.title}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-brand-gray transition-colors duration-500 group-hover:text-brand-black sm:inline">
                        {course.note}
                      </span>
                      <ArrowUpRight className="size-5 text-brand-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </SwooshRow>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
