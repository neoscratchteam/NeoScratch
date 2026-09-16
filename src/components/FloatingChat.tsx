'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export function FloatingChat() {
  return (
    <a
      href="https://wa.me/250792734752"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#175A26] text-white shadow-2xl hover:bg-[#060606] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with NeoScratch on WhatsApp"
      title="Chat with us"
    >
      <MessageSquare className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
    </a>
  );
}