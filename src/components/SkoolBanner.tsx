import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const SkoolBanner: React.FC = () => {
  return (
    <aside aria-label="Skool Community VIP Announcement" className="relative z-50 pt-3 pb-1 px-4 max-w-7xl mx-auto flex justify-center">
      <a
        href="https://www.skool.com/novara-ai-media-group-5745/about"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2.5 sm:gap-3.5 p-1.5 sm:pr-4 rounded-full bg-[#0D121F]/90 border border-[#C09F79]/40 hover:border-[#DCBD9B] shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(220,189,155,0.25)] hover:shadow-[0_6px_30px_rgba(192,159,121,0.3)] backdrop-blur-xl transition-all duration-300 transform active:scale-98"
      >
        {/* Pulsing Pill Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#856343] via-[#C09F79] to-[#DCBD9B] text-[#040711] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#040711] animate-ping" />
          <span>🔥 NOVARA INNER CIRCLE</span>
        </span>

        {/* Value Text */}
        <span className="text-xs sm:text-sm font-medium text-[#F5EEDB] hidden md:inline truncate max-w-xl">
          Unlock Full Multi-Agent OS Python Codebase, 150+ Master Prompts, Browser RPA Engines & Weekly Live Calls.
        </span>
        <span className="text-xs font-medium text-[#F5EEDB] md:hidden">
          Unlock Full Multi-Agent OS Code & Prompts
        </span>

        {/* CTA Link Indicator */}
        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DCBD9B] group-hover:text-white transition-colors pl-1">
          <Sparkles className="w-3.5 h-3.5 text-[#DCBD9B]" />
          <span>Join Inner Circle</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </a>
    </aside>
  );
};

export default SkoolBanner;
