import React from "react";

interface NovaraLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  showText?: boolean;
  brandName?: string;
  className?: string;
  imgClassName?: string;
}

export const NovaraLogo: React.FC<NovaraLogoProps> = ({
  size = "md",
  showText = true,
  brandName = "NOVARA",
  className = "",
  imgClassName = "",
}) => {
  const sizeMap = {
    sm: { img: "h-11 md:h-12", text: "text-base md:text-lg tracking-[0.22em]" },
    md: { img: "h-14 md:h-16", text: "text-xl md:text-2xl tracking-[0.25em]" },
    lg: { img: "h-18 md:h-22", text: "text-2xl md:text-3xl tracking-[0.28em]" },
    xl: { img: "h-24 md:h-28", text: "text-3xl md:text-4xl tracking-[0.3em]" },
    "2xl": { img: "h-32 md:h-40", text: "text-4xl md:text-5xl tracking-[0.32em]" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Geometric Logo Container with Gold Ambient Halo */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Halo Ring (Always subtle, intensifies on hover) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C9A84C]/35 via-[#E8D5A3]/25 to-[#37ABFD]/20 blur-md opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

        {/* SVG Mark */}
        <div className="relative overflow-hidden rounded-xl p-1 flex items-center justify-center bg-gradient-to-b from-[#0F172A]/70 to-[#030712]/90 border border-[#C9A84C]/30 shadow-[0_0_18px_rgba(201,168,76,0.25)] group-hover:border-[#C9A84C]/60 transition-all duration-300">
          <img
            src="/novara-logo.svg"
            alt="Novara Logo"
            className={`${imgClassName || currentSize.img} w-auto object-contain transition-all duration-500 group-hover:scale-108 group-hover:-rotate-2 group-hover:brightness-125 filter drop-shadow-[0_0_14px_rgba(201,168,76,0.55)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:drop-shadow-[0_0_26px_rgba(201,168,76,0.9)]`}
          />
          {/* Light Sweep Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-['Aquire',sans-serif] ${currentSize.text} font-bold text-[#EDF0F5] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFF6DD] group-hover:via-[#E8D5A3] group-hover:to-[#C9A84C] transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(201,168,76,0.5)]`}>
            {brandName}
          </span>
        </div>
      )}
    </div>
  );
};

export default NovaraLogo;
