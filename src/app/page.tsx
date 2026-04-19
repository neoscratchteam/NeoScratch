import type { Metadata } from "next";
import Index from "./HomeClient";

export const metadata: Metadata = {
  title: "NeoScratch | Web Design, App Development & SEO in Rwanda",
  description: "NeoScratch specializes in custom web design, mobile app development, and SEO services in Rwanda. We help businesses rank on Google and build high-performance digital products.",
  keywords: [
    "web design Rwanda", "app development Kigali", "SEO experts Rwanda", 
    "website designer Kigali", "software engineering Rwanda", "digital marketing Kigali",
    "Google Business Profile Rwanda", "custom software Kigali"
  ],
  alternates: {
    canonical: 'https://neoscratch.com',
  },
  openGraph: {
    title: "NeoScratch | Web Design, App Development & SEO in Rwanda",
    description: "Expert web design, mobile apps, and SEO services based in Kigali, Rwanda. Scaling businesses with technical excellence.",
    type: 'website',
    url: 'https://neoscratch.com',
    images: [{ url: '/preview.png', width: 1200, height: 630, alt: 'NeoScratch - Digital Engineering Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch | Web Design, App Development & SEO in Rwanda",
    description: "Expert web design, mobile apps, and SEO services in Kigali, Rwanda.",
    images: ['/preview.png'],
  },
};


export default function Page() {
  return <Index />;
}
