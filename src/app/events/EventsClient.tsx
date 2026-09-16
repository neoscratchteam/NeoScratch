'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

export default function Events() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] font-jakarta">
      
      {/* 🔴 NAVIGATION WRAPPER */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION */}
        <section className="min-h-[40vh] pt-24 lg:pt-32 pb-20 bg-[#175A26] relative overflow-hidden text-center md:text-left">
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
                <span>Tech Leadership & Innovation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 animate-fade-in uppercase leading-tight">
                Ignite Your <br /> Tech <span className="opacity-80 text-emerald-200">Trajectory.</span>
              </h1>
              <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed font-medium animate-slide-up">
                Join our high-impact workshops, global summit appearances, and software release events. We are building the future of African engineering through knowledge exchange.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/relax.svg" alt="Events Illustration" className="w-64 lg:w-80 h-auto opacity-95 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* 🏛️ ABOUT EVENTS SECTION */}
        <section className="py-20 bg-[#E5E5E5] border-y border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
               <h2 className="text-[12px] font-black tracking-[0.2em] text-[#175A26] uppercase mb-3">About Events</h2>
               <p className="text-2xl font-bold text-slate-900">Legacy of Innovation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#175A26] transition-all group shadow-sm">
                   <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                      <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                   <div className="flex flex-col justify-center">
                      <p className="text-[10px] font-bold text-[#175A26] mb-2">{project.year}</p>
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#175A26] transition-colors">{project.title}</h3>
                      <p className="text-[12px] font-medium text-slate-600 leading-relaxed line-clamp-2">{project.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-block p-1.5 rounded-full bg-[#175A26]/10 mb-6">
              <div className="bg-[#175A26] p-3 rounded-full">
                 <Users className="h-6 w-6 text-white" />
              </div>
           </div>
           <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900">
             Host a Special <br /> <span className="text-[#175A26]">Technical Event?</span>
           </h2>
           <p className="text-sm lg:text-base text-slate-600 font-semibold mb-10 max-w-2xl mx-auto">
             Contact NeoScratch to organize specialized tech workshops, product launch events, or corporate training sessions in Rwanda or globally.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="rounded-full bg-[#175A26] text-white hover:bg-[#12481e] px-12 h-14 font-bold shadow-lg" asChild>
                <Link href="/contact">Collaborate on Event</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-[#175A26] text-[#175A26] hover:bg-[#175A26] hover:text-white px-12 h-14 font-bold transition-colors" asChild>
                <a href="tel:+250792734752">Call Directly</a>
              </Button>
           </div>
        </div>
      </section>

    </div>
  );
}
