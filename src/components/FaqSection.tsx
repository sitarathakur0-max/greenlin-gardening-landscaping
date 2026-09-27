import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/gardenData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eee7db] border border-[#d9cdb8] text-xs font-semibold text-[#163828] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#2f6d52]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d]">
            Clear Answers for Your Zürich Garden
          </h3>
          <p className="text-[#43584b] text-base mt-3">
            Everything you need to know about our scheduling, hedge trimming seasons, and property
            care standards.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#275d45] shadow-md'
                    : 'bg-[#f7f3ec] border-[#e2d8c7] hover:border-[#b8a992]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  id={`faq-btn-${index}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-[#0f281d] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#143927] text-[#d4ec6f] rotate-180'
                        : 'bg-[#ebe4d6] text-[#42574a]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#394d41] leading-relaxed border-t border-[#f0eae0]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Call helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#eef5ed] border border-[#cadfcb]">
          <p className="text-sm text-[#274f39]">
            Have a question specific to your garden layout or current condition?
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="faq-phone-link"
            className="inline-flex items-center gap-2 mt-3 font-semibold text-[#0f281d] hover:text-[#275d45] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2f6d52]" />
            <span>Call us directly at {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
