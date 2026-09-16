import type { Metadata } from "next";
import Index from "./HomeClient";

export const metadata: Metadata = {
  title: "NeoScratch | Web Design, App Development & SEO Agency in Rwanda",
  description: "NeoScratch is Rwanda's top digital engineering studio in Kigali. We specialize in custom web design, high-performance mobile apps, and SEO services that rank your business #1 on Google.",
  keywords: [
    "web design Rwanda", "website design Kigali", "app development Kigali", 
    "SEO experts Rwanda", "SEO agency Kigali", "website designer Kigali", 
    "software engineering Rwanda", "digital marketing Kigali", "Google Business Profile Rwanda", 
    "custom software Kigali", "best web development company Rwanda", "mobile app developer Kigali"
  ],
  alternates: {
    canonical: 'https://neoscratch.com',
  },
  openGraph: {
    title: "NeoScratch | Web Design, App Development & SEO Agency in Rwanda",
    description: "Expert web design, mobile apps, and strategic SEO services based in Kigali, Rwanda. We build digital products that scale your revenue.",
    type: 'website',
    url: 'https://neoscratch.com',
    images: [{ url: '/preview.png', width: 1200, height: 630, alt: 'NeoScratch - Premier Web Design & Software Studio in Rwanda' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch | Web Design, App Development & SEO Agency in Rwanda",
    description: "Expert web design, mobile apps, and strategic SEO services in Kigali, Rwanda.",
    images: ['/preview.png'],
  },
};


export default function Page() {
  return <Index />;
}
