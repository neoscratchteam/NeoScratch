'use client';

import React, { useState } from 'react';
import { Globe, Code, Palette, Lightbulb, Check, ArrowRight, Star, Monitor, Smartphone, GraduationCap, Zap, ShoppingCart, Layout, Database, Settings, RefreshCw, Heart, Briefcase, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const categories = [
  'All', 
  'Development', 
  'Education', 
  'Design', 
  'Strategy', 
  'E-commerce', 
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
    id: 1,
    category: 'Development',
    icon: Monitor,
    title: 'Custom Web Applications',
    description: 'High-performance, scalable web solutions built with React, Next.js, and modern cloud architecture for global businesses.',
    features: ['Responsive Design', 'SaaS Architecture', 'E-commerce', 'API Integration'],
    price: 'Starting from 500,000 RWF',
    popular: true,
  },
  {
    id: 14,
    category: 'Development',
    icon: Briefcase,
    title: 'Business Website',
    description: 'Professional corporate websites designed to establish a powerful online presence and drive lead generation for SMEs.',
    features: ['Service Pages', 'SEO Setup', 'Lead Forms', 'Analytics'],
    price: 'Starting from 150,000 RWF',
    popular: false,
  },
  {
    id: 15,
    category: 'Development',
    icon: Building2,
    title: 'Big Business Enterprise',
    description: 'Large-scale enterprise websites with advanced multi-page architectures and custom integrations for high-volume traffic.',
    features: ['Multi-page Structure', 'Speed Optimization', 'Secure CMS', '24/7 Monitoring'],
    price: 'Starting from 350,000 RWF',
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
    popular: true,
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
    price: 'Starting from 400,000 RWF',
    popular: false,
  },
  {
    id: 16,
    category: 'NGOs',
    icon: Heart,
    title: 'Non-Profit / NGO Site',
    description: 'Impactful digital platforms for NGOs with secure online donation systems and community engagement tools.',
    features: ['Secure Donation', 'Event Management', 'Impact Reports', 'Volunteer signup'],
    price: 'Starting from 400,000 RWF',
    popular: false,
  },
  {
    id: 8,
    category: 'E-commerce',
    icon: ShoppingCart,
    title: 'Modern E-commerce Stores',
    description: 'High-converting online stores with secure payment integrations and advanced inventory management systems.',
    features: ['Secure Checkout', 'Product Sync', 'Inventory Tools', 'Mobile First'],
    price: 'Starting from 400,000 RWF',
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
    <div className="min-h-screen bg-white">
      
      {/* 🟢 NAVIGATION WRAPPER - Confines the Sticky Filter to the Results Section */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION - Matches Project Page */}
        <section className="pt-24 lg:pt-36 pb-24 lg:pb-32 bg-[#1a73e8] relative overflow-hidden">
          {/* Large Grid Overlay */}
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
              <span>Global Engineering Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto">
              Innovate with Precision. <br /> Scale with <span className="opacity-70 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">NeoScratch.</span>
            </h1>
            <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
              We provide world-class software engineering, strategic tech coaching, and digital design services tailored for businesses aiming for global impact.
            </p>
          </div>
        </section>

        {/* 🔍 FILTER BAR - Matches Project Page Experience */}
        <section className="py-12 border-b border-border/40 sticky top-[72px] bg-white z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 justify-start md:justify-center overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-5 py-2 rounded-full text-[12px] whitespace-nowrap font-bold transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-[#1a73e8] text-white shadow-lg shadow-blue-500/10' 
                      : 'bg-[#f4f7fa] text-[#555] hover:bg-[#e8ebf0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 📦 SERVICES GRID - Small Modern Cards */}
        <section id="services-grid" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((s) => (
                <div 
                  key={s.id} 
                  className="group flex flex-col bg-white border border-[#1a73e8]/10 rounded-2xl p-8 hover:border-[#1a73e8]/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="h-14 w-14 rounded-xl bg-[#1a73e8]/10 flex items-center justify-center mb-8 group-hover:bg-[#1a73e8] transition-colors duration-500">
                    <s.icon className="h-6 w-6 text-[#1a73e8] group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-[#1a73e8] transition-colors text-[16px]">
                    {s.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-[13px] leading-relaxed font-semibold mb-8 flex-1">
                    {s.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center text-[10px] font-bold text-foreground/70 uppercase tracking-widest leading-none">
                        <Check className="h-3 w-3 mr-3 text-[#1a73e8]" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/40 flex items-center justify-between">
                    <div>
                        <p className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest mb-1">Starting from</p>
                        <p className="text-sm font-black text-foreground">{s.price}</p>
                    </div>
                    <Link href="/contact" className="text-[10px] font-bold text-[#1a73e8] uppercase tracking-[0.2em] flex items-center group-hover:translate-x-1 transition-transform">
                        Inquire <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ⬆️ BACK TO TOP OF SECTION */}
            <div className="mt-16 flex justify-center border-t border-border/40 pt-12">
               <button 
                 onClick={() => handleFilterChange(filter)}
                 className="inline-flex items-center text-[10px] font-bold text-muted-foreground hover:text-[#1a73e8] uppercase tracking-[0.3em] transition-all group"
               >
                 Back to Filters <ArrowRight className="ml-2 h-3.5 w-3.5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </div>
        </section>
      </div>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-24 bg-[#f8fafc] border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-block p-1.5 rounded-full bg-[#1a73e8]/10 mb-8">
              <div className="bg-[#1a73e8] p-3 rounded-full">
                 <Zap className="h-6 w-6 text-white" />
              </div>
           </div>
           <h2 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tight text-foreground">
             Scale Your Innovation Globally
           </h2>
           <p className="text-sm lg:text-base text-muted-foreground font-semibold mb-12 max-w-2xl mx-auto">
             Whether you're a startup or an enterprise, we have the engineering expertise to help you build the future. Reach out for a custom consultation.
           </p>
           <Button size="xl" className="rounded-full bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 px-12 h-16 font-bold shadow-2xl shadow-blue-500/20" asChild>
             <Link href="/contact">Get a Custom Proposal</Link>
           </Button>
        </div>
      </section>

    </div>
  );
}
