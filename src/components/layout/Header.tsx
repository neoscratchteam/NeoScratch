'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, ChevronUp, Menu, X, 
  ShoppingCart, Building2, BarChart3, 
  Smartphone, Code, ShieldCheck, ArrowRight 
} from 'lucide-react';
import Image from 'next/image';



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
              alt="NeoScratch - Premier Web Design, Mobile Apps & SEO Agency in Rwanda" 
              width={40} 
              height={40} 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform brightness-0 invert"
              priority 
            />
          </Link>

          {/* Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-extrabold text-white">
            
            <Link href="/" className="hover:opacity-80 transition-opacity py-2">
              Home
            </Link>

            {/* Products Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity py-2"
              >
                <span>Products</span>
                {activeDropdown === 'products' ? (
                  <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>

              {/* Mega Dropdown Panel */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full -left-20 pt-3 w-[720px] animate-fade-in z-50">
                  <div className="bg-white rounded-3xl shadow-2xl border border-[#060606]/10 text-left overflow-hidden">
                    
                    {/* Top Columns Content */}
                    <div className="p-8 grid grid-cols-2 gap-8">
                      
                      {/* Left Column: Software & Platforms */}
                      <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-wider text-[#175A26]">
                          Software &amp; Digital Platforms
                        </h3>

                        <div className="space-y-4">
                          
                          {/* Item 1: E-Commerce */}
                          <Link 
                            href="/services" 
                            className="flex items-start gap-4 group/item p-2 -mx-2 rounded-xl hover:bg-[#175A26]/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#175A26]/10 text-[#175A26] flex items-center justify-center shrink-0 group-hover/item:bg-[#175A26] group-hover/item:text-white transition-colors">
                              <ShoppingCart className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-[#060606] group-hover/item:text-[#175A26]">
                                E-Commerce Platforms
                              </div>
                              <p className="text-xs text-[#060606]/65 mt-0.5 leading-snug font-medium">
                                Online stores with MoMo &amp; card payment integration
                              </p>
                            </div>
                          </Link>

                          {/* Item 2: Business Systems */}
                          <Link 
                            href="/services" 
                            className="flex items-start gap-4 group/item p-2 -mx-2 rounded-xl hover:bg-[#175A26]/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#175A26]/10 text-[#175A26] flex items-center justify-center shrink-0 group-hover/item:bg-[#175A26] group-hover/item:text-white transition-colors">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-[#060606] group-hover/item:text-[#175A26]">
                                Business Systems &amp; ERP
                              </div>
                              <p className="text-xs text-[#060606]/65 mt-0.5 leading-snug font-medium">
                                Automated management, inventory &amp; company workflows
                              </p>
                            </div>
                          </Link>

                          {/* Item 3: Custom Software */}
                          <Link 
                            href="/services" 
                            className="flex items-start gap-4 group/item p-2 -mx-2 rounded-xl hover:bg-[#175A26]/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#175A26]/10 text-[#175A26] flex items-center justify-center shrink-0 group-hover/item:bg-[#175A26] group-hover/item:text-white transition-colors">
                              <Code className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-[#060606] group-hover/item:text-[#175A26]">
                                Custom Web &amp; SaaS Build
                              </div>
                              <p className="text-xs text-[#060606]/65 mt-0.5 leading-snug font-medium">
                                Scalable web applications engineered for Rwandan businesses
                              </p>
                            </div>
                          </Link>

                        </div>
                      </div>

                      {/* Right Column: Growth & Engineering */}
                      <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-wider text-[#175A26]">
                          Digital Growth &amp; Support
                        </h3>

                        <div className="space-y-4">
                          
                          {/* Item 4: SEO */}
                          <Link 
                            href="/services" 
                            className="flex items-start gap-4 group/item p-2 -mx-2 rounded-xl hover:bg-[#175A26]/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#175A26]/10 text-[#175A26] flex items-center justify-center shrink-0 group-hover/item:bg-[#175A26] group-hover/item:text-white transition-colors">
                              <BarChart3 className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-[#060606] group-hover/item:text-[#175A26]">
                                Search Engine Optimisation (SEO)
                              </div>
                              <p className="text-xs text-[#060606]/65 mt-0.5 leading-snug font-medium">
                                Rank #1 on Google &amp; Google Maps across Rwanda
                              </p>
                            </div>
                          </Link>

                          {/* Item 5: Mobile Apps */}
                          <Link 
                            href="/services" 
                            className="flex items-start gap-4 group/item p-2 -mx-2 rounded-xl hover:bg-[#175A26]/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#175A26]/10 text-[#175A26] flex items-center justify-center shrink-0 group-hover/item:bg-[#175A26] group-hover/item:text-white transition-colors">
                              <Smartphone className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-[#060606] group-hover/item:text-[#175A26]">
                                Mobile App Engineering
                              </div>
                              <p className="text-xs text-[#060606]/65 mt-0.5 leading-snug font-medium">
                                Native &amp; cross-platform iOS &amp; Android apps
                              </p>
                            </div>
                          </Link>

                          {/* Item 6: IT Maintenance */}
                          <Link 
                            href="/services" 
                            className="flex items-start gap-4 group/item p-2 -mx-2 rounded-xl hover:bg-[#175A26]/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#175A26]/10 text-[#175A26] flex items-center justify-center shrink-0 group-hover/item:bg-[#175A26] group-hover/item:text-white transition-colors">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-[#060606] group-hover/item:text-[#175A26]">
                                Maintenance &amp; Retainers
                              </div>
                              <p className="text-xs text-[#060606]/65 mt-0.5 leading-snug font-medium">
                                Proactive 24/7 security, updates &amp; server hosting
                              </p>
                            </div>
                          </Link>

                        </div>
                      </div>

                    </div>

                    {/* Bottom Pricing Banner */}
                    <div className="bg-[#F8FAFC] border-t border-[#060606]/5 px-8 py-5 flex items-center justify-between">
                      <div>
                        <h4 className="font-extrabold text-sm text-[#060606]">Pricing &amp; Packages</h4>
                        <p className="text-xs text-[#060606]/60 font-medium">
                          Flexible pricing models tailored for companies &amp; startups in Rwanda
                        </p>
                      </div>
                      <Link 
                        href="/request-website"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#175A26] text-white font-extrabold text-xs hover:bg-[#060606] transition-colors shadow-sm"
                      >
                        <span>See Pricing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className="hover:opacity-80 transition-opacity py-2">
              Pricing
            </Link>

            <Link href="/projects" className="hover:opacity-80 transition-opacity py-2">
              Projects
            </Link>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity py-2"
              >
                <span>Company</span>
                {activeDropdown === 'company' ? (
                  <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>

              {/* Dropdown Card */}
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 animate-fade-in z-50">
                  <div className="bg-white rounded-2xl p-2 shadow-2xl border border-[#060606]/10 space-y-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-xs font-bold text-[#060606] hover:text-white hover:bg-[#175A26] rounded-xl transition-colors text-left"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/team"
                      className="block px-4 py-2.5 text-xs font-bold text-[#060606] hover:text-white hover:bg-[#175A26] rounded-xl transition-colors text-left"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2.5 text-xs font-bold text-[#060606] hover:text-white hover:bg-[#175A26] rounded-xl transition-colors text-left"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* CTA Pill Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/request-website"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-extrabold bg-white text-[#175A26] hover:bg-[#060606] hover:text-white transition-all duration-300 shadow-sm"
            >
              Get your website
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
              <Link href="/team" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Our Team</Link>
              <Link href="/services" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Pricing</Link>
              <Link href="/projects" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Projects</Link>
              <Link href="/contact" className="block px-4 py-2 font-bold hover:bg-white hover:text-[#175A26] rounded-lg">Contact Us</Link>
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