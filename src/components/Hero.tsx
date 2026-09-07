import React from "react";
import { Sparkles, Play, Check, Compass, ArrowRight } from "lucide-react";
import { NovaraLogo } from "./NovaraLogo";

interface HeroProps {
  currentBrand: string;
}

export const Hero: React.FC<HeroProps> = ({ currentBrand }) => {
  return (
    <section className="relative pt-6 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-[#C9A84C]/20 via-[#856343]/10 to-transparent blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Top Badge: Join 3,500+ Members */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1120] border border-[#C9A84C]/40 text-xs font-mono font-bold text-[#F5E2B3] uppercase tracking-wider mb-6 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
        <span className="text-[#C9A84C]">GENESIS PIONEER COHORT • HIGH-LEVERAGE LARPING & MULTI-AGENT AI OS</span>
      </div>

      {/* Brand Kicker with Novara Academy Logo */}
      <div className="mb-5 flex items-center justify-center gap-3">
        <NovaraLogo size="md" showText={false} imgClassName="h-10 sm:h-12" />
        <span className="font-['Aquire',sans-serif] text-xs sm:text-sm font-extrabold uppercase tracking-[0.35em] text-[#C9A84C] drop-shadow-[0_0_12px_rgba(201,168,76,0.5)]">
          {currentBrand} • AUTONOMOUS SWARM ARCHITECTURE
        </span>
      </div>

      {/* Grand High-Impact Headline */}
      <h1 className="font-aquire text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-wider text-[#EDF0F5] leading-[1.2] mb-6 uppercase max-w-4xl mx-auto">
        Stop Hiring Bloated Agencies.<br />
        <span className="gold-gradient-text">Deploy an Autonomous Multi-Agent AI OS.</span>
      </h1>

      {/* Hero Subtitle */}
      <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10 text-balance font-normal">
        Get instant access to our personal <strong className="text-[#EDF0F5]">$48K/month sovereign AI operating system</strong>  -  a complete 6-agent cognitive swarm (<strong className="text-[#E8D5A3]">Hermes, OpenClaw, Antigravity, Codex, Alfred, Oracle</strong>) engineered for high-scale larping networks, faceless multi-account empires, headless browser RPA, market intelligence, 4K GPU media compilation, smart-model routing, and automated inbound client conversion.
      </p>

      {/* Interactive System Video / Screen Preview Container */}
      <div className="relative max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border-2 border-[#C9A84C]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(201,168,76,0.2)] bg-[#05080F]">
        <div className="relative aspect-video w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1120] via-[#05080F] to-[#1E293B]">
          
          {/* Animated Matrix Grid inside video preview */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#030712] flex items-center justify-center shadow-2xl mb-4 transform hover:scale-110 transition-transform duration-300 cursor-pointer group">
              <Play className="w-8 h-8 fill-current ml-1 text-[#030712]" />
            </div>
            
            <span className="font-['Aquire',sans-serif] text-xs sm:text-sm font-bold text-[#E8D5A3] tracking-widest uppercase">
              WATCH 3-MIN MULTI-AGENT OS & ARCHITECTURE TEARDOWN
            </span>
            <span className="text-[11px] font-mono text-[#8B9BB4] mt-1">
              v2.4 Sovereign Multi-Agent Constellation • Browser RPA • 4K NVENC • Oracle Intelligence
            </span>
          </div>

          {/* Bottom Video HUD */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#8B9BB4] pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              6 Swarm Agents Synchronized & Nominal
            </span>
            <span className="flex items-center gap-1 text-[#E8D5A3]">
              <Compass className="w-3 h-3 text-[#C9A84C]" />
              Hermes Master Cron Active
            </span>
          </div>

        </div>
      </div>

      {/* High-Converting Pricing / Free Box */}
      <div className="glass-card max-w-lg mx-auto p-6 sm:p-8 rounded-3xl border-2 border-[#C9A84C] shadow-[0_0_50px_rgba(201,168,76,0.25)] mb-8 bg-[#0B1120]/90">
        <div className="flex items-center justify-between text-xs font-mono text-[#8B9BB4] mb-2 pb-2 border-b border-white/10">
          <span>RETAIL SUBSCRIPTION:</span>
          <span className="line-through text-[#EF4444] font-bold text-sm">$97/month</span>
        </div>
        
        <div className="font-aquire text-4xl sm:text-5xl font-extrabold text-[#C9A84C] leading-none mb-2">
          $0
        </div>
        <div className="text-xs sm:text-sm font-mono text-[#8B9BB4] mb-3">
          Grandfathered 100% Free Lifetime Access (Founding Cohort)
        </div>
        <div className="inline-block px-3 py-1 rounded-lg bg-[#10B981]/20 text-[#10B981] text-xs font-mono font-bold">
          💰 Unlocks $6,482 in Locked Multi-Agent Code, RPA Scripts & Prompts
        </div>
      </div>

      {/* Primary High-Impact CTA Button */}
      <div className="space-y-4 mb-8">
        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full max-w-lg py-5 px-8 rounded-2xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-['Aquire',sans-serif] font-bold text-base sm:text-lg uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_40px_rgba(201,168,76,0.8)] transition-all transform active:scale-95 shadow-2xl"
        >
          <Sparkles className="w-5 h-5 text-[#856343]" />
          <span>Join The Inner Circle Free Now</span>
          <ArrowRight className="w-5 h-5 ml-1" />
        </a>

        <p className="text-xs font-mono text-[#64748B]">
          🔒 Founding Access Open • No Credit Card Required • Instant Unlock of Locked Code & Prompts
        </p>

        {/* Updated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#A7F3D0] text-xs font-mono font-semibold mt-2">
          <Check className="w-4 h-4 text-[#10B981]" />
          <span>System & Classroom Updated Weekly with Live Video Drops</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;
