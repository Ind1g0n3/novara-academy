import React from "react";
import { COMPARISON_POINTS } from "../data/communitySalesData";
import { XCircle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const ComparisonContrast: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F43F5E]/10 border border-[#F43F5E]/30 text-xs font-mono font-bold text-[#FDA4AF] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
          <span>The Sovereign Transformation</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          The Old Manual Grind vs <span className="gold-gradient-text">The Sovereign Way</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Why traditional content creators and bloated agencies burn out, and how autonomous multi-agent pipelines give you 10x more leverage with 90% less stress.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Left Column: The Old Way (Red / Pain) */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#F43F5E]/30 bg-[#120707]/80 relative overflow-hidden">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F43F5E]/10 border border-[#F43F5E]/30 flex items-center justify-center text-[#F43F5E]">
              <XCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-extrabold text-[#F43F5E] uppercase tracking-wider block">
                THE OLD METHOD
              </span>
              <h3 className="font-aquire text-xl font-bold text-[#FDA4AF]">
                The Burnt-Out Manual Creator
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {COMPARISON_POINTS.map((point, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#030712]/60 border border-[#F43F5E]/20 text-xs sm:text-sm text-[#FDA4AF] flex items-start gap-3">
                <XCircle className="w-4 h-4 text-[#F43F5E] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{point.oldPain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: The Sovereign Way (Gold / Emerald / Gain) */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#C9A84C]/50 bg-gradient-to-b from-[#0B1120] to-[#051E14]/50 relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 border border-[#C9A84C]/50 flex items-center justify-center text-[#E8D5A3]">
              <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-extrabold text-[#C9A84C] uppercase tracking-wider block">
                THE SOVEREIGN METHOD
              </span>
              <h3 className="font-aquire text-xl font-bold text-[#E8D5A3]">
                The Autonomous AI Operator
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {COMPARISON_POINTS.map((point, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#030712]/80 border border-[#10B981]/30 text-xs sm:text-sm text-[#EDF0F5] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{point.sovereignGain}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Direct Transition CTA */}
      <div className="text-center">
        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B1120] border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#E8D5A3] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#C9A84C]/20 transform active:scale-95"
        >
          <span>Upgrade to the Sovereign System (Inside Skool)</span>
          <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
        </a>
      </div>

    </section>
  );
};

export default ComparisonContrast;
