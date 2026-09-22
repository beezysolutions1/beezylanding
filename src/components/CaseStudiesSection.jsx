import React from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Star, 
  PhoneCall, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Building
} from 'lucide-react';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      industry: "Dental Implant Clinic",
      location: "Kaloor, Kochi",
      before: "3 to 5 enquiries/month",
      after: "48 verified direct calls/month",
      growth: "+860% Enquiries",
      quote: "Before this, we were spending ₹25,000 monthly on Facebook and Google ads with low conversion. Following Rashid's profile category and review strategy brought us consistent high-ticket implant patients organically.",
      author: "Dr. Thomas M.",
      role: "Lead Prosthodontist"
    },
    {
      industry: "Study Abroad Consultancy",
      location: "Mavoor Road, Calicut",
      before: "Ranked #14 on Page 2",
      after: "Top #1 in Google 3-Pack for 'UK & Germany student visa'",
      growth: "#1 Rank Achieved",
      quote: "Our competitors had 500+ reviews, but their profiles were keyword-stuffed and penalized. We optimized our specific sub-services and geotagged updates. In 3 weeks, student walk-ins doubled.",
      author: "Nithin K.",
      role: "Managing Director"
    },
    {
      industry: "Luxury Villa & Interior Studio",
      location: "Kowdiar, Trivandrum",
      before: "Zero organic website visits from maps",
      after: "320+ monthly website visits & WhatsApp leads",
      growth: "+420% Direction Requests",
      quote: "The review acquisition script alone was worth 100x the price. Our clients actually started writing long, descriptive reviews mentioning our exact interior design keywords.",
      author: "Anjali S.",
      role: "Principal Architect"
    }
  ];

  return (
    <section id="results" className="py-16 md:py-24 bg-slate-100/70 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Results & Transformations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            PROVEN STRATEGIES FROM <span className="emerald-gradient-text">350+ REAL BUSINESS AUDITS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See how service businesses across Kerala & Bangalore transformed their organic Google enquiries without ad spend.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div 
              key={item.author}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    {item.location}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                    {item.growth}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                  {item.industry}
                </h3>

                {/* Before vs After Metric Bar */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 mb-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Before:</span>
                    <span className="text-slate-700 font-medium">{item.before}</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-800 pt-1 border-t border-slate-200/80">
                    <span>After GBP Guide:</span>
                    <span>{item.after}</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.author}</h4>
                  <p className="text-[11px] text-slate-500">{item.role}</p>
                </div>
                <div className="ml-auto flex text-amber-400 text-xs">
                  ★★★★★
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
