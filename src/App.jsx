import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import OpportunitySection from './components/OpportunitySection';
import WhoIsThisFor from './components/WhoIsThisFor';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import CaseStudiesSection from './components/CaseStudiesSection';
import FounderNote from './components/FounderNote';
import TrustGuaranteeSection from './components/TrustGuaranteeSection';
import FAQSection from './components/FAQSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import CheckoutModal from './components/CheckoutModal';
import PdfPreviewModal from './components/PdfPreviewModal';
import SocialProofToast from './components/SocialProofToast';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Urgency Header Banner */}
      <TopBanner onOpenCheckout={openCheckout} />

      {/* Main Brand Navigation Bar in Exact Logo Theme */}
      <Navbar onOpenCheckout={openCheckout} onOpenPreview={openPreview} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Section 1: Hero with 3D guide, credentials & instant download */}
        <Hero 
          onOpenCheckout={openCheckout} 
          onOpenPreview={openPreview} 
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
          onOpenPreview={openPreview} 
        />


        {/* Section 8: Real Case Studies & Client Transformations */}
        <CaseStudiesSection />

        {/* Section 9: Founder Transparency Note & Beezy Solutions Credentials */}
        <FounderNote />

        {/* Section 10: Buyer Protection & Trust Guarantee Standard */}
        <TrustGuaranteeSection />

        {/* Section 11: FAQ Accordion for friction reduction */}
        <FAQSection onOpenCheckout={openCheckout} />

        {/* Section 12: Final High-Urgency Call to Action */}
        <FinalCta onOpenCheckout={openCheckout} />
      </main>

      {/* Official Footer with Company Info & Kochi Kerala Details */}
      <Footer />

      {/* Sticky Conversion Bottom Bar on Scroll */}
      <StickyBar onOpenCheckout={openCheckout} />

      {/* Live Social Proof Activity Toast */}
      <SocialProofToast />

      {/* Interactive Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

      {/* Interactive PDF Sample Drawer */}
      <PdfPreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)}
        onOpenCheckout={openCheckout}
      />
    </div>
  );
}

export default App;
