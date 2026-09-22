import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection({ onOpenCheckout }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How will I receive the Google Business Profile Consultation Guide?",
      a: "Immediately upon completing the ₹499 payment, you will be redirected to an instant download screen to get the high-resolution PDF guide. You will also receive an email with your permanent download link so you can access it anytime on your phone, tablet, or laptop."
    },
    {
      q: "Is this guide suitable for beginners with no SEO knowledge?",
      a: "Yes, 100%. Rashid wrote this guide in plain, easy-to-understand language. It avoids confusing technical jargon and provides clear step-by-step instructions with real-world examples from 350+ local businesses."
    },
    {
      q: "Will I need to pay for Google Ads or any expensive SEO tools?",
      a: "No. This guide is specifically designed to help you generate 100% FREE, organic enquiries using the free Google Business Profile tool and free local search strategies."
    },
    {
      q: "How soon can I expect to see improvements in my visibility?",
      a: "While results depend on your location and competition, many businesses notice increased impressions, search appearances, and direction requests within 2 to 4 weeks of executing the profile optimization and review strategies."
    },
    {
      q: "Why is it priced at only ₹499 instead of ₹2,499?",
      a: "This is a limited-time promotional launch pricing (80% OFF) by Beezy Solutions to help local entrepreneurs and small business owners discover the power of organic Google search before our next consulting intake."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all border ${
                  isOpen 
                    ? 'bg-emerald-50/60 border-emerald-300 shadow-sm' 
                    : 'bg-white border-slate-200/80 hover:border-emerald-200 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </div>

                {isOpen && (
                  <p className="mt-3 pt-3 border-t border-emerald-200/60 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
