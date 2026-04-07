export interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  views: string; // New field: Number of reads
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Rwanda Tech Ecosystem: A Global Hub',
    excerpt: 'Detailed analysis of why Rwanda is becoming the premier destination for international tech investment and high-performance engineering globally.',
    author: 'Theogene Iradukunda',
    date: '2026-04-07', // Today
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    category: 'Rwanda Tech',
    tags: ['RWANDA', 'INVESTMENT'],
    views: '12,450'
  },
  {
    id: 2,
    title: 'PixelMart 2.0: AI Inventory Engine',
    excerpt: 'Our latest release features local Rwandan engineering talent developing world-class AI for multi-branch retail management.',
    author: 'Theogene Iradukunda',
    date: '2026-04-01', // This month (within 7 days)
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    category: 'Engineering',
    tags: ['AI', 'RETAIL'],
    views: '8,210'
  },
  {
    id: 3,
    title: 'Digital Strategy for 2026 Africa',
    excerpt: 'How Rwandan businesses are utilizing modern SEO and high-performance branding to compete in international markets effectively.',
    author: 'Theogene Iradukunda',
    date: '2026-03-28', // This month
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?q=80&w=1200&auto=format&fit=crop',
    category: 'Business',
    tags: ['STRATEGY', 'SEO'],
    views: '15,670'
  },
  {
    id: 4,
    title: 'Work Culture in Kigali Tech Lab',
    excerpt: 'Exploring the unique work-life balance and high-productivity environment at the NeoScratch Digital Innovation Lab.',
    author: 'Theogene Iradukunda',
    date: '2025-12-31', // Older
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
    category: 'Lifestyle',
    tags: ['WELLNESS', 'KIGALI'],
    views: '5,120'
  },
  {
    id: 5,
    title: 'AI in Agriculture: Rwanda Case Study',
    excerpt: 'Discover how new software solutions are revolutionizing farming and supply chain coordination in the heart of Africa.',
    author: 'Theogene Iradukunda',
    date: '2026-04-06', // Yesterday (within 7 days)
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop',
    category: 'Rwanda Tech',
    tags: ['AGRITECH', 'DATA'],
    views: '6,890'
  },
];
