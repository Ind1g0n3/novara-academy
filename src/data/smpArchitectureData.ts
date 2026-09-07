export interface SMPStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  category: "Intake" | "Intelligence" | "Rendering" | "Orchestration" | "Conversion" | "Delivery";
  status: "active" | "production" | "accelerated";
  technicalTitle: string;
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  codeSnippet?: {
    language: string;
    code: string;
    caption: string;
  };
  commercialLeverage: {
    headline: string;
    manualFailureReason: string;
    sovereignAdvantage: string;
    roiImpact: string;
  };
  keyMetrics: {
    label: string;
    stat: string;
  }[];
}

export const SMP_ARCHITECTURE_STAGES: SMPStage[] = [
  {
    id: "creator-vault",
    stepNumber: "01",
    title: "Creator Vault & Ingestion",
    subtitle: "High-Resolution Raw Asset Ingestion & Metadata Sanitization",
    category: "Intake",
    status: "production",
    technicalTitle: "Hierarchical Asset Store & EXIF Stripper",
    technicalSpecs: [
      { label: "Vault Architecture", value: "01_Creators_Vault/{creator}/video/{video_id}.mp4" },
      { label: "Hook Sub-Vault", value: "01_Creators_Vault/{creator}/hooks/hook_{video_id}.mp4" },
      { label: "EXIF Cleansing", value: "-map_metadata -1 -bitexact (Clean Platform Fingerprints)" },
      { label: "Database Ledger", value: "SQLite WAL Mode (ledger.db) with Auto-Indexing" }
    ],
    codeSnippet: {
      language: "bash",
      caption: "GPU EXIF Scrubbing & Master Hook Ingestion Pipeline",
      code: `# Automated Metadata Scrubbing & Normalized Pre-check
# Sovereign Sanitization Pipeline "raw_source.mp4" -map_metadata -1 -c:v copy -c:a copy \\
  -metadata title="" -metadata author="" "sanitized_source.mp4"`
    },
    commercialLeverage: {
      headline: "Eliminate Cross-Platform Shadowbans & Multi-Account Flagging",
      manualFailureReason: "Traditional editors drag raw clips directly into TikTok/Reels, uploading invisible EXIF tags and recycled device hashes that trigger instant shadowbans.",
      sovereignAdvantage: "The SMP intake automatically purges every hardware fingerprint, maps unique audio tracks, and indexes 330+ raw footage assets into dedicated creator ledgers.",
      roiImpact: "100% account safety rating across 10+ concurrent distributed creator pages."
    },
    keyMetrics: [
      { label: "Vault Capacity", stat: "340+ Master Clips" },
      { label: "Sanitization Time", stat: "< 0.8s / Asset" },
      { label: "Fingerprint Rejection", stat: "0 Platform Bans" }
    ]
  },
  {
    id: "constellation-core",
    stepNumber: "02",
    title: "Multi-Agent Constellation",
    subtitle: "Autonomous Distributed Reasoning & Supervisor Engine",
    category: "Intelligence",
    status: "production",
    technicalTitle: "Hermes Core + Multi-Agent Dispatch Matrix",
    technicalSpecs: [
      { label: "Primary Orchestrator", value: "Hermes Agent Framework (Local + Smart-Money Fast Router)" },
      { label: "Supervisor Agent", value: "Alfred 12-Tool Voice/Terminal Supervisor (agents/Hermes Alfred/)" },
      { label: "RPA Automation", value: "OpenClaw Browser Automation Engine" },
      { label: "Code & Build System", value: "Antigravity Reasoner + Codex Builder" },
      { label: "Knowledge Vault", value: "Durable 2-Way Knowledge Synchronization (Durable Loops)" }
    ],
    codeSnippet: {
      language: "python",
      caption: "Alfred Operator Multi-Runtime Tool Dispatcher",
      code: `@app.post("/api/alfred/command")
async def run_alfred_command(req: AlfredCommandRequest):
    # Context injection with historical memory filtration
    mem_context = build_memory_context(req.mode)
    response = await dispatch_agent_pipeline(
        runtimes=["hermes", "openclaw", "antigravity"],
        prompt=req.message,
        context=mem_context
    )
    return {"status": "dispatched", "result": response}`
    },
    commercialLeverage: {
      headline: "Zero-Latency Autonomous Coordination Without Human Bottlenecks",
      manualFailureReason: "Agency teams waste 80% of daily payroll on Slack back-and-forth, manual task assignment, and missed handoffs between scriptwriters and video editors.",
      sovereignAdvantage: "The Multi-Agent Constellation routes tasks dynamically: Hermes plans the schedule, Oracle identifies viral hooks, and OpenClaw monitors the queues without human intervention.",
      roiImpact: "Replaces an 8-person content agency payroll ($24,000/mo) with a single operator runtime."
    },
    keyMetrics: [
      { label: "Agent Handshakes", stat: "Real-Time < 15ms" },
      { label: "Model Optimization", stat: "Free-First Smart Fallback" },
      { label: "Memory Persistence", stat: "Durable 2-Way Sync" }
    ]
  },
  {
    id: "gpu-video-engine",
    stepNumber: "03",
    title: "4K GPU Video Processing Unit",
    subtitle: "Hardware-Accelerated Zero-Darkening 4K Rendering Engine",
    category: "Rendering",
    status: "accelerated",
    technicalTitle: "NVENC Lanczos 2160x3840 Ultra-HD Compiler",
    technicalSpecs: [
      { label: "Canvas Resolution", value: "4K Canvas (2160x3840 vertical) with setsar=1" },
      { label: "Scaling Filter", value: "scale=2160:3840:flags=lanczos+accurate_rnd" },
      { label: "Hardware Codec", value: "h264_nvenc (NVIDIA GPU Accelerated) / yuv420p" },
      { label: "Color Integrity", value: "Zero Artificial Darkening (No shadow crushing / filter='none')" },
      { label: "Dynamic Hook Intro", value: "2.5s High-Energy Prepend Hook (concat=n=2:v=1:a=0)" }
    ],
    codeSnippet: {
      language: "bash",
      caption: "Sovereign Master 4K Production Render Command",
      code: `# Sovereign GPU 4K Compiler -i "hook.mp4" -i "main.mp4" \\
  -filter_complex "[0:v]scale=2160:3840:flags=lanczos[v0];[1:v]scale=2160:3840:flags=lanczos[v1];[v0][v1]concat=n=2:v=1:a=0[outv]" \\
  -map "[outv]" -c:v h264_nvenc -preset p7 -b:v 25M -pix_fmt yuv420p -map_metadata -1 \\
  "master_4k_render.mp4"`
    },
    commercialLeverage: {
      headline: "Studio-Grade 4K Clarity That Out-Performs 99% of Mobile Uploads",
      manualFailureReason: "generic video tools and manual editors templates crush shadows, downscale to 1080p, and trigger heavy TikTok compression artifacts, killing algorithmic watch time.",
      sovereignAdvantage: "The SMP 4K engine uses hardware-level Lanczos scaling with dedicated GPU acceleration, maintaining crisp natural skin tones and pristine bitrates.",
      roiImpact: "3.4x higher average watch retention and premium algorithmic distribution."
    },
    keyMetrics: [
      { label: "Native Resolution", stat: "2160 x 3840 (4K)" },
      { label: "Render Velocity", stat: "8.2x Real-Time GPU" },
      { label: "Color Fidelity", stat: "100% True-Source" }
    ]
  },
  {
    id: "progressive-reveal-typography",
    stepNumber: "04",
    title: "Timed Progressive Reveal Engine",
    subtitle: "Precision Neurological Caption Timing Matrix",
    category: "Rendering",
    status: "production",
    technicalTitle: "5-Stage Retention Staggered Overlay System",
    technicalSpecs: [
      { label: "Stage 1 (0.0s - 2.5s)", value: "Headline Hook Reveal (High-Impact Curiosity Gap)" },
      { label: "Stage 2 (2.5s)", value: "Insight Pillar 1 (Authority Validation)" },
      { label: "Stage 3 (6.0s)", value: "Insight Pillar 2 (System Mechanism Breakdown)" },
      { label: "Stage 4 (9.5s)", value: "Insight Pillar 3 (Strategic Paradigm Shift)" },
      { label: "Stage 5 (13.0s - End)", value: "Closing Keyword CTA (Comments Farming Trigger)" }
    ],
    codeSnippet: {
      language: "typescript",
      caption: "SMP Progressive Reveal Timing Configuration",
      code: `export const TIMED_TYPOGRAPHY_WINDOWS = [
  { start: 0.0, end: 2.5, type: "HEADLINE_HOOK", font: "Aquire Bold" },
  { start: 2.5, end: 6.0, type: "INSIGHT_LINE_1", style: "Subtle Gold" },
  { start: 6.0, end: 9.5, type: "INSIGHT_LINE_2", style: "Clean Durable Knowledge Vault" },
  { start: 9.5, end: 13.0, type: "INSIGHT_LINE_3", style: "Accent Amber" },
  { start: 13.0, end: Infinity, type: "CONVERSION_CTA", style: "Pulse Glow" }
];`
    },
    commercialLeverage: {
      headline: "Engineered Neurological Retention Windows for 100% Completion Rates",
      manualFailureReason: "Static subtitles or erratic auto-captions overwhelm viewers' cognitive load, causing users to swipe away within the first 3 seconds.",
      sovereignAdvantage: "Information is released in synchronized dopamine micro-doses: Hook (0-2.5s) locks curiosity, Insights (2.5-9.5s) deliver dense value, and Closing CTA (13s) converts.",
      roiImpact: "Boosts average watch time past 85% - the critical threshold for viral platform distribution."
    },
    keyMetrics: [
      { label: "Hook Retention Window", stat: "2.5 Seconds" },
      { label: "Dopamine Pacing", stat: "3.5s Stagger" },
      { label: "CTA Conversion Rate", stat: "24.8% on Trigger" }
    ]
  },
  {
    id: "auto-replenishment-scheduler",
    stepNumber: "05",
    title: "Autonomous Queue Replenisher",
    subtitle: "Self-Healing 10-Post Batch Replenishment & Anti-Flood Guard",
    category: "Orchestration",
    status: "production",
    technicalTitle: "Dynamic Queue Monitor & Safe Pacing Arbiter",
    technicalSpecs: [
      { label: "Replenish Threshold", value: "Auto-Triggers when queue <= 3 posts" },
      { label: "Batch Injection", value: "Selects next 10 unposted videos from Creator Vault" },
      { label: "TOS Pacing Hard-Lock", value: "Strict 1 post every 8-12 hours per account profile" },
      { label: "Anti-Flood Lock", value: "Hardware mutex lock preventing rapid consecutive posts" },
      { label: "Ledger State Sync", value: "Live two-way verification with ledger.xlsx / ledger.db" }
    ],
    codeSnippet: {
      language: "python",
      caption: "Queue Auto-Replenisher & Anti-Flood Loop",
      code: `def check_and_replenish_queue(profile_name: str, min_threshold: int = 3):
    ready_count = db.get_scheduled_post_count(profile_name)
    if ready_count <= min_threshold:
        next_batch = vault.fetch_unposted(profile_name, limit=10)
        for post in next_batch:
            schedule_time = compute_next_interval(last_post_time, hours_spacing=8)
            queue.insert(post, schedule_time)
        logger.info(f"Replenished 10 master videos for @{profile_name}")`
    },
    commercialLeverage: {
      headline: "The Account Never Goes Dormant  -  Even While You Sleep for Weeks",
      manualFailureReason: "Manual creators burn out, miss posting windows, post irregularly, or spam 5 videos in 1 hour and get their accounts flagged as spam.",
      sovereignAdvantage: "The auto-replenishment engine constantly calculates buffer health. If your queue drops below 3 videos, it silently renders and schedules the next 10 master videos.",
      roiImpact: "365 days of uninterrupted, mathematically optimal posting consistency."
    },
    keyMetrics: [
      { label: "Posting Interval", stat: "8 - 12 Hours" },
      { label: "Buffer Safety", stat: "20 Posts Queued" },
      { label: "Uptime Reliability", stat: "99.98% Autonomous" }
    ]
  },
  {
    id: "inbound-dm-protocol-conversion-bridge",
    stepNumber: "06",
    title: "Sovereign Inbound DM Protocol & Conversion Funnel",
    subtitle: "Keyword-Triggered Private DMs & Bridge Page Distribution",
    category: "Conversion",
    status: "production",
    technicalTitle: "Campaign Engine: 'Black Vault VIP Access' + our private tracked bridge link",
    technicalSpecs: [
      { label: "Active Campaign", value: "Black Vault VIP Access (Sovereign Inbound DM Protocol)" },
      { label: "Trigger Keywords", value: "BLUEPRINT, GUIDE, ACCESS, SCALE, VIP, WYRZ, OS" },
      { label: "Bridge Destination", value: "https://our private tracked bridge link (Trusted Dark-Mode Link Hub)" },
      { label: "Shortlink Tracking", value: "/r/wyrz-vip and /r/vip" },
      { label: "Auto-DM Delivery", value: "Instant 1-to-1 personalized DM + public comment response" }
    ],
    codeSnippet: {
      language: "json",
      caption: "Sovereign Inbound DM Protocol Campaign Webhook Configuration",
      code: `{
  "campaign_name": "Black Vault VIP Access",
  "match_keywords": ["blueprint", "guide", "access", "scale", "vip", "os"],
  "dm_template": "Hey {first_name}! Here is your direct VIP access to the Sovereign OS blueprint: https://our private tracked bridge link/r/wyrz-vip",
  "public_reply": "Just dropped the blueprint in your DMs! Check your requests "
}`
    },
    commercialLeverage: {
      headline: "Convert Casual Viewers Directly into Community Members & Paid Clients",
      manualFailureReason: "Putting raw links in bio loses 95% of traffic. Manually replying to 500 DMs takes 6 hours a day and triggers Instagram messaging rate limits.",
      sovereignAdvantage: "Viewers comment a keyword (e.g. 'BLUEPRINT') to receive the exact asset. The Sovereign Inbound DM Protocol bridge instantly delivers tracked shortlinks, generating organic virality and inbound leads.",
      roiImpact: "Generated over $48,000 in agency retainers and thousands of Skool community members."
    },
    keyMetrics: [
      { label: "DM Delivery Time", stat: "< 4 Seconds" },
      { label: "Click-Through Rate", stat: "68.4% on DM" },
      { label: "Lead Capture Rate", stat: "12x Link-in-Bio" }
    ]
  }
];
