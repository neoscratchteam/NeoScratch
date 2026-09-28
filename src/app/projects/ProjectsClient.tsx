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

        {/* Project List - One by One Big Cards */}
        <section id="projects-grid" className="py-20 bg-[#E5E5E5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:gap-14">
              {filteredProjects.map((p, idx) => (
                <Link 
                  key={p.id} 
                  href={`/projects/${p.id}`}
                  className="w-full bg-white rounded-3xl border border-[#060606]/10 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col lg:flex-row group transition-all duration-300 hover:ring-2 hover:ring-[#175A26] cursor-pointer min-h-[420px]"
                >
                  {/* Image Section - FULL FILL */}
                  <div className="lg:w-[58%] h-[280px] sm:h-[360px] lg:h-auto bg-slate-900 overflow-hidden relative flex-shrink-0">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#175A26] text-[11px] font-extrabold tracking-wider shadow-sm uppercase font-jakarta">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-[42%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white text-[#060606] relative z-10 transition-colors duration-300 group-hover:bg-[#175A26]/[0.02]">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-[11px] font-bold text-[#060606]/40">{p.year}</span>
                        <span className="h-px w-4 bg-[#060606]/20"></span>
                        <span className="text-[#175A26] text-[10px] font-extrabold tracking-widest uppercase font-jakarta">{p.category}</span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-extrabold text-[#060606] mb-3 leading-tight group-hover:text-[#175A26] transition-colors font-jakarta">
                        {p.title}
                      </h3>
                      <p className="text-[#060606]/60 text-[12px] font-semibold mb-4 italic">
                        for {p.subtitle ? p.subtitle.replace('for ', '') : p.client}
                      </p>

                      <p className="text-[#060606]/70 text-[14px] leading-relaxed mb-6 font-medium line-clamp-4">
                        {p.description}
                      </p>

                      {p.techStack && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[11px] font-bold text-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="inline-flex items-center text-[#175A26] text-xs font-bold hover:gap-2 transition-all duration-300 group/link pt-4 border-t border-[#060606]/10">
                      <span>Explore Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1.5 transition-transform" />
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
