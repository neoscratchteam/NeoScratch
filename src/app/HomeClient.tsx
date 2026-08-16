'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Code, Smartphone, Globe, Palette, 
  ArrowRight, ArrowUpRight, CheckCircle2,
  Search, ShieldCheck, Settings, BarChart3,
  Monitor, Star, Phone, Briefcase, TrendingUp,
  Handshake, Users, Award, Check
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';
import { projects } from '@/data/projects';

export default function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const projectsCount = useCountUpAnimation({ end: 10, suffix: 'K+' });
  const experienceCount = useCountUpAnimation({ end: 5, suffix: '+' });
  const clientsCount = useCountUpAnimation({ end: 500, suffix: '+' });
  const retentionCount = useCountUpAnimation({ end: 99, suffix: '%' });

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
    <div className="min-h-screen font-jakarta bg-[#f7f8f3] text-[#0b3b2d]">
      
      {/* ── 1. Biztop Forest Green Hero Section ── */}
      <section className="relative bg-[#0b3b2d] text-white pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        
        {/* Subtle Background Glow Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-lime-400 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-600 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">

              {/* Rating Pill Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-md">
                <span className="font-bold text-white">4.9</span>
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-white/80 border-l border-white/20 pl-2">5K+ Reviews</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white uppercase">
                NEXT — GEN TOP <br />
                NOTCH <span className="text-lime-400">BUSINESS</span> <br />
                SOLUTIONS
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                We provide expert business consulting &amp; software engineering services to help companies grow, optimize operations, and achieve sustainable digital success.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/request-website"
                  className="inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full text-base font-bold bg-lime-400 text-[#0b3b2d] shadow-lg hover:bg-lime-300 transition-all duration-300 hover:scale-[1.03] group"
                >
                  <span>Book Appointment</span>
                  <span className="w-9 h-9 rounded-full bg-[#0b3b2d] text-lime-400 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <a
                  href="tel:+250788000000"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all duration-300 font-semibold text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-lime-400 text-[#0b3b2d] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/60 uppercase tracking-widest leading-none">CALL US</span>
                    <span className="font-bold text-white text-sm">+250 788 000 000</span>
                  </div>
                </a>
              </div>

            </div>

            {/* Right Hero Image (Photorealistic Rwandan Business Executives) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/15 shadow-2xl group">
                <Image
                  src="/rwanda_hero.png"
                  alt="Rwandan Business Leaders"
                  width={600}
                  height={650}
                  className="w-full h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Floating overlay tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0b3b2d]/85 backdrop-blur-md border border-white/20 flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-lime-400 text-[#0b3b2d] flex items-center justify-center font-bold text-xl shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight text-white">Verified Excellence</p>
                    <p className="text-xs text-white/70 mt-0.5">Top-Rated Tech &amp; Consulting Team in Kigali</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 2. Essential Features Section ("* Our Approach") ── */}
      <section className="py-24 bg-[#f7f8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0b3b2d] text-xs font-extrabold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5 text-lime-600 fill-current" />
                Our Approach
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3b2d] max-w-xl leading-tight">
                Essential features for modern business success
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
              Explore integrated consulting &amp; engineering approaches to improve processes, increase productivity, and support long-term organizational data-driven business development.
            </p>
          </div>

          {/* 3 Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: White Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-emerald-950/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-[#0b3b2d] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0b3b2d] mb-4">
                  Next-gen Human &amp; Software Resources
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  We provide expert business consulting &amp; tech talent solutions to help companies grow rapidly and sustain scale.
                </p>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0b3b2d] bg-gray-100 hover:bg-[#0b3b2d] hover:text-white px-5 py-2.5 rounded-full transition-colors w-fit"
              >
                <span>Explore More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Bright Lime Highlight Card */}
            <div className="bg-lime-400 rounded-[2rem] p-8 border border-lime-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-[#0b3b2d]">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0b3b2d] text-lime-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-md">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0b3b2d] mb-4">
                  Market Growth &amp; Digital Strategy
                </h3>
                <p className="text-[#0b3b2d]/80 text-sm leading-relaxed mb-8 font-medium">
                  Identify new market opportunities and accelerate sustainable business growth through data &amp; strategic SEO.
                </p>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0b3b2d] hover:bg-[#06261d] px-5 py-2.5 rounded-full transition-colors w-fit shadow-sm"
              >
                <span>Explore More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Deep Forest Green Card */}
            <div className="bg-[#0b3b2d] rounded-[2rem] p-8 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-white">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-lime-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Handshake className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Business Process Improvement
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Optimize internal workflows to increase efficiency, team productivity, and high-performance automated software output.
                </p>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0b3b2d] bg-lime-400 hover:bg-lime-300 px-5 py-2.5 rounded-full transition-colors w-fit"
              >
                <span>Explore More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. Comprehensive Solution Section ("* Who We Are?") ── */}
      <section className="py-24 bg-white border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Grid: Images & Stat Box */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Top Main Photo */}
              <div className="rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/rwanda_team_tablet.png"
                  alt="Rwandan Tech Consultants"
                  width={600}
                  height={350}
                  className="w-full h-[280px] sm:h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom 2 Items Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Stat Box (Bright Lime) */}
                <div className="bg-lime-400 rounded-[2rem] p-6 text-[#0b3b2d] shadow-md flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#0b3b2d] text-lime-400 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-extrabold tracking-tight mb-1">10K+</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b3b2d]/80 leading-snug">
                      Our Total Completed Works
                    </p>
                  </div>
                </div>

                {/* Secondary Image */}
                <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/rwanda_women_meeting.png"
                    alt="Rwandan Business Women Collaborating"
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>

            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0b3b2d] text-xs font-extrabold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-lime-600 fill-current" />
                Who We Are?
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3b2d] leading-tight">
                Comprehensive solution for business excellence
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Discover innovative consulting &amp; digital engineering strategies that help businesses improve operations, increase profitability, and achieve long-term growth across Kigali and digital markets around the world.
              </p>

              {/* Founder/CEO Row */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full text-xs font-bold bg-[#0b3b2d] text-white hover:bg-[#07261d] transition-colors"
                >
                  <span>More About Us</span>
                  <span className="w-7 h-7 rounded-full bg-lime-400 text-[#0b3b2d] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                  <div className="w-11 h-11 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    TD
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0b3b2d] text-sm">Theo Dev</h5>
                    <p className="text-xs text-gray-500">CEO &amp; Founder at NeoScratch</p>
                  </div>
                </div>
              </div>

              {/* Info Rating & Skills Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                
                {/* Rating Card */}
                <div className="p-4 rounded-2xl bg-[#f7f8f3] border border-gray-200/80 flex items-center gap-4">
                  <div>
                    <div className="flex text-amber-500 text-xs mb-1">
                      ★★★★★
                    </div>
                    <span className="text-2xl font-extrabold text-[#0b3b2d]">4.9</span>
                    <span className="text-xs text-gray-500 font-medium"> / 5.0</span>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Avg. clients ratings</p>
                  </div>
                </div>

                {/* Premium Skills Card */}
                <div className="p-4 rounded-2xl bg-[#f7f8f3] border border-gray-200/80">
                  <span className="text-[11px] font-extrabold text-[#0b3b2d] uppercase tracking-wider block mb-2">Premium Skills</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['ADVISOR', 'CONSULTING', 'MARKETING', 'WEB DEV', 'SEO'].map(skill => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-white border border-gray-200 text-[10px] font-bold text-[#0b3b2d]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ── 4. Services Grid Section ("* Our Services") ── */}
      <section className="py-24 bg-[#f7f8f3]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0b3b2d] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-lime-600 fill-current" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3b2d] mb-4">
              Experienced best modern tech services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether you need a high-converting website, custom mobile app, or dominance in Google search results — we deliver solutions crafted for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Monitor, 
                title: 'Website Design & Development', 
                desc: 'Your website is your 24/7 digital salesperson. We build sleek, fast, high-converting websites tailored for your brand.',
                tags: ['Responsive', 'Fast Speed', 'Admin Panel']
              },
              { 
                icon: Globe, 
                title: 'Google Business Profile Setup', 
                desc: 'Verify and rank your business locally on Google Maps so nearby customers find your service instantly.',
                tags: ['Google Maps', 'SEO Boost', 'Review System']
              },
              { 
                icon: BarChart3, 
                title: 'Search Engine Optimisation (SEO)', 
                desc: 'Rank on page one of Google for your target business keywords and attract organic qualified leads daily.',
                tags: ['Keywords', 'On-Page SEO', 'Monthly Audit']
              },
              { 
                icon: Code, 
                title: 'Custom Software Engineering', 
                desc: 'Scalable web applications, management dashboards, automated workflows, and custom SaaS platforms.',
                tags: ['Web Apps', 'Automation', 'Custom APIs']
              },
              { 
                icon: Smartphone, 
                title: 'Mobile App Development', 
                desc: 'High performance iOS & Android applications with seamless payment integration (MoMo & Card support).',
                tags: ['iOS & Android', 'MoMo Pay', 'Cross Platform']
              },
              { 
                icon: Settings, 
                title: 'Website Maintenance Retainers', 
                desc: 'Proactive server maintenance, performance optimizations, security updates, and monthly feature improvements.',
                tags: ['Monthly Support', 'Security', 'Backups']
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col p-8 rounded-[2rem] bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-lime-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0b3b2d] text-lime-400 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-[#0b3b2d] transition-colors duration-300 shadow-sm">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#0b3b2d] transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0b3b2d] mb-3 group-hover:text-emerald-800 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-bold text-[#0b3b2d]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 5. Horizontal Scroll Projects Section ── */}
      <div ref={ghostRef} className="relative h-[300vh]">
        <section className="sticky top-0 h-screen overflow-hidden bg-[#0b3b2d] py-12 flex flex-col justify-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-lime-400 text-xs font-extrabold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Platforms &amp; Systems We&apos;ve Engineered
              </h2>
            </div>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-[#0b3b2d] font-bold text-xs hover:bg-lime-300 transition-colors"
            >
              View All Works
            </Link>
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
                className="w-[82vw] sm:w-[65vw] lg:w-[48vw] flex-shrink-0 h-[420px] bg-[#07261d] rounded-[2.5rem] border border-white/15 overflow-hidden flex flex-col group transition-all duration-300 hover:border-lime-400 cursor-pointer shadow-2xl"
              >
                <div className="h-[220px] bg-black/30 overflow-hidden relative">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-lime-400 text-[#0b3b2d] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {p.tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">{p.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{p.description}</p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-lime-400 text-xs font-bold pt-4 border-t border-white/10">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>


      {/* ── 6. Testimonials Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSlider />
        </div>
      </section>


      {/* ── 7. Call To Action Banner ── */}
      <section className="py-20 bg-[#f7f8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b3b2d] rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-lime-400/10 blur-3xl pointer-events-none" />
            
            <span className="text-lime-400 font-extrabold tracking-widest text-xs uppercase mb-4 block">
              GET IN TOUCH WITH NEOSCRATCH
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white max-w-3xl mx-auto leading-tight">
              Ready to elevate your business with modern tech?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a call or send us a request today. We&apos;ll help you craft a high-performance website, custom software, and digital strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/request-website"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-lime-400 text-[#0b3b2d] hover:bg-lime-300 transition-all shadow-lg hover:scale-105"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
