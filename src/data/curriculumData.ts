export interface CurriculumPhase {
  phaseNumber: string;
  badge: string;
  title: string;
  duration: string;
  description: string;
  outcomes: string[];
  modules: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
}

export const ACADEMY_CURRICULUM: CurriculumPhase[] = [
  {
    phaseNumber: "PHASE 01",
    badge: "FOUNDATIONS",
    title: "Sovereign AI Operator Core & Multi-Agent Swarms",
    duration: "Week 1 - 2",
    description: "Break free from basic surface-level wrappers. Learn to configure autonomous swarms, multi-agent runtimes, and build your primary sovereign AI workstation.",
    outcomes: [
      "Master local multi-agent runtime orchestration and cognitive swarms",
      "Set up 2-way durable knowledge vault synchronization",
      "Eliminate compute waste with free-first smart-money inference routing"
    ],
    modules: [
      {
        title: "Module 1.1: The Sovereign Architecture Stack",
        description: "Why single-prompt tools fail and how multi-agent networks compound leverage.",
        deliverables: ["Operator Setup Checklist", "Free-First Model Routing Config"]
      },
      {
        title: "Module 1.2: Durable Agent Memory & Knowledge Sync",
        description: "Configuring persistent knowledge loops so your agents remember every conversation and operational state.",
        deliverables: ["Durable Knowledge Loop Script", "Agent Runtime State Template"]
      }
    ]
  },
  {
    phaseNumber: "PHASE 02",
    badge: "PRODUCTION",
    title: "Hardware-Accelerated 4K Media Compilation Engine",
    duration: "Week 3 - 4",
    description: "Build the exact hardware-accelerated rendering engine we use to compile hundreds of studio-grade 4K vertical assets at 8.2x speed.",
    outcomes: [
      "Deploy hardware GPU acceleration pipelines for 8.2x render speeds",
      "Master the Zero-Darkening rule and 5-stage progressive reveal typography",
      "Build automated master creator vaults with complete EXIF metadata scrubbing"
    ],
    modules: [
      {
        title: "Module 2.1: 4K GPU Rendering & Lanczos Filters",
        description: "Compiling pristine 2160x3840 vertical video that avoids platform compression traps.",
        deliverables: ["Production GPU Compilation Scripts", "4K Vertical Canvas Config"]
      },
      {
        title: "Module 2.2: Neurological Caption Timing & Retention",
        description: "Staggering dopamine releases at 0s, 2.5s, 6.0s, 9.5s, and 13s to maximize viewer completion rates.",
        deliverables: ["Progressive Reveal JSON Schemas", "Hook Clip Prepend Script"]
      }
    ]
  },
  {
    phaseNumber: "PHASE 03",
    badge: "AUTOMATION",
    title: "Autonomous Distribution & Inbound Lead Funnels",
    duration: "Week 5 - 6",
    description: "Turn your infrastructure into an autonomous perpetual motion engine that posts, monitors, and captures leads 24/7.",
    outcomes: [
      "Implement the 10-post batch auto-replenishment queue",
      "Enforce platform anti-flood safety guards and 8-12 hour post pacing",
      "Connect automated 1-to-1 inbound DM protocols to deliver tracked assets to engaged viewers"
    ],
    modules: [
      {
        title: "Module 3.1: The Auto-Replenishment Engine",
        description: "Writing queue monitors that replenish your schedule when ready assets drop below 3.",
        deliverables: ["Auto-Queue Replenisher Python Code", "Durable State Ledger Schema"]
      },
      {
        title: "Module 3.2: The Inbound DM Conversion Funnel",
        description: "Triggering keyword DMs, deploying private tracked bridge assets, and capturing qualified leads automatically.",
        deliverables: ["Automated Inbound DM Webhook Blueprint", "High-Converting Bridge Page Copy"]
      }
    ]
  },
  {
    phaseNumber: "PHASE 04",
    badge: "MONETIZATION",
    title: "High-Ticket Client Acquisition & Agency Scaling",
    duration: "Week 7 - 8",
    description: "Package your sovereign multi-agent OS capabilities into $5,000 to $15,000/month retainers for creators, brands, and enterprise businesses.",
    outcomes: [
      "Position autonomous AI infrastructure as a high-ROI business system",
      "Deploy custom client portals and automated reporting dashboards",
      "Scale to 10+ concurrent clients without hiring bloated human fulfillment teams"
    ],
    modules: [
      {
        title: "Module 4.1: The $10k/mo Retainer Offer Architecture",
        description: "Crafting irresistible B2B proposals that guarantee media output and lead volume without manual labor.",
        deliverables: ["Agency Proposal Template", "Client Onboarding SOP"]
      },
      {
        title: "Module 4.2: Distributed Multi-Account Management",
        description: "Safely managing 10 to 50 client profiles across isolated hardware environments.",
        deliverables: ["Anti-Detect Environment Setup Guide", "Client Dashboard Template"]
      }
    ]
  }
];

export interface SkoolPerk {
  icon: string;
  title: string;
  description: string;
}

export const SKOOL_COMMUNITY_PERKS: SkoolPerk[] = [
  {
    icon: "CodeXml",
    title: "Complete Raw Python & Script Repositories",
    description: "Instant access to all open-source orchestration code, GPU compilers, and queue daemons."
  },
  {
    icon: "Network",
    title: "150+ Master System Prompts & Cognitive Schemas",
    description: "Copy-paste prompts engineered for autonomous reasoning, high-retention copy, and lead generation."
  },
  {
    icon: "Video",
    title: "Weekly Live Engineering Masterclasses",
    description: "Join Ricardo Gutierrez and our technical team every week for live system builds, code teardowns, and direct Q&A."
  },
  {
    icon: "Users",
    title: "Private Network of 3,500+ Sovereign Operators",
    description: "Collaborate with top agency owners, creators, and engineers sharing active multi-account wins."
  },
  {
    icon: "Rocket",
    title: "Weekly Tool & Algorithmic Unlocks",
    description: "Stay ahead of platform algorithm shifts with constantly updated anti-ban configs and blueprints."
  },
  {
    icon: "Sparkles",
    title: "100% Free Lifetime Community Membership",
    description: "Zero monthly subscription fees for founding cohort members. Keep full access forever."
  }
];
