import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Map, 
  Key, 
  Star, 
  AlertTriangle, 
  TrendingUp, 
  Layers, 
  ArrowRight,
  BookOpen,
  ChevronDown
} from 'lucide-react';

export default function WhatYouWillLearn({ onOpenCheckout, onOpenPreview }) {
  const [openItem, setOpenItem] = useState(0);

  const modules = [
    {
      title: "How to improve your Google Business Profile",
      icon: Layers,
      summary: "Set up, verify, and fine-tune your core profile elements so Google recognizes your business as a high-authority local entity.",
      bullets: [
        "Primary & secondary category selection secrets",
        "Optimizing exact business naming without getting suspended",
        "Geotagged photos, working hours, and operational attributes setup"
      ]
    },
    {
      title: "How to increase your Google Maps visibility",
      icon: Map,
      summary: "Rank higher in the coveted Google Maps 3-Pack within your targeted neighborhood and city radius.",
      bullets: [
        "How Google's local ranking algorithm weighs Proximity, Prominence, and Relevance",
        "Expanding your geographic reach beyond your immediate street",
        "Setting up accurate service areas without diluting authority"
      ]
    },
    {
      title: "How to use local keywords effectively",
      icon: Key,
      summary: "Integrate the exact search phrases potential customers type without spamming or violating guidelines.",
      bullets: [
        "Finding high-intent local search terms customers use in your city",
        "Writing compelling service descriptions that rank naturally",
        "Strategic use of services catalog & product showcase tabs"
      ]
    },
    {
      title: "How to build trust through reviews and profile content",
      icon: Star,
      summary: "Turn reviews and social proof into an unstoppable automated enquiry machine.",
      bullets: [
        "The review generation template that gets happy clients to leave 5-star feedback",
        "How to respond to both 5-star and critical reviews with keyword relevance",
        "Posting Google updates & offers that convert searchers into immediate callers"
      ]
    },
    {
      title: "Common mistakes that can affect your visibility",
      icon: AlertTriangle,
      summary: "Avoid subtle errors that trigger shadowbans, profile suspensions, or ranking drops.",
      bullets: [
        "Name keyword-stuffing triggers that cause instant profile flags",
        "Duplicate listings and inconsistent NAP (Name, Address, Phone) issues",
        "Third-party link mistakes and spam protection rules"
      ]
    },
    {
      title: "Practical strategies to generate more organic enquiries",
      icon: TrendingUp,
      summary: "Step-by-step daily and weekly maintenance workflows to keep enquiries flowing in organically.",
      bullets: [
        "Direct call button click tracking & conversion optimization",
        "Direct WhatsApp / Messaging integration setup",
        "15-minute weekly checklist to maintain top rankings effortlessly"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Complete Curriculum Breakdown</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            WHAT YOU’LL <span className="emerald-gradient-text">LEARN</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, actionable lessons created from 4+ years of hands-on client audits. No fluff, just practical execution.
          </p>
        </div>

        {/* 6 Modules Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-4 sm:gap-6">
          {modules.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openItem === idx;

            return (
              <div 
                key={item.title}
                onClick={() => setOpenItem(isOpen ? null : idx)}
                className={`cursor-pointer rounded-3xl p-5 sm:p-6 transition-all duration-200 border ${
                  isOpen 
                    ? 'bg-emerald-50/60 border-emerald-400 shadow-lg shadow-emerald-500/10' 
                    : 'bg-white border-slate-200/80 hover:border-emerald-300 hover:shadow-md shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-emerald-200/80 space-y-2 text-xs text-slate-700 animate-fadeIn">
                    <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-wider">
                      Key Takeaways Inside the Guide:
                    </p>
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-slate-700">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>LEARN THE STRATEGY</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <span>Instant PDF Download</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">Special ₹499 Price</span>
            <span>•</span>
            <span>Lifetime Access</span>
          </div>
        </div>

      </div>
    </section>
  );
}
