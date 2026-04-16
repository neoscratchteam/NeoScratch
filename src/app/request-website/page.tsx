import { Metadata } from "next";
import RequestWebsite from "./RequestClient";

export const metadata: Metadata = {
  title: "Get a Free Quote | Web Design & Mobile App Development Rwanda",
  description: "Start your digital transformation journey today. Request a free quote for custom web development, mobile apps, or SEO services in Rwanda.",
  keywords: [
    "request website quote Rwanda", "hire web developer Kigali", "website pricing Rwanda",
    "software development inquiry", "custom app development quote", "SEO strategy inquiry"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/request-website',
  },
  openGraph: {
    title: "Request a Website Quote | NeoScratch Engineering",
    description: "Launch your project with the best engineering team in Kigali. Get a detailed quote for your web or mobile application.",
    type: 'website',
    url: 'https://neoscratch.com/request-website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Request NeoScratch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Get a Website Quote – NeoScratch Digital",
    description: "Professional web and app development inquiry in Rwanda.",
  },
};


export default function Page() {
  return <RequestWebsite />;
}
