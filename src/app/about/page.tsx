import { Metadata } from "next";
import About from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Leading Software Engineering Studio in Rwanda",
  description: "Learn about NeoScratch, a premier software engineering studio in Rwanda. We are dedicated to technical excellence, innovative web design, and digital transformation for global clients.",
  keywords: [
    "about NeoScratch", "software house Rwanda", "Theogene Iradukunda", "Kigali tech company",
    "IT consultants Rwanda", "software engineering studio Kigali", "tech innovation Rwanda"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/about',
  },
  openGraph: {
    title: "About NeoScratch | Engineering the Future in Rwanda",
    description: "Discover our mission to build world-class digital products from the heart of Kigali. Technical excellence meeting creative design.",
    type: 'website',
    url: 'https://neoscratch.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About NeoScratch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About NeoScratch – Software Engineering Experts",
    description: "Innovative software engineering and web design studio in Rwanda.",
  },
};


export default function Page() {
  return <About />;
}
