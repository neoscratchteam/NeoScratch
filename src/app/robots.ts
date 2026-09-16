import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      }
    ],
    sitemap: 'https://neoscratch.com/sitemap.xml',
    host: 'https://neoscratch.com',
  }
}

