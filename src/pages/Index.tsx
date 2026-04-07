import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Code, Smartphone, Globe, Palette, 
  ArrowRight, ArrowUpRight, CheckCircle2,
  Search, ShieldCheck, Settings, BarChart3,
  Monitor
} from 'lucide-react';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';
import heroDashboard from '@/assets/professional-dashboard.png';

import { projects } from '@/data/projects';

const Index = () => {
  const projectsCount = useCountUpAnimation({ end: 5, suffix: '+' });
  const experienceCount = useCountUpAnimation({ end: 2, suffix: '+' });
  const clientsCount = useCountUpAnimation({ end: 6, suffix: '+' });
  const retentionCount = useCountUpAnimation({ end: 100, suffix: '%' });

  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ghostRef.current) return;
      const rect = ghostRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top;
      const end = rect.bottom - windowHeight;
      const total = rect.height - windowHeight;
      
      let nextProgress = 0;
      if (start <= 0 && end >= 0) {
        nextProgress = Math.abs(start) / total;
      } else if (start > 0) {
        nextProgress = 0;
      } else if (end < 0) {
        nextProgress = 1;
      }
      
      setScrollProgress(nextProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardWidth = 85; 
  const gapWidth = 5;  
  const translateX = -scrollProgress * (cardWidth + gapWidth) * (projects.length - 1);

  return (
    <div className="min-h-screen">
      
      {/* Full-Height Professional Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-primary flex items-center">
        {/* Sharp Small Square Grid Background */}
        <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 lg:pt-24 flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 animate-fade-in text-white space-y-6 pb-16">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium animate-slide-up">
                <span>Software Development & Digital Marketing Studio — International Focus</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                We build software and get <br className="hidden md:block" /> your business <span className="text-white/70">found online.</span>
              </h1>
              
              <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-xl font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
                From custom websites and powerful software to SEO and Google Business Profile setup — we give global businesses the digital tools they need to attract more customers and grow with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-10 shadow-lg transition-all font-bold" asChild>
                  <Link to="/services">
                    See What We Do
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/20 border-white/30 backdrop-blur-md text-white hover:bg-white/30 rounded-xl px-10 transition-all font-bold" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Precise Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10 max-w-3xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div ref={projectsCount.elementRef}>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-0.5">{projectsCount.count}</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.1em] font-bold">Projects delivered</p>
                </div>
                <div ref={experienceCount.elementRef} className="border-l border-white/10 pl-4">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-0.5">{experienceCount.count}</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.1em] font-bold">Years in business</p>
                </div>
                <div ref={clientsCount.elementRef} className="border-l border-white/10 pl-4">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-0.5">{clientsCount.count}</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.1em] font-bold">Happy clients</p>
                </div>
                <div ref={retentionCount.elementRef} className="border-l border-white/10 pl-4">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-0.5">{retentionCount.count}</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.1em] font-bold">Client retention</p>
                </div>
              </div>
            </div>

            {/* Right Content - Mockup (Merged to Bottom) */}
            <div className="lg:col-span-5 relative hidden lg:block self-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="relative translate-x-12 translate-y-[2px]">
                <div className="bg-white shadow-2xl border-l border-t border-white/10 transition-all duration-1000">
                  <img 
                    src={heroDashboard} 
                    alt="Professional Dashboard Mockup" 
                    className="w-full h-auto grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">WHAT WE DO</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Here's what we're really good at.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you need a powerful website, a custom software system, or to show up when customers search for you on Google — we handle it all, so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Monitor, 
                title: 'Website Design & Development', 
                desc: 'Your website is your most important salesperson — it works 24/7, never calls in sick, and is the first thing a potential customer judges you by.',
                tags: ['Up to 15 pages', 'Mobile first', 'Admin panel', 'Fast delivery']
              },
              { 
                icon: Globe, 
                title: 'Google Business Profile Setup', 
                desc: 'Before a customer visits your business or calls you, they search Google. We set up, verify, and fully optimise your Google Business Profile.',
                tags: ['Google Maps', 'Verified listing', 'Reviews setup', 'Local SEO']
              },
              { 
                icon: BarChart3, 
                title: 'Search Engine Optimisation (SEO)', 
                desc: 'Being on page two of Google is the same as being invisible. We optimise your website with the right keywords to reach customers.',
                tags: ['Keyword research', 'On-page SEO', 'Search Console', 'Monthly reports']
              },
              { 
                icon: Code, 
                title: 'Custom Software Development', 
                desc: 'No off-the-shelf tool fits every business perfectly. When your operations have outgrown spreadsheets, we build exactly what you need.',
                tags: ['Web apps', 'Dashboards', 'Booking systems', 'Automations']
              },
              { 
                icon: Smartphone, 
                title: 'Mobile App Development', 
                desc: 'Your customers live on their phones — your business should too. We build polished iOS and Android apps with solid backend logic.',
                tags: ['iOS & Android', 'React Native', 'MoMo / Airtel', 'Offline-first']
              },
              { 
                icon: Settings, 
                title: 'Website Maintenance & Management', 
                desc: 'Launching your website is the beginning, not the end. We keep it fast, secure, and up to date with monthly retainers.',
                tags: ['Monthly retainer', 'Content updates', 'SEO monitoring', 'Reports']
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group relative flex flex-col p-8 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">{service.desc}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-[11px] font-medium text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary font-semibold group" asChild>
              <Link to="/services">
                View all services 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Projects Section - High Contrast Hover Focus */}
      <div ref={ghostRef} className="relative h-[400vh]">
        <section className="sticky top-0 h-screen overflow-hidden bg-background py-8 flex flex-col justify-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 flex justify-between items-end">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">FEATURED WORK</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground font-inter">
                Platforms we've engineered.
              </h2>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl border-primary/20 hover:bg-primary/5 text-primary font-bold text-xs" asChild>
              <Link to="/projects">View all</Link>
            </Button>
          </div>

          <div 
            className="flex gap-[4vw] px-[7.5vw] transform-gpu will-change-transform"
            style={{ 
              transform: `translate3d(${translateX.toFixed(2)}vw, 0px, 0px)`
            }}
          >
            {projects.map((p) => (
              <div 
                key={p.id}
                className="w-[85vw] flex-shrink-0 h-[40vh] min-h-[320px] bg-white rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col lg:flex-row group transition-all duration-300 hover:ring-2 hover:ring-primary"
              >
                {/* Image Section - FULL FILL */}
                <div className="lg:w-[65%] h-[50%] lg:h-full bg-secondary overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-primary text-[9px] font-bold tracking-wider shadow-sm">{p.tag}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-[35%] h-[50%] lg:h-full p-6 lg:p-8 flex flex-col justify-center bg-white relative z-10 transition-colors duration-300 group-hover:bg-primary/[0.02]">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground/30">{p.year}</span>
                    <span className="h-px w-4 bg-border"></span>
                    <span className="text-primary text-[9px] font-extrabold tracking-widest uppercase">SYNERGY</span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-[11px] font-semibold mb-4 leading-none opacity-60 italic">for {p.subtitle.replace('for ', '')}</p>
                  
                  <p className="text-muted-foreground text-[13px] leading-relaxed mb-6 opacity-80 font-medium line-clamp-3">
                    {p.description}
                  </p>
                  
                  <Link 
                    to={`/projects/${p.id}`}
                    className="inline-flex items-center text-primary text-xs font-bold hover:gap-2 transition-all duration-300 group/link"
                  >
                    Explore Case <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <TestimonialSlider />
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Code className="h-64 w-64" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us to bring your tech vision to life. Whether it's a website, an app, or digital marketing, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 rounded-2xl px-12 font-bold shadow-xl shadow-black/10" asChild>
                <Link to="/request-website">Get Started</Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-2xl px-12 font-bold" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;