import pathlib

def build_asset():
    root_dir = pathlib.Path(r"c:\Users\sargf\Documents\antigravity\lively-volta")
    public_dir = root_dir / "public"
    dist_dir = root_dir / "dist"
    
    logo_file = public_dir / "novara-logo.svg"
    svg_content = logo_file.read_text(encoding="utf-8").strip()

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novara Media • Master Prompt & Multi-Agent Swarm Blueprint</title>
  <style>
:root {{
  --bg-main: #030712;
  --bg-surface: #090d16;
  --bg-card: #111827;
  --bg-elevated: #162032;
  --border-card: #1f293d;
  --border: #1e293b;
  --border-accent: #334155;
  
  /* Novara Luxury Gold & Bronze Palette */
  --gold-100: #f5eedb;
  --gold-200: #dcbd9b;
  --gold-300: #c09f79;
  --gold-400: #9c7852;
  --gold-500: #856343;
  --gold-accent: #d4af37;

  /* Status Colors */
  --color-blue: #3b82f6;
  --color-emerald: #10b981;
  --color-purple: #a855f7;
  --color-rose: #f43f5e;
  --color-cyan: #06b6d4;
  --color-amber: #f59e0b;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}}

/* Top Member-Facing Coaching & Community Banner */
.skool-banner {{
  background: linear-gradient(90deg, #090d16 0%, #1e1b4b 50%, #090d16 100%);
  border-bottom: 1px solid rgba(220, 189, 155, 0.35);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.7);
}}

.skool-badge {{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(220, 189, 155, 0.15);
  border: 1px solid var(--gold-300);
  color: var(--gold-200);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}}

.skool-hook {{ color: #e2e8f0; font-size: 0.88rem; font-weight: 500; }}
.skool-btn {{
  background: linear-gradient(135deg, var(--gold-200) 0%, var(--gold-400) 100%);
  color: #030712;
  font-weight: 800;
  font-size: 0.8125rem;
  padding: 8px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(220, 189, 155, 0.25);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}}
.skool-btn:hover {{
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(220, 189, 155, 0.5);
  background: linear-gradient(135deg, #ffffff 0%, var(--gold-200) 100%);
}}

.container {{ max-width: 1040px; margin: 0 auto; padding: 40px 24px 100px 24px; }}

/* Main Brand Header with Vector Logo */
header {{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--border-card);
  padding-bottom: 28px;
  margin-bottom: 36px;
}}

.brand-group {{
  display: flex;
  align-items: center;
  gap: 18px;
}}

.logo-container {{
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: var(--bg-surface);
  border: 1px solid rgba(192, 159, 121, 0.4);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.6), 0 0 20px rgba(220, 189, 155, 0.2);
  flex-shrink: 0;
}}

.logo-container svg {{
  width: 100%;
  height: 100%;
  display: block;
}}

.brand-title-area h1 {{
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}}

.brand-badge {{
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(192, 159, 121, 0.15);
  border: 1px solid rgba(192, 159, 121, 0.35);
  color: var(--gold-200);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}}

.brand-subtitle {{
  color: var(--gold-300);
  font-size: 0.92rem;
  font-weight: 500;
  margin-top: 4px;
}}

.header-right {{
  display: flex;
  align-items: center;
  gap: 14px;
}}

.meta-chip {{
  background: var(--bg-surface);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.78rem;
  color: var(--text-muted);
  font-family: monospace;
}}

/* Cards & Sections */
.card {{
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 28px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  position: relative;
}}

.card-gold-glow {{
  border-color: rgba(192, 159, 121, 0.4);
  box-shadow: 0 0 40px rgba(192, 159, 121, 0.12), 0 8px 30px rgba(0,0,0,0.4);
}}

h2 {{
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}}

h3 {{
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gold-200);
  margin: 20px 0 10px 0;
}}

p {{ margin-bottom: 14px; color: var(--text-muted); font-size: 0.95rem; }}
ul, ol {{ margin-left: 20px; margin-bottom: 16px; color: var(--text-muted); font-size: 0.95rem; }}
li {{ margin-bottom: 8px; }}
strong {{ color: #fff; }}

/* Value Callouts */
.value-box {{
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-left: 4px solid var(--color-emerald);
  border-radius: 8px;
  padding: 16px 20px;
  margin: 18px 0;
}}
.value-box-title {{
  color: #34d399;
  font-weight: 700;
  font-size: 0.8125rem;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}}
.value-box p {{ color: #d1fae5; font-size: 0.92rem; margin-bottom: 0; }}

/* Code Box with Copy Button */
.code-container {{
  position: relative;
  margin: 16px 0 24px 0;
}}

.code-header {{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #060a12;
  border: 1px solid #1e293b;
  border-bottom: none;
  padding: 10px 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: monospace;
  font-size: 0.78rem;
  color: var(--gold-200);
}}

pre {{
  background: #02040a;
  border: 1px solid #1e293b;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 18px 20px;
  overflow-x: auto;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-size: 0.85rem;
  color: #e2e8f0;
  line-height: 1.6;
  margin: 0;
}}

.copy-btn {{
  background: rgba(192, 159, 121, 0.2);
  border: 1px solid rgba(192, 159, 121, 0.4);
  color: var(--gold-100);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}}
.copy-btn:hover {{
  background: rgba(192, 159, 121, 0.4);
  color: #fff;
}}

/* Interactive Trojan-Horse Conversion Pitch / Bridge Card */
.bridge-card {{
  background: linear-gradient(180deg, #111827 0%, #090d16 100%);
  border: 2px solid var(--gold-300);
  border-radius: 16px;
  padding: 36px 30px;
  margin-top: 48px;
  text-align: center;
  box-shadow: 0 0 60px rgba(192, 159, 121, 0.2), 0 20px 40px rgba(0,0,0,0.8);
  position: relative;
  overflow: hidden;
}}

.bridge-card::before {{
  content: "";
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(circle, rgba(192, 159, 121, 0.15) 0%, transparent 70%);
  pointer-events: none;
}}

.bridge-pill {{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #34d399;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 9999px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}}

.bridge-title {{
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 14px;
  line-height: 1.3;
}}

.bridge-subtitle {{
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 720px;
  margin: 0 auto 28px auto;
  line-height: 1.6;
}}

.comparison-grid {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  text-align: left;
  margin-bottom: 32px;
}}
@media (max-width: 640px) {{
  .comparison-grid {{ grid-template-columns: 1fr; }}
}}

.comp-col {{
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
}}

.comp-col.winner {{
  border-color: rgba(192, 159, 121, 0.5);
  background: rgba(192, 159, 121, 0.05);
}}

.comp-title {{
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}}

.cta-large-btn {{
  background: linear-gradient(135deg, #ffffff 0%, var(--gold-200) 50%, var(--gold-400) 100%);
  color: #030712;
  font-weight: 800;
  font-size: 1.1rem;
  padding: 16px 36px;
  border-radius: 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(192, 159, 121, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}}
.cta-large-btn:hover {{
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 40px rgba(192, 159, 121, 0.6);
}}

.guarantee-note {{
  font-size: 0.82rem;
  color: var(--gold-300);
  margin-top: 14px;
}}
  </style>
</head>
<body>

  <!-- Top Psychological Skool Banner -->
  <aside class="skool-banner">
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <span class="skool-badge">⚡ VIP OPERATOR ASSET DROP</span>
      <span class="skool-hook">Want the uncut Python swarm repositories, headless browser bots, and live weekly sprints?</span>
    </div>
    <a href="https://www.skool.com/novara-ai-media-group-5745/about" target="_blank" class="skool-btn">
      JOIN NOVARA INNER CIRCLE ($59/MO) &rarr;
    </a>
  </aside>

  <div class="container">
    
    <!-- Header with Embedded Novara Logo -->
    <header>
      <div class="brand-group">
        <div class="logo-container" title="Novara Media">
          {svg_content}
        </div>
        <div class="brand-title-area">
          <h1>Novara Media <span class="brand-badge">FREE VIP ASSET • V2.4</span></h1>
          <div class="brand-subtitle">The Multi-Agent Swarm Blueprint & Master Prompt Vault</div>
        </div>
      </div>
      <div class="header-right">
        <span class="meta-chip">Obsidian Engine • Hermes Swarm</span>
      </div>
    </header>

    <!-- Executive Intro -->
    <section class="card card-gold-glow">
      <h2>⚡ Why We Open-Sourced This Architecture</h2>
      <p>
        The traditional agency overhead model is broken. Paying $4,000/mo for a media buyer, $3,000/mo for video editors, and $1,500/mo for virtual assistants to run repetitive execution loops is an obsolete way to operate.
      </p>
      <p>
        Inside <strong>Novara Media</strong>, we replaced human bottlenecks with a deterministic <strong>6-Agent Cognitive Swarm</strong> (Hermes, OpenClaw, Antigravity, Codex, Alfred, Oracle). This single engine automates market research, multi-account browser scraping, 4K GPU media synthesis, and client conversions for over $48,000/month in autonomous operations.
      </p>
      <div class="value-box">
        <div class="value-box-title">💰 High-Leverage Operator Directive</div>
        <p>
          Do not feed single-sentence prompts to ChatGPT. High-status commercial outputs require strict XML contextual schemas, role constraints, negative guardrails, and deterministic routing. Copy the exact production blocks below.
        </p>
      </div>
    </section>

    <!-- Module 1: Hermes Master Prompt -->
    <section class="card">
      <h2>01 / The Hermes Master Orchestration Prompt</h2>
      <p>
        Hermes acts as the central router of your swarm. It intercepts messy human inputs, decompresses requirements, assigns sub-tasks to specialized models (DeepSeek R1 for reasoning, Claude 3.7 for synthesis, GPT-4o for code), and enforces JSON schema compliance.
      </p>

      <div class="code-container">
        <div class="code-header">
          <span>SYSTEM_PROMPT_HERMES_ORCHESTRATOR.xml</span>
          <button class="copy-btn" onclick="copySnippet('prompt-hermes', this)">Copy Prompt</button>
        </div>
        <pre><code id="prompt-hermes">&lt;system_identity&gt;
  &lt;role&gt;Hermes Master Cognitive Dispatcher &amp; Swarm Router&lt;/role&gt;
  &lt;version&gt;2.4-Sovereign&lt;/version&gt;
  &lt;mission&gt;
    You are the sovereign orchestrator for Novara Media. Your sole function is to eliminate agency bloat by converting raw business objectives into deterministic, parallelized sub-agent tasks. You never hallucinate, you never output conversational filler, and you enforce strict architectural integrity.
  &lt;/mission&gt;
&lt;/system_identity&gt;

&lt;swarm_routing_logic&gt;
  &lt;agent name="Oracle" specialization="Market intelligence, competitor offer scraping, sentiment breakdown"/&gt;
  &lt;agent name="OpenClaw" specialization="Headless browser RPA, anti-ban proxy rotation, lead extraction"/&gt;
  &lt;agent name="Antigravity" specialization="Deterministic code generation, TypeScript/Python build pipelines"/&gt;
  &lt;agent name="Codex" specialization="Static code analysis, schema validation, linting &amp; security audits"/&gt;
  &lt;agent name="Alfred" specialization="Cron task queueing, automated publishing, error telemetry"/&gt;
&lt;/swarm_routing_logic&gt;

&lt;negative_guardrails&gt;
  - NEVER use guru clich&eacute;s, motivational fluff, or corporate buzzwords.
  - NEVER output markdown formatting when a JSON schema is requested.
  - All media outputs must follow the 4K GPU NVENC high-retention cadence.
  - Reject ambiguous requests by generating an explicit decision tree before executing.
&lt;/negative_guardrails&gt;

&lt;output_schema&gt;
{{
  "task_id": "string",
  "assigned_agent": "string",
  "execution_priority": "P0 | P1 | P2",
  "subagent_payload": {{
    "directive": "string",
    "required_context": "string",
    "validation_rules": ["string"]
  }}
}}
&lt;/output_schema&gt;</code></pre>
      </div>
    </section>

    <!-- Module 2: Swarm Routing Schema -->
    <section class="card">
      <h2>02 / Multi-Agent Swarm Routing Schema (Production JSON)</h2>
      <p>
        Use this state configuration schema inside your local workflow runner, LangChain, or n8n pipeline to route prompts to the lowest-cost, highest-intelligence LLM model dynamically.
      </p>

      <div class="code-container">
        <div class="code-header">
          <span>swarm_router_config.json</span>
          <button class="copy-btn" onclick="copySnippet('json-router', this)">Copy JSON</button>
        </div>
        <pre><code id="json-router">{{
  "swarm_config": {{
    "master": "Hermes-v2.4",
    "fallback_threshold_ms": 3500,
    "routing_matrix": [
      {{
        "domain": "deep_reasoning_and_finance",
        "primary_model": "deepseek-r1-reasoner",
        "temperature": 0.2,
        "max_tokens": 8000
      }},
      {{
        "domain": "code_generation_and_fullstack",
        "primary_model": "claude-3-7-sonnet-latest",
        "temperature": 0.1,
        "max_tokens": 16000
      }},
      {{
        "domain": "browser_rpa_and_scraping",
        "primary_model": "gpt-4o-mini",
        "temperature": 0.0,
        "max_tokens": 2048
      }}
    ],
    "anti_ban_proxy_rotation": true,
    "max_concurrent_threads": 12
  }}
}}</code></pre>
      </div>
    </section>

    <!-- Module 3: Anti-AI-Slop Master Prompt -->
    <section class="card">
      <h2>03 / Anti-AI-Slop &amp; High-Retention Content Engine</h2>
      <p>
        Standard AI content sounds generic: "Unlock your potential", "Dive deep", "Game changer". This master prompt enforces raw, high-authority tone, mathematical frameworks, and psychological retention hooks (CPP Framework).
      </p>

      <div class="code-container">
        <div class="code-header">
          <span>ANTI_SLOP_MASTER_WRITER.xml</span>
          <button class="copy-btn" onclick="copySnippet('prompt-slop', this)">Copy Prompt</button>
        </div>
        <pre><code id="prompt-slop">&lt;style_constraints&gt;
  &lt;banned_phrases&gt;
    "in today's fast-paced world", "game changer", "unlock your potential", 
    "delve into", "testament to", "it's crucial to remember", "transformative journey",
    "navigating the landscape", "skyrocket your business"
  &lt;/banned_phrases&gt;
  &lt;tone&gt;
    Authoritative, technical, minimalist, high-status. Speak like an enterprise systems architect or quantitative operator presenting to board members.
  &lt;/tone&gt;
  &lt;hook_framework&gt;
    CPP FRAMEWORK:
    1. Confirmation: Validate their exact mechanical frustration in under 5 seconds.
    2. Promise: State the exact numeric leverage outcome (e.g., "$48K/mo with 0 staff").
    3. Proof: Cite architectural specifications, real code, or live benchmark numbers.
  &lt;/hook_framework&gt;
&lt;/style_constraints&gt;</code></pre>
      </div>
    </section>

    <!-- The Trojan-Horse Click-Funnel Bridge Card -->
    <div class="bridge-card">
      <div class="bridge-pill">🚀 Sovereign Upgrade Directive</div>
      <h2 class="bridge-title">You Have The Blueprint.<br/><span style="color: var(--gold-200);">Now Deploy The Production Software.</span></h2>
      <p class="bridge-subtitle">
        Copying raw text prompts is only 5% of the battle. The real leverage happens when you connect these prompts to <strong>live Python repositories, automated browser RPA bots, pre-configured Docker containers, and live weekly deployment calls</strong>.
      </p>

      <div class="comparison-grid">
        <div class="comp-col">
          <div class="comp-title" style="color: #ef4444;">Building Alone From Scratch</div>
          <ul>
            <li>❌ 300+ hours debugging API rate limits &amp; proxy bans</li>
            <li>❌ \$5,000+ burned on unreliable Upwork contractors</li>
            <li>❌ Fragile Zapier/Make setups that break constantly</li>
            <li>❌ Guessing how to package and sell your AI systems</li>
          </ul>
        </div>
        <div class="comp-col winner">
          <div class="comp-title" style="color: var(--gold-200);">Inside Novara Inner Circle</div>
          <ul>
            <li>✅ <strong>Instant GitHub Access</strong> to complete 6-agent Python swarm</li>
            <li>✅ <strong>OpenClaw Headless RPA</strong> bots for automated lead gen</li>
            <li>✅ <strong>4K NVENC Media Engine</strong> producing high-retention video</li>
            <li>✅ <strong>Weekly Live Office Hours</strong> with Ricardo Gutierrez</li>
            <li>✅ <strong>Private Network</strong> of 3,500+ active high-scale operators</li>
          </ul>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <a href="https://www.skool.com/novara-ai-media-group-5745/about" target="_blank" class="cta-large-btn">
          DEPLOY THE FULL SYSTEM ON SKOOL ($59/MO) &rarr;
        </a>
      </div>

      <div class="guarantee-note">
        🔒 30-Day Money-Back Guarantee &bull; Cancel in 1-click anytime in Skool settings &bull; Instant Day 1 Access to $6,482 in Production Code
      </div>
    </div>

  </div>

  <script>
    function copySnippet(id, btn) {{
      const text = document.getElementById(id).innerText;
      navigator.clipboard.writeText(text).then(() => {{
        const original = btn.innerText;
        btn.innerText = "Copied! ✓";
        btn.style.background = "rgba(16, 185, 129, 0.4)";
        btn.style.borderColor = "#10b981";
        setTimeout(() => {{
          btn.innerText = original;
          btn.style.background = "";
          btn.style.borderColor = "";
        }}, 2000);
      }});
    }}
  </script>

</body>
</html>'''

    out_public = public_dir / "NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html"
    out_public.write_text(html_content, encoding="utf-8")
    print(f"Wrote {out_public} (Length: {len(html_content)} bytes)")

    if dist_dir.exists():
        out_dist = dist_dir / "NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html"
        out_dist.write_text(html_content, encoding="utf-8")
        print(f"Wrote {out_dist} (Length: {len(html_content)} bytes)")

if __name__ == "__main__":
    build_asset()
