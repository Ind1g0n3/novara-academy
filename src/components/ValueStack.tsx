import React from "react";
import { COMMUNITY_VALUE_STACK } from "../data/communitySalesData";
import { 
  Gift, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  BrainCircuit, 
  Zap, 
  Send, 
  Video 
} from "lucide-react";

export const ValueStack: React.FC = () => {
  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit": return BrainCircuit;
      case "Sparkles": return Sparkles;
      case "ShieldCheck": return ShieldCheck;
      case "Zap": return Zap;
      case "Send": return Send;
      case "Video": return Video;
      default: return Gift;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Background Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C9A84C]/10 blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-bold text-[#A7F3D0] uppercase tracking-widest mb-4">
          <Gift className="w-3.5 h-3.5 text-[#10B981]" />
          <span>The Sovereign Value Stack</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          The Entire Autonomous OS Unlocked for <span className="gold-gradient-text">100% Free</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Other gurus charge thousands for surface-level prompt PDFs. We give you our complete 6-agent Python architecture, headless browser RPA scripts, 4K rendering pipelines, and weekly live engineering mentorship for free inside the community.
        </p>
      </div>

      {/* Value Stack Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {COMMUNITY_VALUE_STACK.map((item, idx) => {
          const Icon = getItemIcon(item.iconName);
          return (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              <div>
                {/* Item Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[10px] font-mono font-bold text-[#E8D5A3] uppercase">
                    {item.highlightTag}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#8B9BB4] line-through">
                      {item.realValue}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#10B981]/20 border border-[#10B981]/40 text-[10px] font-mono font-extrabold text-[#10B981] uppercase">
                      FREE
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B1120] border border-white/10 flex items-center justify-center text-[#C9A84C] group-hover:scale-110 group-hover:border-[#C9A84C]/50 transition-all shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-aquire text-base font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8B9BB4] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Unlock Indicator */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#E8D5A3]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>Instant Classroom Download</span>
                </span>
                <span className="text-[#64748B]">Bonus #{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Massive Grand Value Anchor Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#C9A84C]/50 text-center relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#1E293B]/70 to-[#0B1120] shadow-2xl">
        <div className="max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-xs font-mono font-bold text-[#F5E2B3] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>TOTAL VALUE: $6,482+</span>
          </div>

          <h3 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
            Claim the Entire <span className="gold-gradient-text">Multi-Agent OS</span> for $0
          </h3>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
            No credit card required. No hidden upsells on the core engine. Enter the Skool community, introduce yourself in the welcome channel, and download the full OS repository immediately.
          </p>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-['Aquire',sans-serif] font-bold text-sm uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_40px_rgba(201,168,76,0.8)] transition-all transform active:scale-95 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-[#856343]" />
            <span>Join the Skool Community Free →</span>
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#8B9BB4]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Instant Access</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>3,400+ Active Members</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Weekly Live Calls</span>
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ValueStack;
