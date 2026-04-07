import React from 'react';
import { Target, Eye, Heart, Users, Award, Shield, Zap, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We create cutting-edge software and design solutions to address real-world challenges in Rwanda and beyond.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering collaboration and empowering Rwanda’s tech ecosystem through education and partnerships.',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description: 'Our work drives positive change by delivering accessible and impactful tech solutions.',
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We deliver high-quality software, designs, and networking services with precision and care.',
  },
];

const aboutData = {
  story: [
    "NeoScratch is a global software development and open-source technology company focused on building modern, scalable, and high-performance digital solutions for businesses, startups, and institutions worldwide.",
    "We design and develop a wide range of custom web and mobile applications, advanced business automation tools, business analytics platforms, and open-source systems that help organizations innovate, scale efficiently, and gain real-time insights.",
    "NeoScratch combines modern technologies with a deep passion for digital transformation, delivering state-of-the-art systems that solve modern challenges in the digital era."
  ],
  mission: "To empower global businesses and individuals with intelligent software solutions.",
  vision: "To become a leading global software house that sets new standards for innovation.",
  founded: "2024",
  ceo: "Theogene Iradukunda"
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden">
        {/* Simple background noise/grid */}
        <div className="absolute inset-x-0 bottom-0 top-0 h-full w-full bg-grid opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none mb-6 px-4 py-1 text-[9px] font-extrabold tracking-[0.2em] uppercase">
            WHO WE ARE
          </Badge>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6 leading-tight max-w-2xl">
            Engineering the future of <span className="text-primary italic">global business.</span>
          </h1>
          <p className="text-muted-foreground text-[13px] md:text-sm max-w-xl leading-relaxed font-medium">
            A small team of dedicated engineers building software that scales and designs that resonate. Trusted by international companies to lead their technical transformation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* STICKY SIDEBAR - Matches the user's preferred detail style */}
          <div className="lg:col-span-3 space-y-12 lg:sticky lg:top-32 h-fit self-start order-2 lg:order-1">
            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">MISSION</h3>
              <p className="text-sm font-bold text-foreground leading-snug">
                {aboutData.mission}
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">VISION</h3>
              <p className="text-sm font-bold text-foreground leading-snug">
                {aboutData.vision}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-12">
               <div>
                 <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">FOUNDED</h3>
                 <p className="text-sm font-bold text-foreground">{aboutData.founded}</p>
               </div>
               <div>
                  <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">FOUNDER & CEO</h3>
                  <p className="text-sm font-bold text-foreground">{aboutData.ceo}</p>
               </div>
            </div>

            <div className="pt-8 border-t border-border/50">
               <Button className="w-full rounded-xl h-14 bg-primary text-white hover:bg-primary/90 font-bold shadow-2xl shadow-primary/20" asChild>
                  <Link to="/contact">Discuss a project</Link>
               </Button>
            </div>
          </div>

          {/* MAIN CONTENT SCROLL AREA */}
          <div className="lg:col-span-9 space-y-24 order-1 lg:order-2 lg:pl-16">
            
            <div className="lg:col-span-12">
               {/* Main Banner Image */}
               <div className="relative rounded-3xl overflow-hidden border border-border aspect-[21/9]">
                  <img 
                    src="/kigali.jpg" 
                    alt="Kigali Global Innovation Hub" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
               </div>

               <div className="grid md:grid-cols-12 gap-8 mt-12">
                  <h2 className="md:col-span-4 text-2xl font-bold text-foreground leading-tight">Our Global Reach</h2>
                  <div className="md:col-span-8 space-y-6">
                    {aboutData.story.map((para, i) => (
                      <p key={i} className="text-muted-foreground text-[13px] leading-relaxed font-semibold">
                        {para}
                      </p>
                    ))}
                  </div>
               </div>
            </div>

            {/* Values Grid - Refined & Minimalist */}
            <section className="space-y-12">
               <h2 className="text-2xl font-bold text-foreground leading-tight">Philosophy</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {values.map((v, i) => (
                   <div key={i} className="p-8 bg-secondary/10 rounded-2xl border border-border/40 group hover:border-primary/20 transition-all duration-300">
                     <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                        <v.icon className="h-5 w-5" />
                     </div>
                     <h4 className="text-base font-bold mb-3">{v.title}</h4>
                     <p className="text-muted-foreground text-[13px] leading-relaxed font-medium">
                       {v.description}
                     </p>
                   </div>
                 ))}
               </div>
            </section>

            {/* Leadership Deep Dive */}
            <section className="py-12 border-t border-border/40">
               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border border-border/50 flex-shrink-0">
                     <img src="/theodev.png" alt="CEO" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">FROM THE FOUNDER</span>
                    <h3 className="text-2xl font-bold mb-6 italic leading-relaxed text-foreground">
                      "We don't simply write code; we architect the digital engines that empower global businesses to disrupt their industries and redefine what's possible."
                    </h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed font-semibold mb-6">
                      Theogene Iradukunda is the driving force behind NeoScratch, leading with a relentless vision for high-performance open-source excellence. His mission is to ensure that every architectural decision we make serves as a launchpad for the infinite scalability and global dominance of our world-class clients.
                    </p>
                    <div className="flex items-center gap-3">
                       <Button size="sm" className="rounded-full bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-bold h-9 px-6 text-[10px] tracking-widest shadow-xl shadow-blue-500/20" asChild>
                          <a href="https://www.linkedin.com/in/theogene-iradukunda-88b07a381/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                       </Button>
                       <Button size="sm" className="rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white font-bold h-9 px-6 text-[10px] tracking-widest shadow-xl shadow-blue-400/20" asChild>
                          <a href="https://x.com/theo_dev_rw" target="_blank" rel="noopener noreferrer">TWITTER</a>
                       </Button>
                    </div>
                  </div>
               </div>
            </section>
          </div>

        </div>
      </div>

      {/* Blue Grid CTA Section */}
      <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            Bring your global <br className="hidden md:block" /> technical vision to market.
          </h2>
          <p className="text-white/70 text-[13px] md:text-sm mb-12 max-w-2xl mx-auto font-semibold">
            Partner with engineering experts. From MVP to global scale, we lead the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90 rounded-xl px-12 h-16 text-lg font-bold shadow-2xl" asChild>
              <Link to="/request-website">Get Free Quote</Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-12 h-16 text-lg font-bold backdrop-blur-sm" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}