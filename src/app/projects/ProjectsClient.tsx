'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All Projects');
  
  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    // Smooth scroll to the top of the projects section
    const element = document.getElementById('projects-grid');
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

  // 🚀 DYNAMIC CATEGORY EXTRACTION
  const dynamicCategories = ['All Projects', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(p => {
        const catSearch = p.category.toLowerCase();
        const tagSearch = p.tag.toLowerCase();
        const filterLower = filter.toLowerCase();
        return catSearch.includes(filterLower) || tagSearch.includes(filterLower);
      });

  return (
    <div className="min-h-screen bg-[#E5E5E5] font-jakarta">
      
      {/* 🟢 NAVIGATION WRAPPER - Confines the Sticky Filter to the Results Section */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION - Green Brand Theme */}
        <section className="pt-24 lg:pt-36 pb-20 lg:pb-28 bg-[#175A26] relative overflow-hidden">
          {/* Grid Overlay */}
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
                <span>Our Global Portfolio</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 animate-fade-in uppercase leading-tight">
                Proven Results. <br /> <span className="opacity-80 text-emerald-200">Globally Engineered.</span>
              </h1>
              <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed font-medium animate-slide-up">
                Explore our curated showcase of high-performance digital solutions, from complex enterprise platforms to stunning creative web applications built for international success.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/relax.svg" alt="Projects Illustration" className="w-64 lg:w-80 h-auto opacity-95 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* 🔍 FILTER BAR - Pill Buttons */}
        <section className="py-8 border-b border-black/10 sticky top-16 lg:top-20 bg-[#E5E5E5]/95 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 justify-start md:justify-center">
              {dynamicCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleFilterChange(cat);
                  }}
                  className={`px-5 py-2 rounded-full text-[12px] font-bold transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-[#175A26] text-white shadow-md' 
                      : 'bg-white text-slate-700 hover:bg-white/80 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section id="projects-grid" className="py-20 bg-[#E5E5E5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((p) => (
                <Link 
                  key={p.id} 
                  href={`/projects/${p.id}`}
                  className="group flex flex-col bg-white border border-[#175A26]/10 rounded-2xl overflow-hidden hover:border-[#175A26] hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#175A26] text-white text-[9px] font-bold border-none shadow-sm px-2.5 py-0.5">
                        {p.tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-slate-400">{p.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-900 leading-snug group-hover:text-[#175A26] transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-[13px] leading-relaxed font-semibold mb-6 line-clamp-3">
                      {p.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-[10px] font-bold text-[#175A26] uppercase tracking-[0.2em] group/link">
                        Case Study 
                        <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ⬆️ BACK TO TOP OF SECTION */}
            <div className="mt-16 flex justify-center border-t border-slate-300 pt-12">
               <button 
                 type="button"
                 onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   handleFilterChange(filter);
                 }}
                 className="inline-flex items-center text-[10px] font-bold text-slate-600 hover:text-[#175A26] uppercase tracking-[0.3em] transition-all group"
               >
                 Back to Filters <ArrowRight className="ml-2 h-3.5 w-3.5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer / CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">Ready to collaborate on your next project?</h2>
           <Button size="xl" className="rounded-full bg-[#175A26] text-white hover:bg-[#12481e] px-12 h-14 font-bold shadow-lg" asChild>
             <Link href="/request-website">Start Your Case Study</Link>
           </Button>
        </div>
      </section>

    </div>
  );
}
