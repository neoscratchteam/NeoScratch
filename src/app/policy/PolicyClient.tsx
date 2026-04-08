'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  Eye,
  Lock,
  Database,
  Cookie,
  UserCheck,
  AlertCircle,
  Mail,
  ChevronRight,
} from 'lucide-react';

const sections = [
  {
    id: 'overview',
    icon: Shield,
    title: 'Overview',
    content: `At NeoScratch, your privacy is not an afterthought — it is a core design principle. This Privacy Policy explains what personal information we collect when you visit our website (neoscratch.com) or engage with our services, how we use that information, and the rights you have regarding your data.

By using our website or services, you agree to the practices described in this policy. If you do not agree, please refrain from using our services.

This policy was last updated on April 8, 2026.`,
  },
  {
    id: 'data-we-collect',
    icon: Database,
    title: 'Data We Collect',
    content: `We collect the following categories of information:

**Information you provide directly**
• Contact form submissions (name, email, message, project details)
• Job or partnership application data (name, email, portfolio links, resume)
• Website service request details (business name, goals, budget range)

**Information collected automatically**
• IP address and approximate geographic location
• Browser type, device type, and operating system
• Pages visited, time spent, and referral source
• Error logs and performance metrics

We do not collect sensitive personal data such as government IDs, financial account numbers, or health-related information.`,
  },
  {
    id: 'how-we-use',
    icon: Eye,
    title: 'How We Use Your Data',
    content: `We use the information we collect to:

• Respond to your inquiries and deliver the services you request
• Process website build or consulting project requests
• Evaluate job and partnership applications
• Improve our website's performance and user experience
• Send transactional emails (e.g., booking confirmations, project updates)
• Comply with legal obligations

We will never sell your personal data. We do not use your data for automated profiling or decision-making that produces legal or similarly significant effects without explicit consent.`,
  },
  {
    id: 'data-sharing',
    icon: UserCheck,
    title: 'Data Sharing',
    content: `We share data only where strictly necessary:

**Service providers**: We use trusted third-party tools (e.g., Vercel for hosting, email delivery platforms) that process data on our behalf under strict confidentiality and data processing agreements.

**Legal requirements**: We may disclose information if required by law, court order, or to protect the safety and rights of NeoScratch and its users.

**Business transfers**: In the event of a merger, acquisition, or asset sale, your data may be transferred. You will be notified prior to such a transfer.

We do not share your information with advertising networks or data brokers.`,
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: 'Cookies & Tracking',
    content: `We use minimal, privacy-respecting cookies:

**Essential cookies** — Required for the website to function properly (e.g., theme preferences). These cannot be disabled.

**Analytics cookies** — Used to understand aggregate traffic patterns and improve the site (e.g., page views, session duration). These are anonymous and contain no personally identifiable information.

We do not use third-party advertising or cross-site tracking cookies.

You can control or delete cookies through your browser settings at any time. Disabling essential cookies may affect site functionality.`,
  },
  {
    id: 'data-security',
    icon: Lock,
    title: 'Data Security',
    content: `We implement industry-standard safeguards to protect your data:

• All data is transmitted over HTTPS (TLS encryption)
• Access to personal data is restricted to authorised NeoScratch team members only
• Third-party services we use are vetted for security and compliance
• We conduct regular reviews of our data handling practices

However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`,
  },
  {
    id: 'retention',
    icon: AlertCircle,
    title: 'Retention & Deletion',
    content: `We retain your personal data only for as long as necessary:

• Contact and inquiry data: retained for up to 24 months, then permanently deleted
• Application data (jobs / partnerships): retained for 12 months after the application cycle closes
• Website request submissions: retained for the duration of the project plus 12 months

You may request deletion of your data at any time (see "Your Rights" below). Upon verified request, we will delete or anonymise your data within 30 days.`,
  },
  {
    id: 'your-rights',
    icon: UserCheck,
    title: 'Your Rights',
    content: `Depending on your location, you may have the following rights:

• **Right to access** — Request a copy of the personal data we hold about you
• **Right to correction** — Request correction of inaccurate or incomplete data
• **Right to erasure** — Request deletion of your personal data
• **Right to restriction** — Ask us to limit how we process your data
• **Right to portability** — Receive your data in a structured, machine-readable format
• **Right to object** — Object to processing based on legitimate interests

To exercise any of these rights, email us at customerservice@neoscratch.com. We will respond within 30 days. You may also lodge a complaint with your local data protection authority.`,
  },
  {
    id: 'contact',
    icon: Mail,
    title: 'Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy, please reach out:

**NeoScratch**
Kigali, Rwanda
📧 customerservice@neoscratch.com
📞 +250 792 734 752

We are committed to resolving any privacy concerns promptly and transparently. Thank you for trusting NeoScratch with your information.`,
  },
];

function formatContent(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <p key={i} className="font-bold text-foreground mt-4 mb-1">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    }
    // inline bold
    if (line.includes('**')) {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-1">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={j} className="text-foreground font-semibold">
                {part.replace(/\*\*/g, '')}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    if (line.startsWith('•')) {
      return (
        <li key={i} className="text-muted-foreground leading-relaxed ml-4 list-none flex gap-2">
          <span className="text-primary mt-1 shrink-0">›</span>
          <span>{line.slice(1).trim()}</span>
        </li>
      );
    }
    if (line.trim() === '') return <div key={i} className="h-2" />;
    return (
      <p key={i} className="text-muted-foreground leading-relaxed">
        {line}
      </p>
    );
  });
}

export default function PolicyClient() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Legal &amp; Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We believe in radical transparency. Here is exactly how we handle your data — and what rights you have.
          </p>
          <p className="mt-6 text-white/40 text-sm">Last updated: April 8, 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">

          {/* Sidebar Nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Sections
              </p>
              {sections.map((s) => {
                const Icon = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSection(s.id);
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-primary group-hover:scale-110 transition-transform'}`} />
                    {s.title}
                    {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
                  </button>
                );
              })}

              <div className="mt-8 p-4 rounded-xl border border-border bg-secondary/40 space-y-2">
                <p className="text-xs font-semibold text-foreground">Questions?</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Reach our team directly via email.</p>
                <a
                  href="mailto:customerservice@neoscratch.com"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <Mail className="w-3 h-3" />
                  Email Us
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  id={s.id}
                  key={s.id}
                  className="scroll-mt-28 group"
                  onMouseEnter={() => setActiveSection(s.id)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                        Section {String(idx + 1).padStart(2, '0')}
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">{s.title}</h2>
                    </div>
                  </div>

                  <div className="pl-14 space-y-1 border-l-2 border-border group-hover:border-primary/40 transition-colors duration-300">
                    {formatContent(s.content)}
                  </div>

                  {idx < sections.length - 1 && (
                    <div className="mt-12 h-px bg-border" />
                  )}
                </div>
              );
            })}

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Your Data, Your Control</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
                You can request access to, correction of, or deletion of your personal data at any time.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-200 shadow-md shadow-primary/20"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
