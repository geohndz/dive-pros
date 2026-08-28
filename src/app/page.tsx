import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/motion/Marquee";
import { Intro } from "@/components/home/Intro";
import { Offerings } from "@/components/home/Offerings";
import { Courses } from "@/components/home/Courses";
import { Sites } from "@/components/home/Sites";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { Visit } from "@/components/home/Visit";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeMetadata, staticPageJsonLd, homeDescription } from "@/lib/seo";

export const metadata = homeMetadata();

export default function Home() {
  return (
    <>
      <JsonLd
        data={staticPageJsonLd({
          path: "/",
          title: "Dive Pros",
          description: homeDescription,
          image: "/hero.jpg",
        })}
      />
      <Hero />
      <Marquee />
      <Intro />
      <Offerings />
      <Courses />
      <Sites />
      <Process />
      <Reviews />
      <Visit />
    </>
  );
}
