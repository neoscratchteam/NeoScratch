import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neoscratch.com'
  
  // List of paths - ideally these could be dynamic from a CMS or routes array
  const paths = [
    '',
    '/services',
    '/projects',
    '/contact',
    '/about',
    '/testimonials',
    '/request-website',
    '/join-us',
    '/partnerships',
    '/events',
    '/policy',
  ]
 
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
