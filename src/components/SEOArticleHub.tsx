import React from "react";
import { SEO_BLOG_GUIDES } from "../data/communitySalesData";
import { BookOpen, ArrowUpRight } from "lucide-react";

export const SEOArticleHub: React.FC = () => {
  return (
    <section id="guides" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/10 bg-[#080B14]/70 backdrop-blur-md">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[10px] font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-3">
          <BookOpen className="w-3 h-3 text-[#C9A84C]" />
          <span>Sovereign Knowledge Vault</span>
        </div>
        <h2 className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#EDF0F5]">
          Free Guides & <span className="gold-gradient-text">Engineering Blueprints</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#8B9BB4] mt-2">
          Deep dive articles on AI agents, multi-account scaling, anti-ban infrastructure, and video monetization.
        </p>
      </div>

      {/* Guide Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SEO_BLOG_GUIDES.map((guide, idx) => (
          <a
            key={idx}
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C]/50 hover:bg-[#121929] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8B9BB4] mb-2">
                <span className="text-[#C9A84C] font-semibold">{guide.category}</span>
                <span>{guide.readTime}</span>
              </div>
              <h3 className="text-sm font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors leading-snug">
                {guide.title}
              </h3>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#E8D5A3]">
              <span>Read Full Blueprint in Skool</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#0B1120] border border-white/15 hover:border-[#C9A84C] text-xs font-mono font-bold text-[#EDF0F5] hover:text-[#E8D5A3] transition-all"
        >
          <span>Access All 100+ Free Community Guides </span>
        </a>
      </div>

    </section>
  );
};

export default SEOArticleHub;
