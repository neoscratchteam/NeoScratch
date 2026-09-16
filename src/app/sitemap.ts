import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '',                  priority: 1.0,  changeFrequency: 'weekly' },
  { path: '/services',         priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/request-website',  priority: 0.7,  changeFrequency: 'monthly' },
  { path: '/contact',          priority: 0.6,  changeFrequency: 'yearly' },
  { path: '/about',            priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/team',             priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/projects',         priority: 0.8,  changeFrequency: 'weekly' },

  { path: '/events',           priority: 0.7,  changeFrequency: 'weekly' },
  { path: '/policy',           priority: 0.4,  changeFrequency: 'yearly' },

]


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neoscratch.com'

  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...projectEntries]
}

