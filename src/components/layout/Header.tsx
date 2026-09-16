'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

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
      <div className={`transition-all duration-300 ${isScrolled
          ? 'bg-[#F9F9F9]/95 backdrop-blur-md shadow-md py-4 border-b border-[#060606]/10'
          : 'bg-[#F9F9F9] py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">

          {/* Brand Logo (Matching neoscratch circular play icon style) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#060606] text-[#7EDC14] flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-105 transition-transform pl-0.5">
              ▶
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#060606]">
              neoscratch
            </span>
          </Link>

          {/* Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-extrabold text-[#060606]">

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className="flex items-center gap-1.5 hover:opacity-75 transition-opacity py-2"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Solutions Dropdown (Openable with exact items from reference screenshot) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 hover:opacity-75 transition-opacity py-2"
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
                        className="block py-1.5 text-xs font-bold text-[#060606] hover:text-[#7EDC14] hover:bg-[#060606] rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className="hover:opacity-75 transition-opacity py-2">
              Docs
            </Link>

            <Link href="/services" className="hover:opacity-75 transition-opacity py-2">
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 hover:opacity-75 transition-opacity py-2">
                <span>Company</span>
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </nav>

          {/* CTA Pill Button: "Go to Dashboard" / "Request Website" */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/request-website"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-extrabold bg-[#060606] text-[#F9F9F9] hover:bg-[#7EDC14] hover:text-[#060606] transition-all duration-300 shadow-md border border-[#060606]"
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#060606] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in px-4 pt-3 pb-4">
            <div className="p-4 space-y-2 bg-[#F9F9F9] border border-[#060606]/10 rounded-2xl shadow-2xl text-[#060606]">
              <Link href="/" className="block px-4 py-2 font-bold hover:bg-[#7EDC14]">Home</Link>
              <Link href="/about" className="block px-4 py-2 font-bold hover:bg-[#7EDC14]">About Us</Link>
              <Link href="/services" className="block px-4 py-2 font-bold hover:bg-[#7EDC14]">Services</Link>
              <Link href="/projects" className="block px-4 py-2 font-bold hover:bg-[#7EDC14]">Projects</Link>
              <div className="pt-2">
                <Link
                  href="/request-website"
                  className="block text-center px-5 py-3 rounded-xl font-extrabold bg-[#060606] text-[#F9F9F9]"
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