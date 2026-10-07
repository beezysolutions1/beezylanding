import React from 'react';
import { 
  Gift, 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  Key, 
  ShieldAlert, 
  Download, 
  ArrowRight
} from 'lucide-react';

export default function BonusStackSection({ onOpenCheckout }) {
  const bonuses = [
    {
      badge: "FREE BONUS #1",
      val: "Worth ₹999",
      title: "The 15-Minute Weekly GBP Maintenance Checklist",
      desc: "A quick 7-point audit routine you can execute every Monday morning to keep your business ranking above competitors permanently.",
      icon: FileText
    },
    {
      badge: "FREE BONUS #2",
      val: "Worth ₹1,499",
      title: "5-Star WhatsApp & SMS Review Request Templates",
      desc: "Pre-written, polite, high-converting WhatsApp message scripts and direct short-link templates to request reviews without feeling awkward.",
      icon: MessageSquare
    },
    {
      badge: "FREE BONUS #3",
      val: "Worth ₹1,299",
      title: "Local Keyword Placement Blueprint (Cheat Sheet)",
      desc: "A categorized spreadsheet of top high-intent keyword structures across 15+ major service industries in Kerala, Bangalore & Gulf region.",
      icon: Key
    },
    {
      badge: "FREE BONUS #4",
      val: "Worth ₹1,199",
      title: "Google Suspension Prevention & Instant Appeal Protocol",
      desc: "Crucial guidelines on avoiding sudden algorithmic suspensions and exactly what documents to submit if Google ever flags your listing.",
      icon: ShieldAlert
    }
  ];

  return (
    <section id="bonuses" className="py-16 md:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold text-amber-800 mb-4 shadow-xs">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>Included 100% Free with Your Purchase</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            GET 4 EXCLUSIVE BONUSES <span className="emerald-gradient-text">(WORTH ₹4,999) FREE</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            When you grab the Google Business Profile Consultation Guide today for ₹499, you get instant access to all 4 execution toolkits at zero extra cost.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div 
                key={bonus.title}
                className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-7 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-extrabold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-full">
                      {bonus.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 line-through">
                      {bonus.val}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {bonus.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {bonus.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Instant PDF download included upon checkout</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combined Value Box & CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-white border-2 border-emerald-300 text-center max-w-3xl mx-auto shadow-xl">
          <p className="text-xs uppercase tracking-widest text-emerald-800 font-extrabold">
            Total Value Breakdown
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 mb-4">
            <span className="text-sm sm:text-base text-slate-500">
              Guide (₹2,499) + 4 Bonuses (₹4,999) = <span className="line-through">₹7,498</span>
            </span>
            <span className="text-2xl sm:text-3xl font-display font-black text-slate-900">
              Today Only: ₹499
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4 text-white" />
            <span>CLAIM THE GUIDE & ALL 4 BONUSES FOR ₹499</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
