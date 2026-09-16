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
    <div className="min-h-screen bg-[#E5E5E5] font-jakarta">
      
      {/* 🚀 MODERN HERO SECTION */}
      <section className="min-h-[40vh] pt-24 lg:pt-32 pb-20 bg-[#175A26] relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
               <span>Global Support Hub</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 animate-fade-in uppercase leading-tight">
               Let's Build the <br /> <span className="opacity-80 text-emerald-200">Future Together.</span>
            </h1>
            <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed font-medium animate-slide-up">
               Connect with our engineering team for high-end software development, digital strategy, or technical consultation. We operate globally from the heart of Rwanda.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <img src="/relax.svg" alt="Contact Illustration" className="w-64 lg:w-80 h-auto opacity-95 hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* 📍 CONTACT GRID & FORM */}
      <section className="py-20 relative overflow-hidden bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6 animate-fade-in">
              <div className="space-y-3 mb-8">
                 <h2 className="text-[12px] font-black tracking-[0.2em] text-[#175A26] uppercase">Global Outreach</h2>
                 <p className="text-2xl font-bold text-slate-900">Reach out through our specialized channels.</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 {[
                   { icon: Phone, label: 'Call / WhatsApp', val: '+250 792 734 752', color: 'bg-[#175A26]/10 text-[#175A26]' },
                   { icon: Mail, label: 'Official Email', val: 'thisisneoscratch@gmail.com', color: 'bg-[#175A26]/10 text-[#175A26]' },
                   { icon: Globe, label: 'Location', val: 'Kigali, Rwanda (Remote Global)', color: 'bg-[#175A26]/10 text-[#175A26]' },
                   { icon: Clock, label: 'Working Hours', val: 'Mon-Sat: 8:00 AM - 6:00 PM', color: 'bg-[#175A26]/10 text-[#175A26]' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#175A26] hover:shadow-lg transition-all group">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center mr-5 shrink-0 ${item.color}`}>
                         <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                         <p className="text-[13px] font-bold text-slate-900 group-hover:text-[#175A26] transition-colors">{item.val}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                 <p className="text-[13px] font-semibold text-slate-600 leading-relaxed italic">
                    "NeoScratch operates as a modern digital agency. While our roots are in Rwanda, we provide world-class engineering services to clients across the globe using fully remote collaboration tools."
                 </p>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl animate-scale-in">
              <div className="mb-8 text-center lg:text-left">
                 <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Direct Inquiry</h3>
                 <p className="text-[13px] font-semibold text-slate-500">Fill in the details below to start your conversation on WhatsApp instantly.</p>
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-medium focus:bg-white focus:border-[#175A26] focus:ring-2 focus:ring-[#175A26]/20 transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your business email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-medium focus:bg-white focus:border-[#175A26] focus:ring-2 focus:ring-[#175A26]/20 transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Project Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Modernizing our SaaS Platform"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-medium focus:bg-white focus:border-[#175A26] focus:ring-2 focus:ring-[#175A26]/20 transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">How can we help?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-medium focus:bg-white focus:border-[#175A26] focus:ring-2 focus:ring-[#175A26]/20 transition-all outline-none resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-[#175A26] text-white hover:bg-[#12481e] font-bold text-[14px] shadow-lg group"
                  disabled={sending}
                >
                  {sending ? 'Processing Inquiry...' : 'Connect via WhatsApp'}
                  <Send className="ml-3 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                
                <p className="text-center text-[11px] text-slate-500 font-semibold">
                   *We typically respond within <span className="text-[#175A26]">2 business hours</span> for global inquiries.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 BOTTOM CTA - Global Link */}
      <section className="py-16 bg-white border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[13px] font-bold text-[#175A26] uppercase tracking-widest mb-6">Prefer another way?</p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
               <a href="https://www.linkedin.com/in/theogene-iradukunda-88b07a381/" className="text-slate-600 hover:text-[#175A26] text-[13px] font-bold flex items-center transition-colors">LinkedIn Profile <ArrowRight className="ml-2 h-4 w-4" /></a>
               <a href="https://github.com/theodevrwanda" className="text-slate-600 hover:text-[#175A26] text-[13px] font-bold flex items-center transition-colors">GitHub Repository <ArrowRight className="ml-2 h-4 w-4" /></a>
               <Link href="/projects" className="text-slate-600 hover:text-[#175A26] text-[13px] font-bold flex items-center transition-colors">Browse Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
         </div>
      </section>
    </div>
  );
}
