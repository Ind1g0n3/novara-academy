import React, { useState } from "react";
import { BookOpen, MessageSquare, Trophy, Lock, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";

export const SkoolPreviewShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"classroom" | "community" | "leaderboard">("classroom");

  const classroomTracks = [
    {
      track: "TRACK 01",
      title: "Foundations & Autonomous Swarm Runtimes",
      modules: 3,
      lessons: [
        { name: "Module 1.1: Multi-Agent Network Topology & Swarm Setup", status: "Ready" },
        { name: "Module 1.2: Durable Knowledge Loops & Local State Logging", status: "Ready" },
        { name: "Module 1.3: Cost-Neutral Smart Model Routing & Fallback Logic", status: "Ready" }
      ]
    },
    {
      track: "TRACK 02",
      title: "Hardware GPU 4K Video Compilation Matrix",
      modules: 4,
      lessons: [
        { name: "Module 2.1: 4K NVENC Hardware GPU Render Pipeline & Lanczos", status: "Ready" },
        { name: "Module 2.2: EXIF Purging & Multi-Account Metadata Sanitization", status: "Ready" },
        { name: "Module 2.3: Neurological 5-Stage Progressive Reveal Schemas", status: "Ready" }
      ]
    },
    {
      track: "TRACK 03",
      title: "Headless Browser RPA & Distributed Queues",
      modules: 4,
      lessons: [
        { name: "Module 3.1: Anti-Detect Profile Isolation & Hardware Fingerprints", status: "Ready" },
        { name: "Module 3.2: 10-Post Batch Auto-Replenisher Daemon Setup", status: "Ready" },
        { name: "Module 3.3: Automated Inbound Comment-to-DM Webhook Funnel", status: "Ready" }
      ]
    },
    {
      track: "TRACK 04",
      title: "High-Ticket Client Acquisition & Agency Scaling",
      modules: 4,
      lessons: [
        { name: "Module 4.1: The $10,000/mo Autonomous Agency Retainer Offer", status: "Ready" },
        { name: "Module 4.2: Client Onboarding SOPs & Automated Dashboards", status: "Ready" },
        { name: "Module 4.3: Scaling 10+ Accounts with Zero Human Editing Teams", status: "Ready" }
      ]
    }
  ];

  return (
    <section id="skool-showcase" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C9A84C]/5 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-bold text-[#A7F3D0] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Inside The Platform</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Inside Our Official <span className="gold-gradient-text">Skool Community</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Take a look at the exact learning tracks, code repositories, and masterclasses waiting inside the Novara Sovereign Architecture community.
        </p>
      </div>

      {/* Skool Application Window Container */}
      <div className="rounded-3xl border border-white/15 bg-[#0B1120] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Real Skool Community Banner Header */}
        <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-[#030712]">
          <img
            src="https://assets.skool.com/f/dbd4b4cadc55410dade4e9754d85df8f/6bc8bf995c5c429fb3275d9e3cd3e45277262d29fb5641b8934aba245e58ab8b.jpg"
            alt="Novara Sovereign Architecture Cover"
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-black/40" />

          {/* Top Bar inside image */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#F5E2B3] uppercase tracking-wider">
              Official Skool Hub
            </span>
          </div>

          {/* Group Identity Lockup at bottom of banner */}
          <div className="absolute bottom-4 left-6 sm:left-8 flex items-end gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#C9A84C] shadow-2xl bg-black shrink-0">
              <img
                src="https://assets.skool.com/f/dbd4b4cadc55410dade4e9754d85df8f/788fdc38e389421e9a7514b9b47fdcfbb4b90be7a0424c6c9948c7bf2503cd77.jpg"
                alt="Novara Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-1">
              <h3 className="font-aquire text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                Novara Sovereign Architecture
              </h3>
              <p className="text-xs text-[#CBD5E1] font-mono drop-shadow">
                skool.com/novara-ai-media-group-5745 • Standard: $59/mo (Free for Genesis Cohort)
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="border-b border-white/10 px-6 sm:px-8 flex items-center justify-between bg-[#080B14]">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-3.5">
            <button
              onClick={() => setActiveTab("classroom")}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase transition-all ${
                activeTab === "classroom"
                  ? "bg-[#C9A84C]/20 text-[#F5E2B3] border border-[#C9A84C]/50 shadow-md shadow-[#C9A84C]/20"
                  : "text-[#8B9BB4] hover:text-white"
              }`}
            >
              <BookOpen className="w-5 h-5 text-[#C9A84C]" />
              <span>Classroom (15 Modules)</span>
            </button>

            <button
              onClick={() => setActiveTab("community")}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase transition-all ${
                activeTab === "community"
                  ? "bg-[#C9A84C]/20 text-[#F5E2B3] border border-[#C9A84C]/50 shadow-md shadow-[#C9A84C]/20"
                  : "text-[#8B9BB4] hover:text-white"
              }`}
            >
              <MessageSquare className="w-5 h-5 text-[#38BDF8]" />
              <span>Community Feed</span>
            </button>

            <button
              onClick={() => setActiveTab("leaderboard")}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase transition-all ${
                activeTab === "leaderboard"
                  ? "bg-[#C9A84C]/20 text-[#F5E2B3] border border-[#C9A84C]/50 shadow-md shadow-[#C9A84C]/20"
                  : "text-[#8B9BB4] hover:text-white"
              }`}
            >
              <Trophy className="w-5 h-5 text-[#F59E0B]" />
              <span>Levels & Perks</span>
            </button>
          </div>

          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C9A84C] hover:text-[#E8D5A3] transition-colors"
          >
            <span>Open in Skool</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tab Content Canvas */}
        <div className="p-6 sm:p-8 bg-[#0B1120]">
          
          {/* TAB 1: CLASSROOM PREVIEW */}
          {activeTab === "classroom" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-aquire text-base sm:text-lg font-bold text-[#EDF0F5]">
                    15 Complete Engineering Modules
                  </h4>
                  <p className="text-xs text-[#8B9BB4]">
                    Step-by-step video lessons with attached raw Python scripts, schemas, and templates.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-[11px] font-mono font-bold">
                  Instant Unlock
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classroomTracks.map((track, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#080B14] border border-white/10 hover:border-[#C9A84C]/40 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#C9A84C] font-bold tracking-wider">{track.track}</span>
                      <span className="text-[10px] font-mono text-[#8B9BB4]">{track.modules} Lessons</span>
                    </div>
                    <h5 className="font-aquire text-sm font-bold text-[#EDF0F5] mb-3">
                      {track.title}
                    </h5>
                    <ul className="space-y-2 text-xs text-[#94A3B8]">
                      {track.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          <span className="truncate">{lesson.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: COMMUNITY FEED PREVIEW */}
          {activeTab === "community" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#080B14] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-xs font-bold text-[#E8D5A3]">
                    LO
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#EDF0F5]">LO (Founder)</span>
                    <span className="text-[10px] font-mono text-[#8B9BB4] ml-2">Weekly Sunday Build</span>
                  </div>
                  <span className="ml-auto px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#F59E0B] text-[10px] font-mono font-bold">
                    PINNED DROP
                  </span>
                </div>
                <h5 className="text-sm font-bold text-[#EDF0F5] mb-1">
                  New Code Drop: Autonomous 10-Post Batch Replenisher Daemon v2.4
                </h5>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                  Just dropped the updated Python queue replenisher in the Classroom repository. It enforces the 8-hour mutex lock and checks ready posts automatically.
                </p>
                <div className="flex items-center gap-4 text-[11px] font-mono text-[#8B9BB4] border-t border-white/5 pt-2">
                  <span>💬 Discussion & Code Review Open</span>
                  <span>🚀 Live Screen-Share Sunday 2:00 PM EST</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#080B14] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 flex items-center justify-center text-xs font-bold text-[#06B6D4]">
                    OP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#EDF0F5]">Genesis Operator</span>
                    <span className="text-[10px] font-mono text-[#8B9BB4] ml-2">Pioneer Channel</span>
                  </div>
                </div>
                <h5 className="text-sm font-bold text-[#EDF0F5] mb-1">
                  GPU 4K Lanczos Render Velocity Benchmarks
                </h5>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Compiled 24 vertical videos in 3 minutes 12 seconds with zero artifacts. YouTube and TikTok accounts active with 100% health ratings.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: LEADERBOARD PREVIEW */}
          {activeTab === "leaderboard" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-aquire text-sm sm:text-base font-bold text-[#EDF0F5]">
                  5-Level Operator Gamification
                </h4>
                <span className="text-xs font-mono text-[#C9A84C]">Points for sharing builds</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#080B14] border border-[#C9A84C]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#C9A84C] font-bold">LEVEL 1 (INSTANT)</span>
                    <h5 className="text-xs font-bold text-[#EDF0F5]">Novice Operator</h5>
                    <p className="text-[11px] text-[#8B9BB4]">All 4 classroom tracks + prompt vault</p>
                  </div>
                  <span className="text-xs font-bold text-[#10B981]">Unlocked</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8B9BB4] font-bold">LEVEL 2</span>
                    <h5 className="text-xs font-bold text-[#EDF0F5]">Automation Engineer</h5>
                    <p className="text-[11px] text-[#8B9BB4]">Hardware GPU script source code</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#8B9BB4]" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8B9BB4] font-bold">LEVEL 3</span>
                    <h5 className="text-xs font-bold text-[#EDF0F5]">Multi-Agent Architect</h5>
                    <p className="text-[11px] text-[#8B9BB4]">Hermes Core + Auto-Replenisher</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#8B9BB4]" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8B9BB4] font-bold">LEVEL 4 - 5</span>
                    <h5 className="text-xs font-bold text-[#EDF0F5]">Sovereign Mastermind</h5>
                    <p className="text-[11px] text-[#8B9BB4]">1-on-1 code review + $10k retainer framework</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#8B9BB4]" />
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-[#EDF0F5] font-bold block">
                Genesis Pioneer Cohort: 100% Free Lifetime Tier
              </span>
              <span className="text-[11px] text-[#8B9BB4] font-mono">
                Standard retail price is $59/month on Skool. Capped at first 50 pioneer operators.
              </span>
            </div>

            <a
              href="https://www.skool.com/novara-ai-media-group-5745/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all transform active:scale-95 shrink-0"
            >
              <span>Join Novara Sovereign Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SkoolPreviewShowcase;