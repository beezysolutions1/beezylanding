import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Search, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Download
} from 'lucide-react';

export default function ProcessStepsSection({ onOpenCheckout }) {
  const steps = [
    {
      step: "01",
      title: "Audit & Authority Baseline",
      time: "Day 1 Setup",
      description: "Fix hidden listing penalties, configure primary categories correctly, and synchronize NAP data to build baseline algorithmic trust.",
      tags: ["Primary Category Secret", "NAP Synchronization", "Geotagged Assets"]
    },
    {
      step: "02",
      title: "Local Keyword Infiltration",
      time: "Week 1 Optimization",
      description: "Strategically place high-intent local search terms across service menus, descriptions, and update posts without keyword stuffing.",
      tags: ["High-Intent Queries", "Service Menu Optimization", "Zero-Penalty Mapping"]
    },
    {
      step: "03",
      title: "Review Engine & 3-Pack Domination",
      time: "Weeks 2-4 Compounding Growth",
      description: "Deploy automated review acquisition scripts to generate steady 5-star customer reviews that secure #1 positions on Google Maps.",
      tags: ["WhatsApp Review Scripts", "Maps 3-Pack Signals", "Daily Call Generation"]
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50/80 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Proven 3-Step Framework</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            HOW YOU GET TO THE <span className="emerald-gradient-text">TOP OF GOOGLE MAPS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A battle-tested 3-phase execution roadmap developed from 350+ real client audits.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div 
              key={step.step}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 font-display font-black text-xl flex items-center justify-center border border-emerald-200">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-300/80 px-2.5 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4 text-white" />
            <span>START IMPLEMENTING THIS 3-STEP GUIDE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
