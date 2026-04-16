import { Metadata } from "next";
import Events from "./EventsClient";

export const metadata: Metadata = {
  title: "Tech Events & Workshops | Innovate with NeoScratch Rwanda",
  description: "Join NeoScratch for high-impact tech workshops, developer summits, and software release events in Kigali. Promoting knowledge exchange and technical excellence.",
  keywords: ["tech events Rwanda", "programming workshops Kigali", "software developer meetups Rwanda", "NeoScratch training", "IT summits Kigali"],
  alternates: {
    canonical: 'https://neoscratch.com/events',
  },
  openGraph: {
    title: "Events & Workshops | NeoScratch Tech Innovation",
    description: "Connect with the engineering community in Rwanda. Join our workshops and summits to scale your technical skills.",
    type: 'website',
    url: 'https://neoscratch.com/events',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Events at NeoScratch' }],
  },
};


export default function Page() {
  return <Events />;
}
