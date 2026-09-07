export interface AgentModel {
  id: string;
  name: string;
  codename: string;
  role: string;
  themeColor: string;
  borderColor: string;
  glowColor: string;
  badge: string;
  iconName: string;
  description: string;
  primaryDirective: string;
  capabilities: string[];
  systemPromptSnippet: string;
  activeStatus: "Operational" | "Watching" | "Syncing" | "Standby";
  mockConsoleCommand: string;
  mockConsoleOutput: string[];
}

export const AGENT_CONSTELLATION: AgentModel[] = [
  {
    id: "hermes",
    name: "HERMES",
    codename: "The Orchestrator",
    role: "Autonomous Multi-Agent Scheduler & Dispatch Matrix",
    themeColor: "#F59E0B",
    borderColor: "rgba(245, 158, 11, 0.4)",
    glowColor: "rgba(245, 158, 11, 0.2)",
    badge: "ORCHESTRATE",
    iconName: "Compass",
    description: "The supreme command and planning agent. Coordinates cron pipelines, balances LLM compute budgets, executes durable Durable Knowledge Vault loops, and routes workloads.",
    primaryDirective: "Maintain 100% pipeline uptime and coordinate agent handoffs with zero human latency.",
    capabilities: [
      "Dynamic cron schedule enforcement",
      "Quartermaster Cost-Neutral Smart Model Routing",
      "2-Way Durable Knowledge Vault Sync",
      "Multi-agent task delegation & arbitration"
    ],
    systemPromptSnippet: `You are HERMES, the master autonomous orchestrator for Novara Media & Sovereign Media Production.
Your mandate is to maintain continuous pipeline health, coordinate subordinate agent execution, optimize model spend, and project durable operational state to the durable knowledge vault.`,
    activeStatus: "Operational",
    mockConsoleCommand: "hermes status --verbose",
    mockConsoleOutput: [
      "[HERMES-CORE] Status: OPERATIONAL | Uptime: 99.98%",
      "[CRON-AUDIT] 6 Active Cron Lanes | Next Execution in 02h 14m",
      "[QUARTERMASTER] Routing: Cost-Neutral Smart Router (Verified Free-Tier)",
      "[SYNC] Durable Knowledge Loop synced 12m ago -> C:/Durable Knowledge Vault/Knowledge/"
    ]
  },
  {
    id: "openclaw",
    name: "OPENCLAW",
    codename: "The Automator",
    role: "Browser RPA & Social Interaction Execution Engine",
    themeColor: "#06B6D4",
    borderColor: "rgba(6, 182, 212, 0.4)",
    glowColor: "rgba(6, 182, 212, 0.2)",
    badge: "AUTOMATE",
    iconName: "Cpu",
    description: "Controls headless browser profiles, automated platform interactions, rate-limit safeguards, and secure anti-detect posting protocols.",
    primaryDirective: "Execute automated browser and platform actions while mimicking natural human interaction curves.",
    capabilities: [
      "Multi-profile anti-detect isolation",
      "Automated video upload and caption farming",
      "8-12 hour post pacing & mutex locks",
      "Interactive session recovery & heartbeat checks"
    ],
    systemPromptSnippet: `You are OPENCLAW, the robotic process automation engine.
You execute browser sessions with natural jitter, manage profile isolation, verify upload status, and enforce strict anti-flood pacing across creator accounts.`,
    activeStatus: "Operational",
    mockConsoleCommand: "openclaw queue --profile @uknownbin",
    mockConsoleOutput: [
      "[OPENCLAW] Profile @uknownbin: AUTHENTICATED",
      "[QUEUE-CHECK] Ready Posts: 4 | Min Threshold: 3",
      "[REPLENISH] Auto-Replenisher: STANDBY (Queue healthy)",
      "[NEXT-POST] Scheduled for 18:40 UTC | TOS Pacing: LOCKED (1 post / 8h)"
    ]
  },
  {
    id: "antigravity",
    name: "ANTIGRAVITY",
    codename: "The Reasoner",
    role: "Deep Architectural Reasoning & System Architecture",
    themeColor: "#8B5CF6",
    borderColor: "rgba(139, 92, 246, 0.4)",
    glowColor: "rgba(139, 92, 246, 0.2)",
    badge: "REASON",
    iconName: "BrainCircuit",
    description: "Google DeepMind-grade advanced coding and architectural reasoning assistant. Designs clean refactors, builds tools, and solves complex logic bottlenecks.",
    primaryDirective: "Architect scalable, bulletproof software and provide deep cognitive problem solving across the stack.",
    capabilities: [
      "Full-stack web & backend architecture",
      "Subagent invocation and delegation",
      "Algorithmic pipeline refactoring",
      "Production-grade tool definition & repair"
    ],
    systemPromptSnippet: `You are ANTIGRAVITY, the premier AI coding and architecture specialist.
You solve difficult engineering bottlenecks, refactor complex pipelines with rigorous elegance, and enforce strict documentation standards.`,
    activeStatus: "Operational",
    mockConsoleCommand: "antigravity plan --task 'scale-smp-v3'",
    mockConsoleOutput: [
      "[ANTIGRAVITY] Analyzing SMP architecture dependencies...",
      "[RESEARCH] Found 6 pipeline nodes | SQLite WAL mode verified",
      "[PLAN] Generated multi-agent scaling blueprint (12 components)",
      "[RESULT] Ready for execution with zero breaking changes"
    ]
  },
  {
    id: "codex",
    name: "CODEX",
    codename: "The Builder",
    role: "High-Speed Code Generation & Test Compilation",
    themeColor: "#10B981",
    borderColor: "rgba(16, 185, 129, 0.4)",
    glowColor: "rgba(16, 185, 129, 0.2)",
    badge: "BUILD",
    iconName: "Terminal",
    description: "High-velocity implementation engine. Rapidly generates production modules, compiles scripts, creates unit tests, and formats API schemas.",
    primaryDirective: "Turn high-level architecture into high-performance, bug-free production code at maximum velocity.",
    capabilities: [
      "FastAPI endpoint generation",
      "FFmpeg complex filter scripting",
      "Automated unit testing & verification",
      "JSON schema & API contract validation"
    ],
    systemPromptSnippet: `You are CODEX, the precision software builder.
You write clean, modular, and performant code across Python, TypeScript, and shell scripts with 100% syntax precision.`,
    activeStatus: "Operational",
    mockConsoleCommand: "codex build --target smp-engine",
    mockConsoleOutput: [
      "[CODEX] Compiling video processing routines...",
      "[FFMPEG] Lanczos 2160x3840 filter graph validated",
      "[TESTS] 28/28 Unit tests passing (0.42s execution time)",
      "[BUILD] Dist bundle index-Bw7vvKyu.js compiled successfully"
    ]
  },
  {
    id: "alfred",
    name: "ALFRED",
    codename: "The Voice Supervisor",
    role: "Operator-Grade Voice Controller & 12-Tool OS Supervisor",
    themeColor: "#F43F5E",
    borderColor: "rgba(244, 63, 94, 0.4)",
    glowColor: "rgba(244, 63, 94, 0.2)",
    badge: "SUPERVISE",
    iconName: "Mic",
    description: "Voice-first real-time agent with 12 registered tools. Supervises the entire OS, handles morning executive briefings, and executes system actions.",
    primaryDirective: "Serve as the high-trust voice and terminal cockpit for the human creator.",
    capabilities: [
      "Real-time voice-to-voice & ElevenLabs integration",
      "12-Tool system control (ledger, scheduler, logs, bash)",
      "Daily executive summary & risk briefings",
      "Confirmation-gated destructive action safeguards"
    ],
    systemPromptSnippet: `You are ALFRED, the personal operator-grade control agent for Novara Media.
You have 12 registered operational tools. You deliver concise, high-signal briefings and require human confirmation before running destructive actions.`,
    activeStatus: "Watching",
    mockConsoleCommand: "alfred briefing --daily",
    mockConsoleOutput: [
      "[ALFRED] Good morning, Operator.",
      "[OVERVIEW] 10 Videos rendered overnight in 4K NVENC.",
      "[LEADS] Sovereign Inbound DM Protocol delivered 142 DMs | 97 clicks to our private tracked bridge link.",
      "[STATUS] Systems nominal. All 6 agents running at 100% capacity."
    ]
  },
  {
    id: "oracle",
    name: "ORACLE",
    codename: "The Intelligence Scanner",
    role: "Market Trend Hunter & Viral Signal Analysis Engine",
    themeColor: "#3B82F6",
    borderColor: "rgba(59, 130, 246, 0.4)",
    glowColor: "rgba(59, 130, 246, 0.2)",
    badge: "RESEARCH",
    iconName: "Radio",
    description: "Automated market intelligence scanner. Ingests RSS feeds, tracks emerging AI tools and viral hooks, and generates data-backed content angles.",
    primaryDirective: "Identify high-velocity market trends and viral content signals before they saturate the mainstream.",
    capabilities: [
      "Multi-source RSS & cited research ingestion",
      "Deterministic hook scoring & angle generation",
      "Automated article, draft & video outline synthesis",
      "Immutable SQLite draft history & PDF export"
    ],
    systemPromptSnippet: `You are ORACLE, the market intelligence engine.
You analyze real-world technological and cultural signals, synthesize viral content angles, and ground every draft in verified citations.`,
    activeStatus: "Operational",
    mockConsoleCommand: "oracle scan --category 'ai-agents'",
    mockConsoleOutput: [
      "[ORACLE] Scanning 4 Curated Intelligence Feeds...",
      "[SIGNALS] Ingested 78 raw signals | 12 high-velocity trends identified",
      "[ANGLE-1] 'Why 99% of Agency AI Videos Fail (And How to Fix It)'",
      "[PROJECTION] Drafted outline v1 -> projected to Durable Knowledge Vault knowledge vault"
    ]
  }
];
