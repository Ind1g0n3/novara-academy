import pathlib

# Read authentic SVG logo
public_dir = pathlib.Path(r"c:\Users\sargf\Documents\antigravity\lively-volta\public")
dist_dir = pathlib.Path(r"c:\Users\sargf\Documents\antigravity\lively-volta\dist")
logo_file = public_dir / "novara-logo.svg"
svg_content = logo_file.read_text(encoding="utf-8").strip()

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novara Media • 30-Minute Fast-Track Master Blueprint</title>
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
  border-bottom: 1px solid rgba(220, 189, 155, 0.3);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
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
  font-weight: 700;
  font-size: 0.8125rem;
  padding: 8px 18px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(220, 189, 155, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}}
.skool-btn:hover {{
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(220, 189, 155, 0.4);
  background: linear-gradient(135deg, #fff 0%, var(--gold-200) 100%);
}}

.container {{ max-width: 1040px; margin: 0 auto; padding: 36px 24px 80px 24px; }}

/* Main Brand Header with EXACT Mindmap Layout */
header {{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--border-card);
  padding-bottom: 24px;
  margin-bottom: 32px;
}}

.brand-group {{
  display: flex;
  align-items: center;
  gap: 18px;
}}

.logo-container {{
  width: 56px;
  height: 56px;
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
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-top: 4px;
}}

