'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, CheckCircle2, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta">
      {/* Top Bar (Bright Lime Green) */}
      <div className="bg-[#a3e635] text-[#0b3b2d] text-xs py-2 font-semibold hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 fill-[#0b3b2d] text-[#a3e635]" />
              We&apos;re top software &amp; web development agency
            </span>
            <a href="mailto:example@biztop.com" className="flex items-center gap-1.5 hover:underline transition-all">
              <Mail className="w-3.5 h-3.5" />
              example@biztop.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us —</span>
            <a href="#" className="hover:opacity-75 transition-opacity"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:opacity-75 transition-opacity"><Twitter className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:opacity-75 transition-opacity"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:opacity-75 transition-opacity"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b3b2d]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
          : 'bg-[#0b3b2d] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Image 
                src="/logo.png" 
                width={28}
                height={28}
                className="h-7 w-7 object-contain" 
                alt="NEOSCRATCH Logo" 
                priority
              />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Neo<span className="text-lime-400">Scratch</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-lime-400 text-[#0b3b2d] shadow-sm'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Pill Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/request-website"
              className="inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full text-xs font-extrabold bg-[#0b3b2d] text-white border-2 border-lime-400 shadow-md hover:bg-[#07261d] transition-all duration-300 hover:scale-[1.03] group"
            >
              <span className="text-white font-bold">Request Website</span>
              <span className="w-7 h-7 rounded-full bg-lime-400 text-[#0b3b2d] flex items-center justify-center font-black text-xs group-hover:translate-x-0.5 transition-transform">
                »
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/20"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in px-4 pt-3 pb-4">
            <div className="p-4 space-y-2 bg-[#06261d] border border-white/10 rounded-2xl shadow-2xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    pathname === item.href
                      ? 'bg-lime-400 text-[#0b3b2d]'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/request-website"
                  className="flex items-center justify-between px-5 py-3 rounded-xl font-bold bg-lime-400 text-[#0b3b2d]"
                >
                  <span>Request Website</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}