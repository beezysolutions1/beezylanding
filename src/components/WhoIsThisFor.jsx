import React from 'react';
import { 
  GraduationCap, 
  Plane, 
  Stethoscope, 
  BookOpen, 
  Scissors, 
  Building2, 
  Scale, 
  Briefcase,
  Download, 
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Check
} from 'lucide-react';

export default function WhoIsThisFor({ onOpenCheckout }) {

  const industries = [
    {
      title: "Study Abroad & Education",
      icon: GraduationCap,
      tag: "High Value Enquiries",
      color: "from-teal-500/15 via-emerald-500/10 to-transparent",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      querySample: '"best study abroad consultants near me"',
      benefit: "Capture students actively searching for admissions, IELTS training & visa consultancy in your city.",
      impact: "+400% Student Calls"
    },
    {
      title: "Travel & Tour Agencies",
      icon: Plane,
      tag: "Direct Holiday Bookings",
      color: "from-emerald-500/15 via-teal-500/10 to-transparent",
      iconBg: "bg-teal-50 text-teal-700 border-teal-200",
      querySample: '"tour packages & flight booking agency"',
      benefit: "Attract vacationers and corporate travel planners searching for trusted local tour operators.",
      impact: "Top 3 Maps Ranking"
    },
    {
      title: "Medical & Dental Clinics",
      icon: Stethoscope,
      tag: "High Patient Trust",
      color: "from-cyan-500/15 via-emerald-500/10 to-transparent",
      iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      querySample: '"best dental implant clinic near me"',
      benefit: "Turn urgent local patient searches into scheduled appointments with high-trust review setups.",
      impact: "Zero Ad Spend"
    },
    {
      title: "Academies & Institutes",
      icon: BookOpen,
      tag: "Admission Enquiries",
      color: "from-teal-500/15 via-emerald-500/10 to-transparent",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      querySample: '"top coaching institute for exams"',
      benefit: "Rank above competitors when parents and candidates search for reputable coaching centers.",
      impact: "+350% Profile Views"
    },
    {
      title: "Salons, Spas & Beauty",
      icon: Scissors,
      tag: "Daily Appointments",
      color: "from-emerald-500/15 via-teal-500/10 to-transparent",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      querySample: '"bridal makeup studio & unisex salon"',
      benefit: "Drive walk-in customers and telephone bookings from high-intent local neighbourhood searches.",
      impact: "Instant Call Inflow"
    },
    {
      title: "Real Estate & Builders",
      icon: Building2,
      tag: "Qualified Buyers",
      color: "from-cyan-500/15 via-teal-500/10 to-transparent",
      iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      querySample: '"property dealers & commercial space"',
      benefit: "Position your firm in front of serious investors and homebuyers looking in your exact locality.",
      impact: "High-Ticket Leads"
    },
    {
      title: "Legal & CA Services",
      icon: Scale,
      tag: "Corporate Clients",
      color: "from-teal-500/15 via-emerald-500/10 to-transparent",
      iconBg: "bg-teal-50 text-teal-700 border-teal-200",
      querySample: '"chartered accountant / GST consultant"',
      benefit: "Establish unbeatable authority for corporate audits, tax filings, and legal advisory.",
      impact: "High-Value Retainers"
    },
    {
      title: "All Local Service Businesses",
      icon: Briefcase,
      tag: "Universal Blueprint",
      color: "from-emerald-500/15 via-teal-500/10 to-transparent",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      querySample: '"contractors, architects, studios near me"',
      benefit: "Consultants, Architects, Photographers, Fitness Studios, Automobile Garages & Home Contractors.",
      impact: "Zero Ad Spend"
    }
  ];

  return (
    <section id="audience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-50 relative overflow-hidden scroll-mt-20">
      
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-4">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Target Audience</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight uppercase">
            WHO IS THIS FOR?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            This guide is <strong className="text-slate-900 font-semibold">especially useful for service-based businesses</strong> that depend on local searches and enquiries.
          </p>
        </div>

        {/* Highlight Banner Pill */}
        <div className="mt-8 max-w-4xl mx-auto bg-white/90 backdrop-blur-md border-2 border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-lg shadow-emerald-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Are customers searching for your service on Google?</p>
              <p className="text-xs text-slate-600">If yes, this system will systematically rank your profile in the top Google 3-Pack.</p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-xl">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> 100% Zero-Ad-Spend System
            </span>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon;

            return (
              <div 
                key={ind.title}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle card top gradient hover effect */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${ind.iconBg}`}>
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-emerald-800 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ind.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout with High-Converting CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-500/40 text-center max-w-3xl mx-auto shadow-xl shadow-emerald-500/10">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ready to Dominate Your Local Area?</span>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-display font-extrabold text-slate-900">
            If your customers search Google for what you do, <span className="text-emerald-700">this guide is for you.</span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Get lifetime access to the exact step-by-step SOPs and rank your profile in the Google Maps 3-Pack.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>GET THE GUIDE FOR ₹499</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <span>⚡ Instant PDF Download</span>
            <span>•</span>
            <span>🔒 256-Bit SSL Encrypted</span>
            <span>•</span>
            <span>📱 UPI / Cards / NetBanking</span>
          </div>
        </div>

      </div>
    </section>
  );
}

