import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  Download, 
  Zap, 
  ArrowRight, 
  FileCheck,
  AlertCircle,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BeezyLogo from './BeezyLogo';

export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_TPA7q1NxbassQE";
export const RAZORPAY_PAGE_URL = "https://rzp.io/rzp/zPXIWVk";

export default function CheckoutModal({ isOpen, onClose, onOpenLegal }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const isTestMode = !RAZORPAY_KEY_ID || RAZORPAY_KEY_ID.startsWith('rzp_test_');

  const handlePayWithRazorpay = (e) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    // Directly launch the verified Razorpay payment endpoint (prevents RBI order_id client popup errors)
    window.location.href = RAZORPAY_PAGE_URL;
  };

  const completePaymentSimulation = (simId) => {
    setIsProcessing(false);
    setPaymentId(simId);
    setIsSuccess(true);
    setTimeout(() => {
      triggerFileDownload(simId);
    }, 600);
    try {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#00df9a', '#10b981', '#14b8a6', '#ffffff']
      });
    } catch (err) {}
  };

  const triggerFileDownload = (pId) => {
    const link = document.createElement('a');
    link.href = '/Google-Business-Profile-Guide.pdf';
    link.download = 'Google-Business-Profile-Guide.pdf';
    
    link.onerror = () => {
      downloadGeneratedGuide(pId);
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadGeneratedGuide = (pId) => {
    const content = `===================================================================
BEEZY SOLUTIONS · GOOGLE BUSINESS PROFILE CONSULTATION BLUEPRINT
===================================================================
Author: Rashid (Founder, Beezy Solutions, Kochi, Kerala)
Official Purchase Receipt & Lifetime Guide License
Payment Reference ID: ${pId || paymentId || 'BEEZY-VERIFIED-' + Date.now()}
===================================================================

CHAPTER 1: PROFILE ARCHITECTURE & AUTHORITY
• Primary Category Dominance (How 1 category choice dictates 70% of rank)
• Secondary Category stacking without keyword stuffing
• Service area perimeter locking vs physical storefront address

CHAPTER 2: GOOGLE MAPS 3-PACK CONQUEST
• Geo-tagging photo metadata strategies
• Weekly GBP post cadence with conversion action buttons
• Products & Services catalogue structuring for direct search queries

CHAPTER 3: THE HIGH-CONVERTING REVIEW ENGINE
• Exact WhatsApp review request script with 65%+ conversion rate
• Keyword-rich review responses (Training the Google algorithm organically)
• Defusing and turning around negative 1-star reviews

CHAPTER 4: THE 15-MINUTE WEEKLY MAINTENANCE CHECKLIST
• Monday 9 AM: Upload 3 high-res customer/worksite photos
• Wednesday 11 AM: Publish a special offer or event post
• Friday 4 PM: Reply to all incoming reviews & update Q&A

===================================================================
Need personalized implementation assistance?
Contact Beezy Solutions · Kochi, Kerala · https://beezysolutions.in
===================================================================`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Beezy-Solutions-GBP-Consultation-Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn" data-lenis-prevent>
      <div 
        className="relative w-full max-w-lg bg-[#06171a] border-2 border-emerald-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl shadow-emerald-500/20 text-white overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#082227] text-slate-400 hover:text-white flex items-center justify-center hover:bg-emerald-950 transition border border-emerald-500/20 cursor-pointer"
          aria-label="Close checkout"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-emerald-900/40 pr-9 sm:pr-10">
              <BeezyLogo size="small" />
              <div>
                {isTestMode ? (
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-400" /> TEST MODE ACTIVE
                  </span>
                ) : (
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> RAZORPAY VERIFIED
                  </span>
                )}
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="my-4 sm:my-5 p-3.5 sm:p-5 rounded-2xl bg-[#030a0c] border border-emerald-900/40 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="truncate pr-2">Google Business Profile Consultation Guide</span>
                <span className="line-through text-slate-500 shrink-0">₹2,499</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Launch Discount (80% OFF)</span>
                <span>- ₹2,000</span>
              </div>
              <div className="pt-2.5 border-t border-emerald-950 flex justify-between items-center text-sm font-bold text-white">
                <div>
                  <span>Total Amount Due</span>
                  <span className="text-[10px] text-slate-400 block font-normal">Lifetime digital access</span>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl text-emerald-300 font-display font-black">₹499</span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-400/80 block font-normal">All taxes included</span>
                </div>
              </div>
            </div>

            {/* Included Value Highlights */}
            <div className="space-y-1.5 sm:space-y-2 mb-4 px-0.5">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                </div>
                <span><strong>Instant PDF Download:</strong> Direct in browser</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                </div>
                <span><strong>4 Bonus Assets:</strong> Review templates &amp; WhatsApp scripts</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                </div>
                <span><strong>Lifetime Updates:</strong> For new Google local ranking rules</span>
              </div>
            </div>

            {/* Accepted Methods Badge */}
            <div className="p-2.5 sm:p-3 bg-[#082227]/70 rounded-xl sm:rounded-2xl border border-emerald-500/20 mb-4 text-center">
              <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 block mb-1 flex items-center justify-center gap-1">
                <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                Pay with any Indian UPI or Card:
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-slate-200 tracking-wide">
                Google Pay • PhonePe • Paytm • UPI QR • Cards
              </span>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 rounded-xl text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1-Click Razorpay Pay Button */}
            <button
              onClick={handlePayWithRazorpay}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-sm sm:text-base py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:scale-[1.01] active:scale-95"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs sm:text-sm">Connecting to Razorpay...</span>
                </div>
              ) : (
                <>
                  <Lock className="w-4 h-4 shrink-0" />
                  <span className="truncate">PAY ₹499 &amp; DOWNLOAD INSTANTLY</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
                </>
              )}
            </button>

            {onOpenLegal && (
              <p className="text-[10px] text-center text-slate-500 pt-3">
                By clicking Pay, you agree to our{' '}
                <button 
                  type="button" 
                  onClick={() => onOpenLegal('terms')} 
                  className="text-emerald-400 hover:underline cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>{' '}
                &amp;{' '}
                <button 
                  type="button" 
                  onClick={() => onOpenLegal('privacy')} 
                  className="text-emerald-400 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </button>.
              </p>
            )}

            {/* Footer security badges */}
            <div className="mt-4 pt-3 border-t border-emerald-950 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                256-Bit Bank-Grade Encryption
              </span>
              <span className="text-emerald-400 font-medium">Instant PDF Download</span>
            </div>
          </div>
        ) : (
          /* Payment Success Screen */
          <div className="text-center py-4 space-y-4 sm:space-y-5 animate-fadeIn">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
                Payment Successful • ₹499 Verified
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-3">
                Your Guide Is Ready!
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                Thank you for choosing Beezy Solutions! Your download has started automatically.
              </p>
              {paymentId && (
                <p className="text-[10px] font-mono text-emerald-400/80 mt-1">
                  Payment Reference ID: {paymentId}
                </p>
              )}
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#030a0c] border border-emerald-500/30 text-left flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="grow min-w-0">
                <h4 className="text-xs font-bold text-white truncate">
                  Google-Business-Profile-Guide.pdf
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                  Full Consultation Blueprint · By Rashid
                </p>
              </div>
            </div>

            <button
              onClick={() => triggerFileDownload(paymentId)}
              className="w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-sm sm:text-base py-3.5 px-6 rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>DOWNLOAD AGAIN</span>
            </button>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
