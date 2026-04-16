import { Metadata } from "next";
import JoinUs from "./JoinUsClient";

export const metadata: Metadata = {
  title: "Careers & Internships | Join the NeoScratch Team in Rwanda",
  description: "Join Rwanda's leading tech innovation studio. Explore careers and internship opportunities in software development, UI/UX design, and digital marketing at NeoScratch.",
  keywords: ["tech careers Rwanda", "developer jobs Kigali", "software engineering careers", "NeoScratch internships", "hire talent Rwanda"],
  alternates: {
    canonical: 'https://neoscratch.com/join-us',
  },
  openGraph: {
    title: "Join the Team | Careers at NeoScratch",
    description: "Build the future of global technology from Kigali. Explore open roles and internships at NeoScratch.",
    type: 'website',
    url: 'https://neoscratch.com/join-us',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Careers at NeoScratch' }],
  },
};


export default function Page() {
  return <JoinUs />;
}
