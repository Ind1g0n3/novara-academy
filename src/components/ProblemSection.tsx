import React from "react";
import { AlertTriangle, Flame } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      {/* Red Alert Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/40 text-xs font-mono font-bold text-[#FCA5A5] uppercase tracking-widest mb-6">
        <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
        <span>The Paradigm Shift</span>
      </div>

      <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-6 uppercase">
        Traditional Agency Overhead Is <span className="text-[#EF4444]">Collapsing</span>
      </h2>

      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#EF4444]/20 bg-gradient-to-b from-[#180A0A]/90 to-[#0B1120] text-sm sm:text-lg text-[#CBD5E1] leading-relaxed space-y-6 text-balance shadow-2xl">
        <p>
          Most agencies and creators are trapped in the manual hamster wheel: paying $5,000 to $15,000/month for fragmented teams, juggling 10 disconnected SaaS tools, and burning 40+ hours every week managing handoffs.
        </p>

        <div className="text-base sm:text-xl font-bold text-[#F5E2B3] bg-[#05080F]/80 p-6 rounded-2xl border border-[#C9A84C]/30 shadow-lg flex items-center justify-center gap-3">
          <Flame className="w-6 h-6 text-[#F59E0B] shrink-0" />
          <span>Inner Circle members deploy our unified 6-agent operating system to orchestrate market intelligence, browser RPA, 4K hardware compilation, and automated inbound client conversion — all from one autonomous dashboard.</span>
        </div>

        <p className="text-xs sm:text-base text-[#94A3B8]">
          The gap between businesses running <strong className="text-[#EDF0F5]">sovereign multi-agent AI operating systems</strong> and those paying human payroll is widening every single day. One operator commanding an autonomous swarm now outperforms a 10-person agency.
        </p>
      </div>

    </section>
  );
};

export default ProblemSection;
