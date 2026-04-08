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
    default: "NeoScratch | Global Engineering & Creative Studio",
    template: "%s | NeoScratch"
  },
  description: "NeoScratch is a premier software engineering and creative studio in Rwanda, delivering high-performance digital products, custom web & mobile apps, and specialized tech consultancy for global impact.",
  keywords: ["software development Rwanda", "web development Rwanda", "mobile app development", "SEO services Rwanda", "digital marketing studio", "custom software Kigali", "tech consultancy", "NeoScratch"],
  authors: [{ name: "NeoScratch Team" }],
  creator: "NeoScratch",
  publisher: "NeoScratch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neoscratch.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NeoScratch | Global Engineering & Creative Studio",
    description: "Building high-performance digital products and specialized consultancy in Rwanda and beyond.",
    url: 'https://neoscratch.com',
    siteName: 'NeoScratch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // I'll need to check if this exists or create it
        width: 1200,
        height: 630,
        alt: 'NeoScratch - Global Engineering & Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeoScratch | Global Engineering & Creative Studio",
    description: "Building high-performance digital products and specialized consultancy in Rwanda and beyond.",
    creator: '@neoscratch',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NeoScratch',
    image: 'https://neoscratch.com/og-image.png',
    '@id': 'https://neoscratch.com',
    url: 'https://neoscratch.com',
    telephone: '+250780000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kigali, Rwanda',
      addressLocality: 'Kigali',
      postalCode: '0000',
      addressCountry: 'RW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.9441,
      longitude: 30.0619,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '18:00'
    },
    sameAs: [
      'https://twitter.com/neoscratch',
      'https://linkedin.com/company/neoscratch',
      'https://github.com/neoscratch'
    ]
  };

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
