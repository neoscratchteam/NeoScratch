import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NeoScratch | Global Engineering & Creative Studio',
    short_name: 'NeoScratch',
    description: 'Professional web design, mobile app development, SEO, and Google Business Profile setup for businesses in Rwanda and worldwide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
