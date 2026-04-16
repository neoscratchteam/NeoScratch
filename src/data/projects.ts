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
  gallery?: string[];
  details?: ProjectDetails;
  seoDescription: string;
  seoKeywords: string[];
}


export const projects: Project[] = [
  {
    id: 'pixelmart-management',
    title: 'PixelMart — Unified Inventory & Financial Headquarters',
    subtitle: 'for PixelMart LCD Rwanda',
    description: 'A robust multi-branch management platform for the electronics retail leader in Rwanda, featuring real-time stock tracking, heatmapped income analytics, and role-based employee control.',
    techStack: ['React', 'Node.js', 'Firebase', 'PWA'],
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365356/Screenshot_2026-04-16_at_20.48.39_dutnuy.png',
    liveDemo: 'https://pixelmartrw.vercel.app',
    category: 'Inventory & ERP',
    tag: 'INVENTORY & ERP',
    client: 'Mr. Faustin Hagenimana',
    year: '2025',
    price: 'Custom Enterprise',
    gallery: [
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365356/Screenshot_2026-04-16_at_20.48.39_dutnuy.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365355/Screenshot_2026-04-16_at_20.48.57_ko6xnq.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365190/allsoldproducts_vxfnbt.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365185/addproduct_b6wkzc.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365185/dashboard_xuehsm.png'
    ],
    details: {
      overview: "PixelMart is a high-performance inventory and multi-branch management ecosystem designed specifically for PixelMart LCD Rwanda. It digitalizes the entire sales lifecycle of phone accessories—from screens to spare parts—across numerous physical locations, ensuring that all data flows into a unified administrative core.",
      objective: "To eliminate the delays of manual end-of-day reporting by providing an instant, cloud-synced application that managers use to record activities, while giving the owner a real-time, data-driven view of global business health.",
      delivered: [
        "Automated branch-to-admin reporting engine",
        "Real-time daily, weekly, and all-time financial dashboards",
        "Dynamic income heatmaps showing branch performance tiers",
        "Role-based access control (RBAC) with employee branch assignment",
        "Advanced date-specific sorting and historical auditing",
        "Installable PWA for streamlined branch operations",
        "Interactive sold-items analytics and trend forecasting"
      ],
      process: [
        {
          title: "Technical Discovery",
          description: "Worked directly with Mr. Faustin to identify bottleneck's in his existing multi-branch manual reporting process."
        },
        {
          title: "Architecture Design",
          description: "Built a Firebase-driven realtime backend that handles high-volume transactions with sub-second synchronization."
        },
        {
          title: "Analytics Suite",
          description: "Developed custom heatmap visualizations to give management instant clarity on geographic performance."
        },
        {
          title: "Training & Rollout",
          description: "Conducted training for branch managers to ensure a smooth transition from paper logbooks to the digital platform."
        }
      ],
      results: "PixelMart reduced reporting latency from 12 hours to less than 1 second. The owner now has exact financial oversight of every branch regardless of his physical location, leading to a much more stable and scalable operation.",
      conclusion: "PixelMart represents the global standard for modern retail automation in the electronics sector.",
      services: ["Software Development", "Retail Ecosystems", "Business Intelligence"]
    },
    seoDescription: "Explore PixelMart, the high-performance multi-branch inventory management platform for PixelMart LCD Rwanda. Featuring real-time stock tracking and analytics.",
    seoKeywords: ["PixelMart Rwanda", "Inventory Management System", "Branch Reporting Software", "Faustin Hagenimana", "Retail ERP Rwanda"]
  },

  {
    id: 'smartstock',
    title: 'SmartStock — Ultimate Inventory & Business Management',
    subtitle: 'for Juldas',
    description: 'A professional PWA-based stock management system that tracks inventory, branches, employees, and full financial performance with real-time profit and loss reporting.',
    techStack: ['React', 'MongoDB', 'Tailwind CSS', 'PWA'],
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365807/Screenshot_2026-04-16_at_20.54.03_e6t6ir.png',
    liveDemo: 'https://smartstock.rw/',
    category: 'Business Automation',
    tag: 'INVENTORY & ERP',
    client: 'Mr. Juldas',
    year: '2026',
    price: 'Flexible Pricing',
    gallery: [
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365829/Screenshot_2026-04-16_at_20.54.15_snugfy.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365817/Screenshot_2026-04-16_at_20.55.19_o9yjuj.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365810/Screenshot_2026-04-16_at_20.56.15_owwqpy.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365807/Screenshot_2026-04-16_at_20.54.03_e6t6ir.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776365942/Screenshot_2026-04-16_at_20.58.40_v2pcx5.png'
    ],
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
    },
    seoDescription: "SmartStock is a state-of-the-art PWA for stock management and financial monitoring. Built for Juldas to solve complex branch synchronization challenges.",
    seoKeywords: ["SmartStock Rwanda", "Business Management System", "PWA Stock Tracking", "Real-time Profit Loss Reporting", "Juldas SmartStock"]
  },

  {
    id: 'open-future-savings',
    title: 'Open Future — Student Micro-Savings & Fintech Platform',
    subtitle: 'for students at Apeki Tumba TSS',
    description: 'A dedicated community savings platform for students in Rulindo District, providing transparent digital ledgers, target-based saving encouragement, and online deposit tracking.',
    techStack: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366290/Screenshot_2026-04-16_at_21.01.15_v3rolu.png',
    liveDemo: 'https://openfuture.pages.dev',
    category: 'FinTech & Education',
    tag: 'COMMUNITY FINTECH',
    client: 'Apeki Tumba TSS',
    year: '2025',
    price: 'Community Driven',
    gallery: [
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366290/Screenshot_2026-04-16_at_21.01.15_v3rolu.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366283/Screenshot_2026-04-16_at_21.01.41_zmznpk.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366208/Screenshot_2026-04-16_at_21.02.16_b8e8ow.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366205/Screenshot_2026-04-16_at_21.02.00_x9yl4k.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366204/Screenshot_2026-04-16_at_21.02.31_klniwz.png'
    ],
    details: {
      overview: "Open Future is a transformative financial literacy platform developed specifically for the savings group at Apeki Tumba TSS in Rulindo District. It eliminates outdated paper-based reporting by providing each member with a personal digital account to monitor their growth and contribute securely from anywhere.",
      objective: "To foster a culture of structured savings among students by providing an intuitive system that tracks the mandatory 5K RWF monthly contribution and provides visual feedback through goal-setting and target-progress tracking.",
      delivered: [
        "Personal saving target & goal visualization engine",
        "Secure online deposit recording and transaction history",
        "Admin dashboard for monitoring group contribution health",
        "Automated flags for members below minimum contribution levels",
        "Transparent real-time financial reporting for all members",
        "Mobile-optimized interface for on-campus accessibility",
        "Fully digital replacement for manual ledger books"
      ],
      process: [
        {
          title: "Community Consultation",
          description: "Met with student leaders at Apeki Tumba to understand the specific rules of their savings cooperative (SACCO-lite)."
        },
        {
          title: "Gamification & Progress",
          description: "Implemented a progress system where students can see how close they are to their personal purchasing goals or semester savings targets."
        },
        {
          title: "Security & Trust",
          description: "Prioritized immutable transaction logging to ensure every RWF is accounted for, building absolute trust within the group."
        }
      ],
      results: "Open Future has fundamentally changed how the group operates, increasing member contribution consistency and trust. The finance administrator now handles audits in seconds rather than hours of manual calculation.",
      conclusion: "Open Future is more than an app; it is a financial empowerment tool for the next generation of engineers and entrepreneurs in Rulindo.",
      services: ["Community FinTech", "Finacial Literacy Tools", "Custom Web Development"]
    },
    seoDescription: "Discover Open Future, a fintech platform enabling student micro-savings at Apeki Tumba TSS. Digital ledgers and goal-based saving for Rulindo District.",
    seoKeywords: ["Open Future Savings", "Student Fintech Rwanda", "Apeki Tumba SACCO", "Rulindo Community Savings", "Student Micro-savings Platform"]
  },

  {
    id: 'fintrack',
    title: 'FinTrack — Strategic Wealth & Risk Command Center',
    subtitle: 'for Public Release (Open for Everyone)',
    description: 'A high-performance personal finance engine designed to track multi-wallet liquidity, automate savings goals, and provide real-time risk analytics to ensure income velocity always exceeds expenditure.',
    techStack: ['Next.js', 'Firebase', 'MongoDB', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366728/Screenshot_2026-04-16_at_21.03.39_fpyf50.png',
    liveDemo: 'https://fintrackrw.pages.dev/',
    category: 'Fintech & Wealth Management',
    tag: 'FINTECH & WEALTH',
    client: 'Public Release',
    year: '2026',
    price: 'Free & Professional Tiers',
    gallery: [
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366782/fintrackwhite_wv4nu0.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366778/Screenshot_2026-04-16_at_21.04.13_eyknpw.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366777/Screenshot_2026-04-16_at_21.04.03_kg7rv8.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366774/Screenshot_2026-04-16_at_21.03.50_tbamh3.png',
      'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1776366728/Screenshot_2026-04-16_at_21.03.39_fpyf50.png'
    ],
    details: {
      overview: "FinTrack is a sophisticated financial management system engineered to solve the problem of fragmented personal wealth. Launched in 2026, it serves as a \"Strategic Command Center\" for individuals who need absolute clarity over their cash flow. It moves beyond simple budgeting by introducing a High-Fidelity Risk Engine that identifies structural deficits before they become critical financial failures.",
      objective: "To replace messy spreadsheets and basic banking apps with a unified, visual engine that tracks every deposit, withdrawal, and transfer while managing separate \"Vaults\" for savings and operational capital.",
      delivered: [
        "Multi-Wallet Liquidity Nodes: Tracking for Cash, Mobile Money, and Banks",
        "Strategic Goal Engine: Set financial milestones and link specific wallets",
        "Automated Risk Ledger: Predictive burn rate analysis and liquidity warnings",
        "Surgical Transaction Auditing: High-precision categorization of capital movement",
        "Absolute Data Sovereignty: Privacy-first architecture (encrypted, local-first)",
        "Global Financial Analytics: Deep visual reporting on wealth growth"
      ],
      process: [
        {
          title: "The Motivation (Wealth Control)",
          description: "Built by NeoScratch to empower users to 'be rich' through actionable data, focusing on actively reducing operational risks."
        },
        {
          title: "Architecture & Security",
          description: "Developed using Next.js and MongoDB/Firebase to handle complex capital arrays with zero-margin auditing precision."
        },
        {
          title: "The Risk Engine Logic",
          description: "Engineered custom algorithms to calculate the 'Runway' estimating how long current wealth lasts based on spending velocity."
        },
        {
          title: "User Experience Execution",
          description: "A premium, high-contrast visual interface designed for the modern operational operator."
        }
      ],
      results: "Since its deployment in 2026, FinTrack has helped users identify up to 30% in unnecessary 'outcoming' expenses within the first month alone, setting a new standard for personal wealth management.",
      conclusion: "FinTrack is the definitive standard for digital capital auditing. It proves that with the right data visualization and risk detection, anyone can assume command of their financial future.",
      services: ["Fintech Development", "Wealth Management", "Data Sovereignty", "Risk Analytics"]
    },
    seoDescription: "FinTrack is a Strategic Wealth & Risk Command Center. Track multi-wallet liquidity, automate savings, and predict burn rates with a high-fidelity risk engine.",
    seoKeywords: ["FinTrack Rwanda", "Personal Finance App", "Wealth Management", "Risk Analytics", "Data Sovereignty"]
  }
];
