import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { BeezyIcon } from './BeezyLogo';

export default function StickyBar({ onOpenCheckout }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#030d0f]/95 border-t border-emerald-500/30 p-2.5 sm:py-3.5 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-slideUp">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-2">
        
        {/* Left info */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center p-1.5 shrink-0 shadow">
            <BeezyIcon className="w-full h-full" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-white leading-none truncate">
                GBP Mastery Guide
              </span>
              <span className="hidden sm:inline-block text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full shrink-0">
                80% OFF
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate hidden xs:block">
              Instant PDF Download
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="text-right">
            <span className="text-base sm:text-xl font-display font-black text-emerald-300">
              ₹499
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 line-through ml-1 hidden xs:inline">
              ₹2,499
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 shrink-0" />
            <span>GET NOW</span>
          </button>
        </div>

      </div>
    </div>
  );
}
