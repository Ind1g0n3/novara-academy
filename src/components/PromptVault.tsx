import React, { useState } from "react";
import { PROMPT_VAULT_ITEMS } from "../data/promptVaultData";
import { 
  Lock, 
  Terminal, 
  FileText, 
  Network, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Layers
} from "lucide-react";

export const PromptVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Prompts", "Scripts", "Mindmaps", "SOPs"];

  const filteredItems = selectedCategory === "All"
    ? PROMPT_VAULT_ITEMS
    : PROMPT_VAULT_ITEMS.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "All": return Layers;
      case "Prompts": return Sparkles;
      case "Scripts": return Terminal;
      case "Mindmaps": return Network;
      case "SOPs": return FileText;
      default: return Sparkles;
    }
  };

  return (
    <section id="vault" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <Lock className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Proprietary Intellectual Property</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          The Master Prompt & <span className="gold-gradient-text">Automation Vault</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Preview our battle-tested system prompts, anti-ban FFmpeg scripts, and conversion SOPs. Complete uncut source files and raw copy-paste repositories are unlocked inside our Skool community.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#C9A84C] text-[#030712] shadow-lg shadow-[#C9A84C]/25"
                    : "bg-[#0B1120] text-[#8B9BB4] border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className={`w-4.5 h-4.5 ${isSelected ? "text-[#030712]" : "text-[#C9A84C]"}`} />
                <span>{category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Vault Grid with Blurred Lock Overlays */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const Icon = getCategoryIcon(item.category);
          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono font-extrabold text-[#C9A84C] uppercase">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1">
                    <Icon className="w-3.5 h-3.5 text-[#C9A84C]" />
                    {item.targetTool}
                  </span>
                </div>

                <h3 className="font-aquire text-base font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8B9BB4] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Locked Code Preview Box with Blur Overlay */}
                <div className="relative rounded-xl bg-[#020408] border border-white/5 p-3 font-mono text-[11px] text-[#A7F3D0] max-h-32 overflow-hidden mb-4 leading-relaxed">
                  <div className="filter blur-[3.5px] select-none opacity-60">
                    <pre className="whitespace-pre-wrap">{item.content}</pre>
                  </div>
                  
                  {/* Floating Lock Badge Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020408]/60 backdrop-blur-[2px]">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1120] border border-[#C9A84C]/50 text-[#E8D5A3] text-[10px] font-mono font-bold shadow-lg">
                      <Lock className="w-3 h-3 text-[#C9A84C]" />
                      <span>PROPRIETARY IP LOCKED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Unlock Button */}
              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 bg-[#0B1120] border border-[#C9A84C]/40 text-[#E8D5A3] hover:bg-[#C9A84C] hover:text-[#030712] shadow-md group-hover:border-[#C9A84C]"
              >
                <span>Unlock Full Prompt in Skool</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] group-hover:text-[#030712] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Trust Anchor Footnote */}
      <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#8B9BB4]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>150+ Full Prompts Unlocked for Members</span>
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>Copy-Paste Markdown & Python Formats</span>
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>Weekly Prompt Updates</span>
        </span>
      </div>

    </section>
  );
};

export default PromptVault;
