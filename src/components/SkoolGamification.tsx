import React, { useState } from "react";
import { SKOOL_LEVELS } from "../data/communitySalesData";
import { ArrowRight, 
  Trophy, 
  Crown, 
  Calendar, 
  Flame, 
  Lock, 
  Unlock 
} from "lucide-react";

export const SkoolGamification: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <Trophy className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Skool Community Gamification & Progression</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Level Up Your Status in the <span className="gold-gradient-text">Inner Circle</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          As you engage, build systems, and help peer members inside our Skool community, you unlock higher-tier blueprints, private hotseats, and agency monetization modules.
        </p>
      </div>

      {/* 5-Level Progress Bar / Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {SKOOL_LEVELS.map((lvl) => {
          const isSelected = lvl.level === activeLevel;
          return (
            <button
              key={lvl.level}
              onClick={() => setActiveLevel(lvl.level)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                isSelected
                  ? "bg-[#0B1120] border-[#C9A84C] shadow-lg shadow-[#C9A84C]/20 scale-[1.02]"
                  : "bg-[#05080F]/80 border-white/10 hover:border-white/20 hover:bg-[#0B1120]/50"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#C9A84C]">LEVEL {lvl.level}</span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${lvl.level === 1 ? "bg-[#10B981]/20 text-[#10B981]" : "bg-white/5 text-[#8B9BB4]"}`}>
                  {lvl.level === 1 ? (
                    <Unlock className="w-4 h-4 text-[#10B981]" />
                  ) : (
                    <Lock className="w-4 h-4 text-[#8B9BB4]" />
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-aquire text-sm font-bold text-[#EDF0F5] leading-snug">
                  {lvl.title}
                </h4>
                <span className="text-[10px] font-mono text-[#8B9BB4] block mt-1">
                  {lvl.status}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Level Detail & Live Schedule Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Level Perks Deep Dive (7 cols) */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-[#C9A84C]/30 relative overflow-hidden shadow-xl">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#856343] flex items-center justify-center text-[#030712] font-bold shadow-lg">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#C9A84C] uppercase">
                LEVEL {SKOOL_LEVELS[activeLevel - 1].level} PRIVILEGES
              </span>
              <h3 className="font-aquire text-xl sm:text-2xl font-bold text-[#EDF0F5]">
                {SKOOL_LEVELS[activeLevel - 1].title}
              </h3>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#05080F] border border-white/10">
              <span className="text-[10px] font-mono text-[#8B9BB4] uppercase block mb-1">
                UNLOCKED ASSETS & PERKS:
              </span>
              <p className="text-sm font-medium text-[#E8D5A3] leading-relaxed">
                {SKOOL_LEVELS[activeLevel - 1].perks}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#05080F] border border-white/10">
              <span className="text-[10px] font-mono text-[#8B9BB4] uppercase block mb-1">
                HOW TO REACH THIS LEVEL:
              </span>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Earn community points by sharing project wins, asking high-signal engineering questions, and helping fellow creators troubleshoot their SMP setups.
              </p>
            </div>
          </div>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#030712] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all"
          >
            <span>Join at Level 1</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Live Masterclass Schedule Card (5 cols) */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#F43F5E]" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#EDF0F5]">
                  Next Live Masterclass
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[10px] font-mono font-bold uppercase">
                INCLUDED FOR MEMBERS
              </span>
            </div>

            <h3 className="font-aquire text-lg font-bold text-[#EDF0F5] mb-2">
              "Live Build: Setting Up Your 4K Video Auto-Replenisher on WSL & GPU"
            </h3>
            
            <p className="text-xs text-[#8B9BB4] leading-relaxed mb-6">
              Watch Ricardo Gutierrez code the entire auto-queue replenishment loop live, configure SQLite ledgers, and answer your technical questions.
            </p>

            <div className="space-y-2 font-mono text-xs text-[#E8D5A3] mb-6">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#05080F]">
                <span className="text-[#8B9BB4]">Date & Time:</span>
                <span className="font-bold">Every Thursday @ 6:00 PM EST</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#05080F]">
                <span className="text-[#8B9BB4]">Location:</span>
                <span className="font-bold text-[#10B981]">Skool Classroom Zoom</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C] text-xs font-mono font-bold text-[#EDF0F5] hover:text-[#E8D5A3] transition-all flex items-center justify-center gap-2"
          >
            <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>RSVP Inside the Community</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default SkoolGamification;
