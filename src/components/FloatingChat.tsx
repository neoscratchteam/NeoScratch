'use client';

import React, { useState, useEffect } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pricingTiers = [
  { tier: "TIER 01", name: "SEO & GOOGLE", price: "from 50,000 RWF", full: "SEO & GOOGLE SETUP" },
  { tier: "TIER 02", name: "STARTER E-COM", price: "from 200,000 RWF", full: "STARTER E-COMMERCE" },
  { tier: "TIER 03", name: "BUSINESS SYS", price: "from 350,000 RWF", full: "BUSINESS SYSTEM" },
  { tier: "TIER 04", name: "GROWTH SYS", price: "from 450,000 RWF", full: "GROWTH SYSTEM" },
  { tier: "TIER 05", name: "ENTERPRISE", price: "from 750,000 RWF", full: "ENTERPRISE BUILD" },
];

export function FloatingChat() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showStickyPricing, setShowStickyPricing] = useState(false);
  const [message, setMessage] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if on /services page and on desktop screens (width >= 1024px)
      if (pathname === '/services' && window.innerWidth >= 1024) {
        const tableHeader = document.getElementById('pricing-table-header');
        if (tableHeader) {
          const rect = tableHeader.getBoundingClientRect();
          // Show floating pricing bar on desktop when top table header has scrolled out of view (< 80px)
          const isHeaderScrolledPast = rect.bottom < 80;
          setShowStickyPricing(isHeaderScrolledPast);
        }
      } else {
        setShowStickyPricing(false);
      }

      // Standard chat collapse/expand behavior for other scenarios
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsExpanded(false);
      } else if (currentScrollY < lastScrollY) {
        setIsExpanded(true);
      }

      if (currentScrollY < 100) {
        setIsExpanded(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY, pathname]);

  const handleSend = (e?: React.FormEvent, customMsg?: string) => {
    if (e) e.preventDefault();
    const textToSend = customMsg || (message.trim()
      ? message.trim()
      : "Hello NeoScratch, I'm inquiring about your pricing and services.");
    const whatsappUrl = `https://wa.me/250792734752?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto font-jakarta flex justify-center transition-all duration-300 ${
      showStickyPricing ? 'w-[96%] max-w-7xl' : 'w-[92%] max-w-lg sm:max-w-xl'
    }`}>
      <AnimatePresence mode="wait">
        {showStickyPricing ? (
          /* 🏷️ SMOOTH WHITE FLOATING PRICING HEADER MATCHING 6 TABLE COLUMNS (DESKTOP ONLY) */
          <motion.div
            key="sticky-pricing"
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="hidden lg:block w-full bg-white/95 backdrop-blur-md border border-[#060606]/15 text-[#060606] rounded-2xl p-2.5 sm:p-3 shadow-2xl font-jakarta transition-all"
          >
            {/* Desktop 6-Column Layout Matching Table Grid */}
            <div className="grid grid-cols-12 gap-3 items-center w-full">
              {/* Column 0: Label cell matching Feature column (col-span-3 = ~25%) */}
              <div className="col-span-3 flex items-center gap-2.5 pl-3 pr-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#175A26] animate-pulse shrink-0" />
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#175A26] block leading-none">PRICING MATRIX</span>
                  <span className="text-[10px] font-bold text-gray-500 block mt-1">Click column to chat</span>
                </div>
              </div>

              {/* Columns 1-5: The 5 Tier Columns */}
              <div className="col-span-9 grid grid-cols-5 gap-2.5">
                {pricingTiers.map((t, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSend(undefined, `Hello NeoScratch, I want to inquire about ${t.tier}: ${t.full} (${t.price})`)}
                    className="bg-[#060606]/5 hover:bg-[#175A26] border border-[#060606]/10 hover:border-[#175A26] rounded-xl py-2 px-2.5 flex flex-col justify-between cursor-pointer transition-all duration-300 group min-w-0"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#175A26] group-hover:text-white/90">
                          {t.tier}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#175A26] group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-[10px] font-black text-[#060606] group-hover:text-white truncate uppercase leading-tight">
                        {t.full}
                      </p>
                      <p className="text-[10px] font-extrabold text-[#175A26] group-hover:text-white mt-1">
                        {t.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : isExpanded ? (
          /* 💬 STANDARD EXPANDED CHAT FORM */
          <motion.form
            key="expanded"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            onSubmit={handleSend}
            className="w-full flex items-center justify-between bg-white/95 backdrop-blur-md border border-[#060606]/15 shadow-2xl rounded-full p-2 sm:p-2.5 transition-shadow hover:shadow-2xl group"
          >
            <div className="flex items-center gap-2.5 pl-2 sm:pl-3 pr-2 flex-1 min-w-0">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about pricing, we reply on WhatsApp..."
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#060606] placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 bg-[#175A26] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-extrabold text-xs sm:text-sm shrink-0 shadow-md hover:bg-[#060606] transition-colors cursor-pointer"
            >
              <span>Chat now</span>
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.button>
          </motion.form>
        ) : (
          /* 💬 STANDARD COLLAPSED CHAT BUTTON */
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="flex justify-center"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleSend(e)}
              className="inline-flex items-center gap-2.5 bg-[#175A26] text-white px-5 py-3 rounded-full font-black text-xs sm:text-sm shadow-2xl hover:bg-[#060606] transition-all cursor-pointer border border-white/20"
            >
              <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <span>Chat with us</span>
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}