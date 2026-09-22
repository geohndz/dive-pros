import { Hero } from "@/components/hero/Hero";
import { Descent } from "@/components/home/Descent";
import { Offerings } from "@/components/home/Offerings";
import { Courses } from "@/components/home/Courses";
import { Sites } from "@/components/home/Sites";
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
      <Descent>
        <Hero />
        <Offerings />
        <Courses />
        <Sites />
        <Reviews />
        <Visit />
      </Descent>
    </>
  );
}