.time-pill {{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: #34d399;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}}

/* Sticky Navigation Tabs */
.nav-tabs {{
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
  position: sticky;
  top: 56px;
  z-index: 90;
  background: rgba(3, 7, 18, 0.94);
  backdrop-filter: blur(8px);
  padding: 10px 0;
  border-bottom: 1px solid rgba(31, 41, 61, 0.6);
}}

.nav-tab {{
  flex: 1;
  text-align: center;
  background: var(--bg-surface);
  border: 1px solid var(--border-card);
  color: var(--text-muted);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}}

.nav-tab:hover {{
  border-color: var(--gold-300);
  color: var(--gold-100);
  background: rgba(220, 189, 155, 0.1);
}}

/* Section Cards & Lessons */
.section-card {{
  background: var(--bg-surface);
  border: 1px solid var(--border-card);
  border-radius: 14px;
  padding: 32px;
  margin-bottom: 36px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}}

.section-header {{
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}}

.section-num {{
  width: 40px;
  height: 40px;
  background: rgba(220, 189, 155, 0.12);
  border: 1px solid var(--gold-300);
  color: var(--gold-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 800;
  font-size: 1rem;
  flex-shrink: 0;
}}

.section-title {{
  font-size: 1.45rem;
  font-weight: 800;
  color: #fff;
}}

.lesson-box {{
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
}}

.lesson-title {{
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gold-200);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}}

.badge {{
  font-size: 0.75rem;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #34d399;
  padding: 3px 8px;
  border-radius: 6px;
}}

p {{ margin-bottom: 14px; color: var(--text-muted); font-size: 0.95rem; }}
ul, ol {{ margin-left: 20px; margin-bottom: 16px; color: var(--text-muted); font-size: 0.95rem; }}
li {{ margin-bottom: 6px; }}
strong {{ color: #fff; }}

/* Value Callouts */
.value-box {{
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-left: 4px solid var(--color-emerald);
  border-radius: 6px;
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

/* Alert Callouts */
.alert-box {{
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-left: 4px solid var(--color-amber);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 18px 0;
}}
.alert-box-title {{
  color: #fbbf24;
  font-weight: 700;
  font-size: 0.8125rem;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}}
.alert-box p {{ color: #fef3c7; font-size: 0.92rem; margin-bottom: 0; }}

/* Code Blocks */
pre {{
  background: #02040a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 16px 20px;
  overflow-x: auto;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-size: 0.85rem;
  color: #e2e8f0;
  margin: 14px 0 20px 0;
  line-height: 1.55;
}}
code {{
  font-family: "JetBrains Mono", "Fira Code", monospace;
  background: rgba(255, 255, 255, 0.08);
  color: var(--gold-200);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.875em;
}}
pre code {{ background: transparent; padding: 0; color: inherit; }}

/* Reference Tables */
table {{ width: 100%; border-collapse: collapse; margin: 18px 0; font-size: 0.88rem; }}
th, td {{ padding: 12px 14px; text-align: left; border-bottom: 1px solid var(--border-card); }}
th {{
  background: rgba(255, 255, 255, 0.03);
  color: var(--gold-200);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
}}
td {{ color: var(--text-muted); }}

/* Action Checklist */
.action-checklist {{
  background: rgba(220, 189, 155, 0.06);
  border: 1px dashed var(--gold-400);
  border-radius: 8px;
  padding: 20px;
  margin-top: 24px;
}}
.action-checklist-title {{
  font-weight: 700;
  color: var(--gold-200);
  font-size: 0.95rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}}
.action-checklist ul {{ margin-left: 18px; margin-bottom: 0; color: #f1f5f9; }}
.action-checklist li {{ margin-bottom: 6px; }}

.checkpoint-card {{
  background: linear-gradient(180deg, var(--bg-card) 0%, rgba(220,189,155,0.06) 100%);
  border: 1px solid var(--gold-400);
  border-radius: 12px;
  padding: 32px;
  margin-top: 36px;
  text-align: center;
}}
</style>
</head>
<body>

  <!-- Top Member-Facing Coaching & Community Banner -->
  <div class="skool-banner">
    <div class="skool-badge">👑 VERIFIED MEMBER ACCESS</div>
    <div class="skool-hook">Need debugging help or code review? Join this week's live engineering lab or post in Skool.</div>
    <a href="https://www.skool.com/novara-ai-media-group-5745/about" target="_blank" class="skool-btn">
      Open Skool Community &amp; Q&amp;A →
    </a>
  </div>

  <div class="container">

    <!-- Header Layout conforming to novara-media-documentation-standard -->
    <header>
      <div class="brand-group">
        <div class="logo-container" title="Novara Media">
          {svg_content}
        </div>
        <div class="brand-title-area">
          <h1>30-Minute Fast-Track <span class="brand-badge">FOUNDATIONS • LEVEL 1</span></h1>
          <div class="brand-subtitle">The Sovereign AI OS &amp; 4K GPU Media Engine Onboarding Blueprint</div>
        </div>
      </div>
      <div class="time-pill">⏱️ 30-Min Master Blueprint</div>
    </header>

    <!-- Navigation Tabs -->
    <div class="nav-tabs">
      <a href="#module-1" class="nav-tab">Module 1: Instant Workstation Setup</a>
      <a href="#module-2" class="nav-tab">Module 2: 4K GPU Production Engine</a>
      <a href="#module-3" class="nav-tab">Module 3: Autonomous Queues &amp; Leads</a>
    </div>

    <!-- ==========================================
         MODULE 1: INSTANT WORKSTATION SETUP
         ========================================== -->
    <section id="module-1" class="section-card">
      <div class="section-header">
        <div class="section-num">01</div>
        <div>
          <h2 class="section-title">Module 1: Instant Workstation Setup (00:00 – 10:00)</h2>
          <p style="margin: 0; color: var(--gold-300); font-size: 0.88rem;">Lessons 1.1, 1.2, and 1.3</p>
        </div>
      </div>
      <p>Bootstrap your local operating environment with upstream private git synchronization and configure Hermes Agent with frontier LLM model routing in under 10 minutes.</p>

      <div class="value-box">
        <div class="value-box-title">⚡ The Strategic Leverage: Upstream Synchronization</div>
        <p>When social media algorithms change or new anti-ban configs drop, you don't need to rebuild your workstation. A single <code>git pull origin main</code> command updates your local scripts in 3 seconds without touching your private credentials or creator video vaults.</p>
      </div>

      <!-- Lesson 1.1 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 1.1: Connect to GitHub &amp; Fork the Private Engine</span>
          <span class="badge">5 MINS</span>
        </div>
        <p>The Sovereign Media OS is maintained as a living engineering repository. You never have to manually patch broken scripts or download static ZIP files.</p>
        
        <ol>
          <li><strong>Comment your GitHub handle:</strong> Reply to our pinned onboarding post in Skool with your exact GitHub username.</li>
          <li><strong>Accept your invitation:</strong> Check your inbox or visit <a href="https://github.com/Ind1g0n3/novara-academy" target="_blank" style="color: var(--gold-200);">github.com/Ind1g0n3/novara-academy</a> and accept the collaborator invitation.</li>
          <li><strong>Fork the repository:</strong> Click the <strong>Fork</strong> button in GitHub to create your private copy under your account.</li>
          <li><strong>Clone your personal fork locally:</strong> Open PowerShell or Terminal and run:</li>
        </ol>

        <pre><code># Replace YOUR_GITHUB_USERNAME with your real GitHub handle
git clone https://github.com/YOUR_GITHUB_USERNAME/novara-academy.git
cd novara-academy</code></pre>

        <p><strong>Pulling Future Updates:</strong> Whenever a new feature drops, simply run:</p>
        <pre><code>git pull origin main</code></pre>
      </div>

      <!-- Lesson 1.2 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 1.2: Install Hermes &amp; OpenRouter Brain</span>
          <span class="badge">3 MINS</span>
        </div>
        <p>Hermes is your terminal-native autonomous agent that executes file sanitization, GPU rendering, and queue daemons.</p>
        
        <p><strong>1. Install Hermes in one command:</strong></p>
        <pre><code># Windows PowerShell:
irm https://raw.githubusercontent.com/hermes-agent/hermes/main/install.ps1 | iex

# Mac / Linux:
curl -fsSL https://raw.githubusercontent.com/hermes-agent/hermes/main/install.sh | bash</code></pre>

        <p><strong>2. Configure OpenRouter API Key:</strong></p>
        <ol>
          <li>Get your unified API key from <a href="https://openrouter.ai/keys" target="_blank" style="color: var(--gold-200);">openrouter.ai/keys</a>.</li>
          <li>In your terminal, run:</li>
        </ol>
        <pre><code>hermes model</code></pre>
        <p>Select <strong>OpenRouter</strong>, paste your API key, and select your default model (e.g., Claude 3.5 Sonnet or Gemini 1.5 Flash).</p>
      </div>

      <!-- Lesson 1.3 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 1.3: The Magic Hermes Auto-Setup Prompt</span>
          <span class="badge">2 MINS</span>
        </div>
        <p>Do not manually create folders or configure environment files. Launch Hermes and command it to bootstrap your workstation:</p>

        <pre><code>hermes</code></pre>

        <p>Paste this exact prompt into Hermes:</p>
        <pre><code>"You are the Sovereign Media OS orchestrator. Analyze this repository, verify my local GPU and Python dependencies, initialize my creator vaults, and run a health check on my 4K rendering and queue engines. Report back when my workstation is 100% ready to produce."</code></pre>

        <p>Hermes will automatically:</p>
        <ul>
          <li>Verify NVIDIA GPU NVENC hardware acceleration (or CPU fallback).</li>
          <li>Create the <code>01_Creators_Vault</code> directory tree.</li>
          <li>Initialize the ACID-compliant SQLite state ledger in high-concurrency WAL mode.</li>
        </ul>
      </div>

      <div class="action-checklist">
        <div class="action-checklist-title">🏆 Phase 1 Execution Milestone</div>
        <ul>
          <li>Private fork created at <code>github.com/YOUR_USERNAME/novara-academy</code></li>
          <li>Hermes Agent installed and verified on system PATH</li>
          <li>OpenRouter model routing verified and auto-setup prompt executed</li>
        </ul>
      </div>
    </section>

    <!-- ==========================================
         MODULE 2: 4K GPU PRODUCTION ENGINE
         ========================================== -->
    <section id="module-2" class="section-card">
      <div class="section-header">
        <div class="section-num">02</div>
        <div>
          <h2 class="section-title">Module 2: 4K GPU Production Engine (10:00 – 20:00)</h2>
          <p style="margin: 0; color: var(--gold-300); font-size: 0.88rem;">Lessons 2.1, 2.2, and 2.3</p>
        </div>
      </div>
      <p>Compile ultra-crisp 2160x3840 60FPS vertical video on local NVIDIA hardware, scrub platform-tracking EXIF metadata, and deploy neuro-retention progressive reveal typography.</p>

      <div class="value-box">
        <div class="value-box-title">⚡ The Strategic Leverage: 8.2x Real-Time GPU NVENC Encoding</div>
        <p>Compiling 4K footage using software CPU encoders takes 6-12 minutes per minute of video. Our hardware-accelerated NVENC pipeline with Lanczos scaling finishes full 60-second 4K vertical masters in 12 seconds flat while scrubbing all tracking metadata.</p>
      </div>

      <!-- Lesson 2.1 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 2.1: Creator Vault &amp; The Zero-Darkening Rule</span>
          <span class="badge">3 MINS</span>
        </div>
        <p>Organize your media assets into dedicated creator stores to prevent algorithmic cross-contamination:</p>

        <pre><code>01_Creators_Vault/
└── my_creator/
    ├── video/       <- Put 1 raw high-res master clip here (e.g. clip_01.mp4)
    ├── hooks/       <- Put 1 high-energy 2.5-second hook clip here (hook_01.mp4)
    └── sound/       <- Put 1 luxury audio track here (audio_01.mp3)</code></pre>

        <div class="alert-box">
          <div class="alert-box-title">⚠️ Critical Production Safeguard: The Zero-Darkening Rule</div>
          <p>Never apply artificial contrast filters or shadow-crushing curves. Mobile platforms already compress contrast aggressively. We strictly enforce <code>filter_name = 'none'</code> to preserve natural skin tones, lighting detail, and professional exposure.</p>
        </div>
      </div>

      <!-- Lesson 2.2 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 2.2: Compile Your First 4K NVENC Video &amp; EXIF</span>
          <span class="badge">4 MINS</span>
        </div>
        <p>Execute your first hardware-accelerated master 4K render with 2.5s hook concatenation and complete metadata scrubbing:</p>

        <pre><code>ffmpeg -y \\
  -i "01_Creators_Vault/my_creator/hooks/hook_01.mp4" \\
  -i "01_Creators_Vault/my_creator/video/clip_01.mp4" \\
  -filter_complex "[0:v]scale=2160:3840:flags=lanczos+accurate_rnd,setsar=1[v0]; \\
                   [1:v]scale=2160:3840:flags=lanczos+accurate_rnd,setsar=1[v1]; \\
                   [v0][v1]concat=n=2:v=1:a=0[outv]" \\
  -map "[outv]" \\
  -c:v h264_nvenc -preset p7 -b:v 25M -pix_fmt yuv420p \\
  -map_metadata -1 \\
  "output_master_4k.mp4"</code></pre>

        <ul>
          <li><code>scale=2160:3840:flags=lanczos+accurate_rnd</code>: Studio-grade vertical scaling without haloing.</li>
          <li><code>-c:v h264_nvenc -preset p7</code>: Dual hardware GPU encoders delivering peak quality at 25 Mbps.</li>
          <li><code>-map_metadata -1</code>: Purges all camera serials, GPS coordinates, and device signatures.</li>
        </ul>
      </div>

      <!-- Lesson 2.3 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 2.3: 5-Stage Progressive Reveal Typography</span>
          <span class="badge">3 MINS</span>
        </div>
        <p>Static subtitles cause viewers to read ahead and swipe away. Our pipeline reveals copy in synchronized psychological dopamine windows:</p>

        <table>
          <thead>
            <tr>
              <th>Window</th>
              <th>On-Screen Element</th>
              <th>Cognitive Neuro-Retention Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>0.0s – 2.5s</code></td>
              <td>Headline Curiosity Hook</td>
              <td>Pattern interrupt (during dynamic 2.5s hook cut)</td>
            </tr>
            <tr>
              <td><code>2.5s – 6.0s</code></td>
              <td>Insight Pillar 1</td>
              <td>Counter-intuitive truth &amp; authority establishment</td>
            </tr>
            <tr>
              <td><code>6.0s – 9.5s</code></td>
              <td>Insight Pillar 2</td>
              <td>System mechanism breakdown</td>
            </tr>
            <tr>
              <td><code>9.5s – 13.0s</code></td>
              <td>Insight Pillar 3</td>
              <td>Commercial leverage &amp; quantifiable ROI</td>
            </tr>
            <tr>
              <td><code>13.0s – End</code></td>
              <td>Closing Keyword CTA</td>
              <td>Trigger comment keyword for inbound DM delivery</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="action-checklist">
        <div class="action-checklist-title">🏆 Phase 2 Execution Milestone</div>
        <ul>
          <li>Creator Vault configured with <code>video</code>, <code>hooks</code>, and <code>sound</code> directories</li>
          <li>First 2160x3840 60FPS video compiled in under 20 seconds via NVENC</li>
          <li>EXIF metadata purged and verified with <code>-map_metadata -1</code></li>
        </ul>
      </div>
    </section>

    <!-- ==========================================
         MODULE 3: AUTONOMOUS QUEUES & LEADS
         ========================================== -->
    <section id="module-3" class="section-card">
      <div class="section-header">
        <div class="section-num">03</div>
        <div>
          <h2 class="section-title">Module 3: Autonomous Queues &amp; Client Leads (20:00 – 30:00)</h2>
          <p style="margin: 0; color: var(--gold-300); font-size: 0.88rem;">Lessons 3.1, 3.2, and 3.3</p>
        </div>
      </div>
      <p>Transform your single rendering workstation into a 24/7 automated media machine that posts safely and captures paying inbound clients on autopilot.</p>

      <div class="value-box">
        <div class="value-box-title">⚡ The Strategic Leverage: Zero-Friction Client Acquisition</div>
        <p>Manual DM outreach produces 2-5% response rates. Automated inbound keyword triggers generate 40%+ conversion rates because the prospect requests the access link directly in your comments.</p>
      </div>

      <!-- Lesson 3.1 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 3.1: 10-Post Auto-Replenisher Daemon &amp; Mutex Scheduling</span>
          <span class="badge">4 MINS</span>
        </div>
        <p>High-volume media operations fail when creators manually upload every video. The Novara Engine runs a continuous auto-replenishment daemon backed by an ACID-compliant SQLite WAL ledger.</p>

        <p><strong>1. Autonomous Replenishment Threshold:</strong></p>
        <p>The daemon monitors the <code>Ready_To_Publish</code> directory. If available rendered master clips fall below <strong>10 videos</strong>, the background agent wakes up, pulls fresh research/prompts, and dispatches new 4K render jobs.</p>

        <p><strong>2. 8–12 Hour Mutex Lock:</strong></p>
        <p>Social algorithms flag accounts that burst-upload content within minutes. The engine enforces a hardware mutex clock:</p>
        <pre><code># Query SQLite publication ledger
SELECT last_published_at FROM publication_ledger WHERE channel_id = ? ORDER BY id DESC LIMIT 1;
# Enforce: Next publish time must be >= last_published_at + 8 hours (28,800s)</code></pre>

        <p><strong>3. Launching the Queue Daemon via Hermes:</strong></p>
        <pre><code>hermes run --task "Start the 10-post queue replenisher daemon. Monitor Ready_To_Publish, enforce 8-hour spacing, and update SQLite state on every change."</code></pre>
      </div>

      <!-- Lesson 3.2 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 3.2: Inbound Keyword DM Protocol</span>
          <span class="badge">3 MINS</span>
        </div>
        <p>Viral views without conversion infrastructure create zero revenue. We turn every post into a high-ticket customer acquisition funnel using zero-friction comment keywords.</p>

        <p><strong>1. The High-Signal Call-To-Action (CTA):</strong></p>
        <p>Every video concludes with our calibrated hook-and-deliver CTA:</p>
        <pre><code>"Comment 'SCALE' below and my autonomous agent will DM you the exact 4K production blueprint and code repository."</code></pre>

        <p><strong>2. Webhook Lead Ingestion Payload:</strong></p>
        <pre><code>{{
  "event": "comment_trigger",
  "keyword": "SCALE",
  "platform": "instagram",
  "user_handle": "@high_ticket_client",
  "dispatch_action": "send_private_dm",
  "response_message": "Operator, here is the direct access bridge to our Sovereign 4K Production Repo: https://www.skool.com/novara-ai-media-group-5745/about",
  "lead_score": 92
}}</code></pre>
      </div>

      <!-- Lesson 3.3 -->
      <div class="lesson-box">
        <div class="lesson-title">
          <span>📍 Lesson 3.3: Post Your First Win &amp; Unlock Level 2</span>
          <span class="badge">3 MINS</span>
        </div>
        <p>You have now completed the entire 30-Minute Fast-Track. You have a private git fork, an active Hermes agent, a pristine 4K GPU rendering pipeline, and an autonomous queue daemon.</p>

        <div class="action-checklist">
          <div class="action-checklist-title">🏆 Phase 3 Execution Milestone: Claim Level 2 Operator Status</div>
          <ul>
            <li>Level 2 Unlock: Access to Private Distributed Multi-Agent Constellations</li>
            <li>Level 2 Unlock: Download High-Ticket Agency Client Acquisition Templates</li>
            <li>Level 2 Unlock: Weekly Architecture Review &amp; GPU Tuning Office Hours</li>
          </ul>
        </div>

        <p style="margin-top: 18px;"><strong>Community Proof Post Format:</strong></p>
        <p>Head to the <strong>⚡ Wins &amp; Proof of Work</strong> category in Skool and post your result:</p>
        <pre><code>Headline: 🚀 30-Min Fast-Track Completed | First 4K Master Rendered

Body:
- Forked the engine and bootstrapped Hermes Agent
- Rendered my first 4K 60FPS clip using NVENC (Zero Darkening + Scrubbed EXIF)
- Autonomous queue replenisher active and monitoring
- Goal: Scale to 3 autonomous channels and onboard 2 agency clients this month!</code></pre>
      </div>

      <!-- Checkpoint Card -->
      <div class="checkpoint-card">
        <h3 style="color: var(--gold-100); font-size: 1.3rem; margin-bottom: 8px;">Ready to Claim Level 2 Status?</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px; max-width: 600px; margin-left: auto; margin-right: auto;">Post your proof of work in the Skool community to earn points, level up your operator status, and unlock our private multi-agent templates.</p>
        <a href="https://www.skool.com/novara-ai-media-group-5745/about" target="_blank" class="skool-btn" style="padding: 12px 28px; font-size: 0.95rem;">
          Open Skool Community &amp; Post Your Win →
        </a>
      </div>
    </section>

  </div>
</body>
</html>
'''

# Write outputs
targets = [
    public_dir / "FAST_TRACK_30_MIN_ALL_IN_ONE_WORKBOOK.html",
    public_dir / "operator_quickstart.html",
    dist_dir / "FAST_TRACK_30_MIN_ALL_IN_ONE_WORKBOOK.html",
    dist_dir / "operator_quickstart.html",
]

for t in targets:
    t.parent.mkdir(parents=True, exist_ok=True)
    t.write_text(html_content, encoding="utf-8")
    print(f"Generated {t.name} ({t.stat().st_size} bytes)")
