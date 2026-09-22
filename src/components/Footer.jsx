import React from 'react';
import { MapPin } from 'lucide-react';
import BeezyLogo from './BeezyLogo';

export default function Footer() {
  return (
    <footer className="bg-[#020709] border-t border-emerald-950/80 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-emerald-950">
          
          {/* Brand Info with Official Logo */}
          <div className="md:col-span-6 space-y-3">
            <BeezyLogo size="large" />
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed mt-2">
              Empowering service-based businesses with high-impact organic discovery, Google Business Profile mastery, and strategic marketing consulting.
            </p>

            <div className="pt-2 text-xs space-y-1">
              <p className="font-bold text-white">Beezy Solutions</p>
              <p className="text-slate-400">Digital Marketing & Consulting Company</p>
              <p className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Kochi, Kerala, India
              </p>
            </div>
          </div>

          {/* Quick links & Disclaimer */}
          <div className="md:col-span-6 md:text-right space-y-3">
            <div className="flex flex-wrap md:justify-end gap-4 text-xs font-semibold text-slate-300">
              <span className="hover:text-emerald-400 cursor-pointer transition">Terms & Conditions</span>
              <span>•</span>
              <span className="hover:text-emerald-400 cursor-pointer transition">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-emerald-400 cursor-pointer transition">Refund Policy</span>
              <span>•</span>
              <span className="hover:text-emerald-400 cursor-pointer transition">Contact Support</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#051316] border border-emerald-900/30 text-[11px] text-slate-400 md:text-right leading-relaxed max-w-md md:ml-auto">
              <strong className="text-slate-200">Disclaimer:</strong> Google and Google Business Profile are trademarks of Google LLC. Beezy Solutions is an independent marketing consulting company and is not affiliated with, endorsed by, or sponsored by Google LLC.
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Beezy Solutions. All rights reserved. Kochi, Kerala.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-emerald-400">★</span>
            <span>for ambitious local businesses</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
