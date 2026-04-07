'use client';
import React, { use } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, MessageCircle, Check, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          All projects
        </Link>

        {/* Header Section */}
        <div className="max-w-4xl mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
              {project.tag || project.category}
            </Badge>
            <span className="text-muted-foreground/40 hidden sm:block">•</span>
            <span className="text-sm font-semibold text-muted-foreground">{project.client}</span>
            <span className="text-muted-foreground/40 hidden sm:block">•</span>
            <span className="text-sm font-semibold text-muted-foreground">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            {project.title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-xl px-8 h-12 font-bold shadow-lg shadow-primary/20" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Visit website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 font-bold border-primary/20 hover:bg-primary/5 text-primary" asChild>
              <Link href="/request-website">Start a similar project</Link>
            </Button>
          </div>
        </div>

        <div className="w-full mb-24 rounded-2xl overflow-hidden border border-border bg-secondary/10 shadow-inner">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto block"
          />
        </div>

        {/* Project Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Sidebar / Left Column */}
          <div className="lg:col-span-3 space-y-12 lg:sticky lg:top-32 h-fit self-start">
            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">SERVICES</h3>
              <ul className="space-y-3">
                {(project.details?.services || [project.category]).map((service) => (
                  <li key={service} className="flex items-center text-sm font-bold text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">CLIENT</h3>
              <p className="text-sm font-bold text-foreground">{project.client}</p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">YEAR</h3>
              <p className="text-sm font-bold text-foreground">{project.year}</p>
            </div>

            <div className="pt-6 border-t border-border">
              <Button className="w-full rounded-xl h-12 font-bold bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/contact">Discuss your project</Link>
              </Button>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="lg:col-span-9 space-y-16 lg:pl-12">
            
            {/* Overview */}
            {project.details?.overview && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.details.overview}
                </p>
              </section>
            )}

            {/* Objective */}
            {project.details?.objective && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Objective</h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.details.objective}
                </p>
              </section>
            )}

            {/* What We Delivered */}
            {project.details?.delivered && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-foreground">What We Delivered</h2>
                <div className="space-y-4">
                  {project.details.delivered.map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="bg-primary/5 rounded-full p-1 mr-4 mt-0.5 group-hover:bg-primary/10 transition-colors">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Our Process */}
            {project.details?.process && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Our Process</h2>
                <div className="space-y-6">
                  {project.details.process.map((step, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="bg-primary/5 rounded-full p-1 mr-4 mt-0.5 group-hover:bg-primary/10 transition-colors">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <span className="text-foreground text-sm font-bold min-w-[140px]">{step.title} —</span>
                        <span className="text-muted-foreground text-sm font-medium leading-relaxed">{step.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results & Impact */}
            {project.details?.results && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.details.results}
                </p>
              </section>
            )}

            {/* Conclusion */}
            {project.details?.conclusion && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l-2 border-primary/20 pl-6 py-1">
                  {project.details.conclusion}
                </p>
              </section>
            )}

          </div>
        </div>
      </div>

      {/* Blue Grid CTA Footer Section */}
      <section className="mt-20 py-24 lg:py-32 bg-primary relative overflow-hidden">
        {/* Simple Square Grid Overly */}
        <div className="absolute inset-0 z-0 bg-grid opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Have a similar project in mind?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Tell us what you are building and we will give you an honest assessment and a clear plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90 rounded-xl px-12 h-16 text-lg font-bold shadow-2xl" asChild>
              <Link href="/request-website">Get Free Quote</Link>
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
