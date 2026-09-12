import React, { useState, useEffect } from "react";
import { Layers, Compass, CodeXml, BookOpen, Youtube, Flame, ArrowUp } from "lucide-react";

export const FloatingDock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-[#0B1120]/95 border border-[#C9A84C]/40 backdrop-blur-2xl shadow-2xl shadow-black/80">
        
        <a
          href="#architecture"
          className="p-2.5 sm:p-3 rounded-xl text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/10 transition-all hover:scale-110"
          title="Architecture Mindmap"
        >
          <Layers className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#C9A84C]" />
        </a>

        <a
          href="#agents"
          className="p-2.5 sm:p-3 rounded-xl text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/10 transition-all hover:scale-110"
          title="Agent Constellation"
        >
          <Compass className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#8B5CF6]" />
        </a>

        <a
          href="#vault"
          className="p-2.5 sm:p-3 rounded-xl text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/10 transition-all hover:scale-110"
          title="Prompt Vault"
        >
          <CodeXml className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#10B981]" />
        </a>

        <a
          href="#blog"
          className="p-2.5 sm:p-3 rounded-xl text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/10 transition-all hover:scale-110"
          title="Blueprints & Guides"
        >
          <BookOpen className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#3B82F6]" />
        </a>

        <a
          href="#youtube"
          className="p-2.5 sm:p-3 rounded-xl text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/10 transition-all hover:scale-110"
          title="YouTube Hub"
        >
          <Youtube className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#F43F5E]" />
        </a>

        <div className="h-5 w-px bg-white/20 mx-1" />

        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#030712] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/30 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
        >
          <Flame className="w-4.5 h-4.5 text-[#F59E0B]" />
          <span>Join Skool</span>
        </a>

        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 rounded-xl text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/10 transition-all hover:scale-110"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default FloatingDock;
