import React, { useState } from "react";
import { SIMPLIFIED_STEPS } from "../data/communitySalesData";
import { 
  Radio,
  BrainCircuit, 
  Zap, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  Terminal 
} from "lucide-react";

export const SimplifiedFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"summary" | "blueprint">("summary");

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Radio": return Radio;
      case "BrainCircuit": return BrainCircuit;
      case "Zap": return Zap;
      case "Send": return Send;
      default: return Sparkles;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Visual Blueprint</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          How the Swarm Operates in <span className="gold-gradient-text">4 Simple Steps</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          No complex jargon or fragmented SaaS stacks. Here is the exact autonomous loop that runs market research, multi-agent planning, 4K compilation, and inbound client acquisition 24/7.
        </p>

        {/* View Switcher Pill */}
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0B1120] border border-white/10 mt-6 shadow-xl">
          <button
            onClick={() => setActiveTab("summary")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2.5 ${
              activeTab === "summary"
                ? "bg-[#C9A84C] text-[#030712] shadow-md shadow-[#C9A84C]/25"
                : "text-[#8B9BB4] hover:text-white"
            }`}
          >
            <Eye className="w-4.5 h-4.5" />
            <span>Simplified 60s Summary</span>
          </button>
          <button
            onClick={() => setActiveTab("blueprint")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2.5 ${
              activeTab === "blueprint"
                ? "bg-[#C9A84C] text-[#030712] shadow-md shadow-[#C9A84C]/25"
                : "text-[#8B9BB4] hover:text-white"
            }`}
          >
            <Terminal className="w-4.5 h-4.5" />
            <span>Enterprise Architecture</span>
          </button>
        </div>
      </div>

      {/* 4-Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {SIMPLIFIED_STEPS.map((stepItem) => {
          const Icon = getStepIcon(stepItem.iconName);
          return (
            <div
              key={stepItem.step}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              {/* Background Accent Halo */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/5 rounded-full blur-2xl group-hover:bg-[#C9A84C]/15 transition-all" />

              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Aquire',sans-serif] text-2xl font-bold text-[#C9A84C]">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#E8D5A3] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-[#C9A84C] uppercase tracking-wider block w-fit mb-2">
                  {stepItem.badge}
                </span>

                <h3 className="font-aquire text-lg font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8B9BB4] leading-relaxed mb-6">
                  {stepItem.summary}
                </p>
              </div>

              {/* Bottom Result Pill */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#10B981]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="truncate">{stepItem.keyBenefit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action CTA Banner */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#C9A84C]/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#0B1120] via-[#1E293B]/70 to-[#0B1120]">
        <div>
          <h4 className="font-aquire text-lg sm:text-xl font-bold text-[#EDF0F5]">
            Want the full Python codebase, RPA scripts, and multi-agent configs?
          </h4>
          <p className="text-xs sm:text-sm text-[#8B9BB4] mt-1">
            We share the entire operating system and walkthroughs for free inside our Skool community.
          </p>
        </div>
        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
        >
          <span>Get Free Source Code in Skool</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
};

export default SimplifiedFramework;
