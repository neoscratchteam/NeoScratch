export interface ProjectDetails {
  overview: string;
  objective: string;
  delivered: string[];
  process: { title: string; description: string }[];
  results?: string;
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
    description: 'A ride-hailing platform connecting electric and hybrid car owners with passengers for greener rides across the globe.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    liveDemo: 'https://twagiye.rw',
    category: 'Logistics & Supply Chain',
    tag: 'LOGISTICS & SUPPLY CHAIN',
    client: 'Twagiye Taxi',
    year: '2026',
    details: {
      overview: "Twagiye is an eco-focused ride-hailing platform that exclusively connects hybrid and electric vehicle owners with passengers seeking greener transportation. The platform empowers car owners to monetize their vehicles on their own schedule while giving riders access to verified, environmentally friendly rides with cashless payment options worldwide.",
      objective: "To build a modern, high-performance web platform that positions Twagiye as a leading global green mobility brand — enabling driver onboarding, passenger engagement, and communicating the company's environmental mission with a compelling digital presence.",
      delivered: [
        "Fully responsive marketing website built with Next.js 16 and Tailwind CSS",
        "Driver onboarding flow with vehicle verification system",
        "Bento-style feature showcase highlighting platform benefits",
        "Impact section with real-time community stats (300+ drivers, 500+ passengers, 10+ cities)",
        "Testimonials system with dynamic content",
        "FAQ section for driver and passenger education",
        "App download integration and newsletter subscription",
        "Mobile-first design optimized for global users"
      ],
      process: [
        {
          title: "Discovery & Research",
          description: "Understood Twagiye's mission, target audience (EV/hybrid car owners and eco-conscious passengers), and the international mobility landscape."
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
          description: "Deployed on a global VPS with PM2 process management for reliability and fast load times."
        }
      ],
      results: "The platform launched with a strong digital presence that clearly communicates Twagiye's value proposition to both drivers and passengers. The site features a modern bento-grid layout, floating stat cards, and smooth interactions that position Twagiye as a premium, trustworthy brand in the growing green mobility space. The driver onboarding funnel provides a seamless path from discovery to sign-up.",
      conclusion: "Twagiye represents the intersection of technology and sustainability globally. By building a platform that's both visually compelling and functionally robust, we helped Twagiye establish itself as a pioneer in eco-friendly ride-hailing.",
      services: ["Logistics & Supply Chain", "Website Design & Development"]
    }
  },
  {
    id: 'pixelmart-management',
    title: 'PixelMart Management',
    subtitle: 'for PixelMart',
    description: 'A smart inventory and stock management system for Mr. Faustina, focused on electronics and LCD products, with real-time inventory tracking and branch management.',
    techStack: ['React', 'Node.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    liveDemo: 'https://pixelmartrw.pages.dev',
    category: 'web',
    tag: 'RETAIL & TECH',
    client: 'Mr. Faustina',
    year: '2024',
    price: '500,000 RWF',
    details: {
      overview: "PixelMart is a high-performance inventory and multi-branch management platform designed specifically for the global electronics and retail landscape. It addresses the challenges of tracking complex stock items like LCD panels, smartphones, and spare parts across multiple physical locations in real-time.",
      objective: "To create a unified digital headquarters that eliminates inventory discrepancies, automates stock level alerts, and provides the owner with clear, actionable insights into sales performance across all branches.",
      delivered: [
        "Real-time central dashboard with high-visibility metrics",
        "Multi-branch hierarchical management system",
        "Automated low-stock notification engine",
        "Integrated sales and order tracking (PoS)",
        "Advanced search and filtering for thousands of SKUs",
        "Custom reports generation for monthly auditing"
      ],
      process: [
        {
          title: "Technical Consultation",
          description: "Worked closely with Mr. Faustina to map out the entire inventory flow and branch hierarchy."
        },
        {
          title: "Database Architecture",
          description: "Utilized Firebase Realtime Database for near-instant synchronization across all branch terminals."
        },
        {
          title: "UI/UX Development",
          description: "Created a high-contrast, easy-to-read interface optimized for fast-paced retail environments."
        }
      ],
      results: "PixelMart successfully reduced inventory counting time by over 70% and eliminated the 'out-of-stock' surprises that were previously common across branches. The system now handles thousands of daily transactions with zero lag.",
      conclusion: "By digitalizing his core operations, Mr. Faustina is now able to focus on scaling his business with the confidence that his inventory is always accurate.",
      services: ["Software Development", "Inventory Systems", "Business Automation"]
    }
  },
  {
    id: 'smartstock',
    title: 'SmartStock — Ultimate Inventory & Business Management',
    subtitle: 'for Juldas',
    description: 'A professional PWA-based stock management system that tracks inventory, branches, employees, and full financial performance with real-time profit and loss reporting.',
    techStack: ['React', 'MongoDB', 'Tailwind CSS', 'PWA'],
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1775564686/smartstock_tbgyi2.png',
    liveDemo: 'https://smartstock.rw/',
    category: 'Business Automation',
    tag: 'INVENTORY & ERP',
    client: 'Mr. Juldas',
    year: '2026',
    price: 'Flexible Pricing',
    details: {
      overview: "SmartStock is a state-of-the-art Business Management System (BMS) originally engineered for Mr. Juldas to solve complex inventory and branch synchronization challenges. Since its launch in 2026, it has evolved into a powerful public platform designed to empower businesses of all sizes—from micro-SMEs to large industrial operations—with absolute control over their stock, staff, and finances.",
      objective: "To deliver a high-performance, cross-platform solution (PWA) that replaces manual record-keeping with automated stock tracking, employee monitoring, and precise financial analytics including daily profit and loss statements.",
      delivered: [
        "Installable PWA (Progressive Web App) for mobile and desktop use",
        "Multi-branch inventory synchronization and management",
        "Employee role management and performance auditing",
        "Daily, weekly, and monthly income tracking",
        "Automatic Profit & Loss (P&L) reporting engine",
        "Multi-tenant architecture supporting businesses of all scales",
        "Real-time stock level alerts and branch-to-branch transfers"
      ],
      process: [
        {
          title: "The Motivation (Juldas' Vision)",
          description: "Initially built to help Mr. Juldas manage his growing business empire, focusing on eliminating inventory gaps and human error across multiple locations."
        },
        {
          title: "Architecture & Scalability",
          description: "Engineered with a robust MongoDB backbone to handle thousands of SKUs and real-time transaction logs simultaneously."
        },
        {
          title: "Public Evolution",
          description: "Transformed from a private enterprise tool into a global SaaS platform with tiered pricing suitable for any business type."
        },
        {
          title: "PWA Deployment",
          description: "Optimized for speed and offline-ready capabilities, allowing managers to monitor their business from anywhere in the world."
        }
      ],
      results: "SmartStock has helped business owners achieve 100% financial transparency and reduce manual auditing time by up to 60%. It is now a trusted tool for industries ranging from retail shops to large factories.",
      conclusion: "SmartStock is the definitive proof of how a custom engineering solution can scale to become an industry-leading standard for digital transformation.",
      services: ["Business Automation", "Inventory Systems", "PWA Development", "Financial Analytics"]
    }
  },
  {
    id: 'open-future-savings',
    title: 'Open Future Savings',
    subtitle: 'for Open Future',
    description: 'A digital record management platform for the Open Future savings group at Apeki Tumba TSS, enabling monthly savings tracking and secure member management.',
    techStack: ['React', 'Firebase', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    liveDemo: 'https://openfuture.pages.dev',
    category: 'web',
    tag: 'FINTECH',
    client: 'Open Future',
    year: '2024',
    price: '1,000 RWF',
    details: {
      overview: "Open Future Savings is a community-driven fintech solution for savings groups. It transforms traditional paper-based savings ledgers into transparent, secure digital record systems accessible to all members globally.",
      objective: "To build trust within the savings group by providing real-time visibility into contributions, loans, and group financial health while simplifying the admin's workload.",
      delivered: [
        "Personal saving dashboards for all members",
        "Automated monthly contribution logging",
        "Loan request and tracking system",
        "Admin panel for financial audits",
        "Global notification integration for contribution confirmations"
      ],
      process: [
        {
          title: "Stakeholder Alignment",
          description: "Hosted workshops with group leaders to ensure the system adhered to their existing bylaws."
        },
        {
          title: "Secure Development",
          description: "Prioritized Firebase Authentication and security rules to protect sensitive financial data."
        },
        {
          title: "Training",
          description: "Conducted training sessions for the group admin to manage the digital transition."
        }
      ],
      results: "The group reported a 40% increase in member engagement and excitement, as members can now track their financial growth on their devices.",
      conclusion: "Digitizing community finance strengthens group bonds and prepares members for larger formal banking systems.",
      services: ["FinTech", "Community Tools", "Record Management"]
    }
  },
  {
    id: 'indaro-yacu',
    title: 'Indaro Yacu Organization',
    subtitle: 'for Indaro Yacu',
    description: 'A modern website for an International NGO supporting vulnerable children through education, cultural programs, and psychosocial care.',
    techStack: ['React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    liveDemo: '#',
    category: 'NGO & Development',
    tag: 'NON-PROFIT',
    client: 'Indaro Yacu',
    year: '2024',
    details: {
      overview: "Indaro Yacu is an International NGO dedicated to the well-being of vulnerable children. We developed a modern, storytelling-focused website to help them communicate their impact, share success stories, and facilitate global partnerships.",
      objective: "To create a professional and emotionally resonant digital presence that positions Indaro Yacu as a credible supporter of child education and cultural heritage.",
      delivered: [
        "Immersive hero section with high-quality child impact photos",
        "Detailed program pages (Education, Culture, Psychosocial)",
        "Direct donation and partnership contact integration",
        "Multilingual support readiness (International & Local languages)",
        "SEO optimization for global visibility"
      ],
      process: [
        {
          title: "Storytelling Workshop",
          description: "Collaborated with the NGO team to define the key narratives that drive donor engagement."
        },
        {
          title: "Branding Refinement",
          description: "Standardized the organization's color palette and typography for consistency."
        },
        {
          title: "Performance Tuning",
          description: "Ensured the image-heavy site loads instantly even on various network speeds."
        }
      ],
      results: "The website successfully facilitated three new international partnership inquiries within the first month of launch.",
      conclusion: "Technology serves its highest purpose when it gives a voice to those doing social good.",
      services: ["NGO Web Design", "Digital Identity", "SEO Strategy"]
    }
  }
];
