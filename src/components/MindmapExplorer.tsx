import React, { useState } from "react";
import { SMP_ARCHITECTURE_STAGES } from "../data/smpArchitectureData";
import { 
  Lock, 
  Terminal, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  BrainCircuit, 
  Zap, 
  Send, 
  Scale, 
  AlertTriangle, 
  Flame 
} from "lucide-react";

export const MindmapExplorer: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(SMP_ARCHITECTURE_STAGES[0].id);

  const activeStage = SMP_ARCHITECTURE_STAGES.find(s => s.id === selectedStageId) || SMP_ARCHITECTURE_STAGES[0];

  const getStageIcon = (id: string) => {
    switch (id) {
      case "stage-1": return Layers;
      case "stage-2": return BrainCircuit;
      case "stage-3": return Zap;
      case "stage-4": return Send;
      case "stage-5": return Scale;
      case "stage-6": return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Background Ambient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#C9A84C]/10 blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Interactive Architecture Mindmap</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          The 6-Stage Autonomous <span className="gold-gradient-text">Production Engine</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Explore the engineering hierarchy of the Sovereign Media Production (SMP) OS. Click any stage to inspect the technical parameters, neurological timing schemas, and commercial leverage models.
        </p>
      </div>

      {/* Interactive Horizontal Pipeline Node Bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {SMP_ARCHITECTURE_STAGES.map((stage) => {
          const Icon = getStageIcon(stage.id);
          const isSelected = stage.id === selectedStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`relative text-left p-4 rounded-xl transition-all duration-300 flex flex-col justify-between border ${
                isSelected
                  ? "bg-[#0B1120] border-[#C9A84C] shadow-lg shadow-[#C9A84C]/20 scale-[1.02]"
                  : "bg-[#05080F]/80 border-white/10 hover:border-[#C9A84C]/40 hover:bg-[#0B1120]/60"
              }`}
            >
              {isSelected && (
                <div className="absolute -top-1.5 right-3 px-2 py-0.5 rounded-full bg-[#C9A84C] text-[#030712] font-mono text-[9px] font-extrabold tracking-wider">
                  ACTIVE
                </div>
              )}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-white/5 text-[#C9A84C]">{stage.stepNumber}</span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isSelected 
                    ? "bg-[#C9A84C]/25 border border-[#C9A84C]/60 text-[#F5E2B3] shadow-md shadow-[#C9A84C]/30" 
                    : "bg-[#0B1120] border border-white/10 text-[#8B9BB4] group-hover:text-[#EDF0F5] group-hover:border-[#C9A84C]/30"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className={`text-xs font-bold font-['Aquire',sans-serif] tracking-wider leading-tight ${isSelected ? "text-[#EDF0F5]" : "text-[#8B9BB4]"}`}>
                  {stage.title}
                </h4>
                <span className="text-[10px] font-mono text-[#64748B] block mt-1 uppercase">
                  {stage.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Canvas */}
      <div className="glass-card rounded-3xl border border-[#C9A84C]/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#C9A84C]/10 blur-[90px] pointer-events-none -z-10" />

        {/* Stage Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0B1120] border-2 border-[#C9A84C]/50 flex items-center justify-center shrink-0 text-[#C9A84C] shadow-xl shadow-[#C9A84C]/20">
              {React.createElement(getStageIcon(activeStage.id), { className: "w-8 h-8 sm:w-9 sm:h-9" })}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-[#C9A84C]/20 border border-[#C9A84C]/50 text-[#F5E2B3] font-mono text-xs font-bold">
                  STAGE {activeStage.stepNumber} // {activeStage.category.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#10B981]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Production Ready
                </span>
              </div>
              <h3 className="font-aquire text-2xl sm:text-4xl font-extrabold text-[#EDF0F5] tracking-tight">
                {activeStage.title}
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1 font-medium">
                {activeStage.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {activeStage.keyMetrics.map((metric, idx) => (
              <div key={idx} className="px-4 py-2 rounded-xl bg-[#05080F]/90 border border-white/10 text-left">
                <span className="text-[10px] font-mono text-[#8B9BB4] block uppercase">{metric.label}</span>
                <span className="font-aquire text-sm sm:text-base font-extrabold text-[#E8D5A3]">
                  {metric.stat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Grid: Technical Specs & Code vs Commercial Leverage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Technical Specs & Locked Script Box (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#05080F]/90 rounded-2xl p-5 sm:p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9A84C] flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>Technical Blueprint & Parameters</span>
                </h4>
                <span className="text-[11px] font-mono text-[#64748B]">{activeStage.technicalTitle}</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 mb-6">
                {activeStage.technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-[#0B1120] border border-white/5 text-xs font-mono">
                    <span className="text-[#8B9BB4] font-semibold">{spec.label}:</span>
                    <span className="text-[#EDF0F5] mt-1 sm:mt-0 font-medium break-all">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Locked Code Snippet Box */}
              {activeStage.codeSnippet && (
                <div className="relative rounded-xl overflow-hidden bg-[#020408] border border-[#1E293B]">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B1120] border-b border-white/10 text-[11px] font-mono text-[#8B9BB4]">
                    <span>{activeStage.codeSnippet.caption}</span>
                    <span className="flex items-center gap-1 text-[#C9A84C] text-[10px] font-bold uppercase">
                      <Lock className="w-3 h-3" />
                      <span>Script Locked</span>
                    </span>
                  </div>

                  <div className="relative p-4 text-xs font-mono text-[#A7F3D0] max-h-36 overflow-hidden">
                    <div className="filter blur-[3.5px] select-none opacity-60">
                      <pre className="whitespace-pre-wrap">{activeStage.codeSnippet.code}</pre>
                    </div>

                    {/* Floating Unlock Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020408]/65 backdrop-blur-[2px] p-4 text-center">
                      <p className="text-xs font-mono text-[#E8D5A3] font-bold mb-2">
                         Full Production Code & FFmpeg Flag Schemas Protected
                      </p>
                      <a
                        href="https://www.skool.com/novara-ai-media-group-5745/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-lg bg-[#C9A84C] text-[#030712] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md flex items-center gap-1.5"
                      >
                        <span>Download Full Source in Skool</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Commercial Value & ROI Leverage (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Why Manual Fails Box */}
            <div className="bg-[#180A0A]/80 rounded-2xl p-5 border border-[#F43F5E]/30 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F43F5E] mb-2 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Why Manual Methods Fail</span>
              </div>
              <p className="text-xs sm:text-sm text-[#FDA4AF] leading-relaxed">
                {activeStage.commercialLeverage.manualFailureReason}
              </p>
            </div>

            {/* Sovereign Advantage Box */}
            <div className="bg-[#0A1810]/80 rounded-2xl p-5 border border-[#10B981]/30 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] mb-2 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The Sovereign Operator Advantage</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A7F3D0] leading-relaxed">
                {activeStage.commercialLeverage.sovereignAdvantage}
              </p>
            </div>

            {/* Commercial ROI Box */}
            <div className="p-5 rounded-2xl bg-[#0B1120] border border-[#C9A84C]/30 text-xs font-mono">
              <span className="text-[#8B9BB4] uppercase block mb-1">Commercial Value & Monetization:</span>
              <p className="font-bold text-[#F5E2B3] text-sm leading-snug">
                {activeStage.commercialLeverage.roiImpact}
              </p>
            </div>

            {/* CTA Link */}
            <a
              href="https://www.skool.com/novara-ai-media-group-5745/about"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#0B1120] border border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-[#030712] text-xs font-mono font-bold text-[#E8D5A3] transition-all flex items-center justify-center gap-2 group shadow-lg"
            >
              <Flame className="w-4 h-4 text-[#F59E0B] group-hover:text-[#030712]" />
              <span>Unlock All 6 Stage Blueprints in Skool </span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MindmapExplorer;
