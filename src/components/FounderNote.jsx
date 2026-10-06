import React from 'react';
import { 
  MapPin, 
  Award, 
  Quote, 
  Building
} from 'lucide-react';
import founderImg from '../assets/rashid_founder.jpg';

export default function FounderNote() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Executive Container */}
        <div className="relative rounded-3xl bg-white border border-emerald-500/20 shadow-xl shadow-slate-200/50 overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left Column: Premium Founder Portrait & Brand Badge */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm">
                
                {/* Photo Frame with subtle emerald ring and shadow */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-2xl shadow-emerald-950/20 border-2 border-emerald-500/30 group">
                  <img 
                    src={founderImg} 
                    alt="Rashid - Founder of Beezy Solutions" 
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Founder Name Overlay inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                      Rashid
                    </h3>
                    <p className="text-xs text-emerald-300 font-semibold mt-0.5">
                      Founder, Beezy Solutions
                    </p>
                  </div>
                </div>

                {/* Clean Subtle Credential Pills */}
                <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-600 font-medium">
                  <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    Kochi, Kerala
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                    <Award className="w-3 h-3 text-emerald-600" />
                    4+ Yrs Consulting
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                    <Building className="w-3 h-3 text-teal-600" />
                    350+ Audits
                  </span>
                </div>

              </div>
            </div>

            {/* Right Column: The Founder's Note Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Core Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                "Reading the guide is the first step. <span className="emerald-gradient-text">Consistent execution</span> is what generates real leads."
              </h2>

              {/* Explanatory Paragraphs */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  The real results come from putting the strategies into action consistently. Your business category, local competition, geographic radius, and profile quality will all influence how fast you rank in the Google 3-Pack.
                </p>

                {/* Pull quote highlight box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-500 text-slate-700 text-xs sm:text-sm leading-relaxed">
                  <p className="font-semibold text-slate-900">
                    This guide gives you a proven, practical starting point — built directly from 350+ client audits and 4+ years of real-world marketing consulting.
                  </p>
                  <p className="text-slate-500 text-xs mt-1.5">
                    It is not a magic get-rich-quick trick; it is a step-by-step local SEO system.
                  </p>
                </div>
              </div>

              {/* Guiding Motto */}
              <div className="pt-2 border-t border-slate-100">
                <p className="font-display font-black text-lg sm:text-xl text-emerald-700 tracking-tight">
                  Learn it. Implement it. Keep improving.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
