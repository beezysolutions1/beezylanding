import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import OpportunitySection from './components/OpportunitySection';
import WhoIsThisFor from './components/WhoIsThisFor';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import FounderNote from './components/FounderNote';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import CheckoutModal from './components/CheckoutModal';
import SocialProofToast from './components/SocialProofToast';
import LegalModal from './components/LegalModal';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessView, setIsSuccessView] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('terms');
  const lenisRef = useRef(null);

  // Check if visitor was redirected back after payment (e.g. ?payment=success or ?payment_id=...)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('payment') === 'success' || params.get('success') === 'true' || params.get('payment_id') || params.get('razorpay_payment_id')) {
        setIsSuccessView(true);
        setIsCheckoutOpen(true);
      }
    }
  }, []);

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
      delete window.lenis;
    };
  }, []);

  // Pause Lenis virtual scrolling when modals are open to preserve natural inner modal scroll
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isCheckoutOpen || isLegalOpen) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isCheckoutOpen, isLegalOpen]);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const openLegal = (tab = 'terms') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Urgency Header Banner */}
      <TopBanner onOpenCheckout={openCheckout} />

      {/* Main Brand Navigation Bar in Exact Logo Theme */}
      <Navbar onOpenCheckout={openCheckout} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Section 1: Hero with 3D guide, credentials & instant download */}
        <Hero 
          onOpenCheckout={openCheckout} 
        />

        {/* Section 2: Social Proof & Verified Performance Metrics Bar */}
        <StatsBar />

        {/* Section 3: Opportunity & Google Maps 3-Pack breakdown */}
        <OpportunitySection 
          onOpenCheckout={openCheckout} 
        />

        {/* Section 4: Target Industries (Who Is This For?) */}
        <WhoIsThisFor 
          onOpenCheckout={openCheckout} 
        />

        {/* Section 5: Curriculum (What You'll Learn) */}
        <WhatYouWillLearn 
          onOpenCheckout={openCheckout} 
        />

        {/* Section 6: Founder Transparency Note & Beezy Solutions Credentials */}
        <FounderNote />

        {/* Section 7: Final High-Urgency Call to Action */}
        <FinalCta onOpenCheckout={openCheckout} />
      </main>

      {/* Official Footer with Company Info & Kochi Kerala Details */}
      <Footer onOpenLegal={openLegal} />

      {/* Sticky Conversion Bottom Bar on Scroll */}
      <StickyBar onOpenCheckout={openCheckout} />

      {/* Live Social Proof Activity Toast */}
      <SocialProofToast />

      {/* Interactive Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => {
          setIsCheckoutOpen(false);
          setIsSuccessView(false);
        }} 
        onOpenLegal={openLegal}
        initialSuccess={isSuccessView}
      />

      {/* Legal Policies Modal (Terms, Refund, Privacy, Contact) */}
      <LegalModal 
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}

export default App;
