import React from "react";
import { SYSTEM_CHANGELOG } from "../data/youtubeData";
import { Activity, Sparkles, CheckCircle2 } from "lucide-react";

export const SystemChangelog: React.FC = () => {
  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Major Release":
        return "bg-[#C9A84C]/20 border-[#C9A84C]/60 text-[#F5E2B3]";
      case "Optimization":
        return "bg-[#10B981]/20 border-[#10B981]/60 text-[#A7F3D0]";
      case "Security":
        return "bg-[#3B82F6]/20 border-[#3B82F6]/60 text-[#BFDBFE]";
      default:
        return "bg-white/10 border-white/20 text-[#EDF0F5]";
    }
  };

  return (
    <section id="changelog" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-xs font-mono font-bold text-[#BFDBFE] uppercase tracking-widest mb-4">
          <Activity className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>Real-Time OS Release Feed</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          System Changelog & <span className="gold-gradient-text">Live Releases</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          We push updates, new agent tools, and algorithmic unlocks to our Skool community every single week. Follow the evolution of the Sovereign Media Production OS.
        </p>
      </div>

      {/* Changelog Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
        {SYSTEM_CHANGELOG.map((entry, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0B1120] border-2 border-[#C9A84C] flex items-center justify-center shadow-[0_0_12px_rgba(201,168,76,0.5)]">
              <Sparkles className="w-3.5 h-3.5 text-[#E8D5A3]" />
            </div>

            {/* Entry Content Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-['Aquire',sans-serif] text-base font-bold text-[#EDF0F5] tracking-wider">
                    {entry.version}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase ${getBadgeStyle(entry.badge)}`}>
                    {entry.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8B9BB4]">{entry.date}</span>
              </div>

              <h3 className="font-aquire text-lg font-bold text-[#E8D5A3] mb-4">
                {entry.title}
              </h3>

              {/* Highlights Bullet List */}
              <ul className="space-y-2">
                {entry.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EDF0F5]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default SystemChangelog;
