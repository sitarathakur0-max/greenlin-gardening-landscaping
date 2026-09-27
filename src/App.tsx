/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { PageId } from './types';
import { BUSINESS_INFO } from './data/gardenData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c2921]">
      {/* Botanical Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Conversion Floating Bar */}
      <aside aria-label="Quick contact actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a1c14]/95 backdrop-blur-md border-t border-[#1e432f] p-3 flex items-center gap-2.5 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="sticky-mobile-phone-call"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#163828] border border-[#2b5d43] text-[#faf8f5] text-xs font-bold active:bg-[#1f4a34] transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4ec6f]" />
          <span>Call: {BUSINESS_INFO.phone}</span>
        </a>

        <button
          onClick={() => handleNavigate('contact')}
          id="sticky-mobile-request-consultation"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#d4ec6f] text-[#0a1c14] text-xs font-bold active:bg-[#bcdb3e] transition-all shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Inquire</span>
        </button>
      </aside>

      {/* Floating Scroll to Top button for desktop/tablet */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="hidden sm:flex fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#0f281d] text-[#faf8f5] border border-[#26553d] items-center justify-center shadow-lg hover:bg-[#1a402f] hover:text-[#d4ec6f] transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
