import React, { useState } from 'react';
import {
  Scissors,
  Sprout,
  Leaf,
  Calendar,
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, BUSINESS_INFO } from '../data/gardenData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

const SERVICE_ICONS = {
  'garden-maintenance': Sprout,
  'hedge-trimming': Scissors,
  'lawn-care': Leaf,
  'seasonal-outdoor-work': Calendar,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('garden-maintenance');

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#0a1c14] text-[#faf8f5] py-16 sm:py-20 border-b border-[#1b3e2b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153828] border border-[#275c42] text-xs font-semibold text-[#d4ec6f]">
              <Leaf className="w-3.5 h-3.5" />
              <span>Horticultural Services in Zürich</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#faf8f5]">
              Gardening &amp; Landscaping Care
            </h1>
            <p className="text-base sm:text-lg text-[#c3d8ca] leading-relaxed">
              Tailored services for residential grounds and private gardens across Zürich,
              combining botanical knowledge with meticulous execution and complete site cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation Bar */}
      <section className="sticky top-[69px] sm:top-[77px] z-30 bg-[#f4efe6] border-b border-[#dfd4c1] py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 no-scrollbar">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] || Leaf;
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap bg-white border border-[#d8cdb9] text-[#133525] hover:bg-[#133525] hover:text-[#faf8f5] hover:border-[#133525] transition-all cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5 text-[#2f6d52]" />
                <span>{service.title}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Detailed Services Content */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] || Leaf;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-white border border-[#e2d8c7] shadow-sm space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Core Description */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0f281d] text-[#d4ec6f] flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider font-bold text-[#2f6d52]">
                          Service 0{index + 1}
                        </span>
                        <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0f281d]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-[#1b4832] font-semibold">
                      {service.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#384c40] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 space-y-3">
                      <h4 className="text-xs uppercase tracking-wider text-[#0f281d] font-bold">
                        What This Includes:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#274b37] bg-[#f8f5ee] p-3 rounded-xl border border-[#ece3d4]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onNavigate('contact')}
                        id={`request-service-${service.id}`}
                        className="px-6 py-3.5 rounded-xl bg-[#0f281d] hover:bg-[#1a4330] text-[#faf8f5] text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#d4ec6f]" />
                      </button>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#18402f] hover:text-[#2f6d52]"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {BUSINESS_INFO.phone}</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Details & Zürich Context */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-6 rounded-2xl bg-[#0f281d] text-[#faf8f5] border border-[#234d36] space-y-4">
                      <h3 className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
                        Horticultural Specifications
                      </h3>

                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="p-3.5 rounded-xl bg-[#143626] border border-[#27583f]">
                          <span className="text-[11px] uppercase tracking-wider text-[#9db7a5] block mb-1">
                            Seasonal Timing in Zürich
                          </span>
                          <p className="text-[#faf8f5] font-semibold">
                            {service.seasonalTiming}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#143626] border border-[#27583f]">
                          <span className="text-[11px] uppercase tracking-wider text-[#9db7a5] block mb-1">
                            Target Property Elements
                          </span>
                          <p className="text-[#faf8f5] font-semibold">
                            {service.focusArea}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 text-xs text-[#a1b8a8] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#d4ec6f] shrink-0" />
                        <span>Includes complete debris removal &amp; hardscape sweeping.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section className="py-16 bg-[#0a1c14] text-[#faf8f5] border-t border-[#1b3e2b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Have a Complex or Combined Garden Project?
          </h2>
          <p className="text-sm sm:text-base text-[#c3d8ca] max-w-2xl mx-auto leading-relaxed">
            Many Zürich gardens require a combination of hedge trimming, lawn aeration, and bed
            renewal during the same visit. Contact us directly to arrange an on-site inspection.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              id="services-book-combined"
              className="px-6 py-3.5 rounded-xl bg-[#d4ec6f] hover:bg-[#bcdb3e] text-[#0a1c14] font-bold text-xs transition-all shadow-md cursor-pointer"
            >
              Request Garden Consultation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-[#153928] hover:bg-[#1d4c35] border border-[#2a6144] text-[#faf8f5] text-xs font-semibold transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4ec6f]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
