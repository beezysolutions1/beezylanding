import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  Headphones, 
  Zap, 
  CheckCircle2, 
  Award,
  Sparkles,
  CreditCard
} from 'lucide-react';
import { BeezyIcon } from './BeezyLogo';

export default function TrustGuaranteeSection() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade 256-Bit SSL Security",
      desc: "Transactions processed through encrypted UPI & RBI-compliant gateway pipelines. Your information is 100% private.",
      badge: "Encrypted & Safe",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      icon: Zap,
      title: "Instant PDF Delivery (Zero Wait)",
      desc: "Immediate download on payment confirmation screen plus permanent backup link sent directly to your email.",
      badge: "Instant Access",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
    },
    {
      icon: RefreshCw,
      title: "Lifetime Algorithm Updates",
      desc: "When Google updates its local Maps ranking algorithms, you receive updated guide revisions free of charge.",
      badge: "Free Future Revisions",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      icon: Award,
      title: "Battle-Tested on 350+ Profiles",
      desc: "Every framework was audited across real clinics, consultancies, academies, and service studios in Kerala & UAE.",
      badge: "100% Practical Proof",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Buyer Protection & Trust Standard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            WHY OVER <span className="emerald-gradient-text">1,280+ BUSINESS OWNERS</span> TRUST BEEZY
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Backed by official consulting credentials, encrypted payment infrastructure, and lifetime knowledge updates.
          </p>
        </div>

        {/* 4 Trust Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 hover:border-emerald-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                    {item.badge}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mt-2.5 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Beezy Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Methods & Security Strip */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Supported Secure Payment Options</h4>
              <p className="text-[11px] text-slate-500">Google Pay, PhonePe, Paytm, BHIM UPI, All Debit/Credit Cards & Net Banking</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold bg-white border border-slate-200 px-3 py-1 rounded-xl text-slate-700 shadow-xs">
              ⚡ UPI Instant Pay
            </span>
            <span className="text-[11px] font-bold bg-white border border-slate-200 px-3 py-1 rounded-xl text-slate-700 shadow-xs">
              🔒 256-Bit SSL
            </span>
            <span className="text-[11px] font-bold bg-white border border-slate-200 px-3 py-1 rounded-xl text-slate-700 shadow-xs">
              ✓ Verified Merchant
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
