'use client';

import React, { useState } from 'react';
import { Zap, Users, Sparkles, Shield, Mail, Phone, Instagram, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We create cutting-edge software and design solutions to address real-world challenges in Rwanda and beyond.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering collaboration and empowering Rwanda’s tech ecosystem through education and partnerships.',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description: 'Our work drives positive change by delivering accessible and impactful tech solutions.',
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We deliver high-quality software, designs, and networking services with precision and care.',
  },
];

const aboutData = {
  story: [
    "NeoScratch is Rwanda's premier digital engineering studio. We build modern, scalable, and high-performance digital solutions for businesses, startups, and institutions worldwide.",
    "We design and develop a wide range of custom web and mobile applications, advanced business automation tools, business analytics platforms, and open-source systems that help organizations innovate, scale efficiently, and gain real-time insights.",
    "NeoScratch combines software engineering expertise with data-driven SEO and Mobile Money payment systems, delivering state-of-the-art platforms that solve modern challenges in the digital era."
  ],
  mission: "To empower global businesses and individuals with intelligent software solutions.",
  vision: "To become a leading global software house that sets new standards for innovation.",
  founded: "2024",
  ceo: "Theogene Iradukunda"
};

const teamMembers = [
  {
    id: 1,
    name: 'Theogene Iradukunda',
    role: 'Founder & CEO',
    image: '/theodev.png',
    bio: 'As the founder of NeoScratch, I\'ve been deeply immersed in the journey of turning our vision into a thriving reality.',
    socials: { email: 'theodevrwanda@gmail.com', whatsapp: '250792734752', instagram: 'https://www.instagram.com/theodev.me' }
  },
  {
    id: 4,
    name: 'Mugisha Sam',
    role: 'Graphic Designer',
    image: '/bigsam.webp',
    bio: 'Specializing in visual storytelling and brand identity, creating impactful designs that bridge the gap between technology and art.',
    socials: { email: 'bigsamdmd@gmail.com', whatsapp: '250796395652', instagram: 'https://www.instagram.com/__bigsam_1' }
  }
];

export default function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#060606] font-jakarta">
      
      {/* 1. Hero Section (Brand Green #175A26) */}
      <section className="pt-36 sm:pt-44 pb-20 bg-[#175A26] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-widest backdrop-blur-sm border border-white/20">
                <span>About NeoScratch</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Engineering World-Class Digital Solutions
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed font-medium max-w-xl">
                A dedicated studio of engineers in Kigali building software that scales seamlessly across East Africa and global markets.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-black bg-transparent text-white border-2 border-white/30 hover:bg-white/10 transition-all"
                >
                  Our Featured Work
                </Link>
              </div>
            </div>

            {/* Right Column: unDraw Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <Image
                src="/relax.svg"
                alt="Digital Solutions Illustration"
                width={480}
                height={480}
                className="w-full h-auto object-contain max-w-md drop-shadow-xl"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission, Vision & Story Grid */}
      <section className="py-24 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Stats & Info Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-[#060606]/10 space-y-8 h-fit">
              <div>
                <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-2">MISSION</h3>
                <p className="text-base font-bold text-[#060606] leading-snug">
                  {aboutData.mission}
                </p>
              </div>

              <div className="pt-6 border-t border-[#060606]/10">
                <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-2">VISION</h3>
                <p className="text-base font-bold text-[#060606] leading-snug">
                  {aboutData.vision}
                </p>
              </div>

              <div className="pt-6 border-t border-[#060606]/10 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs font-black text-[#175A26] uppercase tracking-widest mb-1">FOUNDED</h3>
                  <p className="text-lg font-extrabold text-[#060606]">{aboutData.founded}</p>
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

            {/* Story & Paragraphs */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-[#060606]/10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#175A26] text-white text-xs font-black uppercase tracking-wider">
                  <span>OUR STORY</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060606] tracking-tight">
                  Empowering Global Business From Kigali
                </h2>

                <div className="space-y-4 text-[#334155] text-base sm:text-lg leading-relaxed font-medium">
                  {aboutData.story.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
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

      {/* 4. Leadership & Founder Section */}
      <section className="py-24 bg-white border-t border-[#060606]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E5E5E5] rounded-3xl p-8 sm:p-14 shadow-md border border-[#060606]/10">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#175A26] shrink-0 shadow-lg relative">
                <Image src="/theodev.png" alt="Theogene Iradukunda" fill className="object-cover" />
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <span className="text-xs font-black text-[#175A26] uppercase tracking-widest">FROM THE FOUNDER</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#060606] leading-snug italic">
                  &ldquo;We architect the digital engines that empower global businesses to disrupt their industries and redefine what&apos;s possible.&rdquo;
                </h3>
                <p className="text-[#334155] text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
                  Theogene Iradukunda is the driving force behind NeoScratch, leading with a vision for high-performance software engineering and scalable digital products.
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

      {/* 5. Bottom Call to Action Section (#175A26) */}
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
