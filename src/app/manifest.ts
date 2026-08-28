import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dive Pros",
    short_name: "Dive Pros",
    description:
      "PADI scuba shop in Pensacola, FL. Training, gear, service, and the Gulf since 1988.",
    start_url: "/",
    display: "browser",
    background_color: "#111111",
    theme_color: "#111111",
    lang: "en-US",
    icons: [
      {
        src: "/logo.png",
        sizes: "300x91",
        type: "image/png",
      },
    ],
  };
}
