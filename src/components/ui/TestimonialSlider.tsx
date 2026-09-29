import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';
import Image from 'next/image';

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  
  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-move functionality disabled (manual navigation only)
  useEffect(() => {
    // interval removed per user request
  }, []);

  return (
    <div className="w-full flex flex-col justify-center gap-8 sm:gap-12 lg:gap-20 max-w-full overflow-hidden">
      <div className="text-center animate-fade-in font-jakarta px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#060606] tracking-tight mb-3">What Our Customers Say</h2>
        <p className="text-[#334155] max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-medium">
          Real stories from real people! See how our services have transformed their experiences.
        </p>
      </div>

      <div className="relative h-48 sm:h-64 md:h-80 flex items-center justify-center w-full animate-slide-up max-w-full overflow-hidden" style={{ animationDelay: '0.1s' }}>
        {/* Base Wavy Path */}
        <svg className="absolute w-full h-full opacity-10 pointer-events-none stroke-[#060606]" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <path d="M-50,100 C150,200 250,0 500,100 C750,200 850,0 1050,100" fill="none" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {/* Dots on wave for aesthetics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-[#060606] opacity-30"></div>
          <div className="absolute top-[70%] left-[35%] w-1.5 h-1.5 rounded-full bg-[#060606] opacity-30"></div>
          <div className="absolute top-[30%] left-[75%] w-2.5 h-2.5 rounded-full bg-[#060606] opacity-30"></div>
          <div className="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-[#060606] opacity-30"></div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-14 relative z-10 w-full max-w-full overflow-hidden px-2">
          {testimonials.map((t, idx) => {
            const diff = Math.abs(idx - activeIndex);
            const isActive = idx === activeIndex;
            
            let sizeClass = 'w-7 h-7 sm:w-12 sm:h-12';
            let opacityClass = 'opacity-40 grayscale-[50%]';
            let yOffset = '';
            let ringClass = 'ring-1 ring-[#060606]/20';
            let displayClass = 'flex';

            if (isActive) {
               sizeClass = 'w-16 h-16 sm:w-28 md:w-36 sm:h-28 md:h-36';
               opacityClass = 'opacity-100 z-20 grayscale-0 shadow-xl shadow-[#175A26]/20';
               ringClass = 'ring-2 sm:ring-4 ring-[#175A26] ring-offset-2 sm:ring-offset-4 ring-offset-[#E5E5E5] p-0.5 sm:p-1';
               yOffset = 'scale-105 sm:scale-110 translate-y-1 sm:translate-y-2';
            } else if (diff === 1) {
               sizeClass = 'w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20';
               opacityClass = 'opacity-80';
               yOffset = idx < activeIndex ? 'translate-y-3 sm:translate-y-12' : '-translate-y-3 sm:-translate-y-12';
               ringClass = 'ring-1 sm:ring-2 ring-[#175A26]/40 p-0.5';
            } else if (diff === 2) {
               sizeClass = 'w-7 h-7 sm:w-12 md:w-16 sm:h-12 md:h-16';
               opacityClass = 'opacity-60';
               yOffset = idx < activeIndex ? '-translate-y-4 sm:-translate-y-16' : 'translate-y-4 sm:translate-y-16';
               ringClass = 'ring-1 ring-[#060606]/20';
            } else {
               sizeClass = 'w-6 h-6 sm:w-10 sm:h-10';
               opacityClass = 'opacity-30';
               yOffset = idx < activeIndex ? 'translate-y-2' : '-translate-y-2';
               displayClass = 'hidden sm:flex';
            }

            return (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial from ${t.name}`}
                className={`relative rounded-full transition-all duration-700 ease-smooth flex-shrink-0 cursor-pointer hover:opacity-100 ${displayClass} ${sizeClass} ${opacityClass} ${yOffset} ${ringClass}`}
              >
                {t.avatar === 'YOU' ? (
                  <div className="w-full h-full rounded-full bg-[#060606] text-[#175A26] border border-[#175A26]/40 flex items-center justify-center font-black text-[10px] sm:text-base tracking-tighter shadow-md">
                    YOU
                  </div>
                ) : (
                  <Image 
                    src={t.avatar} 
                    alt={t.name} 
                    width={150} 
                    height={150} 
                    className="w-full h-full rounded-full object-cover shadow-inner" 
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 max-w-4xl mx-auto w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <button onClick={prev} aria-label="Previous testimonial" className="hidden md:flex p-4 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-foreground shadow-sm">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex-1 text-center px-4" key={activeIndex}>
          <p className="text-sm sm:text-lg md:text-xl font-medium text-muted-foreground leading-relaxed animate-fade-in">
            "{testimonials[activeIndex].content}"
          </p>
          {testimonials[activeIndex].link && testimonials[activeIndex].link !== '#' ? (
             <a href={testimonials[activeIndex].link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary hover:underline font-semibold text-xs sm:text-sm">
               View Live Build →
             </a>
          ) : null}
          <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="font-bold text-foreground text-base sm:text-lg">{testimonials[activeIndex].name}</span>
            <span className="text-xs sm:text-sm text-primary mb-1 mt-0.5">{testimonials[activeIndex].serviceType}</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground">{testimonials[activeIndex].role}</span>
          </div>
        </div>

        <button onClick={next} aria-label="Next testimonial" className="hidden md:flex p-4 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-foreground shadow-sm">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex md:hidden items-center justify-center gap-8 mt-2">
          <button onClick={prev} aria-label="Previous testimonial" className="p-2.5 rounded-full border border-border bg-background hover:bg-secondary shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Next testimonial" className="p-2.5 rounded-full border border-border bg-background hover:bg-secondary shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Book Now button moved to the bottom */}
      <div className="text-center animate-fade-in mt-1">
        <Link 
          href="/request-website" 
          className="inline-flex items-center justify-center bg-foreground text-background px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-extrabold hover:scale-105 transition-transform duration-300 shadow-md text-xs sm:text-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
