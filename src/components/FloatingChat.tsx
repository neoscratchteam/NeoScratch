'use client';

import React from 'react';
import { Send } from 'lucide-react';

export function FloatingChat() {
  const whatsappUrl = "https://wa.me/250792734752?text=Hello%20NeoScratch,%20I'm%20inquiring%20about%20your%20pricing%20and%20services";

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg sm:max-w-xl pointer-events-auto font-jakarta">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-white/95 backdrop-blur-md border border-[#060606]/15 shadow-2xl rounded-full p-2 sm:p-2.5 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 group"
      >
        <div className="flex items-center gap-3 pl-2 sm:pl-3 pr-2 overflow-hidden">
          {/* WhatsApp Green Icon */}
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-500 truncate">
            Ask about pricing, we reply on WhatsApp
          </span>
        </div>

        {/* Orange Action Button */}
        <div className="inline-flex items-center gap-1.5 bg-[#E05326] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-extrabold text-xs sm:text-sm shrink-0 shadow-md group-hover:bg-[#c9451d] transition-colors">
          <span>Chat now</span>
          <Send className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </a>
    </div>
  );
}