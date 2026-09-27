import React from 'react';
import { Phone, MapPin, Star, ShieldCheck, CheckCircle2, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gardenData';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#0a1c14] text-[#faf8f5] py-16 sm:py-20 border-b border-[#1b3e2b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153828] border border-[#275c42] text-xs font-semibold text-[#d4ec6f]">
              <Phone className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#faf8f5]">
              Contact GreenLin Gartenpflege
            </h1>
            <p className="text-base sm:text-lg text-[#c3d8ca] leading-relaxed">
              We welcome inquiries for garden maintenance, hedge trimming, lawn restoration, and
              seasonal outdoor care across Zürich, Switzerland.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Contact Information & Steps */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Telephone Highlight */}
              <div className="p-8 rounded-3xl bg-[#0f281d] text-[#faf8f5] border border-[#234d36] shadow-xl space-y-5">
                <span className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
                  Direct Telephone
                </span>
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    id="contact-page-phone-cta"
                    className="font-editorial text-3xl sm:text-4xl font-bold text-[#faf8f5] hover:text-[#d4ec6f] transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#a5bcae] mt-2">
                    Direct line for garden consultations, questions, and scheduling in Zürich.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1d4330] flex items-center justify-between text-xs text-[#c3d5c8]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#d4ec6f]" />
                    <span>Zürich, Switzerland</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#1a402f] text-[#d4ec6f] font-medium text-[11px]">
                    Local Service
                  </span>
                </div>
              </div>

              {/* Verified Google Trust Badge */}
              <div className="p-6 rounded-2xl bg-white border border-[#ded5c6] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0f281d] text-white flex items-center justify-center font-bold text-xs">
                      G
                    </div>
                    <span className="text-xs font-bold text-[#143d2b] uppercase tracking-wider">
                      Google Rating
                    </span>
                  </div>
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-editorial text-3xl font-bold text-[#0f281d]">
                    {BUSINESS_INFO.rating} / 5.0
                  </span>
                  <span className="text-xs text-[#526659]">
                    ({BUSINESS_INFO.reviewCount} customer reviews)
                  </span>
                </div>
                <p className="text-xs text-[#4b5e52]">
                  Authentic ratings from property owners across Zürich.
                </p>
              </div>

              {/* How It Works Steps */}
              <div className="p-6 rounded-2xl bg-[#f4efe6] border border-[#ded5c6] space-y-4">
                <h3 className="font-editorial text-xl font-bold text-[#0f281d]">
                  What to Expect
                </h3>

                <ol className="space-y-3 text-xs sm:text-sm text-[#384c40]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0f281d] text-[#d4ec6f] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-[#0f281d] block">Initial Contact:</strong>
                      Call {BUSINESS_INFO.phone} or submit the consultation form with your garden requirements.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0f281d] text-[#d4ec6f] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-[#0f281d] block">Garden Inspection:</strong>
                      We discuss your hedge length, turf status, or seasonal overhaul needs on-site in Zürich.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0f281d] text-[#d4ec6f] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-[#0f281d] block">Execution &amp; Cleanup:</strong>
                      Work is conducted with precision, all organic waste is removed, and walkways are swept clean.
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
