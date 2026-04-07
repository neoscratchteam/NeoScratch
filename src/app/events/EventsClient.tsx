'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { upcomingEvents, pastEvents } from '@/data/events';

export default function Events() {
  const [filter, setFilter] = useState('All Events');

  const categories = ['All Events', 'Conference', 'Training', 'Product Launch'];

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    // Smooth scroll to results
    const element = document.getElementById('events-grid');
    if (element) {
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const filteredEvents = filter === 'All Events' 
    ? upcomingEvents 
    : upcomingEvents.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-white">
      
      {/* 🟢 NAVIGATION WRAPPER - Confines the Sticky Filter to the Results Section */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION - Vertically Centered */}
        <section className="min-h-[40vh] py-24 flex flex-col justify-center bg-[#1a73e8] relative overflow-hidden text-center">
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
              <span>Tech Leadership & Innovation</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto uppercase leading-tight">
              Ignite Your <br /> Tech <span className="opacity-70">Trajectory.</span>
            </h1>
            <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
              Join our high-impact workshops, global summit appearances, and software release events. We are building the future of African engineering through knowledge exchange.
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

        {/* 📅 UPCOMING EVENTS GRID */}
        <section id="events-grid" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-[12px] font-black tracking-[0.2em] text-[#1a73e8] uppercase mb-4">Strategic Gatherings</h2>
              <p className="text-2xl font-bold text-foreground">Upcoming Innovation Events</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, i) => (
                  <div 
                    key={event.id}
                    className="group flex flex-col bg-white border border-[#1a73e8]/10 rounded-3xl overflow-hidden hover:border-[#1a73e8]/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/95 backdrop-blur-sm text-[#1a73e8] text-[9px] font-bold border-none px-3 py-1">
                          {event.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">
                          <Calendar className="h-3 w-3 mr-2 text-[#1a73e8]" />
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-[#1a73e8] transition-colors leading-tight uppercase text-[15px]">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-[13px] leading-relaxed font-semibold mb-8 line-clamp-3">
                        {event.description}
                      </p>

                      <div className="mt-auto space-y-6">
                        <div className="flex items-center text-[11px] font-bold text-foreground/70">
                          <MapPin className="h-3.5 w-3.5 mr-2 text-[#1a73e8]" />
                          {event.location}
                        </div>
                        
                        <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                          <div className="flex gap-2">
                              {event.tags.map(tag => (
                                <span key={tag} className="text-[8px] font-black text-muted-foreground/40 border border-border/60 px-2 py-0.5 rounded-full">#{tag}</span>
                              ))}
                          </div>
                          <Link href="/contact" className="text-[10px] font-bold text-[#1a73e8] uppercase tracking-[0.2em] flex items-center">
                              Join Event <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="lg:col-span-3 py-12 text-center">
                   <p className="text-lg font-bold text-muted-foreground uppercase tracking-widest italic">Upcoming events will be announced soon.</p>
                </div>
              )}
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

      {/* 🏛️ PAST IMPACT SECTION */}
      <section className="py-24 bg-[#f8fafc] border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
             <h2 className="text-[12px] font-black tracking-[0.2em] text-[#1a73e8] uppercase mb-4">Past Milestones</h2>
             <p className="text-2xl font-bold text-foreground">Legacy of Innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white border border-border/40 rounded-3xl hover:border-[#1a73e8]/30 transition-all group">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-2xl overflow-hidden">
                    <img src={event.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                 <div className="flex flex-col justify-center">
                    <p className="text-[10px] font-bold text-[#1a73e8] mb-2">{new Date(event.date).getFullYear()}</p>
                    <h3 className="text-[15px] font-bold text-foreground mb-2 group-hover:text-[#1a73e8] transition-colors">{event.title}</h3>
                    <p className="text-[12px] font-medium text-muted-foreground leading-relaxed">{event.description}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-block p-1.5 rounded-full bg-[#1a73e8]/10 mb-8">
              <div className="bg-[#1a73e8] p-3 rounded-full">
                 <Users className="h-6 w-6 text-white" />
              </div>
           </div>
           <h2 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tight text-foreground">
             Host a Special <br /> <span className="text-[#1a73e8]">Technical Event?</span>
           </h2>
           <p className="text-sm lg:text-base text-muted-foreground font-semibold mb-12 max-w-2xl mx-auto">
             Contact Theogene Iradukunda to organize specialized tech workshops, product launch events, or corporate training sessions in Rwanda or globally.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="rounded-full bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 px-12 h-16 font-bold shadow-2xl shadow-blue-500/20" asChild>
                <Link href="/contact">Collaborate on Event</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-[#1a73e8] text-[#1a73e8] hover:bg-black hover:text-white hover:border-black px-12 h-16 font-bold transition-colors" asChild>
                <a href="tel:+250792734752">Call Directly</a>
              </Button>
           </div>
        </div>
      </section>

    </div>
  );
}
