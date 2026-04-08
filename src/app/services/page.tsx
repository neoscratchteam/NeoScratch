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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NeoScratch Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Design, SEO & App Development Services – NeoScratch",
    description: "Professional website design, mobile apps, SEO & Google Business Profile setup in Rwanda.",
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NeoScratch Digital Services',
  description: 'Professional digital services for businesses in Rwanda and worldwide',
  url: 'https://neoscratch.com/services',
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: { '@type': 'Service', name: 'Website Design & Development', provider: { '@type': 'Organization', name: 'NeoScratch' }, description: 'Professional, mobile-first websites with up to 15 pages, admin panel, and fast delivery.', url: 'https://neoscratch.com/services', areaServed: 'RW' }
    },
    {
      '@type': 'ListItem', position: 2,
      item: { '@type': 'Service', name: 'Google Business Profile Setup', provider: { '@type': 'Organization', name: 'NeoScratch' }, description: 'Complete Google Business Profile setup with Google Maps listing, verified account, and local SEO for Rwanda.', url: 'https://neoscratch.com/services', areaServed: 'RW' }
    },
    {
      '@type': 'ListItem', position: 3,
      item: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)', provider: { '@type': 'Organization', name: 'NeoScratch' }, description: 'Keyword research, on-page SEO, Google Search Console setup, and monthly reports for ranking on Google.', url: 'https://neoscratch.com/services', areaServed: 'RW' }
    },
    {
      '@type': 'ListItem', position: 4,
      item: { '@type': 'Service', name: 'Mobile App Development', provider: { '@type': 'Organization', name: 'NeoScratch' }, description: 'iOS and Android app development using React Native with offline-first architecture.', url: 'https://neoscratch.com/services', areaServed: 'RW' }
    },
    {
      '@type': 'ListItem', position: 5,
      item: { '@type': 'Service', name: 'Custom Software Development', provider: { '@type': 'Organization', name: 'NeoScratch' }, description: 'Custom dashboards, booking systems, and business automations built to your exact requirements.', url: 'https://neoscratch.com/services', areaServed: 'RW' }
    },
    {
      '@type': 'ListItem', position: 6,
      item: { '@type': 'Service', name: 'Website Maintenance & Management', provider: { '@type': 'Organization', name: 'NeoScratch' }, description: 'Monthly website maintenance retainers with content updates, security, SEO monitoring, and reports.', url: 'https://neoscratch.com/services', areaServed: 'RW' }
    },
  ],
};

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
