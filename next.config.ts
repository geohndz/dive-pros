import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/about/our-story",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about/meet-the-team",
        destination: "/about",
        permanent: true,
      },
      ...legacyRedirects.map((redirect) => ({
        source: redirect.source,
        destination: redirect.destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
