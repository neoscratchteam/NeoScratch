'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, MessageCircle } from 'lucide-react';

import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
  isMobileOnly?: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const isHeaderThemed = true;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderThemed
        ? 'bg-primary shadow-lg border-b border-white/10 text-white'
        : 'bg-transparent text-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-75 transition-opacity duration-300"
          >
            <Image 
              src="/logo.svg" 
              width={160}
              height={32}
              style={{ height: 'auto' }}
              className="h-6 md:h-8 w-auto hover:opacity-90 transition-opacity" 
              alt="NEOSCRATCH Logo" 
              priority
            />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation
              .filter(item => !item.isMobileOnly)
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${isHeaderThemed 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-white/20'} ${pathname === item.href
                      ? 'bg-white/20 text-white'
                      : 'text-white'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/request-website"
              className="inline-flex items-center justify-center px-6 py-2 rounded-xl text-sm font-bold bg-white text-primary border border-white shadow-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white hover:scale-[1.04]"
            >
              Get Your Website
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary border border-white/10 rounded-2xl shadow-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center w-fit px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === item.href
                    ? 'bg-white/20 text-white'
                    : 'text-white hover:bg-white/10'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="hero" className="w-full bg-white text-primary hover:bg-white/90" size="sm" asChild>
                  <Link href="/request-website">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}