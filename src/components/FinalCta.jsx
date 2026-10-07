import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Zap, 
  Clock, 
  ArrowRight, 
  Lock,
  CheckCircle2
} from 'lucide-react';

export default function FinalCta({ onOpenCheckout }) {
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev > 0) return prev - 1;
        setMinutes(m => (m > 0 ? m - 1 : 45));
        return 59;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n) => String(n).padStart(2, '0');

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main CTA Card */}
        <div className="rounded-3xl p-6 sm:p-12 bg-gradient-to-b from-emerald-50 via-teal-50/40 to-white border-2 border-emerald-400 shadow-2xl shadow-emerald-500/10 text-center">
          
          {/* Top urgency tag */}
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-emerald-800 mb-6 animate-pulse">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>80% OFF • Few Days Left</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            YOUR NEXT CUSTOMER COULD ALREADY BE <span className="emerald-gradient-text">SEARCHING ON GOOGLE.</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl font-semibold text-slate-700">
            Learn how to make your business easier to find.
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Get the <strong className="text-slate-900 font-bold">Google Business Profile Lead Generation Guide</strong> and start implementing strategies to build your organic visibility.
          </p>

          {/* Pricing Stack */}
          <div className="mt-8 inline-flex flex-col items-center bg-white border border-emerald-200/80 rounded-3xl p-4 sm:p-6 w-full max-w-md shadow-lg">
            
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-4xl sm:text-5xl font-black font-display text-slate-900">
                ₹499
              </span>
              <span className="text-xl text-slate-400 line-through">
                ₹2,499
              </span>
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                80% OFF
              </span>
            </div>

            {/* Countdown mini pill */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600 font-mono font-medium">
              <span>Price increases when timer expires:</span>
              <span className="bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-bold text-emerald-800">
                {format(minutes)}:{format(seconds)}
              </span>
            </div>

            {/* Main Action Button */}
            <button
              onClick={onOpenCheckout}
              className="mt-6 w-full relative group overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-black text-lg sm:text-xl py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Download className="w-5 h-5 text-white" />
              <span>GET ACCESS NOW FOR ₹499</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Micro assurances */}
            <div className="mt-4 space-y-1.5 text-center">
              <p className="text-xs font-bold text-emerald-700 flex items-center justify-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                Payment → Download the PDF guide instantly
              </p>
              <p className="text-[11px] text-slate-400">
                Limited-time offer. Grab your copy before the offer ends.
              </p>
            </div>

          </div>

          {/* Guarantee / Security points */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-xs text-slate-600">
            <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Instant Download link</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Lifetime PDF Updates</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
