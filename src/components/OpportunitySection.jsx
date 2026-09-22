import React from 'react';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Check, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Navigation
} from 'lucide-react';

export default function OpportunitySection({ onOpenCheckout }) {

  return (
    <section id="overview" className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-4">
            <Search className="w-3.5 h-3.5 text-emerald-600" />
            <span>Organic Google Discovery</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight uppercase">
            LEARN HOW TO GET <span className="emerald-gradient-text">FREE LEADS</span> FROM GOOGLE
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Your potential customers are <strong className="text-slate-900">already searching</strong> for services like yours on Google.
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            This guide shows you how to improve your Google Business Profile, increase your visibility on Google Search & Maps, and create more opportunities to turn searches into enquiries.
          </p>
        </div>

        {/* Interactive Search Intent Demo & Comparison */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Google Search Mockup Box */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-emerald-700 font-semibold">Google Local Search & 3-Pack</span>
            </div>

            {/* Google Search Bar Simulation */}
            <div className="mt-4 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3">
              <Search className="w-4 h-4 text-emerald-600" />
              <div className="text-xs sm:text-sm text-slate-800">
                <span className="font-medium text-slate-900">best service near me</span>
                <span className="animate-pulse text-emerald-600 font-bold">|</span>
              </div>
              <span className="ml-auto text-[10px] text-slate-400 font-mono">Kochi, Kerala</span>
            </div>

            {/* Google Local Pack Simulation Card */}
            <div className="mt-4 space-y-3">
              {/* Highlighted #1 Result - Optimized with Beezy Guide */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-white border-2 border-emerald-400 shadow-md relative">
                <span className="absolute top-3 right-3 text-[10px] font-extrabold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  ⭐ Top #1 Rank
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0 border border-emerald-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pr-16">
                    <h4 className="text-sm font-bold text-slate-900">Your Business Name</h4>
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 mt-0.5">
                      <span className="font-bold text-slate-900">5.0</span>
                      <span>★★★★★</span>
                      <span className="text-slate-500 text-[11px]">(140+ verified reviews)</span>
                    </div>
                    <p className="text-[11px] text-emerald-800 font-medium mt-1 flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-emerald-600" />
                      Receiving daily direct calls & enquiries (₹0 Ad Spend)
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">Ranked via Beezy GBP Strategy</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> High Enquiry Rate
                  </span>
                </div>
              </div>

              {/* Unoptimized Result */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 opacity-70">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Competitor (Incomplete Profile, No Local Keywords)</span>
                  <span className="text-red-500 font-medium text-[11px]">Buried on Page 2</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 text-center italic">
              "Over 76% of people who search on their smartphone for something nearby visit a business within 24 hours."
            </p>
          </div>

          {/* Right: Paid Ads vs Organic Leads Comparison */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Organic Google Leads Benefit Box */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-300 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Check className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full p-0.5" />
                <span>The Long-Term Organic Asset Strategy</span>
              </div>
              
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Zero cost per lead:</strong> Never pay ₹50-₹500 every time someone clicks your business.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>High Buyer Intent:</strong> Customers searching "near me" are ready to call or visit today.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Compounding Trust:</strong> Once ranked in the 3-Pack, you get free daily enquiries for months and years.</span>
                </li>
              </ul>

              <div className="pt-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl font-medium">
                💡 This guide lays out the step-by-step blueprint to rank without complex jargon.
              </div>
            </div>

            {/* CTA Container */}
            <div className="pt-2 text-center sm:text-left space-y-3">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>SEE HOW TO GET MORE ORGANIC ENQUIRIES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-slate-500 font-medium">
                Get the complete guide today for just <strong className="text-slate-900">₹499</strong> · <span className="text-emerald-700 font-bold">80% OFF • Limited-Time Offer</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
