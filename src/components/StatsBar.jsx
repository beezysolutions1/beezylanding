import React from 'react';
import { Award, TrendingUp, Star, Zap, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      value: "350+",
      unit: "Profiles",
      label: "Businesses Audited",
      sublabel: "Across Kerala & UAE",
      icon: Award,
      badge: "Verified Proof",
      accent: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600 bg-emerald-100/80 border-emerald-200"
    },
    {
      value: "10x",
      unit: "Growth",
      label: "Average Organic Views",
      sublabel: "In Google Maps 3-Pack",
      icon: TrendingUp,
      badge: "Top #1 Rank Signal",
      accent: "from-teal-500/10 to-cyan-500/10",
      iconColor: "text-teal-600 bg-teal-100/80 border-teal-200"
    },
    {
      value: "₹0",
      unit: "Ad Spend",
      label: "Ad Budget Required",
      sublabel: "100% Free Organic Enquiries",
      icon: Zap,
      badge: "Zero Cost Per Lead",
      accent: "from-emerald-500/10 to-mint-500/10",
      iconColor: "text-emerald-600 bg-emerald-100/80 border-emerald-200"
    },
    {
      value: "4.9/5",
      unit: "Rating",
      label: "Client Satisfaction",
      sublabel: "240+ Verified Reviews",
      icon: Star,
      badge: "⭐⭐⭐⭐⭐",
      accent: "from-amber-500/10 to-emerald-500/10",
      iconColor: "text-amber-500 bg-amber-100/80 border-amber-200"
    }
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-200/60 backdrop-blur-md">
        
        {/* Top Micro Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Beezy Solutions Real-World Impact
            </span>
          </div>
          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Audited & Verified Consulting Data
          </span>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4.5 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.iconColor} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                      {stat.value}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-snug">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-500 mt-2.5 pt-2 border-t border-slate-200/60 font-medium">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
