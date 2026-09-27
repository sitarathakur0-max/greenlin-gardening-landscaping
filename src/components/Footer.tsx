import React from 'react';
import { Phone, Star, Leaf, MapPin, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/gardenData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091a12] text-[#e0dad1] border-t border-[#1a3828] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1b3d2b]">
          {/* Brand & Overview */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#143928] border border-[#275d42] flex items-center justify-center text-[#d4ec6f]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-editorial text-2xl font-bold tracking-tight text-[#faf8f5]">
                  GreenLin Gartenpflege
                </span>
                <p className="text-xs text-[#9eb2a4] uppercase tracking-wider">
                  Zürich, Switzerland
                </p>
              </div>
            </div>

            <p className="text-sm text-[#b8c9bd] leading-relaxed max-w-md">
              Specialized gardening, architectural hedge trimming, lawn restoration, and seasonal
              outdoor care for residential landscapes and outdoor grounds in Zürich.
            </p>

            {/* Verified Google rating block */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 rounded-xl bg-[#122c1f] border border-[#234e38]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                  ))}
                </div>
                <span className="font-editorial text-base font-bold text-[#faf8f5]">
                  {BUSINESS_INFO.rating} / 5.0
                </span>
              </div>
              <div className="h-4 w-px bg-[#26533c] hidden sm:block"></div>
              <div className="text-xs text-[#a8bdae]">
                Based on <span className="text-[#faf8f5] font-semibold">{BUSINESS_INFO.reviewCount} reviews</span> on Google
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  id="footer-nav-home"
                  className="text-[#c4d6c9] hover:text-[#faf8f5] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  id="footer-nav-services"
                  className="text-[#c4d6c9] hover:text-[#faf8f5] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  id="footer-nav-about"
                  className="text-[#c4d6c9] hover:text-[#faf8f5] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  id="footer-nav-contact"
                  className="text-[#c4d6c9] hover:text-[#faf8f5] transition-colors cursor-pointer"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services list */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#c4d6c9]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#faf8f5] text-left transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Location */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
              Contact Zürich
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="footer-phone-cta"
                className="group flex items-start gap-3 p-3 rounded-lg bg-[#143525] border border-[#28573e] hover:border-[#d4ec6f] transition-all"
              >
                <Phone className="w-4 h-4 text-[#d4ec6f] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#9fb3a5]">
                    Direct Telephone
                  </div>
                  <div className="font-semibold text-[#faf8f5] text-base group-hover:text-[#d4ec6f] transition-colors">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8fa395] group-hover:text-[#d4ec6f] ml-auto transition-colors" />
              </a>

              <div className="flex items-start gap-3 text-sm text-[#b8c9bd] px-1">
                <MapPin className="w-4 h-4 text-[#d4ec6f] shrink-0 mt-0.5" />
                <span>Serving Zürich and surrounding residential communities, Switzerland.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#899f91]">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Zürich, Switzerland.
          </div>
          <div className="flex items-center gap-6">
            <span>Gardening &amp; Landscaping</span>
            <span>•</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#faf8f5]">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
