'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Theogene Iradukunda',
    role: 'Founder & CEO',
    image: '/theodev.png',
  },
  {
    name: 'Mugisha Samuel',
    role: 'Graphic Designer',
    image: '/bigsam.webp',
  },
  {
    name: 'Byishimo Jean Bosco',
    role: 'UI Developer',
    image: '/team/jean_bosco.png',
  },
];

export function TeamClient() {
  return (
    <div className="bg-white font-jakarta text-[#060606] py-32 sm:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#060606] tracking-tight">
          A Remote team growing fast.
        </h1>
        <p className="mt-4 text-sm sm:text-base font-medium text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Everything you need for crafting, building, and deploying world-class digital platforms—whether it&apos;s for web systems, mobile apps, custom APIs, or enterprise automation.
        </p>
      </div>

      {/* Team Grid (4-column grid matching reference image) */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-10 sm:gap-y-16 text-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col items-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm bg-gray-100 group-hover:shadow-md transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 112px, 128px"
                />
              </div>
              <h3 className="mt-4 font-extrabold text-base sm:text-lg text-[#060606] tracking-tight">
                {member.name}
              </h3>
              <p className="mt-0.5 text-xs sm:text-sm font-semibold text-gray-400">
                {member.role}
              </p>
            </div>
          ))}

          {/* 4th Card: Open Positions CTA */}
          <Link href="/contact" className="group flex flex-col items-center justify-start cursor-pointer">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-100/70 group-hover:bg-[#175A26]/10 flex items-center justify-center transition-all duration-300">
              <Plus className="w-7 h-7 sm:w-8 sm:h-8 text-[#0284C7] group-hover:scale-110 transition-transform duration-300 stroke-[2.5]" />
            </div>
            <h3 className="mt-4 font-extrabold text-base sm:text-lg text-[#060606] tracking-tight group-hover:text-[#175A26] transition-colors">
              See open positions?
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
