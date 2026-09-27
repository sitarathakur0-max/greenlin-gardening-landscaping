import React from 'react';
import {
  Phone,
  Star,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Scissors,
  Sprout,
  Calendar,
  Sparkles,
  ShieldCheck,
  Trees,
  Compass,
  MapPin,
  Clock,
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES, APPROACH_PILLARS } from '../data/gardenData';
import { SeasonalStory } from '../components/SeasonalStory';
import { TrustSection } from '../components/TrustSection';
import { FaqSection } from '../components/FaqSection';
import { ContactForm } from '../components/ContactForm';
import heroGardenImg from '../assets/images/hero_swiss_garden_1789917478384.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO - Nature-Focused Editorial Hero
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0a1c14] text-[#faf8f5] pt-12 sm:pt-16 pb-20 sm:pb-24 border-b border-[#1b3f2c]">
        {/* Subtle organic ambient gradients */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#25573e]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#bcdb3e]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust pill & location */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#153827] border border-[#275d42] text-xs font-semibold text-[#d4ec6f]">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Zürich Gardening &amp; Landscaping</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#122e20] border border-[#25533b] text-xs text-[#faf8f5]">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#faf8f5]">4.8 / 5</span>
                  <span className="text-[#a4b7aa] text-[11px]">(27 reviews)</span>
                </div>
              </div>

              {/* Editorial H1 */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#faf8f5] leading-[1.08]">
                Nurturing Zürich’s Gardens with Architectural Precision.
              </h1>

              {/* Substantial, non-fluffy copy */}
              <p className="text-base sm:text-lg text-[#c8dacd] leading-relaxed max-w-2xl">
                GreenLin Gartenpflege delivers meticulous garden maintenance, razor-sharp hedge
                trimming, healthy lawn restoration, and seasonal outdoor care for private properties
                across Zürich, Switzerland. Crafted with respect for native plant life and local soils.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  id="hero-call-cta"
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#d4ec6f] hover:bg-[#bcdb3e] text-[#0a1b13] font-bold text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0a1b13]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  id="hero-inquiry-cta"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#173e2c] hover:bg-[#1f4f39] border border-[#2e684a] text-[#faf8f5] font-semibold text-sm transition-all cursor-pointer"
                >
                  <span>Request Garden Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#d4ec6f]" />
                </button>
              </div>

              {/* Key service badges */}
              <div className="pt-4 border-t border-[#1d4330] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#a9bfae]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ec6f] shrink-0" />
                  <span>Garden Maintenance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ec6f] shrink-0" />
                  <span>Hedge Trimming</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ec6f] shrink-0" />
                  <span>Lawn Care</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ec6f] shrink-0" />
                  <span>Seasonal Care</span>
                </div>
              </div>
            </div>

            {/* Right Column: Strategic High-Quality Swiss Garden Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#26533c] shadow-2xl bg-[#0f281d] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={heroGardenImg}
                  alt="Believable landscaped Swiss residential garden in Zürich with manicured emerald lawn and pristine hedges"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Image Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0a1c14]/90 backdrop-blur-md border border-[#244f37] text-xs text-[#faf8f5] flex items-center justify-between">
                  <div>
                    <span className="text-[#d4ec6f] font-bold block text-sm">
                      Zürich Garden Craftsmanship
                    </span>
                    <span className="text-[#9cb1a2] text-[11px]">
                      Horticultural precision &amp; immaculate cleanup
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-[#19402f] text-[#d4ec6f] font-mono text-xs font-semibold">
                    Zürich, CH
                  </div>
                </div>
              </div>

              {/* Decorative botanical accent leaf */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl bg-[#d4ec6f] text-[#0a1b13] flex items-center justify-center shadow-xl hidden sm:flex">
                <Leaf className="w-10 h-10 transform -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BUSINESS INTRODUCTION - The GreenLin Philosophy
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c2921]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eee7dc] border border-[#ded5c6] text-xs font-semibold text-[#183d2c]">
                <Trees className="w-3.5 h-3.5 text-[#2f6d52]" />
                <span>About GreenLin Gartenpflege</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d] leading-tight">
                Rooted in Zürich’s Botanical Landscape.
              </h2>
              <p className="text-xs uppercase tracking-widest font-bold text-[#2f6d52]">
                Quality Outdoor Spaces Crafted for Lasting Vitality
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#384c40] leading-relaxed">
              <p>
                At <strong>GreenLin Gartenpflege</strong>, we approach gardening not as a rushed chore,
                but as an evolving horticultural relationship between your home and the natural world.
                Zürich’s distinctive seasonal climate—with moist spring mornings, warm summers, and
                frosty winters—demands knowledgeable, timely care.
              </p>
              <p>
                Whether maintaining formal boundary hedges, tending perennial shrub beds, or restoring
                tired lawns, we bring dedicated Swiss standards of thoroughness to every square meter.
                Our focus is simple: healthy plants, crisp geometric lines, and properties left in
                flawless condition after every visit.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('about')}
                  id="intro-read-more-btn"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0f281d] hover:text-[#275d45] underline underline-offset-4 cursor-pointer"
                >
                  <span>Learn more about our philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[#a4b5a8]">•</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-sm font-semibold text-[#275d45] hover:text-[#0f281d]"
                >
                  Direct phone: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: GARDEN MAINTENANCE (Service Pillar 1)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#f4efe6] border-t border-[#e2d7c5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3d8c4] border border-[#cfc0a6] text-xs font-semibold text-[#183d2c]">
                <Sprout className="w-3.5 h-3.5 text-[#2f6d52]" />
                <span>Comprehensive Horticultural Care</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d]">
                Garden Maintenance
              </h2>
              <p className="text-base text-[#2f6d52] font-medium">
                {SERVICES[0].tagline}
              </p>
              <p className="text-sm sm:text-base text-[#3d5144] leading-relaxed">
                {SERVICES[0].description}
              </p>

              <div className="space-y-2.5 pt-2">
                {SERVICES[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#243a2d]">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="book-maintenance-btn"
                  className="px-5 py-3 rounded-xl bg-[#0f281d] hover:bg-[#1a4331] text-[#faf8f5] text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Book Garden Maintenance
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-[#1a4331] hover:underline cursor-pointer"
                >
                  Explore service details &rarr;
                </button>
              </div>
            </div>

            {/* Asymmetrical Botanical Feature Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0f281d] text-[#faf8f5] border border-[#27543d] relative overflow-hidden shadow-xl">
                <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#d4ec6f]/10 blur-xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
                    Key Timing &amp; Scope
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
                    Cultivating Soil &amp; Perennial Health
                  </h3>
                  <div className="p-4 rounded-xl bg-[#153928] border border-[#295e42] space-y-2 text-xs sm:text-sm text-[#c8dacd]">
                    <div className="text-[#d4ec6f] font-semibold">Active Window:</div>
                    <div>{SERVICES[0].seasonalTiming}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#153928] border border-[#295e42] space-y-2 text-xs sm:text-sm text-[#c8dacd]">
                    <div className="text-[#d4ec6f] font-semibold">Target Areas:</div>
                    <div>{SERVICES[0].focusArea}</div>
                  </div>
                  <div className="pt-2 text-xs text-[#a0b5a6] italic">
                    All green waste gathered, transported, and eco-composted according to Zürich cantonal regulations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HEDGE TRIMMING (Service Pillar 2)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Botanical Geometric Visualizer Card */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#133525] text-[#faf8f5] border border-[#265e43] shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#23543b]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d4ec6f]">
                    <Scissors className="w-4 h-4" />
                    <span>Architectural Alignment</span>
                  </div>
                  <span className="text-[11px] text-[#a4bba8]">Zürich Standards</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
                    Precision Trimming for All Hedge Varieties
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c5d8cc] leading-relaxed">
                    Hornbeam (Hainbuche), Beech (Rotbuche), Laurel (Kirschlorbeer), Boxwood (Buchs),
                    Thuja, and Yew (Eibe). We adjust blade angles to ensure light reaches the lower foliage.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#0d261a] border border-[#204a34]">
                    <span className="text-[11px] text-[#9eb6a4] block">Early Summer Cut</span>
                    <strong className="text-sm text-[#faf8f5]">June Shape Leveling</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0d261a] border border-[#204a34]">
                    <span className="text-[11px] text-[#9eb6a4] block">Autumn Cut</span>
                    <strong className="text-sm text-[#faf8f5]">Late August / Sept</strong>
                  </div>
                </div>

                <div className="pt-2 text-xs text-[#d4ec6f] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Respectful of bird nesting season guidelines in Switzerland.</span>
                </div>
              </div>
            </div>

            {/* Right Information Block */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee7dc] border border-[#ded4c4] text-xs font-semibold text-[#183d2c]">
                <Scissors className="w-3.5 h-3.5 text-[#2f6d52]" />
                <span>Boundary &amp; Privacy Care</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d]">
                Hedge Trimming
              </h2>
              <p className="text-base text-[#2f6d52] font-medium">
                {SERVICES[1].tagline}
              </p>
              <p className="text-sm sm:text-base text-[#3d5144] leading-relaxed">
                {SERVICES[1].description}
              </p>

              <div className="space-y-2.5 pt-2">
                {SERVICES[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#243a2d]">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="book-hedge-btn"
                  className="px-5 py-3 rounded-xl bg-[#0f281d] hover:bg-[#1a4331] text-[#faf8f5] text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Schedule Hedge Trimming
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-semibold text-[#1a4331] hover:underline"
                >
                  Call +41 79 8949933
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LAWN CARE (Service Pillar 3)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#f4efe6] border-y border-[#dfd4c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3d8c4] border border-[#cfc0a6] text-xs font-semibold text-[#183d2c]">
                <Leaf className="w-3.5 h-3.5 text-[#2f6d52]" />
                <span>Dense Turf &amp; Soil Cultivation</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d]">
                Lawn Care
              </h2>
              <p className="text-base text-[#2f6d52] font-medium">
                {SERVICES[2].tagline}
              </p>
              <p className="text-sm sm:text-base text-[#3d5144] leading-relaxed">
                {SERVICES[2].description}
              </p>

              <div className="space-y-2.5 pt-2">
                {SERVICES[2].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#243a2d]">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="book-lawn-btn"
                  className="px-5 py-3 rounded-xl bg-[#0f281d] hover:bg-[#1a4331] text-[#faf8f5] text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Request Lawn Restoration
                </button>
              </div>
            </div>

            {/* Visual Lawn Care Feature Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0f281d] text-[#faf8f5] border border-[#275d42] shadow-xl space-y-5">
                <span className="text-xs uppercase tracking-widest text-[#d4ec6f] font-bold">
                  Swiss Turf Restoration Protocol
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
                  From Moss-Ridden to Resilient Green
                </h3>

                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#163c29] border border-[#296445]">
                    <strong className="text-[#faf8f5] block mb-0.5">1. Scarification &amp; Thatch Removal:</strong>
                    <span className="text-[#c3d6c8]">Extracting choking moss layers to let the soil breathe.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#163c29] border border-[#296445]">
                    <strong className="text-[#faf8f5] block mb-0.5">2. Core Aeration:</strong>
                    <span className="text-[#c3d6c8]">Alleviating heavy clay soil compaction typical in parts of Zürich.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#163c29] border border-[#296445]">
                    <strong className="text-[#faf8f5] block mb-0.5">3. Overseeding &amp; Nutrient Balance:</strong>
                    <span className="text-[#c3d6c8]">Introducing hard-wearing grass varieties suited to Swiss microclimates.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SEASONAL OUTDOOR WORK (Service Pillar 4)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual seasonal card */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#173a2a] text-[#faf8f5] border border-[#2c6548] shadow-xl space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d4ec6f]">
                  <Calendar className="w-4 h-4" />
                  <span>Continuous Year-Round Readiness</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
                  Seasonal Transitions Managed Seamlessly
                </h3>
                <p className="text-xs sm:text-sm text-[#c7dacd] leading-relaxed">
                  Gardens change fundamentally between November and April. Heavy autumn leaf fall can
                  suffocate turf, while early spring frost can damage unprepared shrubs. We manage the
                  labor-intensive seasonal shifts for you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#0f281d] border border-[#24543b]">
                    <span className="text-xs text-[#d4ec6f] font-bold block mb-1">Autumn Shift</span>
                    <p className="text-xs text-[#b8ccc0]">
                      Deep leaf collection, terrace clearing, drain cleaning, and winter readiness cuts.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0f281d] border border-[#24543b]">
                    <span className="text-xs text-[#d4ec6f] font-bold block mb-1">Spring Shift</span>
                    <p className="text-xs text-[#b8ccc0]">
                      Bed clearance, cutting back ornamental grasses, soil aeration, and fresh mulching.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Block */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee7dc] border border-[#ded4c4] text-xs font-semibold text-[#183d2c]">
                <Calendar className="w-3.5 h-3.5 text-[#2f6d52]" />
                <span>Quarterly Property Preparation</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f281d]">
                Seasonal Outdoor Work
              </h2>
              <p className="text-base text-[#2f6d52] font-medium">
                {SERVICES[3].tagline}
              </p>
              <p className="text-sm sm:text-base text-[#3d5144] leading-relaxed">
                {SERVICES[3].description}
              </p>

              <div className="space-y-2.5 pt-2">
                {SERVICES[3].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#243a2d]">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6d52] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="book-seasonal-btn"
                  className="px-5 py-3 rounded-xl bg-[#0f281d] hover:bg-[#1a4331] text-[#faf8f5] text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Book Seasonal Outdoor Care
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: GARDENING APPROACH (Craftsmanship & Swiss Quality)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0a1c14] text-[#faf8f5] border-t border-[#1b3f2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153828] border border-[#275c42] text-xs font-semibold text-[#d4ec6f] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Horticultural Standard</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf8f5]">
              Mindful Botanical Craftsmanship
            </h2>
            <p className="text-[#c1d3c6] text-base sm:text-lg mt-3">
              We treat your garden as a living ecosystem. Here are the principles that guide our
              hands on every Zürich property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0f281d] border border-[#234d37] hover:border-[#d4ec6f] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#17402e] border border-[#2e684a] flex items-center justify-center text-[#d4ec6f]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#faf8f5]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#b8ccc0] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: SEASONAL TRANSFORMATION STORYTELLING
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SeasonalStory />
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TRUST SECTION (Google 4.8/5 Rating & 27 Reviews)
          ========================================================================= */}
      <TrustSection />

      {/* =========================================================================
          SECTION 10: FAQ SECTION
          ========================================================================= */}
      <FaqSection />

      {/* =========================================================================
          SECTION 11: STRONG CONTACT CTA (Direct Phone + Request Form)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0a1b13] text-[#faf8f5] border-t border-[#1a3828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Contact Narrative & Quick Phone Direct */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163828] border border-[#295c43] text-xs font-semibold text-[#d4ec6f]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Zürich Landscaping Care</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf8f5] leading-tight">
                Ready to Enhance Your Outdoor Space?
              </h2>

              <p className="text-base text-[#c7dacd] leading-relaxed">
                Whether you need immediate hedge trimming, systematic lawn scarification, or regular
                garden maintenance across the season, we are ready to assist you.
              </p>

              {/* High impact direct phone card */}
              <div className="p-6 rounded-2xl bg-[#122e20] border border-[#26573e] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#d4ec6f] font-bold">
                  Direct Telephone Line
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    id="cta-direct-phone"
                    className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5] hover:text-[#d4ec6f] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <p className="text-xs text-[#9eb6a6]">
                  Speak directly with GreenLin Gartenpflege for prompt scheduling in Zürich.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#9db2a4]">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                  ))}
                </div>
                <span>4.8 / 5 Rating based on 27 reviews on Google</span>
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
