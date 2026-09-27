import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, Calendar, Wind, Sun, Leaf, Snowflake } from 'lucide-react';
import { SEASONAL_STORIES } from '../data/gardenData';

const SEASON_ICONS = {
  spring: Sparkles,
  summer: Sun,
  autumn: Leaf,
  winter: Snowflake,
};

const SEASON_THEMES = {
  spring: {
    accent: '#d4ec6f',
    bgBadge: 'bg-[#21432f] text-[#d4ec6f] border-[#39694c]',
    cardBorder: 'border-[#bcdb3e]/30',
  },
  summer: {
    accent: '#facc15',
    bgBadge: 'bg-[#3b3a1a] text-[#fde047] border-[#5e5b29]',
    cardBorder: 'border-[#facc15]/30',
  },
  autumn: {
    accent: '#f97316',
    bgBadge: 'bg-[#3d2417] text-[#fdba74] border-[#6b3e26]',
    cardBorder: 'border-[#f97316]/30',
  },
  winter: {
    accent: '#93c5fd',
    bgBadge: 'bg-[#182b3d] text-[#bfdbfe] border-[#294867]',
    cardBorder: 'border-[#93c5fd]/30',
  },
};

export const SeasonalStory: React.FC = () => {
  const [activeSeasonId, setActiveSeasonId] = useState<string>('spring');

  const currentSeason =
    SEASONAL_STORIES.find((s) => s.id === activeSeasonId) || SEASONAL_STORIES[0];

  const SeasonIcon = SEASON_ICONS[currentSeason.id as keyof typeof SEASON_ICONS] || Leaf;
  const theme = SEASON_THEMES[currentSeason.id as keyof typeof SEASON_THEMES] || SEASON_THEMES.spring;

  return (
    <div className="rounded-3xl bg-[#0f281d] text-[#faf8f5] p-6 sm:p-10 lg:p-14 border border-[#214532] shadow-xl relative overflow-hidden">
      {/* Botanical background motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#25573e]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#bcdb3e]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b402e] border border-[#2c6145] text-xs font-semibold text-[#d4ec6f] mb-4">
          <Wind className="w-3.5 h-3.5" />
          <span>The Zürich Horticultural Rhythm</span>
        </div>

        <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf8f5] leading-tight">
          Seasonal Transformation &amp; Care
        </h3>
        <p className="text-[#c1d3c6] text-base sm:text-lg mt-3 leading-relaxed">
          Gardening in Switzerland follows nature’s quarterly metamorphosis. From alpine spring soil
          revival to autumn foliage clearance, explore our synchronized year-round methodology.
        </p>
      </div>

      {/* Season Selector Tabs */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-[#0a1b13] border border-[#1b3b2b] mb-10">
        {SEASONAL_STORIES.map((story) => {
          const isActive = story.id === activeSeasonId;
          const TabIcon = SEASON_ICONS[story.id as keyof typeof SEASON_ICONS] || Leaf;

          return (
            <button
              key={story.id}
              id={`season-tab-${story.id}`}
              onClick={() => setActiveSeasonId(story.id)}
              className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#18402d] text-[#faf8f5] shadow-md border border-[#2e6246] font-semibold'
                  : 'text-[#9db3a4] hover:text-[#faf8f5] hover:bg-[#122c1f]'
              }`}
            >
              <TabIcon
                className={`w-4 h-4 ${isActive ? 'text-[#d4ec6f]' : 'text-[#7e9987]'}`}
              />
              <span>{story.season}</span>
            </button>
          );
        })}
      </div>

      {/* Season Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSeason.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Main Season Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${theme.bgBadge}`}>
                <Calendar className="w-3.5 h-3.5" />
                {currentSeason.monthRange}
              </span>
              <span className="text-xs text-[#9eb2a4] uppercase tracking-wider font-semibold">
                Quarterly Focus
              </span>
            </div>

            <div>
              <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf8f5]">
                {currentSeason.focusTitle}
              </h4>
              <p className="text-sm sm:text-base text-[#d4ec6f] font-medium mt-1">
                {currentSeason.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#d2ded6] leading-relaxed">
              {currentSeason.description}
            </p>

            {/* Botanical Note Box */}
            <div className="p-4 rounded-xl bg-[#143526] border border-[#26533c] text-xs sm:text-sm text-[#c5d8cc] leading-relaxed flex items-start gap-3">
              <SeasonIcon className="w-5 h-5 text-[#d4ec6f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#faf8f5] block mb-0.5">Zürich Climate Insight:</strong>
                {currentSeason.botanicalNote}
              </div>
            </div>
          </div>

          {/* Key Tasks Checklist */}
          <div className="lg:col-span-5 bg-[#143626] rounded-2xl p-6 border border-[#275b41] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#214b35]">
              <h5 className="text-xs uppercase tracking-wider text-[#d4ec6f] font-bold">
                Core {currentSeason.season} Tasks
              </h5>
              <span className="text-[11px] text-[#9eb2a4]">4 Critical Actions</span>
            </div>

            <ul className="space-y-3">
              {currentSeason.tasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#e5ede8]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4ec6f] shrink-0 mt-0.5" />
                  <span className="leading-snug">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
