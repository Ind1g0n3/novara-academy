import React from "react";
import { Users, Building2, EyeOff, Video, Briefcase, Rocket, Lightbulb } from "lucide-react";

export const WhoForGrid: React.FC = () => {
  const personas = [
    {
      icon: Building2,
      color: "#06B6D4",
      title: "Sovereign AI Agency Owners",
      description: "Replace bloated human fulfillment teams (editors, writers, VA managers) with autonomous multi-agent OS infrastructure and charge clients $3,000 to $10,000/mo retainers."
    },
    {
      icon: EyeOff,
      color: "#8B5CF6",
      title: "Multi-Account Larpers & Faceless Character Networks",
      description: "Run 5 to 50 distributed larping character profiles and faceless theme channels safely. Automate lore, scripts, 4K edits, and convert viral traffic into paying community members via automated keyword DMs without ever showing your face."
    },
    {
      icon: Video,
      color: "#F43F5E",
      title: "High-Output Creators & Personal Brands",
      description: "Automate your entire media engine, maintain strict 8-hour posting consistency across all platforms, and achieve 85%+ viewer retention without editing burnout."
    },
    {
      icon: Briefcase,
      color: "#10B981",
      title: "Consultants, Growth Hackers & Freelancers",
      description: "Automate client delivery, productize bespoke AI workflows, and build high-margin autonomous operations for enterprise clients."
    },
    {
      icon: Rocket,
      color: "#F59E0B",
      title: "Startup Founders & Technical Builders",
      description: "Deploy scalable multi-agent systems, integrate local LLMs, and automate operational workflows with full Python source code access."
    },
    {
      icon: Lightbulb,
      color: "#C9A84C",
      title: "Anyone Who Wants Sovereign Leverage with AI",
      description: "Zero coding experience required to begin. Follow our step-by-step Skool classroom modules, copy-paste production templates, and join weekly live build calls."
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-bold text-[#A7F3D0] uppercase tracking-widest mb-4">
          <Users className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Audience Alignment</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          This Is For You <span className="gold-gradient-text">If...</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Whether you want to build a high-leverage faceless larping empire across 20+ character accounts, automate your personal creator brand, or scale an autonomous agency.
        </p>
      </div>

      {/* 6 Personas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-300 flex items-start gap-4 group"
            >
              <div 
                className="p-3 rounded-2xl border border-white/10 shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-aquire text-base font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8B9BB4] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default WhoForGrid;
