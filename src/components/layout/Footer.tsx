'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/join-us' },
    { name: 'Partnerships', href: '/partnerships' },
  ],
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'Programming Courses', href: '/services' },
    { name: 'Tech Consulting', href: '/services' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Testimonials', href: '/testimonials' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https:///www.x.com/theo_dev_rw', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/neoscratch/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/theogene-iradukunda-88b07a381/', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/theodevrwanda', icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <Link href="/" className="inline-block group">
                <span className="font-outfit text-2xl font-black tracking-tighter text-white uppercase transition-all">
                  NEOSCRATCH
                </span>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-extrabold -mt-1 group-hover:text-white transition-colors">Software House</p>
              </Link>
              
              <p className="text-white/60 text-sm leading-relaxed max-w-sm font-medium">
                Empowering global businesses through high-performance software engineering and digital transformation. Based in Kigali, serving the world.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center space-x-4 text-sm text-white/70 group cursor-default">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-semibold tracking-wide">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-white/70 group cursor-default">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-semibold tracking-wide">+250 792 734 752</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-white/70 group cursor-default">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-semibold tracking-wide">customerservice@neoscratch.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links - Refined Typography */}
            <div>
              <h3 className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] mb-8">
                Capabilities
              </h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] mb-8">
                Network
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] mb-8">
                Knowledge
              </h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Ultra Minimalist */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
              © 2024 NEOSCRATCH INC. ENGINEERED FOR GLOBAL IMPACT.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/20 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}