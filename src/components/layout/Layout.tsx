import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingChat } from '@/components/FloatingChat'; // This is now only "Go to top"

import { useScrollToTop } from '@/hooks/useScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Auto scroll to top on route change
  useScrollToTop();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow" data-aos="fade-up" data-aos-duration="800">
        {children}
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}