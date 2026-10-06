import React, { useState } from 'react';
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
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('terms');

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

        {/* Section 6: Curriculum (What You'll Learn) */}
        <WhatYouWillLearn 
          onOpenCheckout={openCheckout} 
        />

        {/* Section 7: Founder Transparency Note & Beezy Solutions Credentials */}
        <FounderNote />

        {/* Section 8: Final High-Urgency Call to Action */}
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
        onClose={() => setIsCheckoutOpen(false)} 
        onOpenLegal={openLegal}
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
