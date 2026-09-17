'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Code, Smartphone, Globe,
  ArrowRight, ArrowUpRight,
  Settings, BarChart3,
  Monitor, Star, Briefcase, TrendingUp,
  Handshake, Check
} from 'lucide-react';
import Image from 'next/image';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';
import { projects } from '@/data/projects';

export default function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

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

  const heroSlides = [
    "Custom Software",
    "High-Converting Websites",
    "Native Mobile Apps",
    "Your Business Better",
    "SEO & Digital Systems",
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const displayedProjects = projects.slice(0, 4);
  const cardWidth = 85;
  const gapWidth = 5;
  const translateX = -scrollProgress * (cardWidth + gapWidth) * (displayedProjects.length - 1);

  return (
    <div className="min-h-screen font-jakarta bg-[#E5E5E5] text-[#060606]">

      {/* ── 1. Hero Section (Green Background #175A26 Matching Color Swatch) ── */}
      <section className="relative bg-[#175A26] text-white pt-36 sm:pt-44 pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[500px]">

            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-8">

              {/* Main Headline with Auto-Sliding Text */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#7FFFD4] animate-pulse"></span>
                  Premier Digital Engineering Studio
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white font-jakarta">
                  The company that builds <br />
                  <span className="relative inline-block h-[1.25em] overflow-hidden align-bottom text-[#7FFFD4]">
                    <span
                      key={slideIndex}
                      className="inline-block animate-slide-up transition-all duration-500 ease-out"
                    >
                      {heroSlides[slideIndex]}
                    </span>
                  </span> <br />
                  in Rwanda & globally.
                </h1>
              </div>

              <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed max-w-lg">
                Premier software engineering studio in Kigali. We build high-converting websites, native iOS & Android mobile apps, custom software platforms, and rank your business #1 on Google.
              </p>

              {/* Call to Action Button */}
              <div className="pt-2">
                <Link
                  href="/request-website"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all duration-300 shadow-md"
                >
                  Get Started Today
                </Link>
              </div>

            </div>

            {/* Right Column Illustration (Using relax.svg) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] flex items-center justify-center p-2">
                <Image
                  src="/relax.svg"
                  alt="Instant Communication & Work Solutions"
                  width={583}
                  height={383}
                  className="w-full h-auto object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Clients Section (Floating Card Overlapping Hero) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 mb-24 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-md border border-[#060606]/10 text-center">

          <h2 className="text-lg sm:text-xl font-extrabold text-[#060606] mb-10 tracking-tight font-jakarta">
            Powering Digital Excellence for Industry Leaders
          </h2>

          {/* Client Logos Grid: 3 per row matching Nokanda Logo Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 items-center justify-items-center font-jakarta">
            {[
              { name: 'pixelmart', image: '/clients/pixelmart.png' },
              { name: 'oluxywear', image: '/clients/oluxywear.png' },
              { name: 'smartstock', image: '/clients/smartstock.png' },
              { name: 'oluxywatches', image: '/clients/oluxywatches.png' },
              { name: 'bugajltd', image: '/clients/bugajltd.png' },
              { name: 'eyevisioncenter', image: '/clients/eyevisioncenter.png' },
            ].map((client, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3.5 font-black tracking-tight text-[#64748B] hover:text-[#060606] hover:scale-105 transition-all cursor-pointer select-none group"
              >
                <Image
                  src={client.image}
                  alt={`${client.name} - Trusted Client of NeoScratch Web Design & Software Studio in Rwanda`}
                  width={44}
                  height={44}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 border-2 border-[#175A26]/20 shadow-md group-hover:border-[#175A26] transition-colors"
                />
                <span className="font-jakarta text-[#64748B] group-hover:text-[#060606] font-extrabold tracking-tight text-lg sm:text-xl lg:text-2xl">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 3. About NeoScratch Section (Clean Typography Matching Image Reference) ── */}
      <section className="py-20 lg:py-28 bg-[#E5E5E5] overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: africa.svg map */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <Image
                src="/africa.svg"
                alt="NeoScratch Digital Engineering Studio - Empowering Businesses Across Rwanda and Africa"
                width={520}
                height={520}
                className="w-full h-auto object-contain max-w-lg hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                priority
              />
            </div>

            {/* Right Column: Clean Typography */}
            <div className="lg:col-span-7 space-y-6 font-jakarta">

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B383F] tracking-tight leading-[1.1]">
                  About NeoScratch
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-[#175A26] tracking-tight">
                  From Student Roots at APEKI Tumba TSS to an RDB-Registered Enterprise
                </h3>
              </div>

              <div className="space-y-4 text-[#475569] text-base sm:text-lg leading-relaxed font-medium">
                <p>
                  Founded by <strong>Theogene Iradukunda (theodev)</strong> in 2024 as <em>RwandaScratch</em> during his software development studies at APEKI Tumba TSS, NeoScratch was born from a mission to eliminate business risks through automated custom software.
                </p>
                <p>
                  After engineering custom ERP systems for first paid clients like PixelMart in 2025, the business registered with the Rwanda Development Board (RDB) as <strong>NeoScratch</strong> (&ldquo;NEO&rdquo; for modern tech, &ldquo;SCRATCH&rdquo; for custom software built from scratch). Today, we build high-converting websites, native mobile apps, and rank businesses #1 on Google.
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Custom Web & Mobile Apps',
                  'MoMo & Card Payments',
                  'Rank #1 on Google SEO',
                  '24/7 Server Maintenance'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[#2B383F] font-bold text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#175A26] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-extrabold bg-[#175A26] text-white hover:bg-[#060606] transition-all shadow-md"
                >
                  Get Started Today
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-extrabold bg-transparent text-[#2B383F] border-2 border-[#2B383F] hover:bg-[#175A26] hover:text-white hover:border-[#175A26] transition-all"
                >
                  Learn Our Story
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>





      {/* ── 6. Horizontal Scroll Projects Section (Commit 99548c05fb76f482e4280bb8ee7e6410c9ba8072 Style) ── */}
      <div ref={ghostRef} className="relative h-[350vh]">
        <section className="sticky top-0 h-screen overflow-hidden bg-[#E5E5E5] py-8 flex flex-col justify-center text-[#060606]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 flex justify-between items-end">
            <div>
              <span className="text-[#175A26] font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block font-jakarta">FEATURED WORK</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060606] font-jakarta">
                Platforms &amp; Systems We&apos;ve Engineered
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#175A26] text-white font-extrabold text-xs hover:bg-[#060606] hover:text-white transition-colors border border-[#175A26]"
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
                className="w-[85vw] sm:w-[80vw] lg:w-[70vw] flex-shrink-0 h-[460px] sm:h-[400px] lg:h-[380px] bg-white rounded-3xl border border-[#060606]/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row group transition-all duration-300 hover:ring-2 hover:ring-[#175A26] cursor-pointer"
              >
                {/* Image Section - FULL FILL */}
                <div className="lg:w-[60%] h-[50%] lg:h-full bg-slate-900 overflow-hidden relative">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    sizes="(max-width: 768px) 85vw, 60vw"
                  />

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#175A26] text-[10px] font-extrabold tracking-wider shadow-sm uppercase font-jakarta">
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-[40%] h-[50%] lg:h-full p-6 lg:p-8 flex flex-col justify-between bg-white text-[#060606] relative z-10 transition-colors duration-300 group-hover:bg-[#175A26]/[0.02]">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-[10px] font-bold text-[#060606]/40">{p.year}</span>
                      <span className="h-px w-4 bg-[#060606]/20"></span>
                      <span className="text-[#175A26] text-[9px] font-extrabold tracking-widest uppercase font-jakarta">SYNERGY</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-extrabold text-[#060606] mb-2 leading-tight group-hover:text-[#175A26] transition-colors font-jakarta">{p.title}</h3>
                    <p className="text-[#060606]/60 text-[11px] font-semibold mb-3 leading-none italic">for {p.subtitle ? p.subtitle.replace('for ', '') : p.client}</p>

                    <p className="text-[#060606]/70 text-[13px] leading-relaxed mb-4 font-medium line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center text-[#175A26] text-xs font-bold hover:gap-2 transition-all duration-300 group/link pt-3 border-t border-[#060606]/10">
                    <span>Explore Case</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>


      {/* ── 7. Testimonials Section ── */}
      <section className="py-24 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSlider />
        </div>
      </section>

    </div>
  );
}
