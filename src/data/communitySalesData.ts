export interface ValueStackItem {
  id: string;
  title: string;
  category: string;
  realValue: string;
  description: string;
  includedFree: boolean;
  highlightTag: string;
  iconName: string;
}

export const COMMUNITY_VALUE_STACK: ValueStackItem[] = [
  {
    id: "vs-1",
    title: "Complete Multi-Agent OS & Hermes Python Core Codebase",
    category: "Autonomous Architecture",
    realValue: "$1,497",
    description: "The full orchestration engine that coordinates agent handoffs, crons, self-healing runtime monitors, and durable two-way Durable Knowledge Vault knowledge vault synchronization.",
    includedFree: true,
    highlightTag: "CORE OS ENGINE",
    iconName: "BrainCircuit"
  },
  {
    id: "vs-2",
    title: "150+ Master Enterprise System Prompts & Cognitive Schemas",
    category: "Prompt Vault",
    realValue: "$997",
    description: "Our private prompt architecture for frontier reasoning models and autonomous swarms that handle deterministic market research, viral copywriting, code refactors, and executive briefings.",
    includedFree: true,
    highlightTag: "INSTANT DEPLOY",
    iconName: "Sparkles"
  },
  {
    id: "vs-3",
    title: "Browser RPA & Distributed Multi-Account Anti-Ban Stack",
    category: "Automation & Security",
    realValue: "$897",
    description: "Headless browser automation protocols with hardware profile isolation, EXIF metadata purging (-map_metadata -1), unique audio hashing, and 8-12h anti-flood pacing.",
    includedFree: true,
    highlightTag: "ANTI-BAN INFRA",
    iconName: "ShieldCheck"
  },
  {
    id: "vs-4",
    title: "Hardware-Accelerated 4K Media Compilation Engine",
    category: "Production Pipeline",
    realValue: "$797",
    description: "Production GPU NVENC rendering scripts with Lanczos 2160x3840 vertical scaling, 8.2x compilation speeds, and neurological 5-stage progressive reveal typography.",
    includedFree: true,
    highlightTag: "4K GPU ENGINE",
    iconName: "Zap"
  },
  {
    id: "vs-5",
    title: "Automated Inbound Lead Routing & DM Conversion Engine",
    category: "Monetization Protocol",
    realValue: "$697",
    description: "Turn organic attention into inbound high-ticket clients. Automated 1-to-1 keyword response triggers deliver tracked private assets generating 12x higher click conversions.",
    includedFree: true,
    highlightTag: "CLIENT FUNNEL",
    iconName: "Send"
  },
  {
    id: "vs-6",
    title: "Weekly Live Engineering Masterclasses & Architecture Calls",
    category: "Direct Mentorship",
    realValue: "$1,997/yr",
    description: "Join weekly live screen-share builds with LO and our engineering team. Watch live multi-agent refactors, tool integrations, and get 1-on-1 troubleshooting for your systems.",
    includedFree: true,
    highlightTag: "LIVE MENTORSHIP",
    iconName: "Video"
  }
];

export interface CommunityStat {
  value: string;
  label: string;
  description: string;
}

export const COMMUNITY_STATS: CommunityStat[] = [
  { value: "6 Swarm Agents", label: "Autonomous Swarm", description: "Hermes, OpenClaw, Antigravity, Codex, Alfred, Oracle" },
  { value: "150+", label: "Enterprise Blueprints", description: "Production code, prompts & RPA scripts" },
  { value: "3,500+", label: "Active Operators", description: "First 50 Pioneer Operators (100% Free Lifetime Tier)" },
  { value: "99.98%", label: "Autonomous Uptime", description: "Self-healing crons & Durable Knowledge Vault state loops" }
];

export interface BenefitCardItem {
  icon: string;
  title: string;
  description: string;
}

export const COMMUNITY_BENEFITS: BenefitCardItem[] = [
  {
    icon: "",
    title: "6-Agent Autonomous Constellation",
    description: "Coordinate a unified AI team: Hermes (Orchestration), OpenClaw (Browser RPA), Antigravity (Reasoning), Codex (Code Generation), Alfred (Voice Controller), and Oracle (Market Intelligence)."
  },
  {
    icon: "",
    title: "Headless Browser RPA & Multi-Account Anti-Ban",
    description: "Run 5-20+ distributed social accounts ('larpers' or creator networks) safely with isolated browser fingerprints, EXIF metadata purging, and safe 8-12h posting mutex locks."
  },
  {
    icon: "",
    title: "Real-Time Market Intelligence & Signal Hunting",
    description: "Oracle automatically ingests live RSS and social feeds, scoring viral signals and generating citation-grounded outlines and strategy briefs with zero human effort."
  },
  {
    icon: "",
    title: "Hardware-Accelerated 4K Media Compilation",
    description: "Replace manual video editing payroll. NVIDIA NVENC hardware-accelerated GPU pipelines compile pristine 4K video at 8.2x real-time speed with timed cognitive retention."
  },
  {
    icon: "",
    title: "Automated Inbound Lead & Client Acquisition",
    description: "Turn viewers and comments into paying high-ticket clients. Automated 1-to-1 keyword DM engines deliver tracked bridge pages and private resources on autopilot."
  },
  {
    icon: "",
    title: "Quartermaster Cost-Neutral Smart Model Routing",
    description: "Intelligently routes task loads across cost-neutral verified models, local runtimes, and frontier APIs - slashing monthly compute costs to near-zero."
  }
];

