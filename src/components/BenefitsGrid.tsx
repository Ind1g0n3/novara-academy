import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  ShieldCheck, 
  Radio, 
  Film, 
  Target, 
  Zap, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ExternalLink 
} from "lucide-react";

export interface CapabilityDetail {
  id: string;
  icon: React.ElementType;
  color: string;
  tag: string;
  title: string;
  shortDescription: string;
  roiFacts: {
    stat: string;
    fact: string;
  }[];
  larpingLeverage: {
    headline: string;
    description: string;
    tactics: string[];
  };
  mechanism: {
    title: string;
    overview: string;
    components: string[];
  };
  oldVsNew: {
    oldWay: string;
    sovereignWay: string;
  };
}

export const CAPABILITY_DETAILS: CapabilityDetail[] = [
  {
    id: "swarm-constellation",
    icon: BrainCircuit,
    color: "#8B5CF6",
    tag: "AUTONOMOUS CORE",
    title: "6-Agent Autonomous Swarm Constellation",
    shortDescription: "Coordinate a unified AI team: Hermes (Orchestration), OpenClaw (Browser RPA), Antigravity (Reasoning), Codex (Code Generation), Alfred (Voice Controller), and Oracle (Market Intelligence).",
    roiFacts: [
      { stat: "1 Single Operator", fact: "Replaces an entire $8,000 to $15,000/mo human agency payroll of copywriters, editors, and VA managers." },
      { stat: "< 15ms Latency", fact: "Real-time inter-agent handshakes with zero human Slack ping-pong or task-assignment bottlenecks." },
      { stat: "99.98% Uptime", fact: "Self-healing cron schedule monitors automatically recover degraded sessions without operator intervention." }
    ],
    larpingLeverage: {
      headline: "Command Multi-Character Larping Universes Autonomously",
      description: "Larpers running multiple character personas or faceless theme networks can assign individual agents to distinct personas. Hermes schedules the multi-account publishing cadence, Antigravity writes in-character commentary, and OpenClaw distributes content seamlessly.",
      tactics: [
        "Simultaneously manage 5 to 20 distinct fictional or anonymous character profiles",
        "Deterministic persona memory: agents remember each character's tone, lore, and catchphrases",
        "Cross-account synergy: characters can interact, quote, and amplify each other automatically"
      ]
    },
    mechanism: {
      title: "Distributed Agent Coordination Layer",
      overview: "Built on local Python harnesses and SQLite WAL state stores, routing workloads dynamically based on model cost, task complexity, and context window requirements.",
      components: ["Hermes Scheduler Daemon", "Alfred Executive Controller", "Antigravity Reasoner", "Durable Knowledge Loops"]
    },
    oldVsNew: {
      oldWay: "Juggling 5 different single-prompt ChatGPT windows, manually copying text, and burning out.",
      sovereignWay: "One unified 6-agent swarm runs the entire production and distribution lifecycle on autopilot."
    }
  },
  {
    id: "browser-rpa-larping",
    icon: ShieldCheck,
    color: "#06B6D4",
    tag: "LARPING & ANTI-BAN",
    title: "Headless Browser RPA, Anti-Ban & High-Scale Larping",
    shortDescription: "Run 5 to 20+ distributed social accounts ('larpers' or creator networks) safely with isolated browser fingerprints, EXIF metadata purging, and safe 8-12h posting mutex locks.",
    roiFacts: [
      { stat: "0 Platform Bans", fact: "100% account safety rating across 20+ distributed accounts using localized hardware fingerprints." },
      { stat: "< 0.8s / Asset", fact: "Automated EXIF purging (-map_metadata -1) destroys recycled camera hashes that cause shadowbans." },
      { stat: "8-12h Hard Locks", fact: "Mutex-locked pacing mimics natural human activity curves, preventing algorithmic spam flags." }
    ],
    larpingLeverage: {
      headline: "The Ultimate Weapon for Faceless Larpers & Multi-Account Empires",
      description: "This is the primary operational infrastructure for serious larpers. Running multiple accounts on standard browsers or tools gets your accounts banned within 48 hours. OpenClaw isolates each larp profile with unique WebGL hashes, canvas noise, and dedicated proxy chains.",
      tactics: [
        "Scale 10 to 50 faceless character profiles across Instagram, TikTok, and X without cross-contamination",
        "Unique audio frequency hashing prevents platform audio deduplication strikes",
        "Automated session recovery: cookies, local storage, and login sessions persist automatically"
      ]
    },
    mechanism: {
      title: "Anti-Detect Fingerprint Isolation Architecture",
      overview: "Combines headless browser automation with isolated containerized profiles, automated cookie rotation, and randomized human jitter curves.",
      components: ["Profile Isolation Matrix", "EXIF Purge Hook Pipeline", "Safe-Pacing Mutex Lock", "Cookie Persistence Ledger"]
    },
    oldVsNew: {
      oldWay: "Manual phone switching, recycled clips triggering instant shadowbans, and constant account suspensions.",
      sovereignWay: "Automated multi-profile anti-detect isolation with 100% clean device fingerprints and guaranteed safety."
    }
  },
  {
    id: "market-intelligence",
    icon: Radio,
    color: "#3B82F6",
    tag: "LIVE SIGNALS",
    title: "Real-Time Market Intelligence & Viral Signal Hunting",
    shortDescription: "Oracle automatically ingests live RSS and social feeds, scoring viral signals and generating citation-grounded outlines and strategy briefs with zero human effort.",
    roiFacts: [
      { stat: "25+ Hours Saved/Wk", fact: "Eliminates endless manual doom-scrolling, competitor spying, and guesswork about what content to produce." },
      { stat: "200+ Live Feeds", fact: "Continuously monitors breaking sector news, algorithmic velocity spikes, and emerging memes." },
      { stat: "15-Min Detection", fact: "Identifies viral trends within 15 minutes of algorithmic breakout before the mainstream catches on." }
    ],
    larpingLeverage: {
      headline: "Ride Viral Waves Before Anyone Else in Your Niche",
      description: "For larpers, speed and cultural relevance are everything. Oracle identifies trending topics and cultural debates in real time, automatically drafting scored briefs so your larp accounts can post hot takes and viral edits hours before copycat channels.",
      tactics: [
        "Instantly detect breaking drama, cultural debates, and niche industry arguments",
        "Auto-generate high-retention hot takes aligned with your character's worldview",
        "Cite real data and sources automatically, giving your faceless brand unassailable authority"
      ]
    },
    mechanism: {
      title: "Semantic Signal Ingestion & Scoring Matrix",
      overview: "Ingests unstructured web and social data, groups signals into semantic clusters, scores trend velocity, and outputs structured production briefs.",
      components: ["Multi-Stream RSS Harvester", "Algorithmic Velocity Scorer", "Semantic Brief Generator", "Durable Trend Ledger"]
    },
    oldVsNew: {
      oldWay: "Staring at a blank screen wondering what to post, jumping on trends 3 days too late after reach dies.",
      sovereignWay: "Autonomous market intelligence feeds your queue daily with high-velocity, pre-scored viral briefs."
    }
  },
  {
    id: "4k-gpu-compilation",
    icon: Film,
    color: "#F59E0B",
    tag: "HARDWARE VELOCITY",
    title: "Hardware-Accelerated 4K GPU Media Compilation Engine",
    shortDescription: "Replace manual video editing payroll. Hardware-accelerated GPU pipelines compile pristine 4K vertical assets at 8.2x real-time speed with timed cognitive retention.",
    roiFacts: [
      { stat: "8.2x Render Speed", fact: "Compiles a 60-second studio-grade 4K vertical master in under 8 seconds using hardware GPU acceleration." },
      { stat: "2160x3840 Canvas", fact: "Lanczos scaling prevents blurry platform compression traps and forces algorithms to assign high-definition flags." },
      { stat: "Zero-Darkening Rule", fact: "Maintains natural source color balance with zero muddy contrast filters that trigger algorithmic demotion." }
    ],
    larpingLeverage: {
      headline: "Mass-Produce Hundreds of Faceless Aesthetic Edits in Minutes",
      description: "Larpers rely on high-volume visual edits (movie scenes, aesthetic B-roll, tech clips, philosophical visuals). Instead of spending 2 hours inside CapCut or Premiere for a single clip, our GPU script batch-compiles 50 pristine 4K vertical assets automatically.",
      tactics: [
        "Batch-render 50+ faceless character videos from raw asset folders in one command",
        "Automated 2.5s high-dopamine hook prepending from your master hook vaults",
        "Neurological 5-stage progressive reveal typography staggered at 0s, 2.5s, 6s, 9.5s, and 13s"
      ]
    },
    mechanism: {
      title: "Hardware GPU Rendering Pipeline",
      overview: "Direct hardware pipeline utilizing Lanczos accurate rounding, high-bitrate vertical encoding, and dynamic text overlays with zero GUI overhead.",
      components: ["GPU Accelerated Render Core", "Lanczos 4K Filter Matrix", "Master Hook Prepend Engine", "Progressive Caption Timers"]
    },
    oldVsNew: {
      oldWay: "Paying video editors $25 to $50 per reel for blurry 1080p clips with bad captions and 3-day turnaround.",
      sovereignWay: "8.2x speed GPU compilation compiles pristine 4K assets automatically for fractions of a penny."
    }
  },
  {
    id: "inbound-dm-conversion",
    icon: Target,
    color: "#10B981",
    tag: "MONETIZATION",
    title: "Automated Inbound Lead & Client Acquisition Funnel",
    shortDescription: "Turn viewers and comments into paying high-ticket clients. Automated 1-to-1 keyword DM engines deliver tracked bridge pages and private resources on autopilot.",
    roiFacts: [
      { stat: "12x Conversion Rate", fact: "1-to-1 automated DMs generate 12x higher click-through than static link-in-bio setups." },
      { stat: "48+ Inbound Leads/Mo", fact: "Average captured high-intent prospective client leads per managed account without cold outreach." },
      { stat: "100% Organic Velocity", fact: "Public comment replies double engagement signals, triggering platform algorithmic distribution." }
    ],
    larpingLeverage: {
      headline: "Monetize Faceless Virality Directly Into Private Communities & Sales",
      description: "The biggest flaw of traditional larping is getting millions of views but zero dollars. Our automated inbound DM engine turns viral character comments into immediate conversions by sending private tracked links directly to their inbox.",
      tactics: [
        "Trigger high-converting DMs when viewers comment specific keywords like 'OS', 'VIP', or 'BLUEPRINT'",
        "Route traffic to your Skool community, affiliate offers, digital products, or agency retainers",
        "Randomized 3 to 7 second delivery pacing protects your account from platform messaging rate limits"
      ]
    },
    mechanism: {
      title: "Keyword-to-DM Inbound Engine",
      overview: "Listens for comment webhooks, matches target keywords with fuzzy substring logic, and executes personalized 1-to-1 delivery with tracked link analytics.",
      components: ["Comment Interaction Webhook", "Fuzzy Keyword Matcher", "Delayed DM Dispatcher", "Tracked Conversion Gateway"]
    },
    oldVsNew: {
      oldWay: "Losing 95% of traffic to a dead linktree in bio that nobody clicks or remembers.",
      sovereignWay: "Automated 1-to-1 keyword DMs deliver VIP access straight to interested viewers while they are still watching."
    }
  },
  {
    id: "smart-model-routing",
    icon: Zap,
    color: "#C9A84C",
    tag: "INFRASTRUCTURE",
    title: "Quartermaster Cost-Neutral Smart Model Routing",
    shortDescription: "Intelligently routes task loads across cost-neutral verified models, local runtimes, and frontier APIs — slashing monthly compute costs to near-zero.",
    roiFacts: [
      { stat: "85-95% Cost Cut", fact: "Slashes enterprise LLM token spend from hundreds of dollars down to near-zero." },
      { stat: "Free-First Fallbacks", fact: "Prioritizes verified free-tier models and local compute before invoking metered commercial inference." },
      { stat: "Dynamic Arbitration", fact: "Routes complex reasoning to frontier models while assigning routine drafting to lightweight free models." }
    ],
    larpingLeverage: {
      headline: "Run 20+ High-Volume Larp Accounts Without Paying Huge API Bills",
      description: "When you run a multi-account larp network posting 100+ tweets, scripts, and replies daily, standard API bills can easily exceed $1,000/month. Quartermaster smart routing arbitrates every call, using local and verified free tiers to generate content at zero marginal cost.",
      tactics: [
        "Generate infinite character tweets, replies, and script variations with zero compute anxiety",
        "Automatic fallback ensures your swarm never halts when a specific model encounters rate limits",
        "Local execution keeps all private prompts, strategies, and character lore confidential on your machine"
      ]
    },
    mechanism: {
      title: "Cost-Neutral Inference Arbitration Router",
      overview: "Evaluates token complexity, matches requests against live model latency and cost tables, and falls back gracefully through a deterministic multi-tier model hierarchy.",
      components: ["Smart Tier Arbiter", "Free-Tier Health Checker", "Local Compute Gateway", "Rate-Limit Circuit Breaker"]
    },
    oldVsNew: {
      oldWay: "Throwing expensive frontier model calls at basic formatting and getting hit with $600 unexpected API bills.",
      sovereignWay: "Quartermaster smart-routing runs 90% of routine swarm tasks at zero marginal cost with local & cost-neutral fallbacks."
    }
  }
];

