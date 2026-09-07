export interface YouTubeVideo {
  id: string;
  episodeNumber: string;
  title: string;
  duration: string;
  tag: string;
  thumbnailPlaceholder: string;
  description: string;
  keyTimestamps: {
    time: string;
    topic: string;
  }[];
  youtubeUrl: string;
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "yt-01",
    episodeNumber: "EPISODE 01",
    title: "How We Built an Autonomous 4K Video Engine That Replaces an 8-Person Agency",
    duration: "24:18",
    tag: "ARCHITECTURE TEARDOWN",
    thumbnailPlaceholder: "linear-gradient(135deg, #0B1120 0%, #1E293B 50%, #C9A84C 100%)",
    description: "The complete technical walkthrough of the Sovereign Media Production (SMP) OS. Watch how 6 AI agents orchestrate 340+ videos without burning out human editors.",
    keyTimestamps: [
      { time: "00:00", topic: "The Death of Traditional Video Editing Agencies" },
      { time: "04:12", topic: "Inside the Multi-Agent Constellation Core" },
      { time: "11:45", topic: "Hardware-Accelerated 4K Lanczos Rendering" },
      { time: "18:30", topic: "How Sovereign Inbound DM Protocol Automatically Closes Inbound Leads in DMs" }
    ],
    youtubeUrl: "https://www.youtube.com/@Novara-Labs"
  },
  {
    id: "yt-02",
    episodeNumber: "EPISODE 02",
    title: "The 5-Stage Progressive Reveal: The Exact Dopamine Science Behind Viral Hooks",
    duration: "18:42",
    tag: "NEUROLOGICAL RETENTION",
    thumbnailPlaceholder: "linear-gradient(135deg, #090D16 0%, #172554 50%, #3B82F6 100%)",
    description: "Why standard captions kill your retention and how staggering typography at 0s, 2.5s, 6s, 9.5s, and 13s forces platform algorithms to push your content.",
    keyTimestamps: [
      { time: "00:00", topic: "The 3-Second Cognitive Drop-off Trap" },
      { time: "05:20", topic: "Configuring the Neurological Timing Windows in Code" },
      { time: "12:15", topic: "Live Before/After Retention Curve Analytics" }
    ],
    youtubeUrl: "https://www.youtube.com/@Novara-Labs"
  },
  {
    id: "yt-03",
    episodeNumber: "EPISODE 03",
    title: "Zero-Cost AI Architecture: Routing Models with Quartermaster & Free-Tier LLMs",
    duration: "21:05",
    tag: "INFRASTRUCTURE",
    thumbnailPlaceholder: "linear-gradient(135deg, #05080F 0%, #14532D 50%, #10B981 100%)",
    description: "Stop paying $500/month in OpenAI API bills. How to configure smart model ranking, fallback tiers, and run autonomous agent loops completely free.",
    keyTimestamps: [
      { time: "00:00", topic: "The API Quota Drain Disaster" },
      { time: "06:10", topic: "Setting Up Quartermaster Model Ranking" },
      { time: "14:40", topic: "Connecting Local Compute Runtimes to Hermes Swarm" }
    ],
    youtubeUrl: "https://www.youtube.com/@Novara-Labs"
  }
];

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  badge: "Major Release" | "Optimization" | "Security" | "Community Drop";
  highlights: string[];
}

export const SYSTEM_CHANGELOG: ChangelogEntry[] = [
  {
    version: "v2.4.2",
    date: "August 2026",
    title: "Autonomous Queue Replenisher & Sovereign Inbound DM Protocol VIP Funnel Integration",
    badge: "Major Release",
    highlights: [
      "Added continuous auto-replenishment engine (triggers when ready posts <= 3)",
      "Bound Sovereign Inbound DM Protocol 'Black Vault VIP Access' campaign to our private tracked bridge link bridge page",
      "Integrated SQLite WAL mode ledger with live sync across 340+ master creator assets",
      "Hardened TOS post pacing to strict 8-12 hour interval with hardware mutex locks"
    ]
  },
  {
    version: "v2.3.0",
    date: "July 2026",
    title: "Quartermaster Free-First OpenRouter Routing & Alfred Voice Hardening",
    badge: "Optimization",
    highlights: [
      "Deployed Quartermaster smart model steward with 14 verified-free model assignments",
      "Added 12-tool Alfred supervisor agent with persistent identity & Durable Knowledge Vault memory",
      "Fixed historical memory weather-contamination in context injection layer",
      "Unified 4-feed Oracle intelligence scanner with citation scoring"
    ]
  },
  {
    version: "v2.1.0",
    date: "June 2026",
    title: "4K NVENC Lanczos Video Processing Engine",
    badge: "Major Release",
    highlights: [
      "GPU-accelerated 2160x3840 vertical video compilation at 8.2x real-time speed",
      "Implemented Zero-Darkening rule (purged destructive contrast curves & forced filters)",
      "Automated 2.5s high-energy hook prepend system",
      "EXIF metadata purge pipeline (-map_metadata -1) eliminating platform shadowbans"
    ]
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "Community" | "Technical" | "Strategy" | "Pricing";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the Novara Media / SMP Skool Community?",
    answer: "It is an elite engineering and creator academy where we teach you how to build, deploy, and monetize autonomous AI video and media systems. You get direct access to our full Python source code, 150+ prompt vaults, FFmpeg render scripts, weekly live masterclasses, and an inner circle of high-level operators.",
    category: "Community"
  },
  {
    question: "Why does the Novara Sovereign Engine NOT look like generic AI video?",
    answer: "Most AI video tools generate low-resolution, robotic, heavily filtered clips that immediately scream 'cheap AI' and get flagged by social algorithms. The SMP system uses raw, high-resolution creator footage, preserves natural 4K color fidelity, strips device metadata, and applies neurological progressive reveal typography that feels authentic, luxurious, and human.",
    category: "Strategy"
  },
  {
    question: "Do I need coding experience to use the OS and join the community?",
    answer: "Not necessarily. While the OS has powerful Python and FFmpeg engineering under the hood, our Skool classroom walks you through step-by-step installation with copy-paste configs, Docker setups, and pre-built scripts. Whether you are a total beginner creator or a senior engineer, the modules are designed for rapid deployment.",
    category: "Technical"
  },
  {
    question: "How does the Sovereign Inbound DM Protocol bridge page integration work?",
    answer: "When your video posts go live, viewers are invited to comment a trigger keyword (e.g. 'BLUEPRINT' or 'VIP'). The Sovereign Inbound DM Protocol engine instantly detects the comment, fires an automated public confirmation, and sends a private 1-on-1 DM with a personalized tracked link to your bridge page (like our private tracked bridge link). This generates an unfair 12x higher click-through rate compared to standard link-in-bio setups.",
    category: "Technical"
  },
  {
    question: "How does the spin-off community differ from Novara's B2B services?",
    answer: "Novara Media (novaramedia.store) is our high-ticket agency where we build and run custom enterprise AI solutions for businesses. This platform and Skool community is our educational and open architecture ecosystem - built for individual creators, builders, agencies, and operators who want to learn how we did it, run the OS themselves, and master sovereign AI.",
    category: "Strategy"
  }
];
