import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/youtubeData";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export const ManifestoFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      
      {/* Manifesto Callout Banner */}
      <div className="glass-card rounded-3xl border border-[#C9A84C]/40 p-8 sm:p-10 mb-20 relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#05080F] to-[#1E293B]/40">
        <div className="absolute top-0 right-0 w-[350px] h-[250px] bg-[#C9A84C]/10 blur-[90px] pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/50 text-xs font-mono font-bold text-[#F5E2B3] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Sovereign Manifesto</span>
        </div>

        <h3 className="font-aquire text-2xl sm:text-4xl font-extrabold text-[#EDF0F5] mb-4">
          Why 99% of AI Automation & Agency Setups Fail (And How Sovereign Swarms Win)
        </h3>

        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
          The internet is saturated with generic, robotic "AI automation" that produces 720p muddy videos with artificial contrast boosts and robotic text-to-speech. Platforms have adapted: their algorithms actively demote synthetic templates and shadowban recycled device fingerprints.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[#180A0A] border border-[#F43F5E]/30 text-[#FDA4AF]">
            <strong className="text-[#F43F5E] block font-mono text-xs uppercase mb-1"> The Broken AI Agency Model:</strong>
            Generic editing templates, crushed shadows, burnt-out manual payroll, and lost DM leads.
          </div>
          <div className="p-4 rounded-xl bg-[#051E14] border border-[#10B981]/30 text-[#A7F3D0]">
            <strong className="text-[#10B981] block font-mono text-xs uppercase mb-1">[] The Sovereign Media Protocol:</strong>
            Raw 4K native footage, Zero-Darkening Lanczos rendering, EXIF purging, and automated DM conversions.
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] uppercase">
          Everything You Need to <span className="gold-gradient-text">Know</span>
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#0B1120] border-[#C9A84C]/50 shadow-lg shadow-[#C9A84C]/10"
                  : "bg-[#05080F]/90 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-aquire text-base sm:text-lg font-bold text-[#EDF0F5]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  <p className="mt-3">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ManifestoFAQ;
