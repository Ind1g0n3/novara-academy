import React, { useState, useEffect } from "react";
import { X, Download, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Terminal, Phone, Mail, User } from "lucide-react";

export interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
  source: string;
  url: string;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerSource?: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  triggerSource = "direct_lead_magnet",
}) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Helper to trigger automated file download
  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html";
    link.setAttribute("download", "NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset step on modal open
  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setErrorMessage("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Expose global export utility for testing and lead management
  useEffect(() => {
    (window as unknown as { exportNovaraLeads?: () => void }).exportNovaraLeads = () => {
      const stored = localStorage.getItem("novara_captured_leads");
      const leads = stored ? JSON.parse(stored) : [];
      console.table(leads);
      const blob = new Blob([JSON.stringify(leads, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `novara_leads_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
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
      const newLead: LeadData = {
        id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        timestamp: new Date().toISOString(),
        source: triggerSource,
        url: window.location.href,
      };

      // Save to localStorage
      const existing = localStorage.getItem("novara_captured_leads");
      const leadsList = existing ? JSON.parse(existing) : [];
      leadsList.push(newLead);
      localStorage.setItem("novara_captured_leads", JSON.stringify(leadsList));

      // Fire conversion events if trackers exist
      if (typeof window !== "undefined") {
        // Meta Pixel standard Lead event
        const win = window as unknown as { fbq?: (action: string, event: string, params?: Record<string, unknown>) => void; ttq?: { track?: (event: string, params?: Record<string, unknown>) => void } };
        if (typeof win.fbq === "function") {
          win.fbq("track", "Lead", { content_name: "Master Prompt Vault", value: 0, currency: "USD" });
        }
        // TikTok Pixel standard SubmitForm event
        if (win.ttq && typeof win.ttq.track === "function") {
          win.ttq.track("SubmitForm", { content_name: "Master Prompt Vault" });
        }
      }

      // Automatically trigger download
      triggerDownload();

      // Switch to Step 2
      setIsSubmitting(false);
      setStep("success");
    } catch {
      setIsSubmitting(false);
      triggerDownload();
      setStep("success");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop with blur */}
      <div 
        className="fixed inset-0 bg-[#030712]/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#0F172A] via-[#0B1120] to-[#05080F] border-2 border-[#C9A84C]/50 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(201,168,76,0.25)] text-[#EDF0F5] z-10 overflow-hidden">
        
        {/* Gold Radial Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C9A84C]/20 blur-[90px] pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-xs font-mono font-bold text-[#F5E2B3] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>FREE VIP OPERATOR ASSET DROP</span>
            </div>

            <h3 className="font-aquire text-xl sm:text-2xl font-bold tracking-wide text-white leading-tight mb-2">
              CLAIM THE 2026 SOVEREIGN AI SWARM BLUEPRINT &amp; <span className="gold-gradient-text">MASTER PROMPT VAULT</span>
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Get immediate access to the complete 6-Agent cognitive routing schemas, Hermes master orchestrator prompt, and anti-ban browser RPA configuration.
            </p>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-[#EF4444]/20 border border-[#EF4444]/40 text-[#EF4444] text-xs font-mono">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div>
                <label className="block text-xs font-mono font-semibold text-[#C9A84C] uppercase tracking-wider mb-1.5">
                  Mobile Number (For VIP Drops &amp; Access Keys)
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

              {/* TCPA SMS Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="sms-consent"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 text-[#C9A84C] focus:ring-[#C9A84C] bg-[#05080F]"
                />
                <label htmlFor="sms-consent" className="text-[11px] text-[#64748B] leading-normal select-none">
                  By providing your phone number, you agree to receive system updates and VIP prompt drops via SMS from Novara Media. Reply STOP anytime to opt out. Msg &amp; data rates may apply.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3.5 px-6 rounded-xl font-aquire font-extrabold text-sm uppercase tracking-wider text-[#030712] bg-gradient-to-r from-[#FFF6DD] via-[#E8D5A3] to-[#C9A84C] hover:brightness-110 shadow-[0_4px_25px_rgba(201,168,76,0.35)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  <span>GENERATING ACCESS KEY...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD MASTER VAULT (FREE)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#64748B] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  Instant HTML Download
                </span>
                <span>•</span>
                <span>Zero Spam</span>
                <span>•</span>
                <span>Production Tested</span>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Instant Download Confirmed + Trojan Horse Conversion Bridge */
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              ✓ DOWNLOAD INITIATED
            </span>

            <h3 className="font-aquire text-xl sm:text-2xl font-bold tracking-wide text-white leading-tight mb-2">
              YOUR MASTER PROMPT VAULT IS DOWNLOADING
            </h3>

            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
              Check your browser downloads for <code className="text-[#F5E2B3] bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs">NOVARA_MASTER_PROMPT_AND_SWARM_BLUEPRINT.html</code>. You can open and inspect it offline at any time.
            </p>

            {/* Trojan Horse Fast-Track Bridge Card */}
            <div className="p-5 rounded-2xl bg-[#05080F] border-2 border-[#C9A84C]/60 shadow-[0_0_30px_rgba(201,168,76,0.2)] mb-5 text-left">
              <div className="flex items-center justify-between text-xs font-mono text-[#8B9BB4] pb-2 border-b border-white/10 mb-3">
                <span className="text-[#C9A84C] font-bold">WANT TO DEPLOY THE LIVE SYSTEM?</span>
                <span className="line-through text-[#EF4444]">$97/mo</span>
              </div>

              <div className="text-sm font-semibold text-white mb-1.5">
                Novara Inner Circle Membership ($59/mo)
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Raw prompts are only 5% of the battle. Deploy the uncut <strong>6-Agent Python Swarm</strong>, headless OpenClaw browser bots, Docker images, and join 3,500+ operators on weekly live sprints with Ricardo.
              </p>

              <a
                href="https://www.skool.com/novara-ai-media-group-5745/about"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-aquire font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#030712] bg-gradient-to-r from-[#FFF6DD] via-[#E8D5A3] to-[#C9A84C] hover:brightness-110 shadow-[0_4px_20px_rgba(201,168,76,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>JOIN INNER CIRCLE ON SKOOL ($59/MO)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-[10px] text-center font-mono text-[#64748B] mt-2.5">
                30-Day Money-Back Guarantee • Cancel anytime in 1 click inside Skool
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-mono">
              <button
                onClick={triggerDownload}
                className="text-[#C9A84C] hover:underline flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Didn't download? Click to re-download</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default LeadCaptureModal;
