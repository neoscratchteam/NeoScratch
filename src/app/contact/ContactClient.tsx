'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    const whatsappMessage = `
🚀 Message from NeoScratch Contact Form

👤 Name: ${formData.name}  
📧 Email: ${formData.email}  
🏷️ Subject: ${formData.subject}

📝 Message: 
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '250792734752'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Opening WhatsApp...",
      description: "Redirecting to WhatsApp to send your inquiry.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* 🚀 MODERN HERO SECTION - Vertically Centered */}
      <section className="min-h-[40vh] pt-24 lg:pt-36 pb-24 flex flex-col justify-center bg-[#1a73e8] relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
             <span>Global Support Hub</span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto uppercase leading-tight">
             Let's Build the <br /> <span className="opacity-70">Future Together.</span>
          </h1>
          <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
             Connect with our engineering team for high-end software development, digital strategy, or technical consultation. We operate globally from the heart of Rwanda.
          </p>
        </div>
      </section>

      {/* 📍 CONTACT GRID & FORM */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8 animate-fade-in">
              <div className="space-y-4 mb-12">
                 <h2 className="text-[12px] font-black tracking-[0.2em] text-[#1a73e8] uppercase">Global Outreach</h2>
                 <p className="text-2xl font-bold text-foreground">Reach out through our specialized channels.</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 {[
                   { icon: Phone, label: 'Call / WhatsApp', val: '+250 792 734 752', color: 'bg-green-500/10 text-green-600' },
                   { icon: Mail, label: 'Official Email', val: 'customerservice@neoscratch.com', color: 'bg-[#1a73e8]/10 text-[#1a73e8]' },
                   { icon: Globe, label: 'Location', val: 'Kigali, Rwanda (Remote Global)', color: 'bg-orange-500/10 text-orange-600' },
                   { icon: Clock, label: 'Working Hours', val: 'Mon-Sat: 8:00 AM - 6:00 PM', color: 'bg-purple-500/10 text-purple-600' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center p-6 border border-[#1a73e8]/10 rounded-2xl hover:border-[#1a73e8]/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center mr-6 ${item.color}`}>
                         <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 mb-1">{item.label}</p>
                         <p className="text-[13px] font-bold text-foreground group-hover:text-[#1a73e8] transition-colors">{item.val}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="p-8 bg-[#f8fafc] rounded-3xl border border-border/40">
                 <p className="text-[13px] font-semibold text-muted-foreground leading-relaxed italic">
                    "NeoScratch operates as a modern digital agency. While our roots are in Rwanda, we provide world-class engineering services to clients across the globe using fully remote collaboration tools."
                 </p>
              </div>
            </div>

            {/* Right: Modern Form Card */}
            <div className="lg:col-span-7 bg-white border border-[#1a73e8]/20 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-500/5 animate-scale-in">
              <div className="mb-10 text-center lg:text-left">
                 <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Direct Inquiry</h3>
                 <p className="text-[13px] font-semibold text-muted-foreground">Fill in the details below to start your conversation on WhatsApp instantly.</p>
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-[#f8fafc] border border-transparent rounded-2xl text-[13px] font-medium focus:bg-white focus:border-[#1a73e8] focus:ring-4 focus:ring-[#1a73e8]/10 transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your business email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-[#f8fafc] border border-transparent rounded-2xl text-[13px] font-medium focus:bg-white focus:border-[#1a73e8] focus:ring-4 focus:ring-[#1a73e8]/10 transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">Project Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Modernizing our SaaS Platform"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#f8fafc] border border-transparent rounded-2xl text-[13px] font-medium focus:bg-white focus:border-[#1a73e8] focus:ring-4 focus:ring-[#1a73e8]/10 transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">How can we help?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-[#f8fafc] border border-transparent rounded-2xl text-[13px] font-medium focus:bg-white focus:border-[#1a73e8] focus:ring-4 focus:ring-[#1a73e8]/10 transition-all outline-none resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 font-bold text-[14px] shadow-xl shadow-blue-500/20 group"
                  disabled={sending}
                >
                  {sending ? 'Processing Inquiry...' : 'Connect via WhatsApp'}
                  <Send className="ml-3 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                
                <p className="text-center text-[11px] text-muted-foreground font-semibold">
                   *We typically respond within <span className="text-[#1a73e8]">2 business hours</span> for global inquiries.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 BOTTOM CTA - Global Link */}
      <section className="py-24 bg-[#f8fafc] border-t border-border/40">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[13px] font-bold text-[#1a73e8] uppercase tracking-widest mb-6">Prefer another way?</p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
               <a href="https://www.linkedin.com/in/theogene-iradukunda-88b07a381/" className="text-foreground/60 hover:text-[#1a73e8] text-[13px] font-bold flex items-center transition-colors">LinkedIn Profile <ArrowRight className="ml-2 h-4 w-4" /></a>
               <a href="https://github.com/theodevrwanda" className="text-foreground/60 hover:text-[#1a73e8] text-[13px] font-bold flex items-center transition-colors">GitHub Repository <ArrowRight className="ml-2 h-4 w-4" /></a>
               <Link href="/projects" className="text-foreground/60 hover:text-[#1a73e8] text-[13px] font-bold flex items-center transition-colors">Browse Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
         </div>
      </section>
    </div>
  );
}
