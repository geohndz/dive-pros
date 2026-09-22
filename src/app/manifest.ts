import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dive Pros",
    short_name: "Dive Pros",
    description:
      "PADI SCUBA shop in Pensacola, FL. Training, gear, service, and the Gulf.",
    start_url: "/",
    display: "browser",
    background_color: "#06101e",
    theme_color: "#06101e",
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
