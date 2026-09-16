'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const companyLinks = [
  { name: 'About Us', href: '/about', desc: 'Our team, vision & story' },
  { name: 'Contact Us', href: '/contact', desc: 'Get in touch & support' },
];

const productLinks = [
  { name: 'Pixelmart', href: '/projects/pixelmart', desc: 'E-commerce platform' },
  { name: 'Oluxywear', href: '/projects/oluxywear', desc: 'Fashion store' },
  { name: 'Smartstock', href: '/projects/smartstock', desc: 'Inventory management' },
  { name: 'Oluxywatches', href: '/projects/oluxywatches', desc: 'Luxury timepiece store' },
  { name: 'Bugaj Ltd', href: '/projects/bugajltd', desc: 'Corporate web system' },
  { name: 'Eye Vision Center', href: '/projects/eyevisioncenter', desc: 'Medical healthcare site' },
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
          
          {/* Brand Logo */}
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

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-extrabold text-white">
            <Link
              href="/"
              className={`py-2 transition-all duration-200 relative ${
                pathname === '/' ? 'text-white font-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group py-2">
              <button 
                type="button"
                className="flex items-center space-x-1 text-white/90 hover:text-white py-2 font-extrabold outline-none"
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-0 top-full pt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-3 space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 py-1">Featured Products</div>
                  {productLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <div className="text-xs font-bold text-[#175A26] lowercase">{item.name}</div>
                      <div className="text-[11px] font-medium text-slate-500">{item.desc}</div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href="/projects"
                      className="block text-center text-xs font-black text-white bg-[#175A26] hover:bg-[#12481e] py-2 rounded-xl transition-colors"
                    >
                      View All Projects →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group py-2">
              <button 
                type="button"
                className="flex items-center space-x-1 text-white/90 hover:text-white py-2 font-extrabold outline-none"
              >
                <span>Company</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-3 space-y-1">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900">{item.name}</div>
                      <div className="text-[11px] font-medium text-slate-500">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Link */}
            <Link
              href="/services"
              className={`py-2 transition-all duration-200 relative ${
                pathname === '/services' ? 'text-white font-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </Link>
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
            <div className="p-4 space-y-3 bg-[#175A26] border border-white/10 rounded-2xl shadow-2xl text-white font-jakarta">
              <Link href="/" className="block px-4 py-2 rounded-xl font-bold hover:bg-white/10">Home</Link>
              
              <div className="px-4 pt-2">
                <p className="text-[10px] font-black uppercase text-emerald-200 tracking-widest mb-1">Company</p>
                <Link href="/about" className="block py-1.5 text-sm font-bold hover:text-emerald-200">About Us</Link>
                <Link href="/contact" className="block py-1.5 text-sm font-bold hover:text-emerald-200">Contact Us</Link>
              </div>

              <div className="px-4 pt-2">
                <p className="text-[10px] font-black uppercase text-emerald-200 tracking-widest mb-1">Products</p>
                {productLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="block py-1 text-sm font-medium hover:text-emerald-200 lowercase">
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link href="/services" className="block px-4 py-2 rounded-xl font-bold hover:bg-white/10">Services</Link>

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