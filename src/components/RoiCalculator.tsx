import React, { useState } from "react";
import { Calculator, Clock, DollarSign, Zap, Layers, ArrowRight } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const [accountCount, setAccountCount] = useState<number>(3);

  // Business Math Models based on Multi-Agent OS Leverage
  // 1 human agency employee / contractor per 2 accounts ~= $3,500/mo per account
  const humanPayrollSaved = accountCount * 3500;
  // 65 operational hours saved per account/month (research, copy, media, publishing, DMs)
  const hoursSavedMonthly = accountCount * 65;
  // Fragmented SaaS subscriptions replaced ($180/mo per brand for scheduling, AI tools, scrapers)
  const saasSubscriptionsSaved = accountCount * 180;
  // Estimated high-intent inbound client/customer leads generated via automated DM funnels
  const estimatedDmLeads = accountCount * 48;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-xs font-mono font-bold text-[#BFDBFE] uppercase tracking-widest mb-4">
          <Calculator className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>Autonomous Leverage & Savings Calculator</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Calculate Your Monthly <span className="gold-gradient-text">Agency & Payroll Savings</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          See how much money you save on expensive agency payroll, freelancers, and fragmented SaaS tools by deploying the autonomous Novara OS multi-agent swarm.
        </p>
      </div>

      {/* Calculator Interactive Box */}
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#C9A84C]/40 bg-gradient-to-br from-[#0B1120] via-[#05080F] to-[#1E293B]/50 shadow-2xl relative overflow-hidden">
        
        {/* Slider Input */}
        <div className="mb-10 text-center">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B9BB4] block mb-3">
            How many brand accounts, client workflows, or faceless channels do you manage or plan to scale?
          </label>
          
          <div className="font-aquire text-3xl sm:text-5xl font-extrabold text-[#E8D5A3] mb-4">
            {accountCount} <span className="text-lg sm:text-xl font-normal text-[#8B9BB4]">{accountCount === 1 ? "Brand / Account" : "Brands / Accounts"}</span>
          </div>

          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={accountCount}
            onChange={(e) => setAccountCount(Number(e.target.value))}
            className="w-full max-w-xl h-2 bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
          />

          <div className="flex justify-between max-w-xl mx-auto text-xs font-mono text-[#64748B] mt-2">
            <span>1 Account</span>
            <span>5 Accounts</span>
            <span>10 Accounts</span>
            <span>15 Accounts</span>
          </div>
        </div>

        {/* 4 Dynamic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Payroll Saved */}
          <div className="p-5 rounded-2xl bg-[#05080F]/90 border border-white/10 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] mb-2">
              <DollarSign className="w-4 h-4" />
              <span>PAYROLL SAVED</span>
            </div>
            <div className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#A7F3D0]">
              ${humanPayrollSaved.toLocaleString()} <span className="text-xs font-normal text-[#8B9BB4]">/ mo</span>
            </div>
            <p className="text-[11px] text-[#8B9BB4] mt-2 leading-relaxed">
              Replaces hiring virtual assistants, copywriters, and media editors at $3,500/mo per account.
            </p>
          </div>

          {/* Time Saved */}
          <div className="p-5 rounded-2xl bg-[#05080F]/90 border border-white/10 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E8D5A3] mb-2">
              <Clock className="w-4 h-4" />
              <span>TIME SAVED</span>
            </div>
            <div className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#F5E2B3]">
              {hoursSavedMonthly} Hours <span className="text-xs font-normal text-[#8B9BB4]">/ mo</span>
            </div>
            <p className="text-[11px] text-[#8B9BB4] mt-2 leading-relaxed">
              Eliminates ~65 hours/mo of manual topic research, drafting, scheduling, and DM monitoring.
            </p>
          </div>

          {/* SaaS Tools Consolidated */}
          <div className="p-5 rounded-2xl bg-[#05080F]/90 border border-white/10 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A84C] mb-2">
              <Layers className="w-4 h-4" />
              <span>TOOL COSTS CUT</span>
            </div>
            <div className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#E8D5A3]">
              ${saasSubscriptionsSaved.toLocaleString()} <span className="text-xs font-normal text-[#8B9BB4]">/ mo</span>
            </div>
            <p className="text-[11px] text-[#8B9BB4] mt-2 leading-relaxed">
              Replaces 8-10 fragmented monthly SaaS tools with our unified Python multi-agent OS.
            </p>
          </div>

          {/* Inbound DM Leads */}
          <div className="p-5 rounded-2xl bg-[#05080F]/90 border border-white/10 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3B82F6] mb-2">
              <Zap className="w-4 h-4" />
              <span>INBOUND LEADS</span>
            </div>
            <div className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#BFDBFE]">
              {estimatedDmLeads}+ Leads <span className="text-xs font-normal text-[#8B9BB4]">/ mo</span>
            </div>
            <p className="text-[11px] text-[#8B9BB4] mt-2 leading-relaxed">
              High-intent leads captured automatically 24/7 through tracked keyword DM protocols.
            </p>
          </div>

        </div>

        {/* Bottom Total Value Banner */}
        <div className="p-6 rounded-2xl bg-[#05080F] border border-[#C9A84C]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] font-mono text-[#10B981] uppercase font-bold tracking-wider block">
              TOTAL ANNUAL SOVEREIGN LEVERAGE:
            </span>
            <div className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#EDF0F5] mt-0.5">
              ${((humanPayrollSaved + saasSubscriptionsSaved) * 12).toLocaleString()} <span className="text-xs text-[#8B9BB4] font-normal font-mono">/ year in saved overhead</span>
            </div>
          </div>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
          >
            <span>Deploy Free in Skool</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
};

export default RoiCalculator;
