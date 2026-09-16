'use client';

import React, { useState } from 'react';
import { Globe, Code, Palette, Lightbulb, Check, X, ArrowRight, Star, Monitor, Smartphone, GraduationCap, Zap, ShoppingCart, Layout, Database, Settings, RefreshCw, Heart, Briefcase, Building2, ChevronLeft, ChevronRight, Search, Minus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const categories = [
  'All', 
  'Development', 
  'E-commerce',
  'SEO',
  'Strategy', 
  'Design', 
  'Education', 
  'Portfolio', 
  'Mobile App', 
  'Desktop App', 
  'NGOs',
  'Database Migration', 
  'Maintenance', 
  'Update', 
  'Domain Name'
];

const servicesData = [
  {
    id: 21,
    category: 'SEO',
    icon: Search,
    title: 'Full SEO & Google Setup',
    description: 'Complete search engine optimization, Google Maps & Business Profile setup, local keyword indexing, and metadata setup for maximum visibility.',
    features: ['Google Business Profile Takeover', 'Full SEO Setup & Indexing', 'Local Keywords & Meta Tags', 'Fast Google Indexing'],
    price: '50,000 RWF full',
    popular: true,
  },
  {
    id: 1,
    category: 'Development',
    icon: Monitor,
    title: 'Custom Web Applications & Systems',
    description: 'High-performance, scalable web systems built with React, Next.js, and modern cloud architecture for local and global businesses.',
    features: ['Responsive Design', 'SaaS Architecture', 'System Dashboard', 'API Integration'],
    price: 'Starting from 350,000 RWF',
    popular: true,
  },
  {
    id: 14,
    category: 'Development',
    icon: Briefcase,
    title: 'Business System & Site',
    description: 'Professional corporate business systems designed to establish a powerful online presence, manage operations, and drive growth.',
    features: ['Custom Admin System', 'SEO Setup', 'Lead Automation', 'Analytics & Reports'],
    price: 'Starting from 350,000 RWF',
    popular: false,
  },
  {
    id: 15,
    category: 'Development',
    icon: Building2,
    title: 'Big Business Enterprise System',
    description: 'Large-scale enterprise websites & software with advanced multi-page architectures, custom APIs, and high-volume traffic handling.',
    features: ['Multi-system Architecture', 'Speed Optimization', 'Secure Cloud Infrastructure', '24/7 Monitoring'],
    price: 'Starting from 750,000 RWF',
    popular: false,
  },
  {
    id: 8,
    category: 'E-commerce',
    icon: ShoppingCart,
    title: 'Starter E-commerce Website',
    description: 'Affordable, full-featured online store with dashboard, product catalog, and order tools for small shops starting online.',
    features: [
      { text: 'Admin Panel / Dashboard', included: true },
      { text: 'Free Domain Name (1 Year)', included: true },
      { text: 'Standard SEO Setup', included: true },
      { text: 'Order via WhatsApp & Email', included: true },
      { text: 'Free Database & Uptime Monitoring', included: true },
      { text: 'Local Payment Gateways (MTN MoMo, Airtel Money)', included: true },
      { text: 'Up to 50 Products', included: true },
      { text: '3 Months Maintenance', included: true }
    ],
    price: 'Starting from 200,000 RWF',
    popular: false,
  },
  {
    id: 17,
    category: 'E-commerce',
    icon: ShoppingCart,
    title: 'Standard E-commerce Website',
    description: 'Complete online store (8+ Pages, 4 Months Maintenance, Up to 200 Products) for growing businesses, including payment gateways.',
    features: [
      { text: 'Admin Panel / Dashboard', included: true },
      { text: 'Free Domain Name (1 Year)', included: true },
      { text: 'Standard SEO Setup', included: true },
      { text: 'Order via WhatsApp & Email', included: true },
      { text: 'Local Payment Gateways (MTN MoMo, Airtel Money)', included: true },
      { text: 'Professional Business Emails', included: true },
      { text: 'Up to 200 Products', included: true },
      { text: '4 Months Maintenance', included: true }
    ],
    price: 'Starting from 200,000 RWF',
    popular: true,
  },
  {
    id: 18,
    category: 'E-commerce',
    icon: ShoppingCart,
    title: 'Growth E-commerce System',
    description: 'High-performance online store with local payment integrations, inventory tools, ad campaign setup, and extended support.',
    features: [
      { text: 'Admin Panel / Dashboard', included: true },
      { text: 'Free Domain Name (1 Year)', included: true },
      { text: 'Deep SEO Setup', included: true },
      { text: 'Local Payment Gateways (MTN MoMo, Airtel Money)', included: true },
      { text: 'Inventory Sync & API', included: true },
      { text: 'Google Ads & Instagram Shopping', included: true },
      { text: 'Unlimited Products', included: true },
      { text: '6 Months Maintenance', included: true }
    ],
    price: 'Starting from 450,000 RWF',
    popular: false,
  },
  {
    id: 19,
    category: 'E-commerce',
    icon: ShoppingCart,
    title: 'Enterprise E-commerce System',
    description: 'Advanced digital commerce platform with multi-channel features, custom mobile & web apps, and dedicated support.',
    features: [
      { text: 'Custom Web & Mobile App', included: true },
      { text: 'Unlimited Products & Pages', included: true },
      { text: 'Full SEO & Google Ads Campaign', included: true },
      { text: 'Local & Global Payment Integration', included: true },
      { text: '12-Month Dedicated Retainer', included: true }
    ],
    price: 'Starting from 750,000 RWF',
    popular: false,
  },
  {
    id: 2,
    category: 'Mobile App',
    icon: Smartphone,
    title: 'Mobile App Engineering',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.',
    features: ['React Native', 'Swift/Kotlin', 'Real-time Apps', 'App Store SEO'],
    price: 'Starting from 800,000 RWF',
    popular: false,
  },
  {
    id: 7,
    category: 'Desktop App',
    icon: Layout,
    title: 'Enterprise Desktop Apps',
    description: 'Modern, high-performance desktop applications for Windows, macOS, and Linux built with Electron and powerful native integrations.',
    features: ['Cross-platform compatible', 'Offline functionality', 'Auto-updates', 'Native System APIs'],
    price: 'Starting from 600,000 RWF',
    popular: false,
  },
  {
    id: 3,
    category: 'Education',
    icon: GraduationCap,
    title: 'Advanced Tech Coaching',
    description: 'Elite programming courses and mentorship for engineers looking to master Full-Stack development and System Architecture.',
    features: ['Fullstack bootcamp', 'System Design', 'Career Mentoring', 'Code Reviews'],
    price: 'Starting from 100,000 RWF',
    popular: false,
  },
  {
    id: 4,
    category: 'Design',
    icon: Palette,
    title: 'Premium UI/UX Design',
    description: 'High-end digital product design that combines aesthetic excellence with intuitive usability for maximum conversion.',
    features: ['Visual Identity', 'Prototyping', 'User Research', 'Design Systems'],
    price: 'Starting from 300,000 RWF',
    popular: false,
  },
  {
    id: 5,
    category: 'Strategy',
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Strategic consulting to help enterprises modernize their tech stack and automate business operations for global scale.',
    features: ['Tech Audits', 'Cloud Migration', 'AI Integration', 'Auto-Growth'],
    price: 'Custom Quote',
    popular: false,
  },
  {
    id: 6,
    category: 'Strategy',
    icon: Lightbulb,
    title: 'MVP for Startups',
    description: 'Rapid development of Minimum Viable Products to help startups validate their ideas and attract international investors.',
    features: ['Fast-To-Market', 'Lean Development', 'Investor Pitch Deck', 'Iterative growth'],
    price: 'Starting from 350,000 RWF',
    popular: false,
  },
  {
    id: 16,
    category: 'NGOs',
    icon: Heart,
    title: 'Non-Profit / NGO Site',
    description: 'Impactful digital platforms for NGOs with secure online donation systems and community engagement tools.',
    features: ['Secure Donation', 'Event Management', 'Impact Reports', 'Volunteer signup'],
    price: 'Starting from 350,000 RWF',
    popular: false,
  },
  {
    id: 9,
    category: 'Portfolio',
    icon: Palette,
    title: 'Personal High-End Portfolio',
    description: 'Professional visual portfolios for individuals wanting to showcase their unique work and talent internationally.',
    features: ['Visual Showcases', 'Smooth Motion', 'Contact Forms', 'SEO Optimized'],
    price: 'Starting from 70,000 RWF',
    popular: false,
  },
  {
    id: 10,
    category: 'Database Migration',
    icon: Database,
    title: 'Cloud Database Migration',
    description: 'Secure and seamless migration of your business data to the cloud with zero downtime and full data integrity.',
    features: ['Zero Downtime', 'Data Security', 'Schema Optimizaton', 'Cloud Hosting'],
    price: 'Starting from 200,000 RWF',
    popular: false,
  },
  {
    id: 11,
    category: 'Maintenance',
    icon: Settings,
    title: 'Professional Maintenance',
    description: 'Ongoing technical support to ensure your platforms stay secure, updated, and performing at peak levels.',
    features: ['24/7 Monitoring', 'Security Updates', 'Speed Optimization', 'Priority Help'],
    price: 'Starting from 50,000 RWF/mo',
    popular: false,
  },
  {
    id: 12,
    category: 'Update',
    icon: RefreshCw,
    title: 'Technical Updates',
    description: 'Regular feature updates and bug fixes for your existing digital products to keep them modern and functional.',
    features: ['Bug Fixes', 'New Features', 'Code Cleanup', 'Fast Updates'],
    price: 'Starting from 100,000 RWF',
    popular: false,
  },
  {
    id: 13,
    category: 'Domain Name',
    icon: Globe,
    title: 'Domain & Hosting Control',
    description: 'Full management of your domain names and secure hosting servers with global CDN support.',
    features: ['.RW / .COM / .NET / more TLDs Setup', 'SSL Certificates', 'Global Hosting', '24/7 Support'],
    price: 'Starting from 27,500 RWF/yr',
    popular: false,
  },
];

export default function Services() {
  const [filter, setFilter] = useState('All');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 200;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    // Smooth scroll to the top of the services section
    const element = document.getElementById('services-grid');
    if (element) {
      const offset = 140; // Accounting for sticky header + filter bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredServices = filter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#060606] font-jakarta">
      
      {/* 🟢 NAVIGATION WRAPPER - Confines the Sticky Filter to the Results Section */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION (Brand Green #175A26) */}
        <section className="pt-36 sm:pt-44 pb-24 lg:pb-32 bg-[#175A26] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-widest">
                  <span>Digital Engineering &amp; Services</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Innovate with Precision. <br /> Scale with NeoScratch.
                </h1>
                <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-medium">
                  We provide world-class software engineering, mobile app development, SEO, and digital growth services tailored for businesses across Rwanda &amp; global markets.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/request-website"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
                  >
                    Get Proposal
                  </Link>
                </div>
              </div>

              {/* Right Column: unDraw Illustration */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <img
                  src="/relax.svg"
                  alt="Services Illustration"
                  className="w-full h-auto object-contain max-w-md drop-shadow-xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 🔍 FILTER BAR - Single Line Horizontal Scroll */}
        <section className="py-6 border-b border-[#060606]/10 sticky top-16 lg:top-20 bg-[#E5E5E5] z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group">
            
            {/* Left Arrow */}
            {showLeftArrow && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white border border-[#060606]/10 shadow-md text-[#060606] hover:text-[#175A26] transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex flex-nowrap items-center gap-2.5 justify-start overflow-x-auto pb-2 hide-scrollbar scroll-smooth"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleFilterChange(cat);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs whitespace-nowrap font-extrabold transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-[#175A26] text-white shadow-md' 
                      : 'bg-white text-[#060606] hover:bg-[#175A26] hover:text-white border border-[#060606]/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            {showRightArrow && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white border border-[#060606]/10 shadow-md text-[#060606] hover:text-[#175A26] transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}

          </div>
        </section>

        {/* 📦 SERVICES GRID - Clean Modern Cards */}
        <section id="services-grid" className="py-24 bg-[#E5E5E5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((s) => (
                <div 
                  key={s.id} 
                  className="group relative flex flex-col bg-white border border-[#060606]/10 rounded-3xl p-8 hover:border-[#175A26]/40 hover:shadow-2xl transition-all duration-300"
                >
                  {s.popular && (
                    <Badge className="absolute top-4 right-4 bg-[#175A26] text-white font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border-none">
                      Most Popular
                    </Badge>
                  )}
                  <div className="h-14 w-14 rounded-2xl bg-[#175A26]/10 flex items-center justify-center mb-8 group-hover:bg-[#175A26] transition-colors duration-300">
                    <s.icon className="h-6 w-6 text-[#175A26] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-extrabold mb-3 text-[#060606] group-hover:text-[#175A26] transition-colors font-jakarta">
                    {s.title}
                  </h3>
                  
                  <p className="text-[#334155] text-sm leading-relaxed font-medium mb-8 flex-1">
                    {s.description}
                  </p>

                  <div className="space-y-3.5 mb-8">
                    {(s.features as (string | { text: string; included: boolean })[]).map((f, i) => {
                      if (typeof f === 'string') {
                        return (
                          <div key={i} className="flex items-center text-xs font-bold text-[#060606] font-jakarta">
                            <Check className="h-4 w-4 mr-2.5 text-[#175A26] shrink-0 stroke-[3]" />
                            <span>{f}</span>
                          </div>
                        );
                      } else {
                        return (
                          <div key={i} className="flex items-center text-xs font-bold text-[#060606] font-jakarta">
                            {f.included ? (
                              <Check className="h-4 w-4 mr-2.5 text-[#175A26] shrink-0 stroke-[3]" />
                            ) : (
                              <X className="h-4 w-4 mr-2.5 text-red-500 shrink-0 stroke-[2.5]" />
                            )}
                            <span className={f.included ? '' : 'line-through text-[#060606]/40'}>{f.text}</span>
                          </div>
                        );
                      }
                    })}
                  </div>

                  <div className="pt-6 border-t border-[#060606]/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-[#060606] font-jakarta">{s.price}</p>
                    </div>
                    <Link href="/contact" className="text-xs font-extrabold text-[#175A26] uppercase tracking-wider flex items-center group-hover:translate-x-1 transition-transform">
                      Inquire <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ⬆️ BACK TO TOP OF SECTION */}
            <div className="mt-16 flex justify-center border-t border-[#060606]/10 pt-12">
               <button 
                 type="button"
                 onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   handleFilterChange(filter);
                 }}
                 className="inline-flex items-center text-xs font-black text-[#060606] hover:text-[#175A26] uppercase tracking-widest transition-all group"
               >
                 Back to Filters <ArrowRight className="ml-2 h-4 w-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </div>
        </section>

        {/* 📊 EVERYTHING, SIDE BY SIDE COMPARISON MATRIX */}
        <section className="py-24 bg-white border-t border-b border-[#060606]/10 font-jakarta overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#060606] tracking-tight font-jakarta">
                Everything, side by side.
              </h2>
              <p className="text-sm sm:text-base text-[#334155] font-medium mt-3">
                Compare features, turnarounds, and exact pricing for every project level.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#060606]/10 shadow-sm bg-white">
              <table className="w-full text-left border-collapse min-w-[850px]">
                <thead>
                  <tr className="border-b border-[#060606]/10 bg-gray-50/50">
                    <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest text-[#060606]/50 w-1/5">
                      FEATURE
                    </th>
                    <th className="py-6 px-6 w-1/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E05326] block mb-1">TIER 01</span>
                      <span className="text-xs font-extrabold uppercase text-[#060606] block">SEO &amp; STARTER SETUP</span>
                    </th>
                    <th className="py-6 px-6 w-1/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E05326] block mb-1">TIER 02</span>
                      <span className="text-xs font-extrabold uppercase text-[#060606] block">E-COMMERCE WEBSITE</span>
                    </th>
                    <th className="py-6 px-6 w-1/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E05326] block mb-1">TIER 03</span>
                      <span className="text-xs font-extrabold uppercase text-[#060606] block">BUSINESS SYSTEM</span>
                    </th>
                    <th className="py-6 px-6 w-1/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E05326] block mb-1">TIER 04</span>
                      <span className="text-xs font-extrabold uppercase text-[#060606] block">ENTERPRISE CUSTOM BUILD</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#060606]/10 text-xs sm:text-sm text-[#060606]">
                  {/* Price row */}
                  <tr className="bg-white font-black">
                    <td className="py-4 px-6 font-bold text-[#060606]">Price</td>
                    <td className="py-4 px-6 text-sm font-extrabold text-[#060606]">50,000 RWF</td>
                    <td className="py-4 px-6 text-sm font-extrabold text-[#060606]">200,000 RWF</td>
                    <td className="py-4 px-6 text-sm font-extrabold text-[#060606]">350,000 RWF</td>
                    <td className="py-4 px-6 text-sm font-extrabold text-[#060606]">from 750,000 RWF</td>
                  </tr>

                  {/* Timeline row */}
                  <tr className="bg-gray-50/30">
                    <td className="py-4 px-6 font-bold text-[#060606]">Timeline</td>
                    <td className="py-4 px-6 font-medium text-[#334155]">3 business days</td>
                    <td className="py-4 px-6 font-medium text-[#334155]">7 business days</td>
                    <td className="py-4 px-6 font-medium text-[#334155]">2 weeks</td>
                    <td className="py-4 px-6 font-medium text-[#334155]">30–90 days</td>
                  </tr>

                  {/* Feature rows */}
                  {[
                    { name: "Custom website", values: [true, true, true, true] },
                    { name: "Google Business Profile", values: [true, "full takeover", true, true] },
                    { name: "MoMo and Airtel Money checkout", values: [false, true, true, true] },
                    { name: "12 months of hosting", values: [true, true, true, true] },
                    { name: "SEO foundations", values: ["full setup", "deep", "deep", "deep"] },
                    { name: "Blog content pieces written", values: [false, "5", "5", "5"] },
                    { name: "Google reviews campaign", values: [false, true, true, true] },
                    { name: "Monthly performance reports", values: [false, "3 months", "3 months", "12 months"] },
                    { name: "Online store", values: [false, true, true, true] },
                    { name: "Products loaded and photographed", values: [false, "up to 20", "up to 50", "up to 50"] },
                    { name: "Google Ads and Instagram Shopping", values: [false, false, true, true] },
                    { name: "First 200,000 RWF of ad spend", values: [false, false, true, true] },
                    { name: "Custom software, web and Android", values: [false, false, true, true] },
                    { name: "12-month retainer included", values: [false, false, false, true] },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                      <td className="py-4 px-6 font-semibold text-[#060606]">{row.name}</td>
                      {row.values.map((val, colIdx) => (
                        <td key={colIdx} className="py-4 px-6 font-medium text-[#334155]">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#E05326] text-white">
                                <Check className="h-3.5 w-3.5 stroke-[3]" />
                              </span>
                            ) : (
                              <span className="text-gray-300 font-bold">—</span>
                            )
                          ) : (
                            <span className="font-bold text-[#060606]">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom floating action bar matching screenshot */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-white border border-[#060606]/15 shadow-xl rounded-full px-5 py-2.5">
                <a 
                  href="https://wa.me/250792734752?text=Hello%20NeoScratch,%20I'm%20inquiring%20about%20your%20pricing%20tiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-[#060606] hover:text-[#175A26] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>Ask about pricing</span>
                </a>
                <a 
                  href="https://wa.me/250792734752?text=Hello%20NeoScratch,%20I'd%20like%20to%20chat%20now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-black bg-[#E05326] text-white hover:bg-[#c9451d] transition-all shadow-sm"
                >
                  Chat now <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-24 bg-[#175A26] text-white border-t border-[#060606]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-jakarta">
             Scale Your Innovation Globally
           </h2>
           <p className="text-base lg:text-lg text-white/80 font-medium max-w-2xl mx-auto">
             Whether you&apos;re a startup or an enterprise, we have the software engineering expertise to help you build the future.
           </p>
           <div className="flex flex-wrap gap-4 justify-center pt-2">
             <Link
               href="/contact"
               className="px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
             >
               Get a Custom Proposal
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
