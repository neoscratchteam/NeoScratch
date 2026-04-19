'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Code, Smartphone, Globe, Palette, 
  ArrowRight, ArrowUpRight, CheckCircle2,
  Search, ShieldCheck, Settings, BarChart3,
  Monitor
} from 'lucide-react';
import Image from 'next/image';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';
import heroDashboard from '@/assets/professional-dashboard.png';

import { projects } from '@/data/projects';

export default function Index() {
  const projectsCount = useCountUpAnimation({ end: 6, suffix: '+' });
  const experienceCount = useCountUpAnimation({ end: 2, suffix: '+' });
  const clientsCount = useCountUpAnimation({ end: 6, suffix: '+' });
  const retentionCount = useCountUpAnimation({ end: 100, suffix: '%' });

  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ghostRef.current) return;
      const rect = ghostRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top;
      const end = rect.bottom - windowHeight;
      const total = rect.height - windowHeight;
      
      let nextProgress = 0;
      if (start <= 0 && end >= 0) {
        nextProgress = Math.abs(start) / total;
      } else if (start > 0) {
        nextProgress = 0;
      } else if (end < 0) {
        nextProgress = 1;
      }
      
      setScrollProgress(nextProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayedProjects = projects.slice(0, 4);
  const cardWidth = 85; 
  const gapWidth = 5;  
  const translateX = -scrollProgress * (cardWidth + gapWidth) * (displayedProjects.length - 1);

  return (
    <div className="min-h-screen">
      
      {/* ── Modern Hero ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-primary flex items-center">

        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 -right-60 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
        </div>

        {/* Dot-grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT ── */}
            <div className="space-y-5 animate-fade-in">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide bg-white/10 border-white/20 text-white/80 animate-slide-up">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Software &amp; Growth Studio — Kigali, Rwanda
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
                We build software<br />
                <span className="text-white/40">that grows your</span><br />
                business.
              </h1>

              {/* Sub */}
              <p className="text-sm lg:text-base leading-relaxed max-w-md text-white/70 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Custom websites, apps, SEO, and Google Business Setup — everything your business needs to get found, look great, and convert visitors into customers.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/request-website"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white text-primary shadow-lg hover:bg-white/90 transition-all duration-300 hover:scale-[1.03]"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white/15 border border-white/25 text-white hover:bg-white/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  View Our Work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { ref: projectsCount.elementRef, val: projectsCount.count, label: 'Projects' },
                  { ref: experienceCount.elementRef, val: experienceCount.count, label: 'Yrs Experience' },
                  { ref: clientsCount.elementRef, val: clientsCount.count, label: 'Happy Clients' },
                  { ref: retentionCount.elementRef, val: retentionCount.count, label: 'Retention' },
                ].map((s, i) => (
                  <div key={i} ref={s.ref} className="flex flex-col">
                    <span className="text-xl font-extrabold text-white">{s.val}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5 text-white/40">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Vertical scrolling service cards ── */}
            <div className="hidden lg:block relative h-[520px] overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* Top fade */}
              <div className="absolute top-0 inset-x-0 h-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, hsl(221 83% 53%), transparent)' }} />
              {/* Bottom fade */}
              <div className="absolute bottom-0 inset-x-0 h-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(221 83% 53%), transparent)' }} />

              {/* Scrolling track */}
              <div style={{ animation: 'heroScrollUp 18s linear infinite' }} className="flex flex-col gap-4 will-change-transform">
                {[
                  { icon: Monitor, label: 'Website Design & Dev', desc: 'Up to 15 pages • Mobile first • Admin panel', color: 'hsl(221 83% 70%)' },
                  { icon: Globe, label: 'Google Business Profile', desc: 'Google Maps • Verified listing • Local SEO', color: 'hsl(142 70% 55%)' },
                  { icon: BarChart3, label: 'Search Engine Optimisation', desc: 'Keyword research • On-page SEO • Monthly reports', color: 'hsl(38 90% 60%)' },
                  { icon: Code, label: 'Custom Software Dev', desc: 'Dashboards • Booking systems • Automations', color: 'hsl(280 70% 65%)' },
                  { icon: Smartphone, label: 'Mobile App Development', desc: 'iOS & Android • React Native • Offline-first', color: 'hsl(200 90% 60%)' },
                  { icon: Settings, label: 'Website Maintenance', desc: 'Monthly retainer • Content updates • Reports', color: 'hsl(0 70% 65%)' },
                  /* duplicate for seamless loop */
                  { icon: Monitor, label: 'Website Design & Dev', desc: 'Up to 15 pages • Mobile first • Admin panel', color: 'hsl(221 83% 70%)' },
                  { icon: Globe, label: 'Google Business Profile', desc: 'Google Maps • Verified listing • Local SEO', color: 'hsl(142 70% 55%)' },
                  { icon: BarChart3, label: 'Search Engine Optimisation', desc: 'Keyword research • On-page SEO • Monthly reports', color: 'hsl(38 90% 60%)' },
                  { icon: Code, label: 'Custom Software Dev', desc: 'Dashboards • Booking systems • Automations', color: 'hsl(280 70% 65%)' },
                  { icon: Smartphone, label: 'Mobile App Development', desc: 'iOS & Android • React Native • Offline-first', color: 'hsl(200 90% 60%)' },
                  { icon: Settings, label: 'Website Maintenance', desc: 'Monthly retainer • Content updates • Reports', color: 'hsl(0 70% 65%)' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  const isCentre = i % 6 === 2; // highlight every 3rd card
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 rounded-2xl border transition-all duration-300 ${
                        isCentre
                          ? 'p-5 bg-white/20 border-white/30 shadow-xl scale-[1.03]'
                          : 'p-4 bg-white/8 border-white/12 hover:bg-white/15'
                      }`}
                      style={{ background: isCentre ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)', borderColor: isCentre ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.1)' }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${s.color}22` }}>
                        <Icon className="w-5 h-5" style={{ color: s.color }} />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-tight">{s.label}</p>
                        <p className="text-white/50 text-xs mt-0.5 leading-snug">{s.desc}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 ml-auto shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">WHAT WE DO</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Here's what we're really good at.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you need a powerful website, a custom software system, or to show up when customers search for you on Google — we handle it all, so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Monitor, 
                title: 'Website Design & Development', 
                desc: 'Your website is your most important salesperson — it works 24/7, never calls in sick, and is the first thing a potential customer judges you by.',
                tags: ['Up to 15 pages', 'Mobile first', 'Admin panel', 'Fast delivery']
              },
              { 
                icon: Globe, 
                title: 'Google Business Profile Setup', 
                desc: 'Before a customer visits your business or calls you, they search Google. We set up, verify, and fully optimise your Google Business Profile.',
                tags: ['Google Maps', 'Verified listing', 'Reviews setup', 'Local SEO']
              },
              { 
                icon: BarChart3, 
                title: 'Search Engine Optimisation (SEO)', 
                desc: 'Being on page two of Google is the same as being invisible. We optimise your website with the right keywords to reach customers.',
                tags: ['Keyword research', 'On-page SEO', 'Search Console', 'Monthly reports']
              },
              { 
                icon: Code, 
                title: 'Custom Software Development', 
                desc: 'No off-the-shelf tool fits every business perfectly. When your operations have outgrown spreadsheets, we build exactly what you need.',
                tags: ['Web apps', 'Dashboards', 'Booking systems', 'Automations']
              },
              { 
                icon: Smartphone, 
                title: 'Mobile App Development', 
                desc: 'Your customers live on their phones — your business should too. We build polished iOS and Android apps with solid backend logic.',
                tags: ['iOS & Android', 'React Native', 'MoMo / Airtel', 'Offline-first']
              },
              { 
                icon: Settings, 
                title: 'Website Maintenance & Management', 
                desc: 'Launching your website is the beginning, not the end. We keep it fast, secure, and up to date with monthly retainers.',
                tags: ['Monthly retainer', 'Content updates', 'SEO monitoring', 'Reports']
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group relative flex flex-col p-8 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">{service.desc}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-[11px] font-medium text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary font-semibold group" asChild>
              <Link href="/services">
                View all services 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Projects Section - High Contrast Hover Focus */}
      <div ref={ghostRef} className="relative h-[400vh]">
        <section className="sticky top-0 h-screen overflow-hidden bg-background py-8 flex flex-col justify-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 flex justify-between items-end">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">FEATURED WORK</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground font-inter">
                Platforms we've engineered.
              </h2>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl border-primary/20 hover:bg-primary/5 text-primary font-bold text-xs" asChild>
              <Link href="/projects">View all</Link>
            </Button>
          </div>

          <div 
            className="flex gap-[4vw] px-[7.5vw] transform-gpu will-change-transform"
            style={{ 
              transform: `translate3d(${translateX.toFixed(2)}vw, 0px, 0px)`
            }}
          >
            {displayedProjects.map((p) => (
              <Link 
                key={p.id}
                href={`/projects/${p.id}`}
                className="w-[85vw] flex-shrink-0 h-[40vh] min-h-[320px] bg-white rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col lg:flex-row group transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer"
              >
                {/* Image Section - FULL FILL */}
                <div className="lg:w-[65%] h-[50%] lg:h-full bg-secondary overflow-hidden relative">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    sizes="(max-width: 768px) 85vw, 65vw"
                  />

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-primary text-[9px] font-bold tracking-wider shadow-sm">{p.tag}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-[35%] h-[50%] lg:h-full p-6 lg:p-8 flex flex-col justify-center bg-white relative z-10 transition-colors duration-300 group-hover:bg-primary/[0.02]">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground/30">{p.year}</span>
                    <span className="h-px w-4 bg-border"></span>
                    <span className="text-primary text-[9px] font-extrabold tracking-widest uppercase">SYNERGY</span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-[11px] font-semibold mb-4 leading-none opacity-60 italic">for {p.subtitle.replace('for ', '')}</p>
                  
                  <p className="text-muted-foreground text-[13px] leading-relaxed mb-6 opacity-80 font-medium line-clamp-3">
                    {p.description}
                  </p>
                  
                  <div className="inline-flex items-center text-primary text-xs font-bold hover:gap-2 transition-all duration-300 group/link">
                    Explore Case <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <TestimonialSlider />
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Code className="h-64 w-64" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us to bring your tech vision to life. Whether it's a website, an app, or digital marketing, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 rounded-2xl px-12 font-bold shadow-xl shadow-black/10" asChild>
                <Link href="/request-website">Get Started</Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-2xl px-12 font-bold" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
