'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Careers', href: '/about' },
  ],
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'SEO & Google Maps', href: '/services' },
    { name: 'Custom Software', href: '/services' },
  ],
  resources: [
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Privacy Policy', href: '/policy' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://www.x.com/theo_dev_rw', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/neoscratchltd/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/theogene-iradukunda-88b07a381/', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/theodevrwanda', icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-[#052219] text-white border-t border-white/10 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logo.png" 
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain" 
                    alt="NEOSCRATCH Logo" 
                  />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Neo<span className="text-lime-400">Scratch</span>
                </span>
              </Link>
              
              <p className="text-white/80 text-sm leading-relaxed max-w-sm font-medium">
                Empowering businesses through high-performance software engineering, web design, and digital growth strategies in Kigali, Rwanda and worldwide.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-lime-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-xs">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-lime-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+250792734752" className="font-semibold text-xs hover:text-lime-400 transition-colors">+250 792 734 752</a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-lime-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:thisisneoscratch@gmail.com" className="font-semibold text-xs hover:text-lime-400 transition-colors">thisisneoscratch@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h3 className="text-xs font-extrabold text-lime-400 uppercase tracking-widest mb-6">
                Capabilities
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-white/80 hover:text-lime-400 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold text-lime-400 uppercase tracking-widest mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-white/80 hover:text-lime-400 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold text-lime-400 uppercase tracking-widest mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-white/80 hover:text-lime-400 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/70 font-medium">
          <div>
            &copy; 2026 NEOSCRATCH INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-lime-400 hover:text-[#0b3b2d] flex items-center justify-center transition-colors"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}