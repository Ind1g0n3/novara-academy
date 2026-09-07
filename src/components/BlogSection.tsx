import React, { useState } from "react";
import { ROTATING_BLOG_POSTS, BlogPost } from "../data/blogData";
import { 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Flame,
  Zap
} from "lucide-react";

export const BlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A84C]/8 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Knowledge Lab & Free Blueprints</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Rotating Free Guides & <span className="gold-gradient-text">Engineering Blueprints</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          In-depth breakdowns on multi-account scaling, anti-ban infrastructure, 4K rendering pipelines, and agency monetization. These blueprints rotate weekly based on our latest video drops.
        </p>
      </div>

      {/* 6 Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {ROTATING_BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="glass-card rounded-3xl p-6 border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top Badge & Meta */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#F5E2B3] text-[10px] font-mono font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[11px] font-mono text-[#8B9BB4] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C9A84C]" />
                  {post.readTime}
                </span>
              </div>

              {post.isRotatingFreeDrop && (
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#10B981] mb-2">
                  <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>THIS WEEK'S FREE UNLOCKED DROP</span>
                </div>
              )}

              <h3 className="font-aquire text-base sm:text-lg font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors leading-snug mb-3 uppercase">
                {post.title}
              </h3>

              <p className="text-xs text-[#8B9BB4] leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>
            </div>

            {/* Read Button */}
            <button
              onClick={() => setActivePost(post)}
              className="w-full py-3 rounded-xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C] text-[#E8D5A3] hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
            >
              <span>Read Full Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Full Article Modal Reader */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-10 border-2 border-[#C9A84C]/50 bg-[#05080F] shadow-2xl">
            
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/50 text-[#F5E2B3] font-mono text-xs font-bold uppercase">
                  {activePost.category}
                </span>
                <span className="text-xs font-mono text-[#8B9BB4] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                  {activePost.readTime}
                </span>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className="w-9 h-9 rounded-full bg-[#0B1120] border border-white/10 hover:border-[#C9A84C] text-[#8B9BB4] hover:text-white flex items-center justify-center transition-all"
                title="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Title */}
            <h1 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] leading-tight mb-4 uppercase">
              {activePost.title}
            </h1>

            {/* Sub-meta */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#64748B] mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
                {activePost.publishDate}
              </span>
              <span>•</span>
              <span className="text-[#10B981] font-bold">100% Free Rotating Community Blueprint</span>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-[#0B1120] border border-[#10B981]/40 mb-8 space-y-2.5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-extrabold text-[#10B981] uppercase tracking-wider mb-1">
                <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                <span>KEY ARCHITECTURAL TAKEAWAYS:</span>
              </div>
              {activePost.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EDF0F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-10">
              {activePost.content.map((paragraph, idx) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={idx} className="font-aquire text-lg sm:text-xl font-bold text-[#E8D5A3] tracking-wide pt-4 mb-2 uppercase">
                      {paragraph.replace("##", "").trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith("`") || paragraph.startsWith("def ") || paragraph.startsWith("class ") || paragraph.startsWith("ffmpeg ")) {
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-[#020408] border border-white/10 font-mono text-xs text-[#A7F3D0] overflow-x-auto my-4">
                      <pre className="whitespace-pre-wrap">{paragraph}</pre>
                    </div>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Bottom Join Skool Callout */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1120] via-[#1E293B]/60 to-[#0B1120] border border-[#C9A84C]/40 text-center">
              <span className="font-aquire text-xs font-bold text-[#C9A84C] uppercase tracking-widest block mb-2">
                UNLOCK THE FULL CODEBASE
              </span>
              <h3 className="font-aquire text-xl sm:text-2xl font-bold text-[#EDF0F5] mb-3 uppercase">
                Ready to Implement This In Your Systems?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
                Get the full raw Python scripts, anti-ban configs, and 150+ prompt vaults inside our Skool community.
              </p>
              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#856343]" />
                <span>Join Skool Community Free →</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default BlogSection;
