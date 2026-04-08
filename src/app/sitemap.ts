import { MetadataRoute } from 'next'

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '',                  priority: 1.0,  changeFrequency: 'weekly' },
  { path: '/services',         priority: 0.95, changeFrequency: 'weekly' },
  { path: '/request-website',  priority: 0.90, changeFrequency: 'monthly' },
  { path: '/contact',          priority: 0.90, changeFrequency: 'monthly' },
  { path: '/about',            priority: 0.85, changeFrequency: 'monthly' },
  { path: '/projects',         priority: 0.85, changeFrequency: 'monthly' },
  { path: '/testimonials',     priority: 0.80, changeFrequency: 'monthly' },
  { path: '/partnerships',     priority: 0.75, changeFrequency: 'monthly' },
  { path: '/events',           priority: 0.75, changeFrequency: 'weekly' },
  { path: '/join-us',          priority: 0.70, changeFrequency: 'monthly' },
  { path: '/policy',           priority: 0.40, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neoscratch.com'

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
