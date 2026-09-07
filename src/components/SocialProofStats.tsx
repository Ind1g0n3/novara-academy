import React from "react";
import { COMMUNITY_STATS } from "../data/communitySalesData";

export const SocialProofStats: React.FC = () => {
  return (
    <section className="relative py-14 bg-[#0A0D18]/70 backdrop-blur-md border-y border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {COMMUNITY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="font-aquire text-3xl sm:text-5xl font-extrabold gold-gradient-text tracking-tight">
                {stat.value}
              </h3>
              <p className="font-['Aquire',sans-serif] text-xs sm:text-sm font-bold text-[#EDF0F5] tracking-wider uppercase">
                {stat.label}
              </p>
              <p className="text-xs text-[#8B9BB4] hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStats;
