import type { Metadata } from "next";
import Script from "next/script";
import Services from "./ServicesClient";

export const metadata: Metadata = {
  title: "Web Design, SEO & App Development Services in Rwanda | NeoScratch",
  description: "NeoScratch offers professional website design, mobile app development, SEO, Google Business Profile setup, and custom software in Rwanda. Get found on Google and grow your business.",
  keywords: [
    "web design services Rwanda", "website development Kigali",
    "mobile app development Rwanda", "Android iOS app Rwanda",
    "SEO services Rwanda", "search engine optimisation Kigali",
    "Google Business Profile setup Rwanda", "Google Maps listing Rwanda",
    "custom software Rwanda", "web app development Rwanda",
    "website maintenance Rwanda", "affordable website builder Rwanda",
    "digital agency Rwanda", "NeoScratch services"
  ],
  alternates: {
    canonical: 'https://neoscratch.com/services',
  },
  openGraph: {
    title: "Web Design, SEO & App Development Services in Rwanda | NeoScratch",
    description: "Professional website design, mobile apps, SEO, and Google Business Profile setup for businesses in Rwanda and the region.",
    url: 'https://neoscratch.com/services',
    type: 'website',
    images: [{ url: '/preview.png', width: 1200, height: 630, alt: 'NeoScratch Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Design, SEO & App Development Services – NeoScratch",
    description: "Professional website design, mobile apps, SEO & Google Business Profile setup in Rwanda.",
  },
};

const servicesJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design & Development',
    provider: { '@type': 'Organization', name: 'NeoScratch' },
    description: 'Professional, mobile-first websites with up to 15 pages, admin panel, and fast delivery.',
    offers: {
      '@type': 'Offer',
      price: '150000',
      priceCurrency: 'RWF',
      description: 'Starting from 150,000 RWF for Business Websites',
    },
    areaServed: 'RW',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App Engineering',
    provider: { '@type': 'Organization', name: 'NeoScratch' },
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    offers: {
      '@type': 'Offer',
      price: '800000',
      priceCurrency: 'RWF',
      description: 'Starting from 800,000 RWF',
    },
    areaServed: 'RW',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to build a website with NeoScratch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most business websites are delivered within 1 to 3 weeks, depending on complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer website maintenance and updates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer professional maintenance retainers starting from 50,000 RWF/mo, including security updates and speed optimization.',
        },
      },
    ],
  },
];


export default function Page() {
  return (
    <>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Services />
    </>
  );
}
