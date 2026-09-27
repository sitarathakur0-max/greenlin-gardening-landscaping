import React, { useState } from 'react';
import { Phone, Star, Menu, X, Leaf, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/gardenData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f281d]/95 backdrop-blur-md border-b border-[#234533] text-[#faf8f5]">
      {/* Top micro-bar */}
      <div className="hidden sm:block border-b border-[#1b3d2b] bg-[#0a1c14] text-xs text-[#c9baa1] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#d4ec6f]">
              <span className="w-2 h-2 rounded-full bg-[#bcdb3e] animate-pulse"></span>
              Serving Zürich, Switzerland
            </span>
            <span className="text-[#8e9f93]">•</span>
            <span>Professional Gardening &amp; Landscaping Care</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-[#fdfbf8]">
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
              </div>
              <span className="font-semibold text-xs text-[#faf8f5]">4.8/5</span>
              <span className="text-[#a4b5a8] text-[11px]">(27 Google reviews)</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="topbar-phone-link"
              className="font-medium text-[#d4ec6f] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('home')}
          id="brand-logo-btn"
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ec6f] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1a4330] border border-[#2e6247] flex items-center justify-center text-[#d4ec6f] group-hover:bg-[#23563e] group-hover:scale-105 transition-all shadow-sm">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <div className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#faf8f5] flex items-center gap-1.5 leading-none">
              GreenLin
              <span className="text-[#d4ec6f] text-xs font-sans uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded bg-[#163827] border border-[#2a5a40]">
                Zürich
              </span>
            </div>
            <p className="text-[11px] text-[#a4b5a8] tracking-wider uppercase font-medium mt-1">
              Gartenpflege &amp; Landscaping
            </p>
          </div>
        </button>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}-btn`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1e4835] text-[#d4ec6f] shadow-inner font-semibold'
                    : 'text-[#e6eee9] hover:text-[#ffffff] hover:bg-[#163828]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="desktop-call-cta"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#183d2c] hover:bg-[#204d38] border border-[#2f664b] text-xs font-semibold text-[#faf8f5] transition-all"
            title="Call GreenLin directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4ec6f]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            id="desktop-consultation-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4ec6f] hover:bg-[#bcdb3e] text-[#0a1a12] text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <span>Request Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls: Phone quick dial + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="mobile-phone-quick-dial"
            className="w-9 h-9 rounded-lg bg-[#19402e] border border-[#2c5e45] flex items-center justify-center text-[#d4ec6f] active:scale-95"
            aria-label="Call GreenLin"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="w-9 h-9 rounded-lg bg-[#143525] border border-[#26543d] flex items-center justify-center text-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#d4ec6f]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-[#234533] bg-[#0c2017] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#1c3829]">
            <div className="flex items-center gap-1.5 text-xs text-[#faf8f5]">
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
              </div>
              <span className="font-bold">4.8 / 5</span>
              <span className="text-[#8fa395]">(27 reviews)</span>
            </div>
            <span className="text-xs text-[#c9baa1]">Zürich, CH</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#1c4532] text-[#d4ec6f] font-semibold'
                      : 'text-[#e2ece6] hover:bg-[#153627]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="mobile-drawer-call-btn"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#19402f] border border-[#2f684c] text-[#faf8f5] text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#d4ec6f]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              id="mobile-drawer-contact-btn"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#d4ec6f] text-[#0a1a12] text-sm font-bold shadow-md cursor-pointer"
            >
              <span>Get Garden Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
