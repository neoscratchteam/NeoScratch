'use client';

import React, { useState } from 'react';
import { Zap, Users, Sparkles, Shield, Building2, Code2, Award, Rocket, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function BlurReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ filter: 'blur(12px)', opacity: 0.1, y: 28 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

const timelineMilestones = [
  {
    year: '2024',
    badge: 'GoDigital & Student Roots',
    title: 'The Origin of RwandaScratch',
    description: 'Driven by a vision to reduce business operational risks (tracking sales, managing branches, monitoring income/expenses), young software development student Theogene Iradukunda (theodev) launched RwandaScratch at APEKI Tumba TSS. He built countless software applications to sharpen his skills and build real-world experience.',
    icon: Code2,
  },
  {
    year: '2025',
    badge: 'First Commercial Client',
    title: 'PixelMart ERP & Full-Stack Evolution',
    description: 'Evolving into a full-stack engineer, Theogene secured his first paid commercial software contract for PixelMart (a multi-branch retail management system). Recognizing his long-term mission, he decided to formalize the business with the Rwanda Development Board (RDB).',
    icon: Award,
  },
  {
    year: '2026',
    badge: 'RDB Registration & Brand Evolution',
    title: 'The Birth of NeoScratch',
    description: 'During RDB registration, guidelines required removing "Rwanda" from the company name. Theogene created NeoScratch: "NEO" representing modern futuristic tech, and "SCRATCH" representing building every software custom from scratch. In March 2026, NeoScratch became an officially registered RDB enterprise.',
    icon: Building2,
  },
];

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We create cutting-edge software and design solutions to address real-world challenges in Rwanda and beyond.',
  },
  {
    icon: Users,
    title: 'Custom Engineering',
    description: 'We build every system from scratch—tailored 100% to client specifications without relying on generic templates.',
  },
  {
    icon: Sparkles,
    title: 'Digital Impact',
    description: 'Our GoDigital philosophy empowers businesses to eliminate operational risks and gain online visibility through SEO.',
  },
  {
    icon: Shield,
    title: 'RDB Certified Integrity',
    description: 'Operating as a fully registered Rwanda Development Board enterprise with professional tax compliance.',
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'Theogene Iradukunda',
    role: 'Founder & CEO (theodev)',
    image: '/theodev.png',
    bio: 'Former APEKI Tumba TSS student and full-stack software engineer who founded RwandaScratch in 2024 and built NeoScratch into an RDB-registered digital engineering studio in Kigali.',
    socials: { email: 'thisisneoscratch@gmail.com', whatsapp: '250792734752', instagram: 'https://www.instagram.com/theodev.me' }
  },
  {
    id: 2,
    name: 'Mugisha Samuel',
    role: 'Graphic Designer',
    image: '/bigsam.webp',
    bio: 'Specializing in visual storytelling and brand identity, creating impactful designs that bridge the gap between technology and art.',
    socials: { email: 'bigsamdmd@gmail.com', whatsapp: '250796395652', instagram: 'https://www.instagram.com/__bigsam_1' }
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#060606] font-jakarta">
      
      {/* 1. Hero Section (Brand Green #175A26) */}
      <section className="pt-36 sm:pt-44 pb-20 bg-[#175A26] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-widest backdrop-blur-sm border border-white/20">
                <span>The NeoScratch Story</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Built From Scratch. <br />
                Driven By Innovation.
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed font-medium max-w-xl">
                The story of how a young student innovator at APEKI Tumba TSS built RwandaScratch in 2024 into NeoScratch—an RDB-registered digital engineering studio in Kigali, Rwanda.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-black bg-transparent text-white border-2 border-white/30 hover:bg-white/10 transition-all"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <Image
                src="/relax.svg"
                alt="NeoScratch Digital Engineering Studio - Custom Web Design & Software in Rwanda"
                width={480}
                height={480}
                className="w-full h-auto object-contain max-w-md drop-shadow-xl"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Narrative Story & Mission */}
      <section className="py-24 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Stats, Info Card & Founder Photo */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-[#060606]/10 space-y-8 h-fit lg:sticky lg:top-32">
              
              {/* Founder Image Showcase */}
              <div className="space-y-4 text-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#175A26]/20 bg-slate-900 group">
                  <Image 
                    src="/founder.png" 
                    alt="Theogene Iradukunda (theodev) - Founder & CEO of NeoScratch Web Design & Software Studio in Rwanda" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-left">
                    <span className="text-white text-base font-extrabold tracking-tight">Theogene Iradukunda</span>
                    <span className="text-white/80 text-xs font-semibold">Founder & CEO (&ldquo;theodev&rdquo;)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-2">OUR MISSION</h3>
                <p className="text-base font-bold text-[#060606] leading-snug">
                  To eliminate business risks through custom software engineering, GoDigital automation, and ranking client platforms #1 on Google with SEO.
                </p>
              </div>

              <div className="pt-6 border-t border-[#060606]/10">
                <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-2">LEGAL STATUS</h3>
                <p className="text-base font-bold text-[#060606] leading-snug">
                  Officially Registered Enterprise with Rwanda Development Board (RDB) since March 2026.
                </p>
              </div>

              <div className="pt-6 border-t border-[#060606]/10 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-1">FOUNDED</h3>
                  <p className="text-lg font-extrabold text-[#060606]">2024</p>
                </div>
                <div>
                  <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-1">HEADQUARTERS</h3>
                  <p className="text-base font-extrabold text-[#060606]">Kigali, Rwanda</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#060606]/10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-black bg-[#175A26] text-white hover:bg-[#060606] transition-all shadow-md"
                >
                  Discuss A Project
                </Link>
              </div>
            </div>

            {/* Detailed Story Narrative with Scroll-Driven Blur Reveal */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-[#060606]/10 space-y-6">
                
                <BlurReveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#175A26] text-white text-xs font-black uppercase tracking-wider mb-2">
                    <span>THE UNSTOPPABLE STORY OF NEOSCRATCH</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                    From a Classroom Vision in Tumba to an RDB Digital Engineering Leader
                  </h2>
                </BlurReveal>

                <div className="space-y-10 text-[#475569] text-base sm:text-lg leading-relaxed font-medium pt-4">
                  
                  {/* Chapter 1 */}
                  <div className="space-y-4">
                    <BlurReveal>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#175A26] text-white text-sm font-extrabold flex items-center justify-center shrink-0">1</span>
                        A Spark in Tumba: The Birth of GoDigital (2024)
                      </h3>
                    </BlurReveal>

                    <BlurReveal delay={0.05}>
                      <p>
                        Every revolutionary technology company begins with a relentless desire to solve a real-world pain point. In 2024, while studying software development at <strong>APEKI Tumba TSS</strong>, a young student named <strong>Theogene Iradukunda</strong> (known to the tech world as <strong>theodev</strong>) looked around the business landscape in Rwanda and noticed a silent crisis: traditional business owners were drowning in operational risk.
                      </p>
                    </BlurReveal>

                    <BlurReveal delay={0.1}>
                      <p>
                        Shopkeepers lost cash receipts; multi-branch managers stayed up late trying to reconcile daily incomes and expenses; inventory items disappeared without a trace; and local businesses had zero online visibility to reach new clients. Driven by an unshakable conviction that <em>clean software could eliminate business risk completely</em>, Theogene launched a movement called <strong>GoDigital</strong> and founded <strong>RwandaScratch</strong>.
                      </p>
                    </BlurReveal>

                    <BlurReveal delay={0.15}>
                      <p className="bg-[#175A26]/5 p-5 sm:p-6 rounded-2xl border-l-4 border-[#175A26] text-[#0F172A] italic font-semibold text-base sm:text-lg my-4 shadow-sm">
                        &ldquo;When you are young and without paying clients, your only currency is relentless practice. I built software after software late into the night—not for money, but to ensure that when our first client arrived, our code would be unbreakable.&rdquo;
                      </p>
                    </BlurReveal>
                  </div>

                  {/* Chapter 2 */}
                  <div className="space-y-4 pt-6 border-t border-[#060606]/10">
                    <BlurReveal>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#175A26] text-white text-sm font-extrabold flex items-center justify-center shrink-0">2</span>
                        The Crucible: PixelMart & The Full-Stack Evolution (2025)
                      </h3>
                    </BlurReveal>

                    <BlurReveal delay={0.05}>
                      <p>
                        After thousands of hours mastering database architecture, front-end design, and API security, 2025 brought the defining breakthrough. <strong>PixelMart</strong>, a fast-growing electronics retail enterprise, needed a complex multi-branch retail management system (ERP & BMS) to track sales, synchronize stock in real-time, and manage employee activity across branches.
                      </p>
                    </BlurReveal>

                    <BlurReveal delay={0.1}>
                      <p>
                        Theogene took on the challenge as a full-stack engineer and delivered a flawless system built from scratch. For PixelMart, it meant total clarity and zero financial leaks. For Theogene, it was the spark that transformed a student passion into a serious commercial career. He immediately decided to formalize the company with the <strong>Rwanda Development Board (RDB)</strong> to ensure full tax compliance and corporate reliability.
                      </p>
                    </BlurReveal>
                  </div>

                  {/* Chapter 3 */}
                  <div className="space-y-4 pt-6 border-t border-[#060606]/10">
                    <BlurReveal>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#175A26] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#175A26] text-white text-sm font-extrabold flex items-center justify-center shrink-0">3</span>
                        The Name Evolution: Why &ldquo;NeoScratch&rdquo;?
                      </h3>
                    </BlurReveal>

                    <BlurReveal delay={0.05}>
                      <p>
                        During RDB registration, official guidelines stipulated that national terms like &ldquo;Rwanda&rdquo; could not be used in commercial company names. Theogene had to rename <em>RwandaScratch</em>. Rather than choosing a generic name, he meditated on two sacred principles that defined his engineering philosophy:
                      </p>
                    </BlurReveal>

                    <div className="space-y-3 pt-2">
                      <BlurReveal delay={0.1}>
                        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                          <strong className="text-[#175A26] font-extrabold text-xl shrink-0">NEO:</strong>
                          <span>Derived from the Greek word for <em>New, Modern & Next-Generation</em>—representing futuristic software engineering that propels businesses into the global digital age.</span>
                        </div>
                      </BlurReveal>

                      <BlurReveal delay={0.15}>
                        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                          <strong className="text-[#175A26] font-extrabold text-xl shrink-0">SCRATCH:</strong>
                          <span>A sacred promise that <em>we build every application custom from scratch</em>. No copied templates, no bloatware—100% tailored to solve each client&apos;s unique operational needs.</span>
                        </div>
                      </BlurReveal>
                    </div>
                  </div>

                  {/* Chapter 4 */}
                  <div className="space-y-4 pt-6 border-t border-[#060606]/10">
                    <BlurReveal>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#175A26] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#175A26] text-white text-sm font-extrabold flex items-center justify-center shrink-0">4</span>
                        March 2026: An RDB Enterprise Leading Digital Transformation
                      </h3>
                    </BlurReveal>

                    <BlurReveal delay={0.05}>
                      <p>
                        In <strong>March 2026</strong>, NeoScratch was officially incorporated with the Rwanda Development Board as a registered digital engineering studio. What started as a young student&apos;s dream at APEKI Tumba TSS has grown into a powerful engine in Kigali, leading a team of engineers and designers.
                      </p>
                    </BlurReveal>

                    <BlurReveal delay={0.1}>
                      <p>
                        Today, NeoScratch crafts world-class web applications, native iOS & Android mobile apps, custom business ERPs, and drives strategic SEO campaigns that rank client websites #1 on Google. We remain obsessed with one mission: <strong>building digital engines that eliminate business risk and scale revenues globally.</strong>
                      </p>
                    </BlurReveal>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Milestone Timeline */}
      <section className="py-24 bg-white border-t border-[#060606]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black text-[#175A26] uppercase tracking-widest">COMPANY MILESTONES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060606] tracking-tight">
              Our Growth Journey Year by Year
            </h2>
            <p className="text-[#334155] text-base font-medium">
              From student projects at APEKI Tumba TSS to an RDB-registered software studio in Kigali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="bg-[#E5E5E5] rounded-3xl p-8 border border-[#060606]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#175A26]">{m.year}</span>
                    <div className="h-10 w-10 rounded-2xl bg-[#175A26]/10 flex items-center justify-center text-[#175A26]">
                      <m.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#175A26]/10 text-[#175A26] text-xs font-black uppercase tracking-wider">
                    {m.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#060606] tracking-tight">{m.title}</h3>
                  <p className="text-sm font-medium text-[#334155] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Core Philosophy */}
      <section className="py-20 bg-[#E5E5E5] border-t border-[#060606]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060606]">Our Core Philosophy</h2>
            <p className="text-[#334155] text-base font-medium">The principles that guide our software engineering and design excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-[#060606]/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-[#175A26]/10 flex items-center justify-center text-[#175A26] mb-6 group-hover:bg-[#175A26] group-hover:text-white transition-colors">
                  <v.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-extrabold text-[#060606] mb-3">{v.title}</h4>
                <p className="text-[#334155] text-sm leading-relaxed font-medium">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Leadership & Founder Section */}
      <section className="py-24 bg-white border-t border-[#060606]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E5E5E5] rounded-3xl p-8 sm:p-14 shadow-md border border-[#060606]/10">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#175A26] shrink-0 shadow-lg relative">
                <Image 
                  src="/theodev.png" 
                  alt="Theogene Iradukunda (theodev) - Founder & CEO of NeoScratch Web Design & Software Studio in Rwanda" 
                  fill 
                  className="object-cover" 
                />
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <span className="text-xs font-black text-[#175A26] uppercase tracking-widest">FROM THE FOUNDER</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#060606] leading-snug italic">
                  &ldquo;We build every software system from scratch to eliminate business risks, streamline branch operations, and propel our clients to #1 on Google.&rdquo;
                </h3>
                <p className="text-[#334155] text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
                  <strong>Theogene Iradukunda (theodev)</strong> is the Founder & CEO of NeoScratch. Starting his journey at APEKI Tumba TSS, he has grown NeoScratch into a premier RDB-registered software engineering studio in Kigali.
                </p>
                <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                  <a
                    href="https://www.linkedin.com/in/theogene-iradukunda-88b07a381/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-[#175A26] text-white text-xs font-extrabold hover:bg-[#060606] transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://x.com/theo_dev_rw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-[#060606] text-white text-xs font-extrabold hover:bg-[#175A26] transition-colors"
                  >
                    Twitter / X
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action Section (#175A26) */}
      <section className="py-24 bg-[#175A26] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Bring Your Vision to Market?
          </h2>
          <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
            Partner with engineering experts. From web platforms to mobile apps and SEO dominance, we lead the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/request-website"
              className="px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-black bg-transparent text-white border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
