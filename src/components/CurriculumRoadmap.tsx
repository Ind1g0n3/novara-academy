import React, { useState } from "react";
import { ACADEMY_CURRICULUM, SKOOL_COMMUNITY_PERKS } from "../data/curriculumData";
import { 
  BookOpen, 
  CodeXml, 
  Network, 
  Sparkles, 
  Video, 
  Users, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers 
} from "lucide-react";

export const CurriculumRoadmap: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const activePhase = ACADEMY_CURRICULUM[activePhaseIndex];

  const getPerkIcon = (iconName: string) => {
    switch (iconName) {
      case "CodeXml": return CodeXml;
      case "Network": return Network;
      case "Sparkles": return Sparkles;
      case "Video": return Video;
      case "Users": return Users;
      case "Rocket": return Rocket;
      default: return Sparkles;
    }
  };

  return (
    <section id="curriculum" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-bold text-[#A7F3D0] uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Skool University Curriculum</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          From Zero to <span className="gold-gradient-text">Sovereign AI Operator</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Our step-by-step master roadmap built for creators, engineers, and future agency owners. Master the code, run the multi-agent pipelines, and build an unstoppable competitive moat.
        </p>
      </div>

      {/* 4-Phase Step Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {ACADEMY_CURRICULUM.map((phase, idx) => {
          const isSelected = idx === activePhaseIndex;
          const phaseIcons = [Layers, CodeXml, Sparkles, Rocket];
          const PhaseIcon = phaseIcons[idx] || Sparkles;
          return (
            <button
              key={phase.phaseNumber}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "bg-[#0B1120] border-[#C9A84C] shadow-xl shadow-[#C9A84C]/25 scale-[1.02]"
                  : "bg-[#05080F]/80 border-white/10 hover:border-white/20 hover:bg-[#0B1120]/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isSelected ? "bg-[#C9A84C]/25 text-[#F5E2B3]" : "bg-white/5 text-[#8B9BB4]"}`}>
                      <PhaseIcon className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-[#C9A84C]">{phase.phaseNumber}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8B9BB4] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {phase.duration}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#E8D5A3] font-bold uppercase">
                  {phase.badge}
                </span>
                <h3 className="font-aquire text-base font-bold text-[#EDF0F5] mt-3 leading-snug">
                  {phase.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive */}
      <div className="glass-card rounded-3xl border border-[#C9A84C]/30 p-6 sm:p-8 lg:p-10 mb-20 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0B1120] border-2 border-[#C9A84C]/50 flex items-center justify-center shrink-0 text-[#C9A84C] shadow-xl shadow-[#C9A84C]/20">
              {React.createElement([Layers, CodeXml, Sparkles, Rocket][activePhaseIndex] || Sparkles, { className: "w-8 h-8 sm:w-9 sm:h-9" })}
            </div>
            <div>
              <span className="text-xs font-mono text-[#C9A84C] font-bold uppercase">
                {activePhase.phaseNumber} // {activePhase.duration}
              </span>
              <h3 className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#EDF0F5] mt-1">
                {activePhase.title}
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1">
                {activePhase.description}
              </p>
            </div>
          </div>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap self-start lg:self-center"
          >
            <span>Unlock Phase Modules in Skool</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Outcomes & Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Core Outcomes (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10B981] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>What You Will Master</span>
            </h4>
            <div className="space-y-3">
              {activePhase.outcomes.map((outcome, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#05080F]/90 border border-white/10 text-xs sm:text-sm text-[#EDF0F5] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modules Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9A84C] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Classroom Module Breakdown</span>
            </h4>
            <div className="space-y-4">
              {activePhase.modules.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#05080F]/90 border border-white/10 hover:border-[#C9A84C]/40 transition-colors">
                  <h5 className="font-aquire text-base font-bold text-[#EDF0F5]">
                    {mod.title}
                  </h5>
                  <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                    {mod.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono text-[#8B9BB4]">DELIVERABLES:</span>
                    {mod.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="px-2 py-0.5 rounded-md bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8D5A3] font-mono text-[10px] font-bold">
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Community Member Perks Vault Grid */}
      <div className="border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#C9A84C] uppercase font-bold tracking-widest">
            THE INNER CIRCLE EXPERIENCE
          </span>
          <h3 className="font-aquire text-2xl sm:text-4xl font-extrabold text-[#EDF0F5] mt-2">
            Everything Included Inside Our <span className="gold-gradient-text">Skool Community</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKOOL_COMMUNITY_PERKS.map((perk, idx) => {
            const Icon = getPerkIcon(perk.icon);
            return (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#C9A84C]/20 transition-all">
                  <Icon className="w-5 h-5 text-[#E8D5A3]" />
                </div>
                <h4 className="font-aquire text-base font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors mb-2">
                  {perk.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#8B9BB4] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default CurriculumRoadmap;
