import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Lock, 
  Download, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import BeezyLogo, { BeezyIcon } from './BeezyLogo';

export default function PdfPreviewModal({ isOpen, onClose, onOpenCheckout }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPreviewPages = 3;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn" data-lenis-prevent>
      <div 
        className="relative w-full max-w-2xl bg-[#06171a] border-2 border-emerald-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl shadow-emerald-500/20 text-white overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-emerald-900/40 pr-8 sm:pr-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <BeezyLogo size="small" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Guide Sample</span>
                <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  Page {currentPage} of {totalPreviewPages}
                </span>
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:static w-8 h-8 rounded-full bg-[#082227] text-slate-400 hover:text-white flex items-center justify-center hover:bg-emerald-950 transition border border-emerald-500/20 cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable preview body */}
        <div className="grow overflow-y-auto my-4 pr-1 space-y-4">
          
          {currentPage === 1 && (
            <div className="bg-[#030a0c] p-6 rounded-2xl border border-emerald-950 space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="text-center pb-4 border-b border-emerald-950">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Beezy Solutions Exclusive Blueprint</span>
                <h4 className="text-xl font-display font-extrabold text-white mt-1">
                  Table of Contents & Core Framework
                </h4>
                <p className="text-xs text-slate-400 mt-1">Author: Rashid · Kochi, Kerala</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#06191e] border border-emerald-900/40 flex items-start gap-3">
                  <span className="font-mono text-emerald-400 font-bold text-base">01.</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">The GBP Authority Architecture</h5>
                    <p className="text-slate-400 text-xs mt-0.5">Primary category selection algorithm, geotagged media assets, and verified NAP synchronization.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#06191e] border border-emerald-900/40 flex items-start gap-3">
                  <span className="font-mono text-emerald-400 font-bold text-base">02.</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Google Maps 3-Pack Algorithm Secrets</h5>
                    <p className="text-slate-400 text-xs mt-0.5">How Proximity, Prominence, and Relevance signals trigger organic #1 positions in your city.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#06191e] border border-emerald-900/40 flex items-start gap-3">
                  <span className="font-mono text-emerald-400 font-bold text-base">03.</span>
                  <div>
                    <h5 className="font-bold text-white text-sm">High-Converting Review Acquisition Workflow</h5>
                    <p className="text-slate-400 text-xs mt-0.5">Automated scripts and direct link generation that 5x your review frequency without awkward asking.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="bg-[#030a0c] p-6 rounded-2xl border border-emerald-950 space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="text-center pb-3 border-b border-emerald-950">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Sample Chapter: Section 2.3</span>
                <h4 className="text-lg font-display font-extrabold text-white mt-1">
                  The Exact Local Keyword Placement Map
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-[#06191e] border border-emerald-500/20 space-y-2">
                <p className="text-slate-200 font-semibold">Where to place keywords safely:</p>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Service descriptions (under 300 characters each)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Responses to customer reviews mentioning the specific service</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly Google Updates (Posts) with direct Call-Now buttons</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
                ⚠️ <strong>Suspension Warning:</strong> Never stuff keywords directly into your official Registered Business Name unless it matches your legal registration documents.
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="bg-[#030a0c] p-6 rounded-2xl border border-emerald-950 text-center space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <Lock className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-display font-black text-white">
                Unlock the Complete 6-Part PDF Guide
              </h4>

              <p className="text-slate-400 max-w-sm mx-auto">
                Get full access to all checklists, case study templates, suspension recovery workflows, and weekly audit routines.
              </p>

              <div className="inline-block p-4 rounded-2xl bg-[#06191e] border border-emerald-500/40">
                <p className="text-xs text-slate-400">Special Launch Price</p>
                <div className="flex items-baseline justify-center gap-2 mt-1">
                  <span className="text-2xl font-black text-white font-display">₹499</span>
                  <span className="line-through text-slate-500 text-sm">₹2,499</span>
                  <span className="text-emerald-400 font-bold text-xs">80% OFF</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="pt-3 border-t border-emerald-900/40 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-1.5 sm:p-2 rounded-xl bg-[#082227] text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none border border-emerald-950 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-medium font-mono">
              {currentPage} / {totalPreviewPages}
            </span>
            <button
              disabled={currentPage === totalPreviewPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-1.5 sm:p-2 rounded-xl bg-[#082227] text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none border border-emerald-950 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Get Full Guide for ₹499</span>
          </button>
        </div>

      </div>
    </div>
  );
}
