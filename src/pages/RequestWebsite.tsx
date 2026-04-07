import React, { useState } from 'react';
import { Send, Check, MessageCircle, ArrowRight, Zap, Shield, Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const services = [
  'Website Design',
  'Google Business Profile',
  'SEO',
  'Custom Software',
  'Mobile App',
  'Website Maintenance',
  'Not sure yet',
];

const budgetRanges = [
  'Under 500k RWF',
  '500k – 1M RWF',
  '1M – 3M RWF',
  '3M+ RWF',
  'Not sure yet',
];

export default function RequestWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    serviceType: '',
    budget: '',
    hasWebsite: 'No',
    domain: '',
    description: '',
  });
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.serviceType || !formData.budget || !formData.description) {
      toast({
        title: "Incomplete Request",
        description: "Please fill in all (*) required fields.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const whatsappMessage = `
*NEW PROJECT INQUIRY | NEOSCRATCH*
-------------------------
*Client:* ${formData.name}
*Email:* ${formData.email || 'N/A'}
*WhatsApp:* ${formData.whatsapp}
*Business:* ${formData.company || 'N/A'}

*PROJECT DETAILS*
*Service:* ${formData.serviceType}
*Budget:* ${formData.budget}
*Existing Website:* ${formData.hasWebsite}
${formData.hasWebsite === 'Yes' ? `*Domain:* ${formData.domain}` : ''}

*DESCRIPTION*
${formData.description}
-------------------------
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '250792734752'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitting(false);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSelection = (field: 'serviceType' | 'budget', value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 🚀 COMPACT HERO SECTION */}
      <section className="pt-24 pb-16 lg:pt-36 lg:pb-20 bg-[#1a73e8] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="bg-white/10 text-white border-white/20 text-[9px] uppercase tracking-[0.2em] mb-4">Architecture Brief</Badge>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4 animate-fade-in uppercase">
            Architect Your <br /> Digital <span className="opacity-70">Presence.</span>
          </h1>
          <p className="text-[13px] text-white/70 max-w-xl mx-auto leading-relaxed font-semibold animate-slide-up">
            Fast, high-performance inquiries for global scaling.
          </p>
        </div>
      </section>

      {/* 📝 PROJECT INQUIRY FORM - SMALL & READABLE STYLE */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border/40 rounded-3xl p-6 lg:p-10 shadow-2xl shadow-blue-500/5">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Section 1: Your Details */}
              <div className="space-y-6">
                <h2 className="text-[17px] font-black tracking-tight text-foreground border-l-4 border-[#1a73e8] pl-4">Your details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label className="block text-[11px] font-black text-muted-foreground/80 uppercase tracking-widest mb-2">Your name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border/60 rounded-xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-[13px] font-semibold placeholder:text-muted-foreground/30"
                      placeholder="Jean Gatare"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-muted-foreground/80 uppercase tracking-widest mb-2">Phone / WhatsApp *</label>
                    <input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border/60 rounded-xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-[13px] font-semibold placeholder:text-muted-foreground/30"
                      placeholder="+250 78X XXX XXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-muted-foreground/80 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border/60 rounded-xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-[13px] font-semibold placeholder:text-muted-foreground/30"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-muted-foreground/80 uppercase tracking-widest mb-2">Business name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border/60 rounded-xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-[13px] font-semibold placeholder:text-muted-foreground/30"
                      placeholder="Your business name"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: What do you need? */}
              <div className="space-y-6">
                <h2 className="text-[17px] font-black tracking-tight text-foreground border-l-4 border-[#1a73e8] pl-4">What do you need? *</h2>
                <div className="flex flex-wrap gap-2.5">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSelection('serviceType', s)}
                      className={`px-4 py-2.5 rounded-xl border text-[12px] font-black transition-all duration-300 ${
                        formData.serviceType === s 
                          ? 'bg-[#1a73e8] text-white border-[#1a73e8]' 
                          : 'bg-white text-muted-foreground/80 border-border hover:border-[#1a73e8]/30 hover:text-[#1a73e8]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: Budget range */}
              <div className="space-y-6">
                <h2 className="text-[17px] font-black tracking-tight text-foreground border-l-4 border-[#1a73e8] pl-4">Budget range</h2>
                <div className="flex flex-wrap gap-2.5">
                  {budgetRanges.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => toggleSelection('budget', r)}
                      className={`px-4 py-2.5 rounded-xl border text-[12px] font-black transition-all duration-300 ${
                        formData.budget === r 
                          ? 'border-[#1a73e8] text-[#1a73e8] border-2 bg-white' 
                          : 'bg-white text-muted-foreground/80 border-border hover:border-[#1a73e8]/30 hover:text-[#1a73e8]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 4: Tell us briefly */}
              <div className="space-y-6">
                <h2 className="text-[17px] font-black tracking-tight text-foreground border-l-4 border-[#1a73e8] pl-4">Tell us briefly</h2>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-6 py-6 border border-border/60 rounded-xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-[13px] font-semibold resize-none placeholder:text-muted-foreground/30"
                  placeholder="What does your business do? What do you need help with? Any specific features or deadlines?"
                  required
                />
              </div>

              {/* Final Submit Action */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="xl"
                  className="w-full rounded-xl bg-[#1a73e8] text-white hover:bg-black hover:scale-[1.02] transition-all duration-300 h-14 text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-blue-500/10"
                  disabled={submitting}
                >
                  {submitting ? 'Preparing Brief...' : 'Send Request via WhatsApp'}
                  {!submitting && <ArrowRight className="ml-2.5 h-4 w-4" />}
                </Button>
                <div className="mt-6 flex items-center justify-center gap-6 text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]">
                   <div className="flex items-center"><Shield className="h-3 w-3 mr-2" /> Global Standard</div>
                   <div className="flex items-center"><Globe className="h-3 w-3 mr-2" /> Fast Inquiry</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 🏗️ ARCHITECTURE STEPS - MINIMALIST */}
      <section className="py-20 bg-white border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { id: '01', title: 'TECHNICAL BRIEF', desc: 'Secure project submission.' },
               { id: '02', title: 'EXECUTIVE REVIEW', desc: 'Requirements analysis.' },
               { id: '03', title: 'PROPOSAL PHASE', desc: 'Architecture map and quote.' },
               { id: '04', title: 'ENGINEERING', desc: 'Industry-leading build.' }
             ].map(step => (
               <div key={step.id} className="group">
                  <span className="text-2xl font-black text-[#1a73e8]/10 mb-2 block">{step.id}</span>
                  <h3 className="text-[10px] font-black tracking-widest text-foreground mb-1 uppercase">{step.title}</h3>
                  <p className="text-[11px] font-bold text-muted-foreground leading-tight">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-medium ${className}`}>
      {children}
    </span>
  );
}