import { Metadata } from "next";
import Script from "next/script";
import About from "./AboutClient";

export const metadata: Metadata = {
  title: "Our Story & Vision | The Journey of NeoScratch in Rwanda",
  description: "Discover the inspiring story behind NeoScratch. Founded by Theogene Iradukunda (theodev) as RwandaScratch in 2024 at APEKI Tumba TSS, evolving into an RDB-registered digital engineering company building custom software from scratch.",
  keywords: [
    "about NeoScratch", "Theogene Iradukunda", "theodev", "RwandaScratch story",
    "APEKI Tumba TSS software developer", "PixelMart software developer",
    "software house Rwanda", "RDB registered tech company Kigali",
    "custom software built from scratch", "Kigali tech founder story",
    "web design studio Rwanda", "digital transformation Kigali"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/about',
  },
  openGraph: {
    title: "Our Story & Vision | The Journey of NeoScratch",
    description: "From a student innovation at APEKI Tumba TSS to an RDB-registered software studio in Kigali. Read how Founder & CEO Theogene Iradukunda built NeoScratch from scratch.",
    type: 'website',
    url: 'https://neoscratch.com/about',
    images: [{ url: '/theodev.png', width: 800, height: 800, alt: 'Theogene Iradukunda (theodev) - Founder & CEO of NeoScratch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The NeoScratch Story | Engineering Excellence in Rwanda",
    description: "From student roots at APEKI Tumba TSS to RDB-registered software studio led by Founder Theogene Iradukunda (theodev).",
    images: ['/theodev.png'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://neoscratch.com/#organization',
      name: 'NeoScratch',
      legalName: 'NeoScratch Ltd',
      alternateName: ['RwandaScratch', 'NeoScratch Rwanda'],
      url: 'https://neoscratch.com',
      logo: 'https://neoscratch.com/favicon-180x180.png?v=3.0',
      foundingDate: '2024',
      foundingLocation: {
        '@type': 'Place',
        name: 'Tumba, Rulindo District / Kigali, Rwanda'
      },
      founder: {
        '@type': 'Person',
        '@id': 'https://neoscratch.com/#theodev',
        name: 'Theogene Iradukunda',
        alternateName: 'theodev',
        jobTitle: 'Founder & CEO',
        alumniOf: 'APEKI Tumba TSS',
        image: 'https://neoscratch.com/theodev.png',
        url: 'https://neoscratch.com/team'
      },
      description: 'NeoScratch is an RDB-registered digital engineering studio in Rwanda building custom software systems, mobile apps, and high-ranking SEO platforms from scratch.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'GF Plaza, Kigali City Tower Area',
        addressLocality: 'Kigali',
        addressCountry: 'RW'
      }
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://neoscratch.com/about/#webpage',
      url: 'https://neoscratch.com/about',
      name: 'Our Story & Vision | NeoScratch',
      description: 'The story behind NeoScratch, from student beginnings as RwandaScratch in 2024 to RDB registration in 2026 by founder Theogene Iradukunda.'
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <About />
    </>
  );
}
