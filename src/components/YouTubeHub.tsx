import React from "react";
import { YOUTUBE_VIDEOS } from "../data/youtubeData";
import { Youtube, Play, Clock, ArrowUpRight } from "lucide-react";

export const YouTubeHub: React.FC = () => {
  return (
    <section id="youtube" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F43F5E]/10 border border-[#F43F5E]/30 text-xs font-mono font-bold text-[#FDA4AF] uppercase tracking-widest mb-4">
          <Youtube className="w-3.5 h-3.5 text-[#F43F5E]" />
          <span>YouTube Masterclasses & Teardowns</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Watch the Engineering <span className="gold-gradient-text">Breakdowns</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Deep-dive video teardowns on how to build, optimize, and monetize sovereign multi-agent pipelines. Subscribe to our YouTube channel for weekly system builds.
        </p>

        <div className="mt-6">
          <a
            href="https://www.youtube.com/@Novara-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F43F5E] hover:bg-[#E11D48] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#F43F5E]/20 transition-all transform active:scale-95"
          >
            <Youtube className="w-4 h-4" />
            <span>Subscribe on YouTube</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {YOUTUBE_VIDEOS.map((video) => (
          <div
            key={video.id}
            className="glass-card rounded-3xl border border-white/10 hover:border-[#C9A84C]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-video w-full flex items-center justify-center overflow-hidden border-b border-white/10"
                style={{ background: video.thumbnailPlaceholder }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button Indicator */}
                <div className="relative w-12 h-12 rounded-full bg-[#F43F5E] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#030712]/80 text-[10px] font-mono font-bold text-[#E8D5A3] backdrop-blur-md">
                  {video.episodeNumber}
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>

              {/* Video Content */}
              <div className="p-6">
                <span className="text-[10px] font-mono font-extrabold text-[#C9A84C] uppercase tracking-wider block mb-2">
                  {video.tag}
                </span>

                <h3 className="font-aquire text-base font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors leading-snug mb-3">
                  {video.title}
                </h3>

                <p className="text-xs text-[#8B9BB4] leading-relaxed mb-5">
                  {video.description}
                </p>

                {/* Timestamps Mini-List */}
                <div className="space-y-1.5 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase block mb-1">Key Chapters:</span>
                  {video.keyTimestamps.slice(0, 3).map((ts, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-[#94A3B8]">
                      <span className="text-[#C9A84C] font-semibold">{ts.time}</span>
                      <span className="truncate">{ts.topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Footer Action */}
            <div className="p-6 pt-0">
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#0B1120] border border-white/10 hover:border-[#F43F5E]/50 text-xs font-mono font-bold text-[#EDF0F5] hover:text-[#FDA4AF] transition-all flex items-center justify-center gap-1.5"
              >
                <span>Watch Full Masterclass</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default YouTubeHub;
