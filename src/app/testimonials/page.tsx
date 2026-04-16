import { Metadata } from "next";
import Testimonials from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Trusted Web Studio Rwanda",
  description: "Read success stories from businesses that scaled with NeoScratch. Our clients in Rwanda and worldwide share their experiences with our web, app, and SEO services.",
  keywords: [
    "NeoScratch reviews", "software company testimonials Rwanda", "client feedback Kigali",
    "best web design reviews Rwanda", "trusted software developer Kigali", "IT service reviews Rwanda"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/testimonials',
  },
  openGraph: {
    title: "Client Testimonials | NeoScratch Trust & Excellence",
    description: "Discover why businesses trust us with their digital foundation. Real reviews from our partners in growth.",
    type: 'website',
    url: 'https://neoscratch.com/testimonials',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NeoScratch Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch Reviews – Client Success Stories",
    description: "What our clients say about our digital engineering services in Rwanda.",
  },
};


export default function Page() {
  return <Testimonials />;
}
