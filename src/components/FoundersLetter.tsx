import React from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Award, 
  Code2, 
  CheckCircle2, 
  User
} from "lucide-react";

export const FoundersLetter: React.FC = () => {
  return (
    <section id="about" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Anchor for backwards compatibility with #architect */}
      <span id="architect" className="absolute -top-20" aria-hidden="true" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C9A84C]/8 blur-[110px] pointer-events-none -z-10" />

      {/* Unified Executive Card - Designed to Fit Screen in One Go */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C9A84C]/35 bg-gradient-to-b from-[#0B1120] via-[#05080F] to-[#030712] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(201,168,76,0.12)]">
        
        {/* Subtle Decorative Background Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A84C]/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN: FOUNDER PORTRAIT & CREDENTIALS (Lg: 4.5 cols) ── */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[11px] font-mono font-bold text-[#E8D5A3] uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Founder & Architect</span>
            </div>

            {/* Portrait Frame */}
            <div className="relative w-full max-w-[240px] sm:max-w-[260px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C9A84C]/40 shadow-2xl bg-[#080B14] mb-4">
              <img
                src="/founder.jpg"
                alt="Ricardo Gutierrez - Founder & Systems Architect"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector(".photo-fallback");
                    if (fallback) (fallback as HTMLElement).style.display = "flex";
                  }
                }}
              />

              {/* Fallback Icon */}
              <div className="photo-fallback hidden absolute inset-0 bg-[#080B14] flex flex-col items-center justify-center p-4">
                <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#E8D5A3] mb-2">
                  <User className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <span className="font-aquire text-xs font-bold text-[#EDF0F5]">Ricardo Gutierrez</span>
              </div>

              {/* Status Overlay Pill */}
              <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#030712]/85 backdrop-blur-md border border-[#10B981]/50 text-[9px] font-mono font-bold text-[#A7F3D0] shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                <span>ONLINE • ARCHITECT</span>
              </div>

              {/* Verified Shield */}
              <div className="absolute top-2.5 right-2.5 p-1 rounded-lg bg-[#030712]/85 backdrop-blur-md border border-[#C9A84C]/40 text-[#E8D5A3] shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
              </div>

              {/* Bottom Portrait Name Strip */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pt-6">
                <h3 className="font-aquire text-base font-bold text-[#EDF0F5] leading-tight">
                  Ricardo Gutierrez
                </h3>
                <p className="text-[11px] font-mono text-[#C9A84C]">
                  Systems Architect • CIS Major
                </p>
              </div>
            </div>

            {/* Compact Badges Row */}
            <div className="w-full max-w-[260px] grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded-xl bg-[#05080F] border border-white/5 text-[#CBD5E1] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
                <span>CIS Major</span>
              </div>
              <div className="p-2 rounded-xl bg-[#05080F] border border-white/5 text-[#CBD5E1] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>6-Agent OS</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: FULL LETTER IN ONE VIEW (Lg: 8 cols) ── */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Header Lockup */}
            <div className="border-b border-white/10 pb-3">
              <span className="text-[10px] font-mono font-bold text-[#C9A84C] uppercase tracking-widest block mb-1">
                Executive Dispatch • Novara Media Group
              </span>
              <h2 className="font-aquire text-xl sm:text-2xl lg:text-3xl font-black text-[#EDF0F5] leading-tight">
                Why I Engineered <span className="gold-gradient-text">Novara OS</span>
              </h2>
            </div>

            {/* Letter Body - 3 High-Impact Paragraphs That Fit the Screen */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              <p>
                Like most creators and agency founders, I hit the exact same breaking point: <strong className="text-[#EDF0F5]">manual execution does not scale</strong>. Burning thousands on unreliable editors, missed deadlines, and fragmented SaaS tools only led to compression traps and platform shadowbans.
              </p>

              <p>
                As a Computer Information Systems (CIS) major and systems architect, I realized superficial ChatGPT wrappers were toys. Real leverage required treating content creation as a <strong className="text-[#F5E2B3]">Distributed Multi-Agent Architecture</strong>: <strong className="text-[#EDF0F5]">Hermes</strong> for cron dispatch, <strong className="text-[#EDF0F5]">OpenClaw</strong> for anti-detect RPA, and dedicated GPU pipelines rendering pristine 4K video at 8.2x speed with automated inbound DM conversion.
              </p>

              <p>
                At <strong className="text-[#E8D5A3]">$59/month</strong>, our Skool community is intentionally structured as a focused, high-conviction mastermind. We do not offer free memberships because real infrastructure requires commitment. Members get direct access to our complete Python repositories, 150+ prompt vaults, and weekly live engineering teardowns.
              </p>
            </div>

            {/* Integrated Quote Banner */}
            <div className="p-3.5 rounded-xl bg-[#05080F]/90 border-l-4 border-[#C9A84C] border-y border-r border-white/5">
              <p className="text-xs sm:text-sm font-medium text-[#F5E2B3] italic leading-snug">
                "We aren't selling toy video generators or prompt lists. We built the exact operating infrastructure we run our own media business on every single day — and we're handing you the keys."
              </p>
            </div>

            {/* Sign-Off & Action Lockup */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#C9A84C] shadow-md bg-[#080B14] shrink-0">
                  <img
                    src="/founder.jpg"
                    alt="Ricardo Gutierrez"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-aquire text-xs sm:text-sm font-bold text-[#EDF0F5] leading-none">
                    Ricardo Gutierrez
                  </h4>
                  <p className="text-[10px] text-[#8B9BB4] font-mono mt-0.5">
                    Founder & Systems Architect • CIS Major
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-[#10B981] font-mono mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Inner Circle Mastermind Active ($59/mo)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all transform active:scale-95 whitespace-nowrap shrink-0"
              >
                <span>Join Inner Circle</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FoundersLetter;