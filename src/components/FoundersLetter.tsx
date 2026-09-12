import React, { useState, useRef, useEffect } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  Award, 
  Code2, 
  CheckCircle2, 
  Camera, 
  Upload, 
  Trash2, 
  Link as LinkIcon,
  Check
} from "lucide-react";

export const FoundersLetter: React.FC = () => {
  // STATE FOR FOUNDER SELFIE / PORTRAIT:
  // Supports:
  // 1. Direct browser upload from device (camera or gallery), saved in localStorage
  // 2. Direct URL input
  // 3. Fallback to /founder.jpg placed in /public
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved selfie from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("novara_founder_selfie");
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 3000);
          try {
            localStorage.setItem("novara_founder_selfie", result);
          } catch (err) {
            console.warn("Could not save to localStorage", err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 3000);
          try {
            localStorage.setItem("novara_founder_selfie", result);
          } catch (err) {
            console.warn("Could not save to localStorage", err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInputValue.trim()) {
      setCustomPhoto(urlInputValue.trim());
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
      try {
        localStorage.setItem("novara_founder_selfie", urlInputValue.trim());
      } catch (err) {
        console.warn("Could not save to localStorage", err);
      }
      setShowUrlInput(false);
      setUrlInputValue("");
    }
  };

  const handleReset = () => {
    setCustomPhoto(null);
    try {
      localStorage.removeItem("novara_founder_selfie");
    } catch (err) {
      console.warn("Could not remove from localStorage", err);
    }
  };

  const activePhoto = customPhoto || "/founder.jpg";

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Anchor for backwards compatibility with #architect */}
      <span id="architect" className="absolute -top-24" aria-hidden="true" />
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#C9A84C]/8 blur-[130px] pointer-events-none -z-10" />

      {/* Pill Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest shadow-lg">
          <Terminal className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Architect & Founder • About Novara</span>
        </div>
      </div>

      {/* Main Container: Grid with Dedicated Selfie Showcase + Founder Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ── LEFT COLUMN: FOUNDER SELFIE SPOTLIGHT (Lg: 5 cols) ── */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-5 sm:p-6 border-2 border-[#C9A84C]/40 bg-gradient-to-b from-[#0B1120] via-[#05080F] to-[#030712] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(201,168,76,0.15)] group">
            
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/15 blur-2xl pointer-events-none" />

            {/* Top Label for the Selfie Frame */}
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E8D5A3] uppercase">
                <Camera className="w-4 h-4 text-[#C9A84C]" />
                <span>Founder Selfie Slot</span>
              </div>
              {customPhoto ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-full border border-[#10B981]/30">
                  <Check className="w-3 h-3" />
                  <span>Custom Selfie Set</span>
                </span>
              ) : (
                <span className="text-[10px] font-mono text-[#8B9BB4]">
                  Uploadable / Replaceable
                </span>
              )}
            </div>

            {/* Hidden native file input */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {/* Photo Container Frame with Drag & Drop */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative rounded-2xl overflow-hidden aspect-[4/5] border-2 transition-all duration-300 shadow-2xl bg-[#080B14] cursor-pointer group/photo ${
                isDragging 
                  ? "border-[#10B981] scale-102 shadow-[0_0_30px_rgba(16,185,129,0.4)]" 
                  : "border-[#C9A84C]/40 hover:border-[#C9A84C]"
              }`}
            >
              <img
                src={activePhoto}
                alt="Ricardo Gutierrez - Founder & Systems Architect"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
              />

              {/* Drag-over overlay */}
              {isDragging && (
                <div className="absolute inset-0 bg-[#030712]/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-30">
                  <Upload className="w-12 h-12 text-[#10B981] mb-2 animate-bounce" />
                  <span className="text-sm font-bold text-[#EDF0F5] font-aquire">DROP YOUR SELFIE HERE</span>
                  <span className="text-xs text-[#10B981] font-mono mt-1">Image will preview immediately</span>
                </div>
              )}

              {/* Hover overlay inviting user to upload / change photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/30 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                <div className="px-4 py-2 rounded-xl bg-[#C9A84C] text-[#030712] font-mono font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/photo:translate-y-0 transition-transform">
                  <Camera className="w-4 h-4" />
                  <span>Click to Change Selfie</span>
                </div>
                <span className="text-[10px] font-mono text-[#CBD5E1] mt-2 bg-black/60 px-2.5 py-1 rounded-md">
                  Or drag & drop any image file
                </span>
              </div>

              {/* Status Overlay Pill */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md border border-[#10B981]/50 text-[10px] font-mono font-bold text-[#A7F3D0] shadow-md z-10">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span>ONLINE • ARCHITECT</span>
              </div>

              {/* Verified Badge Overlay */}
              <div className="absolute top-3 right-3 p-1.5 rounded-xl bg-[#030712]/80 backdrop-blur-md border border-[#C9A84C]/40 text-[#E8D5A3] shadow-md z-10">
                <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              </div>

              {/* Gradient Bottom Title Card on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pt-10 z-10">
                <h3 className="font-aquire text-lg sm:text-xl font-black text-[#EDF0F5] tracking-wide leading-tight">
                  Ricardo Gutierrez
                </h3>
                <p className="text-xs font-mono text-[#C9A84C] mt-0.5">
                  Founder & Systems Architect • CIS Major
                </p>
              </div>
            </div>

            {/* Interactive Selfie Upload Action Controls */}
            <div className="mt-4 pt-3 border-t border-white/10 space-y-2.5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Camera className="w-4 h-4" />
                  <span>{customPhoto ? "Replace Selfie" : "Upload Your Selfie"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowUrlInput(!showUrlInput)}
                  title="Paste Image URL"
                  className="p-2.5 rounded-xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C]/50 text-[#8B9BB4] hover:text-[#EDF0F5] transition-all"
                >
                  <LinkIcon className="w-4 h-4" />
                </button>

                {customPhoto && (
                  <button
                    type="button"
                    onClick={handleReset}
                    title="Reset to Default"
                    className="p-2.5 rounded-xl bg-[#180A0A] border border-[#F43F5E]/30 text-[#FDA4AF] hover:bg-[#F43F5E]/20 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* URL Input Form */}
              {showUrlInput && (
                <form onSubmit={handleUrlSubmit} className="flex gap-2 pt-1">
                  <input
                    type="url"
                    placeholder="https://example.com/your-selfie.jpg"
                    value={urlInputValue}
                    onChange={(e) => setUrlInputValue(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-[#05080F] border border-white/15 text-xs text-[#EDF0F5] font-mono focus:outline-none focus:border-[#C9A84C]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-[#C9A84C] text-[#030712] font-mono text-xs font-bold uppercase"
                  >
                    Save
                  </button>
                </form>
              )}

              {uploadSuccess && (
                <div className="text-center py-1 text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 rounded-lg border border-[#10B981]/30">
                  ✓ Selfie updated & saved to your browser!
                </div>
              )}

              <p className="text-[10px] font-mono text-center text-[#64748B]">
                Upload updates live & stays saved in your browser. <br />
                Or place file permanently at <code className="text-[#8B9BB4] bg-white/5 px-1 py-0.5 rounded">/public/founder.jpg</code>
              </p>
            </div>

            {/* Founder Verification & Credential Highlights */}
            <div className="mt-4 pt-3 border-t border-white/5 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#05080F] border border-white/5 text-[#CBD5E1]">
                <Award className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <span>Computer Information Systems (CIS) Major</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#05080F] border border-white/5 text-[#CBD5E1]">
                <Code2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Architect of Novara OS 6-Agent Swarm</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#05080F] border border-white/5 text-[#CBD5E1]">
                <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Host of Weekly Live Masterclasses</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── RIGHT COLUMN: THE FOUNDER'S LETTER & PHILOSOPHY (Lg: 7 cols) ── */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 border border-[#C9A84C]/30 bg-gradient-to-b from-[#0B1120] via-[#05080F] to-[#030712] relative overflow-hidden shadow-2xl">
            
            {/* Subtle decorative quote background */}
            <span className="absolute -top-8 -right-3 font-serif text-[160px] text-white/[0.03] select-none pointer-events-none">
              "
            </span>

            {/* Header Block */}
            <div className="border-b border-white/10 pb-6 mb-6">
              <h2 className="font-aquire text-2xl sm:text-3xl font-extrabold text-[#EDF0F5] mb-2 leading-tight">
                Why I Engineered <span className="gold-gradient-text">Novara OS</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#C9A84C] tracking-wide uppercase">
                A Letter from Ricardo Gutierrez • Founder & Systems Architect, Novara Media & Novara Labs
              </p>
            </div>

            {/* Narrative Body */}
            <div className="space-y-5 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              <p>
                Like most creators and agency founders, I hit the exact same breaking point: <strong className="text-[#EDF0F5]">manual execution does not scale.</strong>
              </p>
              
              <p>
                When we were scaling our accounts, managing multi-account networks, and running client delivery, we fell into the classic agency trap: burning thousands of dollars every month on human editors who missed deadlines, virtual assistants who needed constant micromanagement, and ten fragmented SaaS tools that didn't communicate with each other. Worse, every time an editor touched a video, platform algorithms slapped us with compression traps and metadata shadowbans.
              </p>

              <p>
                As a Computer Information Systems (CIS) major and systems architect, I realized that surface-level ChatGPT wrappers and single-prompt gimmicks were toys. Real leverage required treating content creation and social distribution as a <strong className="text-[#F5E2B3]">Distributed Multi-Agent Engineering Architecture</strong>.
              </p>

              <p>
                So we engineered our own solution from the hardware up: an autonomous swarm where <strong className="text-[#EDF0F5]">Hermes</strong> handles cron orchestration and dispatch, <strong className="text-[#EDF0F5]">OpenClaw</strong> manages anti-detect browser RPA, custom GPU pipelines compile pristine 4K video with Lanczos scaling at 8.2x speed, and automated keyword DMs convert organic viewers into high-ticket clients on autopilot.
              </p>

              {/* Callout Quote */}
              <div className="p-6 rounded-2xl bg-[#05080F]/90 border-l-4 border-[#C9A84C] border-y border-r border-white/5 my-6">
                <p className="text-sm sm:text-base font-medium text-[#F5E2B3] italic leading-relaxed">
                  "We aren't selling you a toy video generator or generic prompt lists. We built the exact operating infrastructure we run our own media business on every single day — and we're handing you the keys."
                </p>
              </div>

              <h3 className="font-aquire text-base sm:text-lg font-bold text-[#EDF0F5] pt-2">
                Why We Curate a Dedicated Inner Circle
              </h3>

              <p>
                At <strong className="text-[#E8D5A3]">$59/month</strong>, our Skool community is intentionally structured as a focused, high-conviction mastermind. We do not offer free memberships because real infrastructure requires commitment. By gating access to a dedicated inner circle, we filter out casual spectators and foster an environment where members deploy production code, share verified breakthroughs, and scale sovereign media engines together.
              </p>

              <p>
                Inside, you get direct access to our complete Python repositories, 150+ prompt vaults, anti-ban browser RPA scripts, and weekly live engineering builds where we write code and troubleshoot architectures together in real time.
              </p>

              <p>
                If you're ready to replace manual payroll with sovereign AI leverage, I look forward to reviewing your builds inside.
              </p>
            </div>

            {/* Founder Sign-Off & Status Lockup */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  title="Click to update selfie"
                  className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#C9A84C] shadow-lg shadow-[#C9A84C]/20 shrink-0 bg-[#080B14] cursor-pointer hover:border-[#10B981] transition-colors relative group/avatar"
                >
                  <img
                    src={activePhoto}
                    alt="Ricardo Gutierrez avatar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#E8D5A3]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-aquire text-sm sm:text-base font-bold text-[#EDF0F5]">
                    Ricardo Gutierrez
                  </h4>
                  <p className="text-xs text-[#8B9BB4] font-mono">
                    Founder & Systems Architect • CIS Major, Novara Media Group
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#10B981] font-mono pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inner Circle Mastermind: Active & Open</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-aquire font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all transform active:scale-95 whitespace-nowrap"
              >
                <span>Join Novara Inner Circle</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default FoundersLetter;