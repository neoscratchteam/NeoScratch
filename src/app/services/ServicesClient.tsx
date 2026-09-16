'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
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

            {/* Right Column: unDraw Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <img
                src="/relax.svg"
                alt="Services Illustration"
                className="w-full h-auto object-contain max-w-md drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 📊 EVERYTHING, SIDE BY SIDE COMPARISON MATRIX */}
      <section className="py-20 lg:py-28 bg-white border-t border-b border-[#060606]/10 font-jakarta overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#060606] tracking-tight font-jakarta">
              Everything, side by side.
            </h2>
            <p className="text-sm sm:text-base text-[#334155] font-medium mt-3">
              Compare features, timelines, and exact pricing for every project tier.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#060606]/10 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-[#060606]/10 bg-gray-50/50">
                  <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest text-[#060606]/50 w-1/5">
                    FEATURE
                  </th>
                  <th className="py-6 px-6 w-1/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 01</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">SEO &amp; STARTER SETUP</span>
                  </th>
                  <th className="py-6 px-6 w-1/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 02</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">E-COMMERCE WEBSITE</span>
                  </th>
                  <th className="py-6 px-6 w-1/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 03</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">BUSINESS SYSTEM</span>
                  </th>
                  <th className="py-6 px-6 w-1/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#175A26] block mb-1">TIER 04</span>
                    <span className="text-xs font-extrabold uppercase text-[#060606] block">ENTERPRISE CUSTOM BUILD</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#060606]/10 text-xs sm:text-sm text-[#060606]">
                {/* Price row */}
                <tr className="bg-white font-black">
                  <td className="py-4 px-6 font-bold text-[#060606]">Price</td>
                  <td className="py-4 px-6 text-sm font-extrabold text-[#175A26]">50,000 RWF</td>
                  <td className="py-4 px-6 text-sm font-extrabold text-[#175A26]">200,000 RWF</td>
                  <td className="py-4 px-6 text-sm font-extrabold text-[#175A26]">350,000 RWF</td>
                  <td className="py-4 px-6 text-sm font-extrabold text-[#175A26]">from 750,000 RWF</td>
                </tr>

                {/* Timeline row */}
                <tr className="bg-gray-50/30">
                  <td className="py-4 px-6 font-bold text-[#060606]">Timeline</td>
                  <td className="py-4 px-6 font-medium text-[#334155]">3 business days</td>
                  <td className="py-4 px-6 font-medium text-[#334155]">7 business days</td>
                  <td className="py-4 px-6 font-medium text-[#334155]">2 weeks</td>
                  <td className="py-4 px-6 font-medium text-[#334155]">30–90 days</td>
                </tr>

                {/* Feature rows */}
                {[
                  { name: "Custom website", values: [true, true, true, true] },
                  { name: "Google Business Profile", values: [true, "full takeover", true, true] },
                  { name: "MoMo and Airtel Money checkout", values: [false, true, true, true] },
                  { name: "12 months of hosting", values: [true, true, true, true] },
                  { name: "SEO foundations", values: ["full setup", "deep", "deep", "deep"] },
                  { name: "Blog content pieces written", values: [false, "5", "5", "5"] },
                  { name: "Google reviews campaign", values: [false, true, true, true] },
                  { name: "Monthly performance reports", values: [false, "3 months", "3 months", "12 months"] },
                  { name: "Online store", values: [false, true, true, true] },
                  { name: "Products loaded and photographed", values: [false, "up to 20", "up to 50", "up to 50"] },
                  { name: "Google Ads and Instagram Shopping", values: [false, false, true, true] },
                  { name: "First 200,000 RWF of ad spend", values: [false, false, true, true] },
                  { name: "Custom software, web and Android", values: [false, false, true, true] },
                  { name: "12-month retainer included", values: [false, false, false, true] },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                    <td className="py-4 px-6 font-semibold text-[#060606]">{row.name}</td>
                    {row.values.map((val, colIdx) => (
                      <td key={colIdx} className="py-4 px-6 font-medium text-[#334155]">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#175A26] text-white">
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
