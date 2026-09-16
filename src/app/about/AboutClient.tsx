'use client';

import React, { useState } from 'react';
import { Zap, Users, Sparkles, Shield, Building2, Code2, Award, Rocket, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
            
            {/* Sidebar Stats & Info Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-[#060606]/10 space-y-8 h-fit">
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

            {/* Detailed Story Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-[#060606]/10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#175A26] text-white text-xs font-black uppercase tracking-wider">
                  <span>THE STORY BEHIND NEOSCRATCH</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060606] tracking-tight">
                  From Student Innovation to RDB-Registered Enterprise
                </h2>

                <div className="space-y-5 text-[#334155] text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Every great company starts with a vision to solve a real-world problem. NeoScratch began with a young innovator who noticed how traditional businesses struggled daily with operational risks—manual inventory tracking, unmonitored branch activities, untracked income and expenses, and a total lack of online visibility.
                  </p>

                  <p>
                    Firmly believing that modern software could eliminate business risks through automation, <strong>Theogene Iradukunda</strong> (known as <strong>theodev</strong>) launched a initiative called <strong>GoDigital</strong> and established <strong>RwandaScratch</strong> in <strong>2024</strong> while studying software development at <strong>APEKI Tumba TSS</strong>. As a young student, he engineered multiple software applications to sharpen his skills and gain real-world experience, preparing for the day he would serve paying clients.
                  </p>

                  <p>
                    By <strong>2025</strong>, Theogene matured into a full-stack engineer and built his first paid commercial software system for <strong>PixelMart</strong>—a multi-branch retail management ERP. Taking his tech career seriously, he decided to formalize the business by registering it with the <strong>Rwanda Development Board (RDB)</strong> to ensure tax compliance and official corporate status in Rwanda.
                  </p>

                  <p>
                    During RDB business registration, official guidelines required removing the national keyword &ldquo;Rwanda&rdquo; from the commercial name. Theogene carefully chose a new name by combining two core principles: <strong>NEO</strong> (representing modern, futuristic digital technology) and <strong>SCRATCH</strong> (representing building every software solution custom from scratch, tailored 100% to client specifications without copying generic templates). Thus, <strong>NeoScratch</strong> was born!
                  </p>

                  <p>
                    In <strong>March 2026</strong>, NeoScratch officially became a fully registered enterprise with RDB. Today, Founder & CEO Theogene Iradukunda leads a growing team of engineers and designers in Kigali, delivering high-converting websites, native iOS & Android mobile apps, custom business ERPs, and strategic SEO campaigns that help businesses grow with confidence.
                  </p>
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
