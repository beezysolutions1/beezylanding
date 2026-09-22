import React from 'react';
import { 
  MapPin, 
  Award, 
  HeartHandshake, 
  Quote, 
  Building
} from 'lucide-react';
import BeezyLogo, { BeezyIcon } from './BeezyLogo';

export default function FounderNote() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Transparency Banner Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-white border border-emerald-200/80 shadow-xl shadow-slate-200/60 overflow-hidden">
          
          {/* Subtle watermark quote icon */}
          <div className="absolute -top-4 -right-4 text-emerald-100/40 pointer-events-none">
            <Quote className="w-36 h-36" />
          </div>

          <div className="relative z-10">
            
            {/* Header Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800">
                A QUICK NOTE BEFORE YOU START
              </span>
            </div>

            {/* Note Body Text */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="font-bold text-slate-900 text-lg sm:text-xl">
                Reading the guide is the first step.
              </p>

              <p>
                The real results come from <strong className="text-emerald-800 font-bold">putting the strategies into action consistently</strong>. Your business, competition, location and profile quality can all affect the results.
              </p>

              <p className="text-slate-600 text-sm sm:text-base bg-slate-50 p-4 rounded-2xl border border-slate-200">
                This guide gives you a <strong className="text-slate-900 font-semibold">practical starting point</strong>, but it does not guarantee a specific number of leads.
              </p>

              {/* Motto / Philosophy */}
              <div className="pt-2">
                <p className="font-display font-black text-xl sm:text-2xl emerald-gradient-text tracking-wide">
                  Learn it. Implement it. Keep improving.
                </p>
              </div>
            </div>

            {/* Founder Bio Card */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Founder Avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-display font-black text-2xl flex items-center justify-center shadow-md shadow-emerald-500/20">
                    R
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-black">
                    ✓
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    Rashid
                  </h4>
                  <p className="text-xs text-emerald-700 font-bold">
                    Founder, Beezy Solutions
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-600" />
                    4+ Years Consulting · 350+ Businesses Audited
                  </p>
                </div>
              </div>

              {/* Company Info Box with Official Logo */}
              <div className="sm:text-right bg-slate-50 sm:bg-transparent p-3.5 sm:p-0 rounded-2xl border sm:border-0 border-slate-200 text-xs text-slate-600">
                <div className="flex items-center sm:justify-end gap-2">
                  <BeezyLogo size="small" />
                </div>
                <p className="text-slate-500 text-[11px] mt-1">
                  Digital Marketing & Consulting Company
                </p>
                <p className="text-emerald-700 text-[11px] flex items-center sm:justify-end gap-1 mt-0.5 font-semibold">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  Kochi, Kerala
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