export interface WhoForItem {
  icon: string;
  title: string;
  description: string;
}

export const WHO_THIS_IS_FOR: WhoForItem[] = [
  {
    icon: "",
    title: "Sovereign AI Agency Owners",
    description: "Replace bloated human fulfillment teams (editors, writers, VA managers) with autonomous multi-agent OS infrastructure and charge clients $3,000-$10,000/mo retainers."
  },
  {
    icon: "",
    title: "Multi-Account & Faceless Operators ('Larpers')",
    description: "Run 5-20 distributed theme accounts safely, scale massive organic reach, and monetize through automated DM lead funnels without showing your face."
  },
  {
    icon: "",
    title: "High-Output Creators & Personal Brands",
    description: "Automate your entire media engine, maintain strict 8-hour posting consistency across all platforms, and achieve 85%+ viewer retention without editing burnout."
  },
  {
    icon: "",
    title: "Consultants, Growth Hackers & Freelancers",
    description: "Automate client delivery, productize bespoke AI workflows, and build high-margin autonomous operations for enterprise clients."
  },
  {
    icon: "",
    title: "Startup Founders & Technical Builders",
    description: "Deploy scalable multi-agent systems, integrate local LLMs, and automate operational workflows with full Python source code access."
  },
  {
    icon: "",
    title: "Anyone Who Wants Sovereign Leverage with AI",
    description: "Zero coding experience required to begin. Follow our step-by-step Skool classroom modules, copy-paste production templates, and join weekly live build calls."
  }
];

export interface FeatureChecklistItem {
  title: string;
  badge?: string;
  description: string;
}

export const FEATURE_CHECKLIST: FeatureChecklistItem[] = [
  {
    title: "Complete Hermes Multi-Agent Orchestration Core",
    badge: "100% PYTHON SOURCE CODE",
    description: "The supreme scheduling matrix that coordinates agent handoffs, crons, self-healing runtime monitors, and durable Durable Knowledge Vault knowledge vault synchronization."
  },
  {
    title: "OpenClaw Headless Browser RPA & Anti-Ban Stack",
    badge: "ANTI-DETECT ISOLATION",
    description: "Automated browser interaction engines with hardware profile isolation, EXIF metadata purging (-map_metadata -1), and safe 8-12 hour posting pacing."
  },
  {
    title: "Oracle Autonomous Market Intelligence Engine",
    badge: "REAL-TIME SIGNALS",
    description: "Live RSS and social feed scanner that extracts high-velocity market trends and generates citation-grounded content outlines and strategy briefs."
  },
  {
    title: "Hardware-Accelerated 4K GPU NVENC Pipeline",
    badge: "8.2X GPU VELOCITY",
    description: "Production hardware GPU scripts with Lanczos 2160x3840 scaling, zero artificial darkening, and 5-stage progressive reveal neurological timing."
  },
  {
    title: "Quartermaster Cost-Neutral Model Routing Engine",
    badge: "FREE-FIRST ROUTING",
    description: "Smart-money model steward that routes workloads across verified free-tier models, local runtimes, and frontier APIs."
  },
  {
    title: "Alfred Voice Supervisor & 12-Tool Executive Controller",
    badge: "VOICE-FIRST COCKPIT",
    description: "Voice-activated operator interface with 12 registered system tools, daily executive briefings, and confirmation-gated action safeguards."
  },
  {
    title: "Private Community of Pioneer Operators",
    badge: "INNER CIRCLE",
    description: "Network with high-caliber operators, share multi-account wins, collaborate on tools, and get direct mentorship in weekly live engineering calls."
  }
];

export interface OldVsNewPoint {
  oldPain: string;
  sovereignGain: string;
}

export const COMPARISON_POINTS: OldVsNewPoint[] = [
  {
    oldPain: "Paying $5,000-$15,000/mo to bloated agency teams and unreliable freelancers.",
    sovereignGain: "1 single operator commands a 6-agent autonomous swarm replacing an entire company payroll."
  },
  {
    oldPain: "Spending 40+ hours every week manually juggling 10 disconnected SaaS tools.",
    sovereignGain: "A unified self-healing OS coordinates orchestration, browser RPA, and media compilation on autopilot."
  },
  {
    oldPain: "Facing constant shadowbans and account suspensions from unscrubbed metadata.",
    sovereignGain: "Automated EXIF purging, unique audio hashing, and profile isolation protect 10+ accounts seamlessly."
  },
  {
    oldPain: "Burning thousands of dollars every month on fragmented, unmonitored LLM API bills.",
    sovereignGain: "Quartermaster smart-money routing slashes inference costs to near-zero with free-first fallbacks."
  },
  {
    oldPain: "Losing 95% of traffic with dead link-in-bio setups and manual comment replies.",
    sovereignGain: "Automated Inbound DM Protocols deliver tracked VIP assets directly to high-intent leads 24/7."
  }
];

