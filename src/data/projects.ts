export interface ProjectDetails {
  overview: string;
  objective: string;
  delivered: string[];
  process: { title: string; description: string }[];
  conclusion: string;
  services: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemo: string;
  category: string;
  tag: string; // for the badge
  client: string;
  year: string;
  price?: string;
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: 'twagiye-taxi',
    title: 'Twagiye — Eco-Friendly Ride-Hailing Platform',
    subtitle: 'for Twagiye Taxi',
    description: 'A ride-hailing platform connecting electric and hybrid car owners with passengers for greener rides across Rwanda.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    liveDemo: 'https://twagiye.rw',
    category: 'Logistics & Supply Chain',
    tag: 'LOGISTICS & SUPPLY CHAIN',
    client: 'Twagiye Taxi',
    year: '2026',
    details: {
      overview: "Twagiye is Rwanda's first eco-focused ride-hailing platform that exclusively connects hybrid and electric vehicle owners with passengers seeking greener transportation. The platform empowers car owners to monetize their vehicles on their own schedule while giving riders access to verified, environmentally friendly rides with cashless payment options including Mobile Money, Visa, and Mastercard.",
      objective: "To build a modern, high-performance web platform that positions Twagiye as Rwanda's go-to green mobility brand — enabling driver onboarding, passenger engagement, and communicating the company's environmental mission with a compelling digital presence.",
      delivered: [
        "Fully responsive marketing website built with Next.js 16 and Tailwind CSS",
        "Driver onboarding flow with vehicle verification system",
        "Bento-style feature showcase highlighting platform benefits",
        "Impact section with real-time community stats (300+ drivers, 500+ passengers, 10+ cities)",
        "Testimonials system with dynamic content",
        "FAQ section for driver and passenger education",
        "App download integration and newsletter subscription",
        "Mobile-first design optimized for Rwandan users"
      ],
      process: [
        {
          title: "Discovery & Research",
          description: "Understood Twagiye's mission, target audience (EV/hybrid car owners and eco-conscious passengers), and the Rwandan mobility landscape."
        },
        {
          title: "Design & Branding",
          description: "Created a clean, nature-inspired design system using Twagiye's green (#66B544) brand palette with bold typography and modern card layouts."
        },
        {
          title: "Development",
          description: "Built with Next.js, React 19, Tailwind CSS, and Prisma. Focused on performance, SEO, and mobile responsiveness."
        },
        {
          title: "Content & Messaging",
          description: "Crafted messaging that speaks directly to car owners (\"Turn Your Green Car Into Income\") and passengers (\"Book Green Rides\")."
        },
        {
          title: "Deployment & Launch",
          description: "Deployed on a VPS with PM2 process management for reliability and fast load times."
        }
      ],
      conclusion: "Twagiye represents the intersection of technology and sustainability in Rwanda. By building a platform that's both visually compelling and functionally robust, we helped Twagiye establish itself as a pioneer in eco-friendly ride-hailing — proving that going green and earning income can go hand in hand.",
      services: ["Logistics & Supply Chain", "Website Design & Development"]
    }
  },
  {
    id: 'pixelmart-management',
    title: 'PixelMart Management',
    subtitle: 'for PixelMart',
    description: 'A smart inventory and stock management system for Mr. Faustina, focused on electronics and LCD products, with real-time inventory tracking and branch management.',
    techStack: ['React', 'Node.js', 'Firebase'],
    image: '/pixelmart.png',
    liveDemo: 'https://pixelmartrw.pages.dev',
    category: 'web',
    tag: 'RETAIL & TECH',
    client: 'Mr. Faustina',
    year: '2024',
    price: '500,000 RWF',
  },
  {
    id: 'smartstock-system',
    title: 'SmartStock System',
    subtitle: 'for Jiridasee',
    description: 'A flexible stock management system developed for Jiridasee’s mixed shop, supporting multiple product categories, sales tracking, and inventory monitoring.',
    techStack: ['React', 'MongoDB', 'Tailwind CSS'],
    image: '/smartstock.png',
    liveDemo: '#',
    category: 'web',
    tag: 'RETAIL & TECH',
    client: 'Jiridasee',
    year: '2024',
    price: '250,000 RWF',
  },
  {
    id: 'open-future-savings',
    title: 'Open Future Savings',
    subtitle: 'for Open Future',
    description: 'A digital record management platform for the Open Future savings group at Apeki Tumba TSS, enabling monthly savings tracking and secure member management.',
    techStack: ['React', 'Firebase', 'TypeScript'],
    image: '/openfutur.png',
    liveDemo: 'https://openfuture.pages.dev',
    category: 'web',
    tag: 'FINTECH',
    client: 'Open Future',
    year: '2024',
    price: '1,000 RWF',
  },
  {
    id: 'indaro-yacu',
    title: 'Indaro Yacu Organization',
    subtitle: 'for Indaro Yacu',
    description: 'A modern website for a Rwandan NGO supporting vulnerable children through education, cultural programs, and psychosocial care.',
    techStack: ['React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    liveDemo: '#',
    category: 'WEBSITE DESIGN & DEVELOPMENT',
    tag: 'NON-PROFIT',
    client: 'Indaro Yacu',
    year: '2024',
  }
];
