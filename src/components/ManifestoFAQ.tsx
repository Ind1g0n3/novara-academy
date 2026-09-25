import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/youtubeData";
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  Terminal 
} from "lucide-react";

export const ManifestoFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Inline Lead Magnet Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html";
    link.setAttribute("download", "NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid work or personal email address.");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      setErrorMessage("Please enter a valid phone number with area code.");
      return;
    }

    setIsSubmitting(true);

    try {
      const newLead = {
        id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        timestamp: new Date().toISOString(),
        source: "faq_section_inline",
        url: window.location.href,
      };

      // Save lead locally
      const existing = localStorage.getItem("novara_captured_leads");
      const leadsList = existing ? JSON.parse(existing) : [];
      leadsList.push(newLead);
      localStorage.setItem("novara_captured_leads", JSON.stringify(leadsList));

      // Track conversion events if present
      if (typeof window !== "undefined") {
        const win = window as unknown as { 
          fbq?: (action: string, event: string, params?: Record<string, unknown>) => void; 
          ttq?: { track?: (event: string, params?: Record<string, unknown>) => void } 
        };
        if (typeof win.fbq === "function") {
          win.fbq("track", "Lead", { content_name: "FAQ Section Prompt Vault", value: 0, currency: "USD" });
        }
        if (win.ttq && typeof win.ttq.track === "function") {
          win.ttq.track("SubmitForm", { content_name: "FAQ Section Prompt Vault" });
        }
      }

      // Automatically trigger download of the HTML asset
      triggerDownload();
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      triggerDownload();
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      
      {/* Manifesto Callout Banner */}
      <div className="glass-card rounded-3xl border border-[#C9A84C]/40 p-8 sm:p-10 mb-20 relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#05080F] to-[#1E293B]/40">
        <div className="absolute top-0 right-0 w-[350px] h-[250px] bg-[#C9A84C]/10 blur-[90px] pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/50 text-xs font-mono font-bold text-[#F5E2B3] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Sovereign Manifesto</span>
        </div>

        <h3 className="font-aquire text-2xl sm:text-4xl font-extrabold text-[#EDF0F5] mb-4">
          Why 99% of AI Automation &amp; Agency Setups Fail (And How Sovereign Swarms Win)
        </h3>

        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
          The internet is saturated with generic, robotic "AI automation" that produces 720p muddy videos with artificial contrast boosts and robotic text-to-speech. Platforms have adapted: their algorithms actively demote synthetic templates and shadowban recycled device fingerprints.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[#180A0A] border border-[#F43F5E]/30 text-[#FDA4AF]">
            <strong className="text-[#F43F5E] block font-mono text-xs uppercase mb-1"> The Broken AI Agency Model:</strong>
            Generic editing templates, crushed shadows, burnt-out manual payroll, and lost DM leads.
          </div>
          <div className="p-4 rounded-xl bg-[#051E14] border border-[#10B981]/30 text-[#A7F3D0]">
            <strong className="text-[#10B981] block font-mono text-xs uppercase mb-1">[] The Sovereign Media Protocol:</strong>
            Raw 4K native footage, Zero-Darkening Lanczos rendering, EXIF purging, and automated DM conversions.
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] uppercase">
          Everything You Need to <span className="gold-gradient-text">Know</span>
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4 mb-16">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#0B1120] border-[#C9A84C]/50 shadow-lg shadow-[#C9A84C]/10"
                  : "bg-[#05080F]/90 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-aquire text-base sm:text-lg font-bold text-[#EDF0F5]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  <p className="mt-3">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── HIGH-CONVERTING INLINE LEAD CAPTURE IN THE FAQ SECTION ── */}
      <div className="relative rounded-3xl border-2 border-[#C9A84C]/50 bg-gradient-to-b from-[#0F172A] via-[#0B1120] to-[#05080F] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(201,168,76,0.2)] overflow-hidden">
        
        {/* Gold Radial Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A84C]/15 blur-[100px] pointer-events-none -z-10" />

        {!isSubmitted ? (
          <div>
            {/* Top Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-xs font-mono font-bold text-[#F5E2B3] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>STILL HAVE QUESTIONS? CLAIM THE FREE STARTER PACK</span>
              </div>
              <span className="text-xs font-mono text-[#8B9BB4] hidden sm:inline">
                Instant Standalone HTML Download
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white leading-tight mb-3">
              DOWNLOAD THE 2026 MULTI-AGENT SWARM BLUEPRINT &amp; <span className="gold-gradient-text">MASTER PROMPT VAULT</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 max-w-3xl">
              Not ready to join the Inner Circle today? Take our uncut <strong>Hermes Orchestration System Prompt</strong>, 6-Agent cognitive routing JSON schema, and Anti-AI-Slop guide for free. Open and run it offline on any device.
            </p>

            {/* Error message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-[#EF4444]/20 border border-[#EF4444]/40 text-[#EF4444] text-xs font-mono">
                {errorMessage}
              </div>
            )}

            {/* Inline 3-Field Form */}
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#C9A84C] uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Vance"
                      className="w-full bg-[#05080F] border border-white/15 focus:border-[#C9A84C] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#C9A84C] uppercase tracking-wider mb-1.5">
                    Work / Primary Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@agency.com"
                      className="w-full bg-[#05080F] border border-white/15 focus:border-[#C9A84C] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Phone Number */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#C9A84C] uppercase tracking-wider mb-1.5">
                    Mobile Phone (For VIP SMS Drops)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#05080F] border border-white/15 focus:border-[#C9A84C] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* TCPA SMS Disclaimer */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="faq-sms-consent"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 text-[#C9A84C] focus:ring-[#C9A84C] bg-[#05080F]"
                />
                <label htmlFor="faq-sms-consent" className="text-[11px] text-[#64748B] leading-normal select-none">
                  By providing your phone number, you agree to receive system updates and VIP prompt drops via SMS from Novara Media. Reply STOP anytime to opt out. Msg &amp; data rates may apply.
                </label>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 py-4 px-8 rounded-xl font-aquire font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#030712] bg-gradient-to-r from-[#FFF6DD] via-[#E8D5A3] to-[#C9A84C] hover:brightness-110 shadow-[0_4px_25px_rgba(201,168,76,0.35)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>PREPARING ASSET DROP...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>DOWNLOAD MASTER PROMPT VAULT (.HTML)</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 text-xs font-mono text-[#8B9BB4]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span>Instant .HTML Download</span>
                  </span>
                  <span>•</span>
                  <span>Zero Lock-In</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Instant Download Confirmed + Trojan-Horse Skool Bridge */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="inline-block px-3.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              ✓ DOWNLOAD INITIATED
            </span>

            <h3 className="font-aquire text-xl sm:text-3xl font-bold tracking-wide text-white leading-tight mb-2">
              YOUR MASTER PROMPT VAULT IS DOWNLOADING
            </h3>

            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto mb-6">
              Look in your browser downloads for <code className="text-[#F5E2B3] bg-white/5 px-2 py-0.5 rounded font-mono text-xs">NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html</code>. It contains uncut prompts, routing matrices, and instructions you can inspect offline.
            </p>

            {/* Trojan Horse Fast-Track Skool Offer */}
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#05080F] border-2 border-[#C9A84C]/60 shadow-[0_0_35px_rgba(201,168,76,0.25)] mb-4 text-left">
              <div className="flex items-center justify-between text-xs font-mono text-[#8B9BB4] pb-2.5 border-b border-white/10 mb-3">
                <span className="text-[#C9A84C] font-bold uppercase">Ready for the Live Production Repositories?</span>
                <span className="line-through text-[#EF4444]">$97/mo</span>
              </div>

              <div className="text-base font-semibold text-white mb-1.5">
                Official Novara Inner Circle Membership ($59/mo)
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                Raw prompts are only step 1. Unlock the complete <strong>6-Agent Python Swarm</strong>, headless OpenClaw RPA bots, 4K GPU media synthesis pipelines, and join 3,500+ operators on weekly live Zoom sprints with Ricardo Gutierrez.
              </p>

              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-aquire font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#030712] bg-gradient-to-r from-[#FFF6DD] via-[#E8D5A3] to-[#C9A84C] hover:brightness-110 shadow-[0_4px_25px_rgba(201,168,76,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DEPLOY THE LIVE SWARM ON SKOOL ($59/MO)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-[11px] text-center font-mono text-[#64748B] mt-2.5">
                🔒 30-Day Money-Back Guarantee • Cancel anytime in 1 click inside Skool settings
              </div>
            </div>

            <button
              onClick={triggerDownload}
              className="text-xs font-mono text-[#C9A84C] hover:underline inline-flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Didn't start automatically? Click here to re-download</span>
            </button>
          </div>
        )}

      </div>

    </section>
  );
};

export default ManifestoFAQ;

