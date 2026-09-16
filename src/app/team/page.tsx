import { Metadata } from 'next';
import { TeamClient } from './TeamClient';

export const metadata: Metadata = {
  title: 'Our Team | World-Class Software Engineers & Designers in Rwanda',
  description: 'Meet the talented team behind NeoScratch. A remote software engineering & design team in Rwanda creating high-performance web applications, mobile apps, and business systems.',
  keywords: [
    'NeoScratch team',
    'software engineers Rwanda',
    'tech leaders Kigali',
    'remote development team Rwanda',
    'UI UX designers Kigali',
    'Theogene Iradukunda Founder CEO',
    'Mugisha Samuel Graphic Designer',
    'Byishimo Jean Bosco UI Developer',
  ],
  alternates: {
    canonical: 'https://neoscratch.com/team',
  },
  openGraph: {
    title: 'Meet Our Team | NeoScratch Software Studio',
    description: 'A growing remote team of engineers, designers, and tech strategists based in Rwanda, engineering top-tier digital products.',
    type: 'website',
    url: 'https://neoscratch.com/team',
    images: [{ url: '/theodev.png', width: 800, height: 800, alt: 'Theogene Iradukunda' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | NeoScratch Rwanda',
    description: 'Meet the software engineers and designers building digital solutions in Rwanda.',
  },
};

export default function Page() {
  return <TeamClient />;
}
