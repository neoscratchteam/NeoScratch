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
        url: '/preview.png',
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
    images: ['/preview.png'],
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
      { url: '/favicon-180x180.png' },
    ],
    apple: [
      { url: '/favicon-180x180.png' },
    ],
  },
  verification: {
    google: 'pjqRx6vOATwVGOG40bPTTda9w0jyeg-OqLo_2sNlZM4',
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
      alternateName: 'NeoScratch Rwanda',
      description: 'NeoScratch is Rwanda\'s premier digital engineering studio. We specialize in high-end web design, mobile app development (iOS & Android), SEO, and strategic Google Business Profile management.',
      image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776629743/oluxywatchesmainlogo_tmsurb.png',
      logo: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776629743/oluxywatchesmainlogo_tmsurb.png',
      '@id': 'https://neoscratch.com/#organization',
      url: 'https://neoscratch.com',
      telephone: '+250792734752',
      email: 'customerservice@neoscratch.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'GF Plaza, Kigali City Tower Area',
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
        { '@type': 'Country', name: 'Canada' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'NeoScratch Digital Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Website Design & Development', description: 'Custom-built, high-performance websites optimized for conversion and speed.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Premium Mobile App Development', description: 'Cross-platform iOS and Android apps with elite UI/UX.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic SEO & Growth', description: 'Ranking your business #1 on Google with data-driven SEO strategies.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Management', description: 'Optimizing your local presence to attract more walk-in and online customers.' } },
        ],
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '08:00',
        closes: '20:00'
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
      name: 'NeoScratch | Elite Digital Engineering',
      description: 'Web Design, Mobile Apps, and SEO Services in Kigali, Rwanda.',
      publisher: { '@id': 'https://neoscratch.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://neoscratch.com/projects?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://neoscratch.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://neoscratch.com/projects' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Services', 'item': 'https://neoscratch.com/services' },
        { '@type': 'ListItem', 'position': 4, 'name': 'About Us', 'item': 'https://neoscratch.com/about' },
        { '@type': 'ListItem', 'position': 5, 'name': 'Contact', 'item': 'https://neoscratch.com/contact' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Full Project Portfolio by NeoScratch',
      'description': 'A comprehensive collection of high-performance digital solutions engineered for global impact.',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'CreativeWork',
            'name': 'Oluxy Wear - Elite Eyewear Store',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/v1776759377/oluxywearhome_qwwdo2.png',
            'description': 'A premium eyewear e-commerce platform with cinematic product discovery.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'CreativeWork',
            'name': 'Oluxy Watches - Heritage Platform',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776628329/hero2_dtp7ly.png',
            'description': 'Kigali\'s premier timepiece destination digital platform.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'CreativeWork',
            'name': 'Oluxy Dashboard - Retail ERP',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776367659/Screenshot_2026-04-15_at_14.31.26_yly1g3.png',
            'description': 'All-in-one retail management command center for high-value inventory.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'item': {
            '@type': 'CreativeWork',
            'name': 'FinTrack - Wealth Management',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366728/Screenshot_2026-04-16_at_21.03.39_fpyf50.png',
            'description': 'Strategic personal finance engine and risk analytics command center.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'item': {
            '@type': 'CreativeWork',
            'name': 'SmartStock - Inventory BMS',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365807/Screenshot_2026-04-16_at_20.54.03_e6t6ir.png',
            'description': 'Advanced stock management and multi-branch synchronization platform.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 6,
          'item': {
            '@type': 'CreativeWork',
            'name': 'PixelMart - Multi-Branch ERP',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365356/Screenshot_2026-04-16_at_20.48.39_dutnuy.png',
            'description': 'Real-time sales and inventory tracking system for multi-location electronics retail.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 7,
          'item': {
            '@type': 'CreativeWork',
            'name': 'Open Future - Savings Fintech',
            'image': 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366290/Screenshot_2026-04-16_at_21.01.15_v3rolu.png',
            'description': 'Community-driven student financial literacy and micro-savings platform.'
          }
        }
      ]
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
