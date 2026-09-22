import type { Metadata, Viewport } from "next";
import { Oxanium } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { WaterDepth } from "@/components/motion/WaterDepth";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, homeDescription, siteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#06101e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dive Pros | PADI SCUBA Shop in Pensacola, FL",
    template: "%s | Dive Pros",
  },
  description: homeDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "SCUBA diving",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: site.name,
    title: "Dive Pros | PADI SCUBA Shop in Pensacola, FL",
    description: homeDescription,
    images: [
      {
        url: "/hero.jpg",
        width: 4502,
        height: 3001,
        alt: "Divers underwater with sunlight streaming from the surface. Dive Pros, Pensacola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dive Pros | PADI SCUBA Shop in Pensacola, FL",
    description: homeDescription,
    images: ["/hero.jpg"],
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Pensacola",
    "geo.position": `${site.latitude};${site.longitude}`,
    ICBM: `${site.latitude}, ${site.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${oxanium.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <WaterDepth />
        <JsonLd data={siteJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-yellow focus:px-4 focus:py-2 focus:text-brand-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
