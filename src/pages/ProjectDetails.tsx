import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, MessageCircle, Check, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      // If project not found, redirect to projects page or show 404
      // navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 lg:pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/projects" 
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
              <Link to="/request-website">Start a similar project</Link>
            </Button>
          </div>
        </div>

        {/* Main Image Block */}
        <div className="w-full mb-24 rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-secondary/30 aspect-video lg:aspect-[21/9]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Sidebar / Left Column */}
          <div className="lg:col-span-3 space-y-12">
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
                <Link to="/contact">Discuss your project</Link>
              </Button>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="lg:col-span-9 space-y-20 lg:pl-12">
            
            {/* Overview */}
            {project.details?.overview && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.details.overview}
                </p>
              </section>
            )}

            {/* Objective */}
            {project.details?.objective && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Objective</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.details.objective}
                </p>
              </section>
            )}

            {/* What We Delivered */}
            {project.details?.delivered && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-foreground">What We Delivered</h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {project.details.delivered.map((item, idx) => (
                    <div key={idx} className="flex items-start bg-secondary/10 p-5 rounded-2xl border border-border/50 group hover:border-primary/20 transition-colors">
                      <div className="bg-primary/10 rounded-full p-1.5 mr-4 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Our Process */}
            {project.details?.process && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-10 text-foreground">Our Process</h2>
                <div className="space-y-10">
                  {project.details.process.map((step, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                      {idx !== project.details!.process.length - 1 && (
                        <div className="absolute left-[15px] top-10 bottom-[-40px] w-0.5 bg-border"></div>
                      )}
                      <div className="flex-shrink-0 h-8 w-8 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary text-xs font-bold bg-background relative z-10">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            {project.details?.conclusion && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-primary/30 pl-8 py-2">
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
              <Link to="/request-website">Get Free Quote</Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-12 h-16 text-lg font-bold backdrop-blur-sm" asChild>
              <Link to="/projects">View more projects</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails;
