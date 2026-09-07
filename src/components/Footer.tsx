import React from "react";
import { NovaraLogo } from "./NovaraLogo";
import { Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";

interface FooterProps {
  currentBrand: string;
}

export const Footer: React.FC<FooterProps> = ({ currentBrand }) => {
  return (
    <footer className="relative bg-[#020408] border-t border-[#1E293B] pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Watermark Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#C9A84C]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top Callout Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#C9A84C]/40 mb-16 text-center relative overflow-hidden bg-gradient-to-r from-[#0B1120] via-[#1E293B]/60 to-[#0B1120]">
          <span className="font-['Aquire',sans-serif] text-xs font-bold text-[#C9A84C] tracking-[0.3em] uppercase block mb-3">
            ENTER THE INNER CIRCLE
          </span>
          <h3 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
            Ready to Build Your <span className="gold-gradient-text">Autonomous Media OS?</span>
          </h3>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto mb-8">
            Join thousands of ambitious creators, engineers, and agency operators inside our Skool community. Get instant access to full Python source code, 150+ prompt vaults, and weekly live engineering calls.
          </p>
          <a
            href="https://www.skool.com/novara-ai-media-group-5745/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-['Aquire',sans-serif] font-bold text-sm uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_35px_rgba(201,168,76,0.7)] transition-all transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#856343]" />
            <span>Join the Skool Community Now →</span>
          </a>
        </div>

        {/* Main Footer Links Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Col 1) */}
          <div className="md:col-span-2 space-y-4">
            <NovaraLogo size="lg" brandName={currentBrand} />
            <p className="text-xs sm:text-sm text-[#8B9BB4] max-w-md leading-relaxed mt-4">
              <strong className="text-[#E8D5A3]">Novara OS</strong> is an enterprise-grade autonomous operating system orchestrating multi-agent swarms (Hermes, OpenClaw, Antigravity, Codex, Alfred, Oracle), browser RPA execution, Quartermaster smart-model routing, and durable Obsidian knowledge loops. It automates 4K GPU rendering, distributed social queues, real-time market intelligence, and inbound lead conversion into a self-healing sovereign engine.
            </p>
            <p className="text-xs sm:text-sm text-[#8B9BB4] max-w-md leading-relaxed mt-2">
              <strong className="text-[#E8D5A3]">The Inner Circle Community</strong> is the exclusive Skool ecosystem where ambitious creators, multi-account operators, and agencies gain access to the production OS repository, master prompt vaults, and weekly live engineering builds.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Production Pipeline Status: Nominal (v2.4)</span>
            </div>
          </div>

          {/* Ecosystem Links (Col 2) */}
          <div>
            <h4 className="font-['Aquire',sans-serif] text-xs font-bold uppercase tracking-wider text-[#EDF0F5] mb-4">
              Community & Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8B9BB4]">
              <li>
                <a 
                  href="https://www.skool.com/novara-ai-media-group-5745/about" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E8D5A3] transition-colors flex items-center gap-1"
                >
                  <span>Skool Community</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@Novara-Labs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E8D5A3] transition-colors flex items-center gap-1"
                >
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://novaramedia.store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E8D5A3] transition-colors flex items-center gap-1"
                >
                  <span>Novara Media (B2B Agency)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture Sections (Col 3) */}
          <div>
            <h4 className="font-['Aquire',sans-serif] text-xs font-bold uppercase tracking-wider text-[#EDF0F5] mb-4">
              Architecture & System
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8B9BB4]">
              <li><a href="#architecture" className="hover:text-[#E8D5A3] transition-colors">SMP Pipeline Mindmap</a></li>
              <li><a href="#agents" className="hover:text-[#E8D5A3] transition-colors">Agent Constellation</a></li>
              <li><a href="#curriculum" className="hover:text-[#E8D5A3] transition-colors">University Curriculum</a></li>
              <li><a href="#vault" className="hover:text-[#E8D5A3] transition-colors">Prompt & Script Vault</a></li>
              <li><a href="#blog" className="hover:text-[#E8D5A3] transition-colors">Rotating Free Blueprints</a></li>
              <li><a href="#changelog" className="hover:text-[#E8D5A3] transition-colors">System Changelog</a></li>
              <li><a href="#faq" className="hover:text-[#E8D5A3] transition-colors">Manifesto & FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© 2026 Novara Media • Sovereign Media Production (SMP). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered for elite creators & operators worldwide.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
