import React from "react";
import { ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react";

export const FoundersLetter: React.FC = () => {
  return (
    <section id="architect" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C9A84C]/5 blur-[120px] pointer-events-none -z-10" />

      {/* Pill Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Architect's Vision</span>
        </div>
      </div>

      {/* Main Letter Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-14 border border-[#C9A84C]/30 bg-gradient-to-b from-[#0B1120] via-[#05080F] to-[#030712] relative overflow-hidden shadow-2xl">
        
        {/* Subtle decorative quote background */}
        <span className="absolute -top-10 -right-4 font-serif text-[180px] text-white/[0.03] select-none pointer-events-none">
          "
        </span>

        {/* Header Block */}
        <div className="border-b border-white/10 pb-8 mb-8">
          <h2 className="font-aquire text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDF0F5] mb-3 leading-snug">
            Why I Engineered <span className="gold-gradient-text">Novara OS</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#C9A84C] tracking-wide uppercase">
            A Letter from Ricardo Gutierrez • Founder & Systems Architect, CIS Major • Novara Media & Novara Labs
          </p>
        </div>

        {/* Narrative Body */}
        <div className="space-y-6 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          <p>
            Like most creators and agency founders, I hit the exact same breaking point: <strong className="text-[#EDF0F5]">manual execution does not scale.</strong>
          </p>
          
          <p>
            When we were scaling our accounts, managing multi-account larping networks, and running client delivery, we fell into the classic agency trap: burning thousands of dollars every month on human editors who missed deadlines, virtual assistants who needed constant micromanagement, and ten fragmented SaaS tools that didn't communicate with each other. Worse, every time an editor touched a video, platform algorithms slapped us with compression traps and metadata shadowbans.
          </p>

          <p>
            As a Computer Information Systems (CIS) major and systems architect, I realized that surface-level ChatGPT wrappers and single-prompt gimmicks were toys. Real leverage required a true <strong className="text-[#F5E2B3]">Autonomous Multi-Agent Operating System</strong>.
          </p>

          <p>
            So we engineered our own solution from the hardware up: an autonomous swarm where <strong className="text-[#EDF0F5]">Hermes</strong> handles cron planning and dispatch, <strong className="text-[#EDF0F5]">OpenClaw</strong> manages anti-detect browser RPA, custom GPU pipelines compile pristine 4K video with Lanczos scaling at 8.2x speed, and automated keyword DMs convert viewers into high-ticket clients on autopilot.
          </p>

          {/* Callout Quote */}
          <div className="p-6 rounded-2xl bg-[#05080F]/90 border-l-4 border-[#C9A84C] border-y border-r border-white/5 my-8">
            <p className="text-base sm:text-lg font-medium text-[#F5E2B3] italic leading-relaxed">
              "We aren't selling you a toy video generator. We built the exact operating infrastructure we run our own media business on every single day — and we're handing you the keys."
            </p>
          </div>

          <h3 className="font-aquire text-lg sm:text-xl font-bold text-[#EDF0F5] pt-2">
            Why Genesis Pioneer Access Is 100% Free
          </h3>

          <p>
            While our public Skool community membership will retail at <strong className="text-[#E8D5A3]">$59/month</strong>, I have made the deliberate decision to open our <strong className="text-[#10B981]">Genesis Pioneer Cohort (strictly capped at the first 50 operators) for free lifetime grandfathered access.</strong>
          </p>

          <p>
            I am not looking for passive course-collectors or casual spectators. I am building a tight-knit mastermind of serious agency owners, technical builders, and high-output creators who want to deploy real multi-agent infrastructure, pressure-test systems, and scale together.
          </p>

          <p>
            If you're ready to replace manual payroll with sovereign AI leverage, I look forward to reviewing your engineering builds inside.
          </p>
        </div>

        {/* Founder Sign-Off & Status Lockup */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#856343] p-0.5 shadow-lg shadow-[#C9A84C]/20">
              <div className="w-full h-full rounded-2xl bg-[#080B14] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-[#E8D5A3]" />
              </div>
            </div>
            <div>
              <h4 className="font-aquire text-base font-bold text-[#EDF0F5]">
                Ricardo Gutierrez
              </h4>
              <p className="text-xs text-[#8B9BB4] font-mono">
                Founder & Systems Architect • CIS Major, Novara Media Group
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#10B981] font-mono pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Genesis Cohort Review: Live</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all transform active:scale-95"
          >
            <span>Claim Genesis Cohort Access</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
};

export default FoundersLetter;