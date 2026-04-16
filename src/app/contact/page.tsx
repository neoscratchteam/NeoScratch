import type { Metadata } from "next";
import Contact from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hire the Best Web & App Developers in Rwanda",
  description: "Get in touch with NeoScratch for your next digital project. We offer expert web design, mobile app development, and SEO services in Rwanda and globally.",
  keywords: [
    "contact software developer Rwanda", "hire website designers Kigali", "Kigali tech studio contact",
    "request quote website Rwanda", "software development company contact", "hire SEO experts Kigali"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/contact',
  },
  openGraph: {
    title: "Contact NeoScratch | Let's Build Your Digital Future",
    description: "Ready to scale your business? Contact our engineering team in Kigali for professional web, mobile, and SEO solutions.",
    type: 'website',
    url: 'https://neoscratch.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact NeoScratch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact NeoScratch – Digital Engineering Services",
    description: "Get in touch for professional web and app development in Rwanda.",
  },
};


export default function Page() {
  return <Contact />;
}
