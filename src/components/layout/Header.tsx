'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
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
      <div className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-[#175A26]/95 backdrop-blur-md shadow-md py-4 border-b border-white/10'
          : 'bg-[#175A26] py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          
          {/* Brand Logo (Only logo.png icon) */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="NeoScratch Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform brightness-0 invert"
              priority 
            />
          </Link>

          {/* Clean Desktop Navigation Links (No Dropdowns) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-extrabold text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2 transition-all duration-200 relative ${
                    isActive 
                      ? 'text-white font-black' 
                      : 'text-white/90 hover:text-white hover:opacity-80'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Pill Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/request-website"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-black bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all duration-300 shadow-sm"
            >
              Get your website
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in px-4 pt-3 pb-4">
            <div className="p-4 space-y-2 bg-[#175A26] border border-white/10 rounded-2xl shadow-2xl text-white font-jakarta">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${
                    pathname === link.href ? 'bg-white text-[#175A26]' : 'hover:bg-white/10 text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/request-website"
                  className="block text-center px-5 py-3 rounded-xl font-extrabold bg-white text-[#175A26]"
                >
                  Get your website
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}