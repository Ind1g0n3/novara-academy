import React, { useState } from "react";
import { NovaraLogo } from "./NovaraLogo";
import { 
  Compass, 
  Layers, 
  BookOpen, 
  CodeXml, 
  Youtube, 
  Menu, 
  X, 
  ExternalLink,
  HelpCircle,
  Activity
} from "lucide-react";

interface NavbarProps {
  currentBrand?: string;
  onBrandChange?: (brand: string) => void;
  brandOptions?: string[];
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "SMP Architecture", href: "#architecture", icon: Layers },
    { name: "Agent Constellation", href: "#agents", icon: Compass },
    { name: "Curriculum", href: "#curriculum", icon: BookOpen },
    { name: "Prompt Vault", href: "#vault", icon: CodeXml },
    { name: "Blog & Blueprints", href: "#blog", icon: BookOpen },
    { name: "YouTube Hub", href: "#youtube", icon: Youtube },
    { name: "Updates", href: "#changelog", icon: Activity },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Logo & Brand Display */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="focus:outline-none flex items-center gap-3 sm:gap-4 group">
              <NovaraLogo size="md" showText={false} imgClassName="h-12 sm:h-14 md:h-15" />
              <div className="flex flex-col">
                <span className="font-aquire text-lg sm:text-xl md:text-2xl font-black text-[#EDF0F5] tracking-wider group-hover:text-[#F5E2B3] transition-colors uppercase leading-none">
                  NOVARA ACADEMY
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.28em] text-[#C9A84C] font-bold mt-1.5">
                  THE INNER CIRCLE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-xl text-xs font-semibold tracking-wide text-[#8B9BB4] hover:text-[#EDF0F5] hover:bg-white/5 transition-all duration-200 flex items-center gap-2 group"
                >
                  <Icon className="w-4.5 h-4.5 text-[#C9A84C] group-hover:text-[#F5E2B3] group-hover:scale-115 transition-all duration-200 flex-shrink-0" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Link to B2B Main Site */}
            <a
              href="https://novaramedia.store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C]/50 text-xs font-mono text-[#8B9BB4] hover:text-[#EDF0F5] transition-all duration-200 flex items-center gap-2"
            >
              <span>Agency (B2B)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C9A84C]" />
            </a>

            {/* Primary Skool CTA Button */}
            <a
              href="https://www.skool.com/novara-ai-media-group-5745/about"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-[#030712] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#C9A84C]/20 transition-all duration-200 transform active:scale-95"
            >
              <span>Join Skool Free</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://www.skool.com/novara-ai-media-group-5745/about"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#C9A84C] text-[#030712] font-bold text-xs uppercase"
            >
              Join
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#0B1120] border border-white/10 text-[#8B9BB4] hover:text-[#EDF0F5]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#05080F] border-b border-[#1E293B] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3.5 px-3 py-3 rounded-xl text-sm font-semibold text-[#EDF0F5] hover:bg-[#0B1120]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B1120] border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://novaramedia.store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#0B1120] border border-white/10 text-center text-xs font-mono text-[#8B9BB4]"
            >
              Novara Media (B2B Agency)
            </a>
            <a
              href="https://www.skool.com/novara-ai-media-group-5745/about"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-[#C9A84C] text-[#030712] font-bold text-center text-xs uppercase tracking-wider"
            >
              Join Skool Community Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
