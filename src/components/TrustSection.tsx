import React from 'react';
import { Star, CheckCircle, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO, TRUST_POINTS } from '../data/gardenData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f4efe6] border-y border-[#dfd4c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Google Rating Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8decb] border border-[#d2c2a6] text-xs font-semibold text-[#1a402f]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2f6d52]" />
              <span>Verified Client Satisfaction</span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d] leading-tight">
              Trusted by Zürich Property Owners
            </h3>

            <p className="text-[#3c4f43] text-base leading-relaxed">
              Our reputation is grounded in consistent, reliable garden maintenance and respect for
              our clients’ outdoor sanctuaries. We let our verified track record speak for itself.
            </p>

            {/* Google review card */}
            <div className="p-6 rounded-2xl bg-white border border-[#ded5c5] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0f281d] flex items-center justify-center text-white font-bold text-xs">
                    G
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#143d2b] block">
                      Google Rating
                    </span>
                    <span className="text-[11px] text-[#63756a]">Public Reviews &amp; Scores</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#eef7db] text-[#335e1b] text-xs font-semibold border border-[#d1ea6b]">
                  Zürich, CH
                </span>
              </div>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-editorial text-5xl font-bold text-[#0f281d]">
                  {BUSINESS_INFO.rating}
                </span>
                <div className="space-y-1">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                    ))}
                  </div>
                  <div className="text-xs font-medium text-[#4b5e52]">
                    Out of 5.0 rating scale
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f0eae1] flex items-center justify-between text-xs text-[#526659]">
                <span>Total Public Ratings:</span>
                <span className="font-bold text-[#143d2b] bg-[#f7f3ec] px-2.5 py-1 rounded-md">
                  {BUSINESS_INFO.reviewCount} Verified Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {TRUST_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#ded4c3] shadow-xs hover:border-[#2f6d52] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eef5e9] border border-[#d2e4cb] flex items-center justify-center text-[#1d4835]">
                  {idx === 0 ? (
                    <Star className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
                  ) : idx === 1 ? (
                    <CheckCircle className="w-5 h-5 text-[#2f6d52]" />
                  ) : idx === 2 ? (
                    <Sparkles className="w-5 h-5 text-[#2f6d52]" />
                  ) : (
                    <Phone className="w-5 h-5 text-[#2f6d52]" />
                  )}
                </div>

                <div>
                  <div className="font-editorial text-2xl font-bold text-[#0f281d]">
                    {item.metric}
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#2f6d52] mt-0.5">
                    {item.subtext}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#465a4e] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
