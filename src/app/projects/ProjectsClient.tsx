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
    <div className="min-h-screen bg-white">
      
      {/* 🟢 NAVIGATION WRAPPER - Confines the Sticky Filter to the Results Section */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION - Matches Service Page */}
        <section className="pb-24 lg:pb-32 bg-[#1a73e8] relative overflow-hidden">
          {/* Large Grid Overlay */}
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
              <span>Our Global Portfolio</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto uppercase">
              Proven Results. <br /> Globally <span className="opacity-70 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 text-white">Engineered.</span>
            </h1>
            <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
              Explore our curated showcase of high-performance digital solutions, from complex enterprise platforms to stunning creative portfolios built for the international stage.
            </p>
          </div>
        </section>

        {/* 🔍 FILTER BAR - Pill Buttons */}
        <section className="py-12 border-b border-border/40 sticky top-[72px] bg-white z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 justify-start md:justify-center">
              {dynamicCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-5 py-2 rounded-full text-[12px] font-bold transition-all duration-300 ${
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

        {/* Project Grid - Modern Small Cards */}
        <section id="projects-grid" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((p) => (
                <Link 
                  key={p.id} 
                  href={`/projects/${p.id}`}
                  className="group flex flex-col bg-white border border-[#1a73e8]/20 rounded-2xl overflow-hidden hover:border-[#1a73e8]/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 backdrop-blur-sm text-[#1a73e8] text-[9px] font-bold border-none shadow-sm px-2.5 py-0.5">
                        {p.tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-muted-foreground/50">{p.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground leading-snug group-hover:text-[#1a73e8] transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed font-semibold mb-6 line-clamp-3">
                      {p.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-[10px] font-bold text-[#1a73e8] uppercase tracking-[0.2em] group/link">
                        Case Study 
                        <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
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

      {/* Footer / CTA Section */}
      <section className="py-24 bg-[#f8fafc] border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold mb-8 tracking-tight">Ready to collaborate?</h2>
           <Button size="xl" className="rounded-full bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 px-12 h-16 font-bold shadow-2xl shadow-blue-500/20" asChild>
             <Link href="/request-website">Start Your Case Study</Link>
           </Button>
        </div>
      </section>

    </div>
  );
}
