import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "../index.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingChat } from "@/components/FloatingChat";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "NeoScratch | Top Web Design, Mobile Apps & SEO Agency in Rwanda",
    template: "%s | NeoScratch"
  },
  description: "NeoScratch is Rwanda's leading digital engineering agency in Kigali. We specialize in high-converting web design, custom mobile app development (iOS/Android), strategic SEO, and Google Business Profile optimization.",
  keywords: [
    // 1. High-Intent Core Software Keywords
    "software company in Kigali", "software development company in Rwanda", "custom software development Kigali",
    "best software companies in Rwanda", "software development services Kigali", "IT consulting firm Rwanda",
    "custom software developers Kigali", "Enterprise software solutions Rwanda", "top software development firm Rwanda",
    "bespoke software development Kigali", "outsourced software development Rwanda", "offshore software development Kigali",
    "software engineering company Rwanda", "software agency Kigali", "IT solutions provider Rwanda",

    // 2. Web Development & Design Keywords
    "web application development Kigali", "website development company in Rwanda", "custom web portal development Kigali",
    "e-commerce developer Rwanda", "full-stack web development Kigali", "React developers Kigali",
    "Node.js development company Rwanda", "PHP web development Kigali", "Python web development Rwanda",
    "Laravel developers Kigali", "front-end web development Rwanda", "back-end software architecture Kigali",
    "Progressive Web App (PWA) developers Kigali", "UI/UX design agency Rwanda", "responsive web application design Kigali",

    // 3. Mobile App Development Keywords
    "mobile app development company Kigali", "iOS app developers Rwanda", "Android app development Kigali",
    "Flutter app developer Kigali", "React Native development Rwanda", "mobile app development cost Kigali",
    "cross-platform app developers Rwanda", "custom mobile app builder Kigali", "fintech mobile app developers Rwanda",
    "native app development Kigali", "mobile UX design Rwanda", "enterprise mobile apps Kigali",
    "app development agency Rwanda", "Mobile solution company Kigali", "top app developers in Rwanda",

    // 4. Enterprise, Cloud & API Integration
    "ERP software developers Rwanda", "CRM custom development Kigali", "Cloud software integration Rwanda",
    "SaaS development company Kigali", "API integration services Rwanda", "microservices development Kigali",
    "cloud migration services Rwanda", "database design and management Kigali", "AWS cloud developers Rwanda",
    "Azure software developers Kigali", "DevOps services company Rwanda", "IT system architecture Kigali",
    "software maintenance and support Rwanda", "legacy software migration Kigali", "enterprise systems engineering Rwanda",

    // 5. Industry-Specific Software Keywords
    "fintech software developers Rwanda", "mobile money integration Kigali", "MoMo API software integration Rwanda",
    "e-learning software developers Kigali", "healthcare software development Rwanda", "hospital management system Kigali",
    "school management system software Rwanda", "hotel management software Kigali", "logistics software development Rwanda",
    "agri-tech software developers Kigali", "point of sale (POS) software developer Rwanda", "inventory management software Kigali",
    "real estate portal software Rwanda", "government digital services Kigali", "NGO software solutions Rwanda",

    // 6. Specialized & Emerging Tech Keywords
    "AI software development company Kigali", "artificial intelligence solutions Rwanda", "machine learning engineers Kigali",
    "data analytics software Rwanda", "business intelligence software Kigali", "cybersecurity software services Rwanda",
    "blockchain developers Kigali", "IoT software solutions Rwanda", "automation software company Kigali", "chat bot developers Rwanda",

    // 7. Hiring, Outsourcing & Dedicated Developers
    "hire software developers in Kigali", "dedicated software development team Rwanda", "hire Flutter developers Kigali",
    "software development talent Rwanda", "hire Python developers Kigali", "software development outsourcing Kigali",
    "hire full-stack developers Rwanda", "IT staffing agency Kigali",

    // 8. Cost & Commercial Intent Keywords
    "software development cost in Rwanda", "website development price Kigali", "mobile app development quote Rwanda",
    "affordable software development Kigali", "software developer rates in Rwanda", "cost to build software application Kigali",
    "custom software development quotation Rwanda"
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
    title: "NeoScratch | Top Web Design, Mobile Apps & SEO Agency in Rwanda",
    description: "Leading digital engineering studio in Kigali. We build custom websites, mobile apps, and rank businesses #1 on Google with strategic SEO & Google Business Profile management.",
    url: 'https://neoscratch.com',
    siteName: 'NeoScratch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'NeoScratch - Premier Web Design, Mobile Apps & SEO Agency in Rwanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch | Top Web Design, Mobile Apps & SEO Agency in Rwanda",
    description: "Leading digital engineering studio in Kigali. Custom web design, mobile app development, and strategic SEO for global growth.",
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
      { url: '/favicon-192x192.png?v=3.0', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png?v=3.0', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-180x180.png?v=3.0', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180x180.png?v=3.0', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon-512x512.png?v=3.0' },
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
      image: 'https://neoscratch.com/favicon-180x180.png?v=3.0',
      logo: 'https://neoscratch.com/favicon-180x180.png?v=3.0',
      '@id': 'https://neoscratch.com/#organization',
      url: 'https://neoscratch.com',
      telephone: '+250792734752',
      email: 'thisisneoscratch@gmail.com',
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
      knowsAbout: [
        "Web Design & Development",
        "Mobile App Development (iOS & Android)",
        "Search Engine Optimization (SEO)",
        "Google Business Profile Optimization",
        "Next.js & React Applications",
        "E-commerce Platforms & MoMo Payment Gateways",
        "Custom Enterprise Software Engineering"
      ],
      keywords: "web design Rwanda, website design Kigali, mobile app development Rwanda, SEO services Rwanda, Google Business Profile Kigali, software company Kigali",
      sameAs: [
        'https://www.x.com/theo_dev_rw',
        'https://www.instagram.com/neoscratchltd/',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-jakarta bg-[#f7f8f3]">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
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
