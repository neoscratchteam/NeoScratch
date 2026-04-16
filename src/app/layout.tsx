import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../index.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingChat } from "@/components/FloatingChat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "NeoScratch | Web Design, Apps & SEO Services in Rwanda",
    template: "%s | NeoScratch"
  },
  description: "NeoScratch is a premier digital engineering studio in Rwanda. We build professional websites, high-performance mobile apps, and provide strategic SEO & Google Business Profile services for global growth.",
  keywords: [
    "web design Rwanda", "website design Kigali", "web development Rwanda",
    "mobile app development Rwanda", "SEO services Rwanda", "Google Business Profile setup Rwanda",
    "custom software development Kigali", "website developer Rwanda",
    "affordable website Rwanda", "ecommerce website Rwanda",
    "digital marketing Rwanda", "online presence Rwanda",
    "website maintenance Rwanda", "NeoScratch",
    "tech company Kigali", "software company Rwanda",
    "software house Rwanda", "best web design Kigali"
  ],
  authors: [{ name: "NeoScratch", url: "https://neoscratch.com" }],
  creator: "NeoScratch",
  publisher: "NeoScratch",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neoscratch.com'),
  alternates: {
    canonical: 'https://neoscratch.com',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "NeoScratch | Web Design, Apps & SEO Services in Rwanda",
    description: "Professional website design, mobile apps, SEO, and Google Business Profile setup for businesses in Rwanda and beyond. We build digital products that scale.",
    url: 'https://neoscratch.com',
    siteName: 'NeoScratch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeoScratch - Web Design, Apps & SEO Services Rwanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch | Web Design, Apps & SEO Services in Rwanda",
    description: "Professional website design, mobile apps, SEO, and Google Business Profile setup for businesses in Rwanda and beyond.",
    creator: '@neoscratch',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  verification: {
    google: 'google-site-verification-id', // User should replace this
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'NeoScratch',
      description: 'Professional web design, mobile app development, SEO, and Google Business Profile setup for businesses in Rwanda and worldwide.',
      image: 'https://neoscratch.com/og-image.png',
      '@id': 'https://neoscratch.com/#organization',
      url: 'https://neoscratch.com',
      telephone: '+250792734752',
      email: 'customerservice@neoscratch.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kigali',
        addressLocality: 'Kigali',
        addressRegion: 'Kigali Province',
        postalCode: '0000',
        addressCountry: 'RW',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -1.9441,
        longitude: 30.0619,
      },
      areaServed: [
        { '@type': 'Country', name: 'Rwanda' },
        { '@type': 'Country', name: 'Uganda' },
        { '@type': 'Country', name: 'Kenya' },
        { '@type': 'Country', name: 'USA' },
        { '@type': 'Country', name: 'UK' },
        { '@type': 'AdministrativeArea', name: 'East Africa' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Setup' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance & Management' } },
        ],
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      sameAs: [
        'https://www.x.com/theo_dev_rw',
        'https://www.instagram.com/neoscratch/',
        'https://www.linkedin.com/in/theogene-iradukunda-88b07a381/',
        'https://github.com/theodevrwanda'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://neoscratch.com/#website',
      url: 'https://neoscratch.com',
      name: 'NeoScratch',
      description: 'Web Design, Mobile Apps, SEO & Google Business Profile Setup in Rwanda',
      publisher: { '@id': 'https://neoscratch.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://neoscratch.com/services?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }
  ];


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16 lg:pt-20">
              {children}
            </main>
            <Footer />
            <FloatingChat />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
