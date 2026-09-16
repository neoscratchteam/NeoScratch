'use client';
import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

const footerColumns = [
  {
    title: 'PRODUCTS',
    links: [
      { name: 'Web & Mobile Apps', href: '/services' },
      { name: 'MoMo & Card Payments', href: '/services' },
      { name: 'Business Systems (ERP)', href: '/services' },
      { name: 'Google SEO & Maps', href: '/services' },
      { name: 'Server Maintenance', href: '/services' },
      { name: 'Custom APIs & Cloud', href: '/services' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'Support', href: '/contact' },
      { name: 'Developers', href: '/projects' },
      { name: 'GitHub', href: 'https://github.com/theodevrwanda', external: true },
      { name: 'Status', href: '/services' },
      { name: 'Case Studies', href: '/projects' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'Our Story', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Careers', href: '/about' },
      { name: 'Clients', href: '/#Clients' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Terms of Service', href: '/policy' },
      { name: 'Privacy Policy', href: '/policy' },
      { name: 'Service Level Agreement', href: '/policy' },
      { name: 'Acceptable Use Policy', href: '/policy' },
      { name: 'Marketplace Terms', href: '/policy' },
    ],
  },
  {
    title: 'FIND US',
    links: [
      { name: 'Facebook', href: 'https://facebook.com', external: true },
      { name: 'Twitter', href: 'https://www.x.com/theo_dev_rw', external: true },
      { name: 'Instagram', href: 'https://www.instagram.com/neoscratchltd/', external: true },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/theogene-iradukunda-88b07a381/', external: true },
      { name: 'YouTube', href: 'https://youtube.com', external: true },
      { name: 'TikTok', href: 'https://tiktok.com', external: true },
      { name: 'Slack', href: 'https://slack.com', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0B293A] text-white font-jakarta border-t border-[#0B293A]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">

        {/* 5 Column Minimal Grid (Exact Layout of Reference Image) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-14">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-[11px] font-extrabold tracking-widest text-white/90 uppercase font-jakarta">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-white/60 hover:text-white transition-colors block py-0.5 font-medium"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/60 hover:text-white transition-colors block py-0.5 font-medium"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider & Centered Copyright (Exact Style of Reference Image) */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-[12px] text-white/50 font-medium">
            NeoScratch. All rights reserved. &copy; 2026
          </p>
        </div>

      </div>
    </footer>
  );
}