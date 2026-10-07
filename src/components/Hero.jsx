import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  Smartphone
} from 'lucide-react';

export default function Hero({ onOpenCheckout }) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Soft ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-emerald-400/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Google Business Profile Mastery Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>4+ Yrs Exp · 350+ Business Audits Completed</span>
          </div>
        </div>

        {/* Main Centered Hero Layout */}
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold tracking-tight leading-[1.18] sm:leading-[1.12] text-slate-900">
            START GETTING <span className="emerald-gradient-text">FREE LEADS</span> FOR YOUR BUSINESS
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto px-2 sm:px-0">
            Learn how to use your Google Business Profile to attract more potential customers — <span className="text-slate-900 font-semibold underline decoration-emerald-500/60 decoration-2 underline-offset-4">without paying for every lead</span>.
          </p>

          {/* Credibility Callout */}
          <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200/80 text-left shadow-sm max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Get the <strong className="text-emerald-800 font-bold">Google Business Profile Consultation PDF</strong>, designed by <strong className="text-slate-900">Rashid</strong>, Founder of Beezy Solutions, based on <strong className="text-emerald-700 font-bold">4+ years of experience</strong> in business and marketing consulting and working with <strong className="text-emerald-700 font-bold">350+ businesses</strong>.
            </p>
            <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>Written in a simple, easy-to-understand way with practical strategies for organic enquiries.</span>
            </div>
          </div>

          {/* Pricing Box & CTA */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-8 rounded-3xl bg-white border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10 max-w-2xl mx-auto text-left">
            
            {/* Price Anchor */}
            <div className="flex flex-wrap items-baseline justify-between gap-2.5 pb-4 border-b border-slate-100">
              <div className="flex items-baseline gap-2.5 sm:gap-3">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
                  ₹499
                </span>
                <span className="text-base sm:text-xl text-slate-400 line-through font-medium">
                  ₹2,499
                </span>
                <span className="bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                  Save 80%
                </span>
              </div>

              <div className="text-right">
                <span className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg">
                  Limited-Time Offer
                </span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="mt-4 sm:mt-5 space-y-3">
              <button
                onClick={onOpenCheckout}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-black text-base sm:text-xl py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-y-0.5 shrink-0" />
                <span className="truncate">GET THE GUIDE FOR ₹499</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              </button>

              {/* Instant Download & Microcopy */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-500 pt-1 text-center">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Zap className="w-3 h-3 text-emerald-600 shrink-0" />
                  Instant browser download
                </span>
                <span className="hidden xs:inline text-slate-300">•</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
                  Few days left at ₹499
                </span>
              </div>
            </div>

            {/* Enhanced Instant Trust Badges */}
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[10px] sm:text-[11px] text-slate-600 font-medium">
              <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-xl bg-slate-50/80 border border-slate-100">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                <span className="font-bold text-slate-800 text-[10px] sm:text-xs">100% Safe</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">256-Bit SSL</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-xl bg-slate-50/80 border border-slate-100">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" />
                <span className="font-bold text-slate-800 text-[10px] sm:text-xs">Instant File</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">PDF Guide</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-xl bg-slate-50/80 border border-slate-100">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                <span className="font-bold text-slate-800 text-[10px] sm:text-xs">UPI / GPay</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">Direct Pay</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