export interface SimplifiedStep {
  step: string;
  title: string;
  summary: string;
  badge: string;
  keyBenefit: string;
  iconName: string;
}

export const SIMPLIFIED_STEPS: SimplifiedStep[] = [
  {
    step: "01",
    title: "Market Intelligence & Signal Hunting",
    summary: "Oracle scans live RSS feeds, emerging trends, and viral signals - generating scored topic briefs and citations on autopilot.",
    badge: "AI INTELLIGENCE",
    keyBenefit: "Zero manual research or guessing",
    iconName: "Radio"
  },
  {
    step: "02",
    title: "Multi-Agent Swarm Orchestration",
    summary: "Hermes, Antigravity, and Codex plan the schedule, draft high-retention copy, and compile production code.",
    badge: "COGNITIVE ORCHESTRATION",
    keyBenefit: "24/7 autonomous coordination",
    iconName: "BrainCircuit"
  },
  {
    step: "03",
    title: "Hardware 4K GPU Media Compilation",
    summary: "NVIDIA GPU compiles 4K vertical assets at 8.2x speed, stripping EXIF fingerprints and timing progressive caption reveals.",
    badge: "HARDWARE VELOCITY",
    keyBenefit: "8.2x speed & 0 platform bans",
    iconName: "Zap"
  },
  {
    step: "04",
    title: "Autonomous Distribution & Inbound DM Leads",
    summary: "OpenClaw posts with safe 8-12h pacing while automated DM routers capture leads and deliver private assets.",
    badge: "LEAD ACQUISITION",
    keyBenefit: "12x higher client conversion rate",
    iconName: "Send"
  }
];

export interface SkoolLevel {
  level: number;
  title: string;
  perks: string;
  status: string;
}

export const SKOOL_LEVELS: SkoolLevel[] = [
  {
    level: 1,
    title: "Novice Operator",
    perks: "Unlock Foundations Classroom, Starter Prompts, and Local Setup Blueprints",
    status: "Instant on Join"
  },
  {
    level: 2,
    title: "Automation Engineer",
    perks: "Unlock Hardware GPU 4K Video Compilation Scripts & Hook Vaults",
    status: "Level 2 Unlock"
  },
  {
    level: 3,
    title: "Multi-Agent Architect",
    perks: "Unlock Hermes Core Python Orchestrator & Auto-Replenishment Engine",
    status: "Level 3 Unlock"
  },
  {
    level: 4,
    title: "Distribution & Growth Specialist",
    perks: "Unlock OpenClaw Browser RPA, Anti-Ban Fingerprint Protocols & Inbound DM Engines",
    status: "Level 4 Unlock"
  },
  {
    level: 5,
    title: "Sovereign Mastermind",
    perks: "Direct 1-on-1 Architecture Review + $10k/mo Autonomous Agency Retainer Framework",
    status: "Top Leaderboard"
  }
];

export interface SeoGuideItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
}

export const SEO_BLOG_GUIDES: SeoGuideItem[] = [
  {
    slug: "run-10-faceless-accounts-without-bans",
    title: "How to Run 10+ Faceless Accounts on Autopilot (Anti-Ban Protocol) ->",
    category: "Anti-Ban Blueprint",
    readTime: "8 min read"
  },
  {
    slug: "multi-agent-frameworks-for-video",
    title: "Why Multi-Agent Constellations Outperform Single-Prompt LLM Tools ->",
    category: "Multi-Agent Architecture",
    readTime: "10 min read"
  },
  {
    slug: "4k-nvenc-gpu-rendering-pipeline",
    title: "Building an 8.2x Speed 4K GPU Video Rendering Pipeline (Zero Darkening) ->",
    category: "Hardware & FFmpeg",
    readTime: "7 min read"
  },
  {
    slug: "neurological-caption-timing-blueprint",
    title: "The 5-Stage Neurological Caption Timing Blueprint (85%+ Watch Time) ->",
    category: "Retention Science",
    readTime: "6 min read"
  },
  {
    slug: "make-money-with-ai-video",
    title: "How to Package Autonomous AI Video Pipelines Into $5K-$10K/mo Retainers ->",
    category: "Agency Monetization",
    readTime: "9 min read"
  },
  {
    slug: "best-ai-communities-2026",
    title: "Top Sovereign AI Communities & Skool Groups to Join in 2026 ->",
    category: "Community Guide",
    readTime: "5 min read"
  }
];
