'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const tableData = [
    {
      category: "Timeline & Essentials",
      items: [
        { name: "Timeline / Turnaround", values: ["3 business days", "7 business days", "2 weeks", "3 weeks", "30–90 days"] },
        { name: "Free Hosting & Maintenance", values: ["1 month free", "3 months free", "4 months free", "12 months free", "12–24 months free"] },
        { name: "Free Domain (.RW / .COM / .NET)", values: [false, true, true, true, true] },
        { name: "SSL Certificate & Global CDN Support", values: [true, true, true, true, true] },
      ]
    },
    {
      category: "Web & System Engineering",
      items: [
        { name: "Custom Responsive Web Application", values: [true, true, true, true, true] },
        { name: "Corporate Business Website & Service Pages", values: [false, true, true, true, true] },
        { name: "SaaS Architecture & Multi-Page Structure", values: [false, false, true, true, true] },
        { name: "Custom Admin Panel / Dashboard", values: [false, true, true, true, true] },
        { name: "Speed Optimization & Secure CMS", values: [false, true, true, true, true] },
        { name: "24/7 Database & Uptime Monitoring", values: [false, true, true, true, true] },
        { name: "Personal High-End Portfolio & Motion", values: [true, true, true, true, true] },
      ]
    },
    {
      category: "E-Commerce & Digital Payments",
      items: [
        { name: "Modern E-Commerce Store & Inventory Tools", values: [false, true, true, true, true] },
        { name: "Order via WhatsApp & Email Forms", values: [false, true, true, true, true] },
        { name: "Online Payment (MTN MoMo & Airtel Money)", values: [false, false, true, true, true] },
        { name: "Products Loaded & Photographed", values: [false, "up to 20", "up to 50", "unlimited", "unlimited"] },
        { name: "SMS Notifications & SMS Gateway", values: [false, false, false, false, true] },
      ]
    },
    {
      category: "SEO & Digital Strategy",
      items: [
        { name: "Full SEO Setup & Meta Keyword Indexing", values: ["full setup", "deep", "deep", "deep", "deep"] },
        { name: "Google Business Profile Setup & Takeover", values: ["full takeover", true, true, true, true] },
        { name: "Google Ads & Instagram Shopping Setup", values: [false, false, false, true, true] },
        { name: "Digital Transformation & Tech Audits", values: [false, false, true, true, true] },
      ]
    },
    {
      category: "Advanced Native Apps & Systems",
      items: [
        { name: "Mobile App Engineering (iOS & Android)", values: [false, false, false, false, true] },
        { name: "Enterprise Desktop Apps (Windows & macOS)", values: [false, false, false, false, true] },
        { name: "Offline Functionality & Native System APIs", values: [false, false, false, false, true] },
        { name: "API & Lead Automation Integration", values: [false, false, true, true, true] },
      ]
    },
    {
      category: "Special Solutions, Maintenance & Coaching",
      items: [
        { name: "Cloud Database Migration (Zero Downtime)", values: [false, false, true, true, true] },
        { name: "NGO Platforms & Secure Online Donations", values: [false, false, true, true, true] },
        { name: "Startup MVP Development & Pitch Decks", values: [false, false, false, true, true] },
        { name: "Premium UI/UX Design Systems & Prototypes", values: [false, true, true, true, true] },
        { name: "Tech Coaching & Fullstack Mentorship", values: [false, false, false, true, true] },
        { name: "Security Updates, Bug Fixes & Technical Maintenance", values: [true, true, true, true, true] },
        { name: "Dedicated Retainer / Tech Lead Included", values: [false, false, false, false, true] },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#060606] font-jakarta">
      {/* 🚀 HERO SECTION (Brand Green #175A26) */}
      <section className="pt-36 sm:pt-44 pb-20 lg:pb-28 bg-[#175A26] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-widest">
                <span>Digital Engineering &amp; Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Innovate with Precision. <br /> Scale with NeoScratch.
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-medium">
                We provide world-class software engineering, e-commerce systems, SEO, and custom digital tools tailored for businesses across Rwanda &amp; global markets.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/request-website"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
                >
                  Get Proposal
                </Link>
              </div>
            </div>

            {/* Right Column: unDraw Handshake Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <img
                src="/handshake.svg"
                alt="NeoScratch Services &amp; Partnerships"
                className="w-full h-auto object-contain max-w-md drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 📊 COMPREHENSIVE EVERYTHING SIDE BY SIDE COMPARISON MATRIX */}
      <section className="py-20 lg:py-28 bg-white border-t border-b border-[#060606]/10 font-jakarta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#060606] tracking-tight font-jakarta">
              Everything, side by side.
            </h2>
            <p className="text-sm sm:text-base text-[#334155] font-medium mt-3">
              Compare all features, turnarounds, hosting, and exact pricing across our project tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#060606]/10 shadow-sm bg-white w-full">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead className="sticky top-[72px] z-30 bg-gray-50 border-b border-[#060606]/10 shadow-md">
                <tr className="border-b border-[#060606]/10">
                  <th className="sticky top-[72px] z-30 bg-gray-50 py-5 px-6 text-[11px] font-black uppercase tracking-widest text-[#060606]/60 w-[22%] shadow-xs">
                    FEATURE / SERVICE
                  </th>
                  <th className="sticky top-[72px] z-30 bg-gray-50 py-5 px-6 w-[15.6%] shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 01</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">SEO &amp; GOOGLE SETUP</span>
                    <span className="text-sm font-black text-[#175A26] block mt-1.5">from 50,000 RWF</span>
                  </th>
                  <th className="sticky top-[72px] z-30 bg-gray-50 py-5 px-6 w-[15.6%] shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 02</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">STARTER E-COMMERCE</span>
                    <span className="text-sm font-black text-[#175A26] block mt-1.5">from 200,000 RWF</span>
                  </th>
                  <th className="sticky top-[72px] z-30 bg-gray-50 py-5 px-6 w-[15.6%] shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 03</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">BUSINESS SYSTEM</span>
                    <span className="text-sm font-black text-[#175A26] block mt-1.5">from 350,000 RWF</span>
                  </th>
                  <th className="sticky top-[72px] z-30 bg-gray-50 py-5 px-6 w-[15.6%] shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 04</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">GROWTH SYSTEM</span>
                    <span className="text-sm font-black text-[#175A26] block mt-1.5">from 450,000 RWF</span>
                  </th>
                  <th className="sticky top-[72px] z-30 bg-gray-50 py-5 px-6 w-[15.6%] shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 05</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">ENTERPRISE BUILD</span>
                    <span className="text-sm font-black text-[#175A26] block mt-1.5">from 750,000 RWF</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#060606]/10 text-xs sm:text-sm text-[#060606]">
                {tableData.map((section, secIdx) => (
                  <React.Fragment key={secIdx}>
                    <tr className="bg-[#175A26]/5 border-t border-b border-[#175A26]/20">
                      <td colSpan={6} className="py-3 px-6 font-black text-[#175A26] text-xs uppercase tracking-wider">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((row, rowIdx) => (
                      <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                        <td className="py-4 px-6 font-semibold text-[#060606]">{row.name}</td>
                        {row.values.map((val, colIdx) => (
                          <td key={colIdx} className="py-4 px-6 font-medium text-[#334155]">
                            {typeof val === 'boolean' ? (
                              val ? (
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#175A26] text-white shadow-xs">
                                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                                </span>
                              ) : (
                                <span className="text-gray-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-bold text-[#060606]">{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-24 bg-[#175A26] text-white border-t border-[#060606]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-jakarta">
             Scale Your Innovation Globally
           </h2>
           <p className="text-base lg:text-lg text-white/80 font-medium max-w-2xl mx-auto">
             Whether you&apos;re a startup or an enterprise, we have the software engineering expertise to help you build the future.
           </p>
           <div className="flex flex-wrap gap-4 justify-center pt-2">
             <Link
               href="/contact"
               className="px-8 py-3.5 rounded-full text-sm font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all shadow-lg"
             >
               Get a Custom Proposal
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

