import React from "react";
import { FEATURE_CHECKLIST } from "../data/communitySalesData";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export const FeaturesChecklist: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Full Feature Matrix</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Everything You Get <span className="gold-gradient-text">Inside</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Full transparency. Here is the exact tech stack, automation code, and mentorship you get the moment you join our Skool community.
        </p>
      </div>

      {/* Feature Items List */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 divide-y divide-white/10 shadow-2xl">
        {FEATURE_CHECKLIST.map((item, idx) => (
          <div key={idx} className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6">
            <div className="w-8 h-8 rounded-full bg-[#10B981]/20 border border-[#10B981]/50 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5 shadow-md">
              <Check className="w-4 h-4" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-aquire text-base sm:text-lg font-bold text-[#EDF0F5]">
                  {item.title}
                </h3>
                {item.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#F5E2B3] font-mono text-[10px] font-extrabold uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action CTA */}
      <div className="text-center mt-12">
        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-xl shadow-[#C9A84C]/30 transition-all transform active:scale-95"
        >
          <span>Unlock Everything in Skool Free</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
};

export default FeaturesChecklist;
