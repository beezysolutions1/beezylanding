import React, { useState } from 'react';
import { MapPin, Download, Menu, X } from 'lucide-react';
import BeezyLogo from './BeezyLogo';

export default function Navbar({ onOpenCheckout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Target Industries", href: "#audience" },
    { name: "Curriculum", href: "#curriculum" }
  ];

  return (
    <header className="w-full bg-[#030d0f]/95 backdrop-blur-xl border-b border-emerald-500/15 sticky top-[33px] sm:top-[37px] z-40 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <BeezyLogo size="default" />
          
          <span className="hidden lg:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
            <MapPin className="w-3 h-3 text-emerald-400" />
            Kochi, Kerala
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Navigation Quick Links / CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCheckout}
            className="relative group inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-display font-black text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 transition-transform group-hover:translate-y-0.5 shrink-0" />
            <span>Get Guide · ₹499</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-emerald-950 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030d0f] border-b border-emerald-900/60 p-4 space-y-3 text-xs text-slate-300 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-emerald-950/50 hover:text-emerald-400 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
