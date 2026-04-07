import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, MessageCircle } from 'lucide-react';

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
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const isHeaderThemed = !isHomePage || isScrolled;

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
            to="/"
            className="flex items-center space-x-2 hover:opacity-75 transition-opacity duration-300"
          >
            <img 
              src="/neoscratch.png" 
              className="h-8 md:h-10 brightness-0 invert" 
              alt="NeoScratch Logo" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation
              .filter(item => !item.isMobileOnly)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${isHeaderThemed 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-white/20'} ${location.pathname === item.href
                      ? 'bg-white/20 text-white'
                      : 'text-white'
                    }`}
                >
                  {item.name}
                  {item.name === 'News' && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-6 items-center justify-center bg-red-500 text-white text-[8px] font-black rounded-full shadow-lg border border-white/20">
                      21+
                    </span>
                  )}
                </Link>
              ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline"
              size="sm" 
              asChild 
              className={`rounded-xl px-6 font-bold transition-all ${isHeaderThemed 
                ? "bg-white text-primary border-white hover:bg-white/90" 
                : "border-white text-white hover:bg-white hover:text-primary"}`}
            >
              <Link to="/request-website">Get Your Website</Link>
            </Button>
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
                  to={item.href}
                  className={`relative flex items-center w-fit px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.href
                    ? 'bg-white/20 text-white'
                    : 'text-white hover:bg-white/10'
                    }`}
                >
                  {item.name}
                  {item.name === 'News' && (
                    <span className="absolute -top-1 -right-4 flex h-4 w-6 items-center justify-center bg-red-500 text-white text-[8px] font-black rounded-full shadow-lg border border-white/20">
                      21+
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="hero" className="w-full bg-white text-primary hover:bg-white/90" size="sm" asChild>
                  <Link to="/request-website">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}