import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, BookOpen, Search, Share2, MessageCircle, Eye, EyeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { blogPosts, BlogPost } from '@/data/blog';

export default function News() {
  const [categoryFilter, setCategoryFilter] = useState('All News');
  const [timeFilter, setTimeFilter] = useState('All Time');

  // DYNAMIC CATEGORY EXTRACTION
  const categories = ['All News', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const timePeriods = ['All Time', 'Today', 'Last 7 Days', 'This Month'];

  const handleFilterChange = (type: 'cat' | 'time', val: string) => {
    if (type === 'cat') setCategoryFilter(val);
    if (type === 'time') setTimeFilter(val);
    
    // Smooth scroll to results
    const element = document.getElementById('news-portal-grid');
    if (element) {
      const offset = 180; // Accounting for sticky header + CONSOLIDATED filter bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getFilteredNews = () => {
    let results = [...blogPosts];

    // Filter by Category
    if (categoryFilter !== 'All News') {
      results = results.filter(p => p.category === categoryFilter);
    }

    // Filter by Time Period
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    
    if (timeFilter === 'Today') {
      results = results.filter(p => p.date === todayStr);
    } else if (timeFilter === 'Last 7 Days') {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(now.getDate() - 7);
      results = results.filter(p => new Date(p.date) >= sevenDaysAgo);
    } else if (timeFilter === 'This Month') {
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      results = results.filter(p => new Date(p.date) >= monthStart);
    }

    return results;
  };

  const filteredNews = getFilteredNews();

  return (
    <div className="min-h-screen bg-white">
      
      {/* 🟡 NAVIGATION WRAPPER - Confines the Sticky Filter to the Results Section */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION */}
        <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#1a73e8] relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
              <span>NeoScratch Official Newsroom</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto uppercase leading-tight">
              Kigali Tech News <br /> <span className="opacity-70">Global Impact.</span>
            </h1>
            <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
              Explore professional insights about **Rwanda Tech Evolution**, international engineering standards, and strategic business announcements. Stay connected with our news portal.
            </p>
          </div>
        </section>

        {/* 🔍 COMPACT INLINE FILTER BAR */}
        <section className="sticky top-[72px] bg-white z-40 border-b border-border/40 shadow-sm overflow-hidden">
           <div className="py-4 bg-[#f8fafc]/50">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Tier 1: Category Sort - Inline List */}
                  <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar whitespace-nowrap lg:border-r lg:border-border/20 lg:pr-10">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1a73e8]">Sort By:</span>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleFilterChange('cat', cat)}
                        className={`px-4 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-300 ${
                          categoryFilter === cat 
                            ? 'bg-[#1a73e8] text-white shadow-lg shadow-blue-500/10' 
                            : 'bg-white border border-border text-muted-foreground/80 hover:border-[#1a73e8]/30 hover:text-[#1a73e8]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Tier 2: Timeline Sort - Compact Links */}
                  <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar whitespace-nowrap">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1a73e8]">Timeline:</span>
                    {timePeriods.map((period) => (
                      <button
                        key={period}
                        onClick={() => handleFilterChange('time', period)}
                        className={`text-[10px] font-black uppercase tracking-widest transition-all ${
                          timeFilter === period 
                            ? 'text-foreground border-b-2 border-[#1a73e8] pb-1' 
                            : 'text-muted-foreground/50 hover:text-[#1a73e8] border-b-2 border-transparent pb-1'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* 📰 NEWS PORTAL GRID */}
        <section id="news-portal-grid" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredNews.map((post, i) => (
                <div 
                  key={post.id}
                  className="group flex flex-col bg-white border border-[#1a73e8]/10 rounded-3xl overflow-hidden hover:border-[#1a73e8]/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#1a73e8] text-white text-[9px] font-bold border-none px-3 py-1 shadow-lg shadow-blue-500/20">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">
                         <Calendar className="h-3 w-3 mr-2 text-[#1a73e8]" />
                         {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center text-[10px] font-black text-[#1a73e8] bg-blue-50 px-2 py-0.5 rounded-full">
                         <Eye className="h-3 w-3 mr-1.5" />
                         {post.views} Reads
                      </div>
                    </div>
                    
                    <h3 className="text-[17px] font-black mb-4 text-foreground group-hover:text-[#1a73e8] transition-colors leading-snug uppercase tracking-tight line-clamp-2">
                       {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-[13px] leading-relaxed font-semibold mb-8 line-clamp-3">
                       {post.excerpt}
                    </p>

                    <div className="mt-auto pt-8 border-t border-border/40 flex items-center justify-between">
                       <div className="flex items-center">
                          <div className="h-9 w-9 rounded-full bg-[#f4f7fa] flex items-center justify-center mr-3 border border-border/40">
                             <User className="h-4 w-4 text-muted-foreground/60" />
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{post.author}</span>
                             <span className="text-[9px] font-bold text-muted-foreground/60">{post.readTime}</span>
                          </div>
                       </div>
                       <Link to={`/blog/${post.id}`} className="p-2 h-10 w-10 flex items-center justify-center bg-[#1a73e8]/5 text-[#1a73e8] rounded-full hover:bg-[#1a73e8] hover:text-white transition-all duration-300">
                          <ArrowRight className="h-4 w-4" />
                       </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ⬆️ BACK TO FILTERS BUTTON */}
            <div className="mt-16 flex justify-center border-t border-border/40 pt-12">
               <button 
                 onClick={() => handleFilterChange('cat', categoryFilter)}
                 className="inline-flex items-center text-[10px] font-bold text-muted-foreground hover:text-[#1a73e8] uppercase tracking-[0.3em] transition-all group"
               >
                 Back to Portal Filters <ArrowRight className="ml-2 h-3.5 w-3.5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </div>
        </section>
      </div>

      {/* 🚀 NEWS PORTAL CTA */}
      <section className="py-24 bg-[#f8fafc] border-y border-border/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tight text-foreground uppercase">
             Newsroom <br /> <span className="text-[#1a73e8]">Inquiry.</span>
           </h2>
           <p className="text-sm lg:text-base text-muted-foreground font-semibold mb-12 max-w-2xl mx-auto">
             For media inquiries, strategic announcements, or to contribute to our Rwanda Tech news desk, connect with our communications office.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="rounded-full bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 px-12 h-16 font-bold shadow-2xl shadow-blue-500/20 uppercase" asChild>
                <Link to="/contact">Editorial Desk</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-foreground font-black text-foreground hover:bg-black hover:text-white hover:border-black px-12 h-16 uppercase transition-all" asChild>
                <Link to="/contact">Call Now</Link>
              </Button>
           </div>
        </div>
      </section>

    </div>
  );
}