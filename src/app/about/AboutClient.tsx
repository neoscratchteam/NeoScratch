'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function BlurReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0.15, y: 20 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#2B383F] font-jakarta py-32 sm:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Document Header (Matching Image 1 Clean Style) */}
        <BlurReveal>
          <div className="mb-12 border-b border-gray-200 pb-8">
            <span className="text-xs font-black text-[#175A26] uppercase tracking-widest block mb-2">
              NEOSCRATCH STORY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B383F] tracking-tight leading-tight">
              The Story Behind NeoScratch
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
              From a classroom vision at APEKI Tumba TSS to an RDB-registered digital engineering enterprise in Kigali, Rwanda.
            </p>
          </div>
        </BlurReveal>

        {/* Founder Photo Section (Cleanly Embedded) */}
        <BlurReveal>
          <div className="my-10">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-900">
              <Image 
                src="/founder.png" 
                alt="Theogene Iradukunda (theodev) - Founder & CEO of NeoScratch Web Design & Software Studio in Rwanda" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                <span className="text-white text-lg font-bold tracking-tight">Theogene Iradukunda (&ldquo;theodev&rdquo;)</span>
                <span className="text-white/80 text-xs sm:text-sm font-medium">Founder & CEO, NeoScratch Ltd</span>
              </div>
            </div>
          </div>
        </BlurReveal>

        {/* Clean Typography Body (Matching Image 1 Layout) */}
        <div className="space-y-12 text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <BlurReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2B383F] tracking-tight">
                A Spark in Tumba: The Birth of GoDigital (2024)
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.05}>
              <p>
                Every revolutionary technology company begins with a relentless desire to solve a real-world pain point. In 2024, while studying software development at <strong>APEKI Tumba TSS</strong>, a young student named <strong>Theogene Iradukunda</strong> (known to the tech world as <strong>theodev</strong>) looked around the business landscape in Rwanda and noticed a silent crisis: traditional business owners were drowning in operational risk.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.1}>
              <p>
                Shopkeepers lost cash receipts; multi-branch managers stayed up late trying to reconcile daily incomes and expenses; inventory items disappeared without a trace; and local businesses had zero online visibility to reach new clients. Driven by an unshakable conviction that clean software could eliminate business risk completely, Theogene launched a movement called <strong>GoDigital</strong> and founded <strong>RwandaScratch</strong>.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.15}>
              <p className="border-l-4 border-[#175A26] pl-6 py-2 text-[#0F172A] italic font-medium my-6 text-base sm:text-lg">
                &ldquo;When you are young and without paying clients, your only currency is relentless practice. I built software after software late into the night—not for money, but to ensure that when our first client arrived, our code would be unbreakable.&rdquo;
              </p>
            </BlurReveal>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-8 border-t border-gray-100">
            <BlurReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2B383F] tracking-tight">
                The Crucible: PixelMart & The Full-Stack Evolution (2025)
              </h2>
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

          {/* Section 3 */}
          <div className="space-y-4 pt-8 border-t border-gray-100">
            <BlurReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2B383F] tracking-tight">
                The Name Evolution: Why &ldquo;NeoScratch&rdquo;?
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.05}>
              <p>
                During RDB registration, official guidelines stipulated that national terms like &ldquo;Rwanda&rdquo; could not be used in commercial company names. Theogene had to rename <em>RwandaScratch</em>. Rather than choosing a generic name, he meditated on two sacred principles that defined his engineering philosophy:
              </p>
            </BlurReveal>

            <div className="space-y-4 pt-2">
              <BlurReveal delay={0.1}>
                <p>
                  <strong>NEO:</strong> Derived from the Greek word for <em>New, Modern & Next-Generation</em>—representing futuristic software engineering that propels businesses into the global digital age.
                </p>
              </BlurReveal>

              <BlurReveal delay={0.15}>
                <p>
                  <strong>SCRATCH:</strong> A sacred promise that <em>we build every application custom from scratch</em>. No copied templates, no bloatware—100% tailored to solve each client&apos;s unique operational needs.
                </p>
              </BlurReveal>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 pt-8 border-t border-gray-100">
            <BlurReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2B383F] tracking-tight">
                March 2026: An RDB Enterprise Leading Digital Transformation
              </h2>
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

        {/* CTA Footer */}
        <BlurReveal delay={0.2}>
          <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#2B383F]">Ready to build your next software solution?</h3>
              <p className="text-sm text-[#64748B] font-medium">Let&apos;s turn your business vision into high-performance code.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-black bg-[#175A26] text-white hover:bg-[#060606] transition-all shadow-md shrink-0"
            >
              Get In Touch
            </Link>
          </div>
        </BlurReveal>

      </div>
    </div>
  );
}
