import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  Download, 
  QrCode, 
  CreditCard, 
  Smartphone, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  FileCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BeezyLogo, { BeezyIcon } from './BeezyLogo';

export default function CheckoutModal({ isOpen, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'qr'
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00df9a', '#10b981', '#14b8a6', '#ffffff']
        });
      } catch (err) {}
    }, 1200);
  };

  const handleSimulateDownload = () => {
    const content = `=====================================================
BEEZY SOLUTIONS - GOOGLE BUSINESS PROFILE CONSULTATION GUIDE
Designed by Rashid - Founder, Beezy Solutions (Kochi, Kerala)
=====================================================

Thank you for your purchase!

TABLE OF CONTENTS:
1. Google Business Profile Authority Setup
2. Conquering the Google Maps 3-Pack
3. High-Intent Local Keywords Strategy
4. Trust & Review Generation Machine
5. Avoiding Shadowbans and Profile Suspensions
6. The 15-Minute Weekly Organic Lead Maintenance Blueprint

Designed by Rashid | 4+ Years Experience | 350+ Business Audits
Beezy Solutions · Digital Marketing & Consulting Company · Kochi, Kerala
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Beezy-Solutions-Google-Business-Profile-Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#06171a] border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-500/20 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#082227] text-slate-400 hover:text-white flex items-center justify-center hover:bg-emerald-950 transition border border-emerald-500/20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-emerald-900/40">
              <BeezyLogo size="small" />
              <div className="ml-auto pr-8">
                <span className="text-[10px] font-mono font-bold bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded">
                  OFFICIAL CHECKOUT
                </span>
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="my-5 p-4 rounded-2xl bg-[#030a0c] border border-emerald-900/40 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Original Price</span>
                <span className="line-through text-slate-500">₹2,499</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Promotional Discount (80% OFF)</span>
                <span>- ₹2,000</span>
              </div>
              <div className="pt-2 border-t border-emerald-950 flex justify-between text-sm font-bold text-white">
                <span>Total Amount Due</span>
                <span className="text-base text-emerald-300 font-display font-black">₹499</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Select Payment Method
              </label>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-2xl border flex flex-col items-center gap-1 text-xs font-semibold transition cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-xs'
                      : 'bg-[#03090b]/80 border-emerald-950 text-slate-400 hover:border-emerald-700'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>UPI / GPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('qr')}
                  className={`p-2.5 rounded-2xl border flex flex-col items-center gap-1 text-xs font-semibold transition cursor-pointer ${
                    paymentMethod === 'qr'
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-xs'
                      : 'bg-[#03090b]/80 border-emerald-950 text-slate-400 hover:border-emerald-700'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>QR Code</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-2xl border flex flex-col items-center gap-1 text-xs font-semibold transition cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-xs'
                      : 'bg-[#03090b]/80 border-emerald-950 text-slate-400 hover:border-emerald-700'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Card / Net</span>
                </button>
              </div>

              {/* Method Forms */}
              <form onSubmit={handlePay} className="mt-4 space-y-4">
                {paymentMethod === 'upi' && (
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Enter UPI ID (Google Pay, PhonePe, Paytm)
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="yourname@okhdfcbank"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full bg-[#030a0c] border border-emerald-900/60 rounded-2xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                )}

                {paymentMethod === 'qr' && (
                  <div className="p-4 rounded-2xl bg-[#030a0c] border border-emerald-900/60 text-center flex flex-col items-center">
                    <div className="w-32 h-32 bg-white p-2 rounded-2xl flex items-center justify-center shadow-md">
                      <div className="w-full h-full border-2 border-dashed border-slate-900 flex flex-col items-center justify-center text-slate-900 font-mono text-[10px] text-center font-bold">
                        <QrCode className="w-16 h-16 text-slate-900 mb-1" />
                        Scan & Pay ₹499
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Scan using Google Pay, PhonePe, Paytm, or BHIM
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-2">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Card Number (4000 1234 5678 9010)"
                        className="w-full bg-[#030a0c] border border-emerald-900/60 rounded-2xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        required
                        placeholder="MM / YY"
                        className="bg-[#030a0c] border border-emerald-900/60 rounded-2xl px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                      <input 
                        type="password" 
                        required
                        maxLength={3}
                        placeholder="CVV"
                        className="bg-[#030a0c] border border-emerald-900/60 rounded-2xl px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Pay Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Verifying Secure Payment...</span>
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>PAY ₹499 & DOWNLOAD INSTANTLY</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Footer security badges */}
            <div className="mt-4 pt-3 border-t border-emerald-950 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                256-Bit Bank Grade SSL
              </span>
              <span className="text-emerald-400 font-medium">Instant PDF Delivery</span>
            </div>
          </div>
        ) : (
          /* Payment Success Screen */
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
                Payment Successful • ₹499 Received
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white mt-3">
                Your Guide Is Ready!
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                Thank you for choosing Beezy Solutions. Your Google Business Profile Consultation Guide is available for instant download below.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#030a0c] border border-emerald-500/30 text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="grow">
                <h4 className="text-xs font-bold text-white">
                  Google-Business-Profile-Guide.pdf
                </h4>
                <p className="text-[11px] text-slate-400">
                  Full Version · Lifetime Access · By Rashid
                </p>
              </div>
            </div>

            <button
              onClick={handleSimulateDownload}
              className="w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD PDF GUIDE NOW</span>
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
