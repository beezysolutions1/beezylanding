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
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#030d0f]/95 border-t border-emerald-500/30 p-3 sm:py-3.5 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-slideUp">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* Left info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center p-1.5 shrink-0 shadow">
            <BeezyIcon className="w-full h-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white leading-none">
                Google Business Profile Guide
              </span>
              <span className="hidden sm:inline-block text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                80% OFF
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 hidden xs:block">
              Payment → Instant PDF Download
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-lg sm:text-xl font-display font-black text-emerald-300">
              ₹499
            </span>
            <span className="text-xs text-slate-500 line-through ml-1.5 hidden sm:inline">
              ₹2,499
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>GET GUIDE NOW</span>
          </button>
        </div>

      </div>
    </div>
  );
}
