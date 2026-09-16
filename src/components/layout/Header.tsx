'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Image from 'next/image';

const solutionsDropdown = [
  { name: 'Finance', href: '/services' },
  { name: 'Healthcare', href: '/services' },
  { name: 'Government tech', href: '/services' },
  { name: 'Non-profit', href: '/services' },
  { name: 'Software', href: '/services' },
  { name: 'Logistics', href: '/services' },
  { name: 'Gaming', href: '/services' },
  { name: 'Retail', href: '/services' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta">
      <div className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-[#175A26]/95 backdrop-blur-md shadow-md py-4 border-b border-white/10'
          : 'bg-[#175A26] py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          
          {/* Brand Logo (Only logo.png icon, no black background) */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform brightness-0 invert"
              priority 
            />
          </Link>

          {/* Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-extrabold text-white">
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity py-2"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity py-2"
              >
                <span>Solutions</span>
                {activeDropdown === 'solutions' ? (
                  <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>

              {/* Dropdown Card */}
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 animate-fade-in z-50">
                  <div className="bg-white rounded-2xl p-4 shadow-2xl border border-[#060606]/10 text-center space-y-2">
                    {solutionsDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1.5 text-xs font-bold text-[#060606] hover:text-white hover:bg-[#175A26] rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className="hover:opacity-80 transition-opacity py-2">
              Docs
            </Link>

            <Link href="/services" className="hover:opacity-80 transition-opacity py-2">
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 hover:opacity-80 transition-opacity py-2">
                <span>Company</span>
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </nav>

          {/* CTA Pill Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/request-website"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-extrabold bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all duration-300 shadow-sm"
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in px-4 pt-3 pb-4">
            <div className="p-4 space-y-2 bg-[#175A26] border border-white/10 rounded-2xl shadow-2xl text-white">
              <Link href="/" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Home</Link>
              <Link href="/about" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">About Us</Link>
              <Link href="/services" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Services</Link>
              <Link href="/projects" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Projects</Link>
              <div className="pt-2">
                <Link
                  href="/request-website"
                  className="block text-center px-5 py-3 rounded-xl font-extrabold bg-white text-[#175A26]"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}