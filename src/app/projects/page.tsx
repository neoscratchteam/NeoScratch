import type { Metadata } from "next";
import Projects from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | Professional Web & App Design Rwanda",
  description: "Explore the NeoScratch portfolio. We showcase high-performance digital products, custom web and mobile apps, and successful SEO campaigns delivered for clients in Rwanda and worldwide.",
  keywords: [
    "software portfolio Rwanda", "web development projects Kigali", "mobile app showcase Rwanda",
    "NeoScratch case studies", "custom software examples", "best website designs Rwanda"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/projects',
  },
  openGraph: {
    title: "Case Studies & Portfolio | NeoScratch Digital engineering",
    description: "See our work in action. From ERP systems to community fintech, explore how we solve complex problems with elegant code.",
    type: 'website',
    url: 'https://neoscratch.com/projects',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NeoScratch Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch Portfolio – Elite Digital Solutions",
    description: "High-performance digital products built by NeoScratch.",
  },
};


export default function Page() {
  return <Projects />;
}
