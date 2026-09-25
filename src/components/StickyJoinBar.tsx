import React, { useState } from "react";
import { ArrowRight, Sparkles, X, Download } from "lucide-react";

interface StickyJoinBarProps {
  onOpenLeadModal?: (source?: string) => void;
}

export const StickyJoinBar: React.FC<StickyJoinBarProps> = ({ onOpenLeadModal }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Persistent Skool Community Join Bar"
      className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-[#080B14]/95 backdrop-blur-xl border-t border-[#C9A84C]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] transition-all animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 px-2 sm:px-4">
        
        {/* Left Side: Status & Value Proposition */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[10px] sm:text-xs font-mono font-bold text-[#A7F3D0] uppercase shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Inner Circle Live</span>
          </div>

          <p className="text-xs sm:text-sm text-[#EDF0F5] font-medium leading-tight">
            <span className="text-[#F5E2B3] font-bold">Novara Inner Circle Membership</span> • Direct access to 6-Agent OS, 150+ Prompts & Weekly Live Builds.{" "}
            <span className="text-[#C9A84C] hidden md:inline font-mono text-xs font-bold">($59/month)</span>
          </p>
        </div>

        {/* Right Side: CTA Button & Dismiss */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
          {/* Secondary Free Vault Option */}
          <button
            type="button"
            onClick={() => onOpenLeadModal?.("sticky_bar")}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-[#C9A84C]/40 hover:bg-[#C9A84C]/20 text-[11px] font-mono font-semibold text-[#E8D5A3] transition-colors cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Free Vault</span>
          </button>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all transform active:scale-95 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Inner Circle on Skool</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1.5 rounded-lg text-[#8B9BB4] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};

export default StickyJoinBar;