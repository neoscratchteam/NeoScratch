'use client';
import React, { use } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, MessageCircle, Check, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const decodedId = decodeURIComponent(id);
  const project = projects.find((p) => p.id === decodedId || p.id === id);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    author: {
      '@type': 'Organization',
      name: 'NeoScratch',
      url: 'https://neoscratch.com',
    },
    image: project.image,
    url: `https://neoscratch.com/projects/${project.id}`,
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] font-jakarta pb-0">
      <Script
        id={`project-jsonld-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="pt-24 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link 
              href="/projects" 
              className="text-[10px] font-black text-[#175A26] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
            >
              All projects
            </Link>
            <span className="text-slate-400">•</span>
            <Badge variant="secondary" className="bg-[#175A26] text-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full">
              {project.tag || project.category}
            </Badge>
            <span className="text-slate-400 hidden sm:block">•</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{project.client}</span>
            <span className="text-slate-400 hidden sm:block">•</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            {project.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-xl px-8 h-12 font-bold bg-[#175A26] text-white hover:bg-[#12481e] shadow-lg shadow-[#175A26]/20" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Visit website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 font-bold border-[#175A26] text-[#175A26] hover:bg-[#175A26] hover:text-white transition-all duration-300" asChild>
              <Link href="/request-website">Start a similar project</Link>
            </Button>
          </div>
        </div>

        <div className="w-full mb-20 rounded-2xl overflow-hidden border border-slate-300 bg-white shadow-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto block"
          />
        </div>

        {/* Project Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Sidebar / Left Column */}
          <div className="lg:col-span-3 space-y-12 lg:sticky lg:top-32 h-fit self-start bg-white p-6 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">SERVICES</h3>
              <ul className="space-y-3">
                {(project.details?.services || [project.category]).map((service) => (
                  <li key={service} className="flex items-center text-sm font-bold text-slate-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#175A26] mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">CLIENT</h3>
              <p className="text-sm font-bold text-slate-900">{project.client}</p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">YEAR</h3>
              <p className="text-sm font-bold text-slate-900">{project.year}</p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <Button className="w-full rounded-xl h-12 font-bold bg-[#175A26] text-white hover:bg-[#12481e]" asChild>
                <Link href="/contact">Discuss your project</Link>
              </Button>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="lg:col-span-9 space-y-16 lg:pl-6">
            
            {/* Overview */}
            {project.details?.overview && (
              <section className="bg-white p-8 rounded-2xl border border-slate-200 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Project Overview</h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {project.details.overview}
                </p>
              </section>
            )}

            {/* Objective */}
            {project.details?.objective && (
              <section className="bg-white p-8 rounded-2xl border border-slate-200 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Objective</h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {project.details.objective}
                </p>
              </section>
            )}

            {/* What We Delivered */}
            {project.details?.delivered && (
              <section className="bg-white p-8 rounded-2xl border border-slate-200 animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">What We Delivered</h2>
                <div className="space-y-4">
                  {project.details.delivered.map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="bg-[#175A26]/10 rounded-full p-1 mr-4 mt-0.5 group-hover:bg-[#175A26]/20 transition-colors">
                        <Check className="h-3.5 w-3.5 text-[#175A26]" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Our Process */}
            {project.details?.process && (
              <section className="bg-white p-8 rounded-2xl border border-slate-200 animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">Our Process</h2>
                <div className="space-y-6">
                  {project.details.process.map((step, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="bg-[#175A26]/10 rounded-full p-1 mr-4 mt-0.5 group-hover:bg-[#175A26]/20 transition-colors">
                        <Check className="h-3.5 w-3.5 text-[#175A26]" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <span className="text-slate-900 text-sm font-bold min-w-[140px]">{step.title} —</span>
                        <span className="text-slate-600 text-sm font-medium leading-relaxed">{step.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results & Impact */}
            {project.details?.results && (
              <section className="bg-white p-8 rounded-2xl border border-slate-200 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Results & Impact</h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {project.details.results}
                </p>
              </section>
            )}

            {/* Conclusion */}
            {project.details?.conclusion && (
              <section className="bg-white p-8 rounded-2xl border border-slate-200 animate-fade-in mb-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Conclusion</h2>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base border-l-4 border-[#175A26] pl-6 py-1 italic font-medium">
                  {project.details.conclusion}
                </p>
              </section>
            )}

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="mt-16 pt-16 border-t border-slate-300 animate-fade-in">
                <div className="flex items-center justify-between mb-10">
                   <div>
                     <h2 className="text-2xl font-bold text-slate-900">System Screenshots</h2>
                     <p className="text-sm text-slate-600 mt-1">Deep dive into the architecture and interface of {project.title}.</p>
                   </div>
                   <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] font-black uppercase text-[#175A26] border-[#175A26]/30 bg-[#175A26]/10">
                     Full Preview
                   </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((img, index) => (
                    <div 
                      key={index} 
                      className={`relative rounded-2xl overflow-hidden border border-slate-200 bg-white group shadow-sm hover:shadow-xl transition-all duration-500 ${
                        index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                         <span className="text-white text-[10px] font-black uppercase tracking-widest">View Full Size</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>

      {/* Brand Green Grid CTA Footer Section */}
      <section className="mt-20 py-24 lg:py-32 bg-[#175A26] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Have a similar project in mind?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Tell us what you are building and we will give you an honest assessment and a clear plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="xl" className="bg-white text-[#175A26] hover:bg-white/90 rounded-xl px-12 h-16 text-lg font-bold shadow-2xl" asChild>
              <Link href="/request-website">Get Project Quote</Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-12 h-16 text-lg font-bold backdrop-blur-sm" asChild>
              <Link href="/projects">View more projects</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
