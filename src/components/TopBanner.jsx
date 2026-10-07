import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, Zap } from 'lucide-react';

export default function TopBanner({ onOpenCheckout }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 23, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className="bg-[#020a0c] text-white text-xs font-medium py-2 px-3 sm:px-4 shadow-sm sticky top-0 z-50 border-b border-emerald-500/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Left Urgency Badges */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="shrink-0 uppercase tracking-wider font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-display shadow-xs">
            80% OFF
          </span>
          <span className="hidden md:inline text-slate-200 font-semibold tracking-tight truncate">
            Special Launch Promotional Pricing • <span className="text-emerald-400 font-bold">Few Days Left</span>
          </span>
          <span className="md:hidden text-slate-200 font-semibold text-[11px] truncate">
            Launch Price ₹499
          </span>
        </div>

        {/* Right Countdown & Quick CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1 bg-emerald-950/70 border border-emerald-500/30 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono font-bold text-emerald-300 shadow-inner">
            <Timer className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>{format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}</span>
          </div>

          <button 
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-display font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Claim</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
