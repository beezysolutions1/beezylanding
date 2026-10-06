import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { BeezyIcon } from './BeezyLogo';

const buyers = [
  { name: 'Arun K.', city: 'Kochi', business: 'Dental Clinic', time: '2m ago' },
  { name: 'Sameer V.', city: 'Kozhikode', business: 'Study Abroad Agency', time: '5m ago' },
  { name: 'Meera N.', city: 'Trivandrum', business: 'Beauty Lounge', time: '9m ago' },
  { name: 'Mohammed R.', city: 'Dubai / Kerala', business: 'Travel Services', time: '14m ago' },
  { name: 'Vishnu P.', city: 'Bangalore', business: 'Real Estate Consultant', time: '18m ago' },
];

export default function SocialProofToast() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimeout;
    let nextTimeout;

    const showToast = () => {
      setIsVisible(true);
      // Stay visible for 6 seconds
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
        // Wait 25 seconds before showing the next purchase popup
        nextTimeout = setTimeout(() => {
          setCurrentIdx(prev => (prev + 1) % buyers.length);
          showToast();
        }, 25000);
      }, 6000);
    };

    // Initial appearance after 6 seconds
    const initialTimeout = setTimeout(() => {
      showToast();
    }, 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const buyer = buyers[currentIdx];

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 z-40 max-w-xs sm:max-w-sm bg-[#051417]/95 border border-emerald-500/40 rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500 animate-slideRight">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center p-1.5 shrink-0">
          <BeezyIcon className="w-full h-full" />
        </div>

        <div className="grow pr-2">
          <div className="flex items-center gap-1.5 text-xs text-white font-bold">
            <span>{buyer.name}</span>
            <span className="text-slate-400 font-normal">({buyer.city})</span>
          </div>
          <p className="text-[11px] text-slate-300 mt-0.5">
            Downloaded the <strong className="text-emerald-300 font-semibold">GBP Consultation Guide</strong>
          </p>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
            <span className="text-emerald-400 font-bold">✓ Verified ₹499 Purchase</span>
            <span>{buyer.time}</span>
          </div>
        </div>

        <button 
          onClick={() => setIsDismissed(true)}
          className="text-slate-500 hover:text-white cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
