import React from 'react';
import { Leaf, Phone, Star, ShieldCheck, Trees, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, APPROACH_PILLARS } from '../data/gardenData';
import heroGardenImg from '../assets/images/hero_swiss_garden_1789917478384.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#0a1c14] text-[#faf8f5] py-16 sm:py-20 border-b border-[#1b3e2b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153828] border border-[#275c42] text-xs font-semibold text-[#d4ec6f]">
              <Leaf className="w-3.5 h-3.5" />
              <span>About GreenLin Gartenpflege</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#faf8f5]">
              Dedicated to Zürich’s Living Outdoor Spaces
            </h1>
            <p className="text-base sm:text-lg text-[#c3d8ca] leading-relaxed">
              Serving private residences and properties across Zürich with specialized garden care,
              precision hedge trimming, and mindful horticultural craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column with Generated Real Garden Photography */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border-2 border-[#2c6145] shadow-xl aspect-[4/3] bg-[#0f281d]">
                <img
                  src={heroGardenImg}
                  alt="Believable landscaped garden in Zürich with pristine hedges and manicured lawn"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Card */}
              <div className="p-6 rounded-2xl bg-[#f4efe6] border border-[#d8ccb8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#1a402e]">
                    Google Rating
                  </span>
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                    ))}
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-editorial text-3xl font-bold text-[#0f281d]">
                    {BUSINESS_INFO.rating} / 5.0
                  </span>
                  <span className="text-xs text-[#526659]">
                    ({BUSINESS_INFO.reviewCount} customer reviews)
                  </span>
                </div>
                <p className="text-xs text-[#5a6f62]">
                  Consistently recognized by Zürich garden owners for meticulous execution.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#384c40] leading-relaxed">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2f6d52] font-bold block mb-1">
                  Our Purpose
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0f281d] leading-tight">
                  A Garden Should Be a Refuge, Not a Continuous Burden.
                </h2>
              </div>

              <p>
                A well-maintained garden is an extension of the home—an outdoor sanctuary where
                natural beauty and human design coexist in harmony. Yet keeping hedges geometrically
                crisp, lawns free of suffocating moss, and seasonal beds thriving requires hours of
                strenuous physical labor and specific horticultural knowledge.
              </p>

              <p>
                <strong>GreenLin Gartenpflege</strong> was established to provide Zürich property owners
                with reliable, high-standard gardening and landscaping maintenance. We do not apply
                one-size-fits-all routines; every garden has its own soil depth, sunlight exposure,
                and plant varieties that dictate the timing of cuts and treatments.
              </p>

              <div className="p-5 rounded-2xl bg-[#eef5ee] border border-[#cbe1d0] space-y-3">
                <h3 className="font-editorial text-xl font-bold text-[#0f281d]">
                  Our Operational Values in Zürich
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#274b37]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span><strong>Plant Health First:</strong> Pruning cut angles and depths that accelerate natural plant healing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span><strong>Flawless Site Restoration:</strong> Paths swept clean and green waste carted away after every job.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span><strong>Direct Accountability:</strong> You talk directly with the professional responsible for your garden.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="about-contact-btn"
                  className="px-6 py-3.5 rounded-xl bg-[#0f281d] hover:bg-[#1a4330] text-[#faf8f5] text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Contact GreenLin Gartenpflege
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#18402f] hover:text-[#2f6d52]"
                >
                  <Phone className="w-4 h-4 text-[#2f6d52]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 sm:py-20 bg-[#f4efe6] border-t border-[#dfd4c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0f281d]">
              Our Core Tenets of Horticultural Care
            </h2>
            <p className="text-sm sm:text-base text-[#465a4e] mt-2">
              How we approach every hedge, lawn, and flower bed in Zürich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APPROACH_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#ded5c6] shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eef5ed] border border-[#cde2cf] flex items-center justify-center text-[#1c4834]">
                  <Sparkles className="w-5 h-5 text-[#2f6d52]" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#0f281d]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#465a4e] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
