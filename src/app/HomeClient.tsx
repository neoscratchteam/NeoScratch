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

  const displayedProjects = projects.slice(0, 4);
  const cardWidth = 85;
  const gapWidth = 5;
  const translateX = -scrollProgress * (cardWidth + gapWidth) * (displayedProjects.length - 1);

  return (
    <div className="min-h-screen font-jakarta bg-[#F9F9F9] text-[#060606]">

      {/* ── 1. Hero Section (100% Matching Reference Layout & Illustration) ── */}
      <section className="relative bg-[#F9F9F9] text-[#060606] pt-36 sm:pt-44 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[500px]">

            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-8">

              {/* Main Headline (100% typography match) */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-[#060606] font-jakarta">
                Instant Communication <br />
                for Businesses.
              </h1>

              {/* Call to Action Button */}
              <div className="pt-2">
                <Link
                  href="/request-website"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-extrabold bg-[#060606] text-[#F9F9F9] border-2 border-[#060606] shadow-md hover:bg-[#7EDC14] hover:text-[#060606] transition-all duration-300 hover:scale-[1.02]"
                >
                  Get started for free
                </Link>
              </div>

            </div>

            {/* Right Column Illustration (Using relax.svg from public) */}
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

      {/* ── 2. Clientele Section (Background #7EDC14, 100% Matching Reference Layout) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-24 relative z-20">
        <div className="bg-[#7EDC14] rounded-[2.5rem] p-8 sm:p-14 border-2 border-[#060606] shadow-2xl">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#060606] text-center mb-10 tracking-tight font-jakarta">
            Join our prestigious clientele!
          </h2>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">

            {/* Logo 1: irembo */}
            <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none">
              <span>irembo</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#060606]" />
            </div>

            {/* Logo 2: CANAL+ */}
            <div className="flex items-center font-black text-2xl tracking-widest text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none border-b-2 border-[#060606] pb-0.5">
              CANAL+
            </div>

            {/* Logo 3: save. */}
            <div className="flex items-center font-bold text-2xl tracking-tighter text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none">
              save.
            </div>

            {/* Logo 4: KAYKO */}
            <div className="flex items-center gap-1.5 font-black text-2xl tracking-wider text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none">
              <span className="w-4 h-4 rounded-full border-2 border-[#060606] inline-block" />
              KAYKO
            </div>

            {/* Logo 5: nokanda */}
            <div className="flex items-center font-extrabold text-2xl tracking-tight text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none">
              nokanda
            </div>

            {/* Logo 6: HURONE AI */}
            <div className="flex items-center gap-1.5 font-bold text-base tracking-widest text-[#060606] uppercase hover:scale-105 transition-transform cursor-pointer select-none">
              <span className="text-lg font-black">✱</span>
              <span>HURONE AI</span>
            </div>

            {/* Logo 7: bento */}
            <div className="flex items-center gap-2 font-black text-2xl tracking-tight text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none">
              <span className="w-4 h-4 bg-[#060606] rounded-sm inline-block" />
              bento
            </div>

            {/* Logo 8: WASOKO */}
            <div className="flex items-center font-black text-xl tracking-widest text-[#060606] hover:scale-105 transition-transform cursor-pointer select-none border-l-2 border-[#060606] pl-2">
              WASOKO
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. Essential Features Section ("* Our Approach") ── */}
      <section className="py-20 lg:py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-2 text-[#060606] text-xs font-extrabold uppercase tracking-wider mb-4">
                <span className="text-base font-black text-[#7EDC14]">✱</span>
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060606] max-w-md leading-[1.15] font-jakarta">
                Essential features for modern business success
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#060606]/75 max-w-md leading-relaxed lg:pt-8 font-medium">
              Explore integrated software engineering and web solutions to automate operations, improve productivity, and support long-term digital growth
            </p>
          </div>

          {/* 3 Cards Palette Mapped (#F9F9F9, #7EDC14, #060606) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1: Light Card (#F9F9F9 / #060606 Border) */}
            <div className="relative min-h-[380px] p-8 pb-20 flex flex-col justify-between group rounded-[2rem] bg-[#F9F9F9] border-2 border-[#060606] shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="mb-8 text-[#060606]">
                  <Briefcase className="w-12 h-12 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#060606] mb-4 leading-snug font-jakarta">
                  Custom Web &amp;<br />Software Build
                </h3>
                <p className="text-[#060606]/80 text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
                  We build modern software, websites, and web apps to help companies scale
                </p>
              </div>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#060606] bg-[#7EDC14] hover:bg-[#060606] hover:text-[#F9F9F9] px-5 py-2.5 rounded-full transition-all duration-300 border border-[#060606]"
                >
                  <span>Explore More</span>
                  <span className="font-extrabold text-xs">&gt;</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Vibrant Green Card (#7EDC14) */}
            <div className="relative min-h-[380px] p-8 pb-20 flex flex-col justify-between group rounded-[2rem] bg-[#7EDC14] border-2 border-[#060606] shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-8 text-[#060606]">
                  <TrendingUp className="w-12 h-12 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#060606] mb-4 leading-snug font-jakarta">
                  Digital Growth &amp;<br />Tech Solutions
                </h3>
                <p className="text-[#060606]/85 text-xs sm:text-sm leading-relaxed max-w-xs font-bold">
                  Identify tech opportunities and accelerate sustainable digital growth
                </p>
              </div>

              <div className="relative z-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F9F9F9] bg-[#060606] hover:bg-[#F9F9F9] hover:text-[#060606] px-5 py-2.5 rounded-full transition-all duration-300 border border-[#060606]"
                >
                  <span>Explore More</span>
                  <span className="font-extrabold text-xs">&gt;</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Black Card (#060606) */}
            <div className="relative min-h-[380px] p-8 pb-20 flex flex-col justify-between group rounded-[2rem] bg-[#060606] text-[#F9F9F9] border-2 border-[#060606] shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="mb-8 text-[#7EDC14]">
                  <Handshake className="w-12 h-12 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#F9F9F9] mb-4 leading-snug font-jakarta">
                  Business Process<br />Improvement
                </h3>
                <p className="text-[#F9F9F9]/80 text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
                  Optimize workflows to increase efficiency, productivity, and performance.
                </p>
              </div>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#060606] bg-[#7EDC14] hover:bg-[#F9F9F9] px-5 py-2.5 rounded-full transition-all duration-300 border border-[#7EDC14]"
                >
                  <span>Explore More</span>
                  <span className="font-extrabold text-xs">&gt;</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 4. Comprehensive Solution Section ("* Who We Are?") ── */}
      <section className="py-24 bg-[#F9F9F9] border-t border-[#060606]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Grid: Images & Stat Box */}
            <div className="lg:col-span-6 space-y-6">

              {/* Top Main Photo */}
              <div className="rounded-[2.5rem] overflow-hidden border-2 border-[#060606] shadow-md">
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

                {/* Stat Box (#7EDC14) */}
                <div className="bg-[#7EDC14] rounded-[2rem] p-6 text-[#060606] border-2 border-[#060606] shadow-md flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#060606] text-[#7EDC14] flex items-center justify-center mb-4 font-bold">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-extrabold tracking-tight mb-1 text-[#060606]">10K+</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#060606]/80 leading-snug">
                      Our Total Completed Works
                    </p>
                  </div>
                </div>

                {/* Secondary Image */}
                <div className="rounded-[2rem] overflow-hidden border-2 border-[#060606] shadow-sm">
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

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7EDC14] text-[#060606] text-xs font-extrabold uppercase tracking-wider border border-[#060606]">
                <Star className="w-3.5 h-3.5 text-[#060606] fill-current" />
                Who We Are?
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060606] leading-tight">
                Comprehensive solutions for digital &amp; software excellence
              </h2>

              <p className="text-[#060606]/80 text-sm sm:text-base leading-relaxed font-medium">
                Discover innovative software development &amp; digital engineering strategies that help businesses improve operations, increase productivity, and achieve long-term growth across Kigali and global digital markets.
              </p>

              {/* Founder/CEO Row */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full text-xs font-extrabold bg-[#060606] text-[#F9F9F9] hover:bg-[#7EDC14] hover:text-[#060606] transition-colors border border-[#060606]"
                >
                  <span>More About Us</span>
                  <span className="w-7 h-7 rounded-full bg-[#7EDC14] text-[#060606] flex items-center justify-center font-bold">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <div className="flex items-center gap-3 border-l-2 border-[#060606]/20 pl-6">
                  <div className="w-11 h-11 rounded-full bg-[#060606] text-[#F9F9F9] font-bold flex items-center justify-center text-sm shadow-sm relative overflow-hidden shrink-0 border border-[#060606]">
                    <Image
                      src="/theodev.png"
                      alt="Theogene Iradukunda"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#060606] text-sm">Theogene Iradukunda</h5>
                    <p className="text-xs text-[#060606]/70 font-semibold">CEO &amp; Founder of NeoScratch</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ── 5. Services Grid Section ("* Our Services") ── */}
      <section className="py-24 bg-[#F9F9F9]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7EDC14] text-[#060606] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#060606]">
              <Star className="w-3.5 h-3.5 text-[#060606] fill-current" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060606] mb-4">
              Experienced best modern tech services
            </h2>
            <p className="text-[#060606]/80 text-sm sm:text-base leading-relaxed font-medium">
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
                className="group relative flex flex-col p-8 rounded-[2rem] bg-[#F9F9F9] border-2 border-[#060606] shadow-sm hover:shadow-xl hover:border-[#7EDC14] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#060606] text-[#7EDC14] flex items-center justify-center group-hover:bg-[#7EDC14] group-hover:text-[#060606] transition-colors duration-300 shadow-sm font-bold">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#060606]/60 group-hover:text-[#060606] transition-colors" />
                </div>

                <h3 className="text-xl font-extrabold text-[#060606] mb-3">{service.title}</h3>
                <p className="text-[#060606]/75 text-sm leading-relaxed mb-6 flex-grow font-medium">{service.desc}</p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#060606]/10">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#7EDC14]/30 text-[11px] font-extrabold text-[#060606] border border-[#060606]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 6. Horizontal Scroll Projects Section ── */}
      <div ref={ghostRef} className="relative h-[300vh]">
        <section className="sticky top-0 h-screen overflow-hidden bg-[#060606] py-12 flex flex-col justify-center text-[#F9F9F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7EDC14] text-[#060606] text-xs font-extrabold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9F9F9]">
                Platforms &amp; Systems We&apos;ve Engineered
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7EDC14] text-[#060606] font-extrabold text-xs hover:bg-[#F9F9F9] transition-colors border border-[#7EDC14]"
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
                className="w-[82vw] sm:w-[65vw] lg:w-[48vw] flex-shrink-0 h-[420px] bg-[#060606] rounded-[2.5rem] border-2 border-[#F9F9F9]/20 overflow-hidden flex flex-col group transition-all duration-300 hover:border-[#7EDC14] cursor-pointer shadow-2xl"
              >
                <div className="h-[220px] bg-black/50 overflow-hidden relative">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#7EDC14] text-[#060606] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {p.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-[#F9F9F9] mb-2 group-hover:text-[#7EDC14] transition-colors">{p.title}</h3>
                    <p className="text-[#F9F9F9]/70 text-xs leading-relaxed line-clamp-2">{p.description}</p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-[#7EDC14] text-xs font-bold pt-4 border-t border-[#F9F9F9]/10">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>


      {/* ── 7. Testimonials Section ── */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSlider />
        </div>
      </section>

    </div>
  );
}