export const BenefitsGrid: React.FC = () => {
  const [activeWizardIndex, setActiveWizardIndex] = useState<number | null>(null);

  // Keyboard navigation & ESC handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeWizardIndex === null) return;
      if (e.key === "Escape") {
        setActiveWizardIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveWizardIndex((prev) => (prev !== null ? (prev + 1) % CAPABILITY_DETAILS.length : 0));
      } else if (e.key === "ArrowLeft") {
        setActiveWizardIndex((prev) => (prev !== null ? (prev - 1 + CAPABILITY_DETAILS.length) % CAPABILITY_DETAILS.length : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeWizardIndex]);

  const activeCapability = activeWizardIndex !== null ? CAPABILITY_DETAILS[activeWizardIndex] : null;

  return (
    <section id="benefits" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A84C]/5 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Core System Capabilities</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          What Operators Are Building <span className="gold-gradient-text">Right Now</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Inside the Inner Circle, operators and larpers replace human payroll and fragmented tools with our unified sovereign multi-agent infrastructure.
        </p>
        <p className="text-xs font-mono text-[#C9A84C] mt-2">
          ⚡ Click any card below to open the Strategic Facts & Larping ROI Wizard
        </p>
      </div>

      {/* 6 Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {CAPABILITY_DETAILS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setActiveWizardIndex(idx)}
              className="glass-card rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-[#C9A84C]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="p-3.5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform shadow-md"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <span 
                  className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10"
                  style={{ color: item.color, backgroundColor: `${item.color}10` }}
                >
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="font-aquire text-lg font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8B9BB4] leading-relaxed mb-4">
                  {item.shortDescription}
                </p>
              </div>

              {/* Action Prompt */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#C9A84C] group-hover:text-[#F5E2B3] transition-colors">
                <span className="font-semibold">Inspect Facts & Larping ROI</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Skool Button */}
      <div className="text-center">
        <a
          href="https://www.skool.com/novara-ai-media-group-5745/about"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/25 transition-all transform active:scale-95"
        >
          <span>Join the Inner Circle & Deploy These Systems</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* ── INTERACTIVE CAPABILITY BENEFIT FACTS WIZARD MODAL ── */}
      {activeCapability && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveWizardIndex(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080B14] border border-[#C9A84C]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-left text-[#EDF0F5]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header Bar */}
            <div className="flex items-start justify-between pb-5 border-b border-white/10 mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-3 rounded-2xl border border-white/10 shrink-0"
                  style={{ backgroundColor: `${activeCapability.color}15`, color: activeCapability.color }}
                >
                  <activeCapability.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ color: activeCapability.color, backgroundColor: `${activeCapability.color}15` }}
                    >
                      {activeCapability.tag}
                    </span>
                    <span className="text-xs font-mono text-[#8B9BB4]">
                      Capability 0{activeWizardIndex! + 1} / 06
                    </span>
                  </div>
                  <h3 className="font-aquire text-lg sm:text-xl font-bold text-[#EDF0F5] mt-1">
                    {activeCapability.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveWizardIndex(null)}
                className="p-2 rounded-xl text-[#8B9BB4] hover:text-white hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Wizard Pills */}
            <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-1">
              {CAPABILITY_DETAILS.map((cap, cIdx) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveWizardIndex(cIdx)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all whitespace-nowrap ${
                    cIdx === activeWizardIndex
                      ? "bg-[#C9A84C] text-[#030712] font-bold shadow-md"
                      : "bg-[#0B1120] text-[#8B9BB4] hover:text-white border border-white/5"
                  }`}
                >
                  0{cIdx + 1} {cap.tag}
                </button>
              ))}
            </div>

            {/* Section 1: Verified ROI & Quantified Facts */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F5E2B3] uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-[#C9A84C]" />
                <span>Verified Strategic Facts & Quantified ROI</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeCapability.roiFacts.map((fact, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-2xl bg-[#0B1120] border border-white/10">
                    <div className="font-aquire text-base font-extrabold text-[#10B981] mb-1">
                      {fact.stat}
                    </div>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed">
                      {fact.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Dedicated Larping & Faceless Application */}
            <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#12072B]/60 via-[#0B1120] to-[#05080F] border border-[#8B5CF6]/30">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C084FC] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4 text-[#A855F7]" />
                <span>High-Scale Larping & Faceless Multi-Account Leverage</span>
              </div>
              <h4 className="font-aquire text-sm sm:text-base font-bold text-[#EDF0F5] mb-2">
                {activeCapability.larpingLeverage.headline}
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-3">
                {activeCapability.larpingLeverage.description}
              </p>
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                {activeCapability.larpingLeverage.tactics.map((tactic, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2 text-xs text-[#E9D5FF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                    <span>{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Under-The-Hood Architecture */}
            <div className="mb-6 p-5 rounded-2xl bg-[#0B1120] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4 text-[#0284C7]" />
                <span>{activeCapability.mechanism.title}</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                {activeCapability.mechanism.overview}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeCapability.mechanism.components.map((comp, compIdx) => (
                  <span 
                    key={compIdx}
                    className="px-2.5 py-1 rounded-md bg-[#05080F] border border-white/10 text-[10px] font-mono text-[#EDF0F5]"
                  >
                    ⚡ {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 4: Old Manual Grind vs Sovereign Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
              <div className="p-3.5 rounded-xl bg-[#1F0A0A] border border-[#EF4444]/30 text-[#FCA5A5]">
                <strong className="block font-mono text-[10px] uppercase text-[#EF4444] mb-1">
                  ❌ Old Manual Way:
                </strong>
                {activeCapability.oldVsNew.oldWay}
              </div>
              <div className="p-3.5 rounded-xl bg-[#051E14] border border-[#10B981]/30 text-[#A7F3D0]">
                <strong className="block font-mono text-[10px] uppercase text-[#10B981] mb-1">
                  ✅ The Sovereign OS:
                </strong>
                {activeCapability.oldVsNew.sovereignWay}
              </div>
            </div>

            {/* Modal Bottom Controls */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveWizardIndex((prev) => (prev !== null ? (prev - 1 + CAPABILITY_DETAILS.length) % CAPABILITY_DETAILS.length : 0))}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B1120] border border-white/10 hover:border-white/30 text-xs font-mono text-[#EDF0F5] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setActiveWizardIndex((prev) => (prev !== null ? (prev + 1) % CAPABILITY_DETAILS.length : 0))}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B1120] border border-white/10 hover:border-white/30 text-xs font-mono text-[#EDF0F5] transition-all"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all"
              >
                <span>Deploy Inside Skool Community</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default BenefitsGrid;