import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Lock
} from 'lucide-react';
import BeezyLogo from './BeezyLogo';

export default function LegalModal({ isOpen, onClose, initialTab = 'terms' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#051316] border-2 border-emerald-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-emerald-500/20 text-white overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40 shrink-0">
          <div className="flex items-center gap-3">
            <BeezyLogo size="small" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Legal Policies & Compliance</span>
              </h3>
              <p className="text-[11px] text-slate-400">Beezy Solutions · Kochi, Kerala, India</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#082227] text-slate-400 hover:text-white flex items-center justify-center hover:bg-emerald-950 transition border border-emerald-500/20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#02090b] rounded-xl border border-emerald-950 my-4 shrink-0 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-emerald-950/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Policy Content Area */}
        <div className="grow overflow-y-auto pr-2 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar">
          
          {/* TAB 1: TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">Last Updated: September 2026</span>
                <h4 className="text-base sm:text-lg font-bold text-white">Terms and Conditions of Purchase & Service</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Please read these terms carefully before purchasing the Google Business Profile Consultation PDF / digital guides provided by Beezy Solutions.
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">1</span>
                  Overview & Acceptance of Terms
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  This website and digital product are operated by <strong>Beezy Solutions</strong>, headquartered in Kochi, Kerala, India. By accessing our website, purchasing, or downloading the <em>Google Business Profile Consultation Guide</em>, you agree to be bound by these Terms & Conditions. If you do not agree to all terms, you may not access or download our materials.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">2</span>
                  Digital Product Nature & Delivery Policy
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  The product is an electronic digital download (PDF format / associated digital resource checklists). 
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                  <li><strong>Instant Delivery:</strong> Access is provided immediately on the payment success screen and sent via automated confirmation email.</li>
                  <li><strong>No Physical Goods:</strong> Zero physical shipping is required, and no physical parcel will be shipped.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">3</span>
                  Intellectual Property & Single-User License
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Upon verified purchase of ₹499 (or active promotional rate), Beezy Solutions grants you a single, non-exclusive, non-transferable, revocable license for individual business or personal implementation.
                </p>
                <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs text-red-200">
                  <strong>Strictly Prohibited:</strong> You may not resell, sub-license, upload to public torrents/drives, modify and re-brand, or commercially distribute this material to third parties without prior written consent from Beezy Solutions.
                </div>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">4</span>
                  Pricing, Taxes & Payment Processing
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  All transactions are billed in Indian Rupees (INR - ₹). Payments are processed through secure, 256-bit SSL encrypted, RBI-compliant payment gateways supporting UPI (Google Pay, PhonePe, Paytm), Debit/Credit Cards, and NetBanking. We do not store your private bank credentials or card CVV.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">5</span>
                  Earnings & Ranking Disclaimer
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  The strategies in this guide reflect real consulting insights from 350+ audits. However, individual ranking positions on Google Maps depend on external variables including local market competition, keyword search volumes, proximity, business category, and Google's ongoing algorithm updates. Beezy Solutions does not guarantee specific monetary earnings or guaranteed #1 rankings.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">6</span>
                  Trademark Notice
                </h5>
                <p className="text-slate-400 text-xs">
                  Google, Google Maps, and Google Business Profile are registered trademarks of Google LLC. Beezy Solutions is an independent digital consulting practice and is not affiliated with, endorsed by, or sponsored by Google LLC.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">7</span>
                  Governing Law & Legal Jurisdiction
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  These terms shall be governed by and construed under the laws of the Republic of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ernakulam / Kochi, Kerala, India</strong>.
                </p>
              </section>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
                <h4 className="text-base sm:text-lg font-bold text-white">Privacy & Data Protection Policy</h4>
                <p className="text-xs text-slate-400 mt-1">
                  How Beezy Solutions collects, protects, and handles your personal details.
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400">1. Information We Collect</h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  We believe in minimal data collection. When you purchase our guide, only the necessary details required to complete your transaction and provide digital access are processed:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                  <li><strong>Email Address &amp; Phone Number:</strong> Entered during payment checkout to receive your payment receipt and guide access confirmation.</li>
                  <li><strong>Payment Transaction ID:</strong> Generated by the secure payment gateway (Razorpay) to verify and unlock your digital guide download.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400">2. Payment Data Security</h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  We prioritize your financial security. All credit card, debit card, UPI, and banking transactions are processed directly by PCI-DSS compliant, encrypted payment gateways. <strong>Beezy Solutions never views or stores your private card CVVs, PINs, or UPI passwords.</strong>
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-bold text-emerald-400">3. Zero Spam & Data Selling Commitment</h5>
                <p className="text-slate-300 text-xs sm:text-sm">
                  We respect your privacy. We will <strong>never sell, rent, or trade your personal information</strong> to third-party telemarketers or advertisers. You may unsubscribe from educational email updates at any time with a single click.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted & RBI Compliant</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition text-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
