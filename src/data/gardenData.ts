import { ServiceItem, SeasonStory, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'GreenLin Gartenpflege',
  phone: '+41 79 8949933',
  phoneRaw: '+41798949933',
  city: 'Zürich',
  country: 'Switzerland',
  rating: 4.8,
  reviewCount: 27,
  headline: 'Contemporary Botanical Gardening & Landscaping in Zürich',
  subheadline:
    'Dedicated garden maintenance, precision hedge trimming, healthy lawn care, and seasonal outdoor care tailored to the distinct climate and soils of Zürich.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'garden-maintenance',
    title: 'Garden Maintenance',
    tagline: 'Structured ongoing care that allows your outdoor space to thrive effortlessly.',
    description:
      'Healthy gardens require continuous, informed horticultural attention. Our garden maintenance covers weed regulation, biological bed cultivation, pruning of shrubs and perennials, soil aeration, and organic mulching to keep your green sanctuary balanced and resilient.',
    highlights: [
      'Selective weeding and root-level ground management',
      'Perennial cutting, deadheading, and shrub thinning',
      'Soil nutrient balance, compost application, and organic mulch',
      'Thorough green waste collection and immaculate site cleanup',
    ],
    seasonalTiming: 'March through November with periodic winter check-ups',
    focusArea: 'Flower beds, shrub borders, natural stone pathways & rockeries',
  },
  {
    id: 'hedge-trimming',
    title: 'Hedge Trimming',
    tagline: 'Architectural precision and vital growth shaping for clean property boundaries.',
    description:
      'Hedges provide vital structural framing, privacy, and wind protection for Zürich residences. We provide geometric and naturalistic hedge trimming for hornbeam, beech, boxwood, laurel, and evergreen conifers, ensuring dense leaf growth while respecting local nesting periods.',
    highlights: [
      'Razor-sharp geometric leveling and vertical alignment',
      'Formative trimming for young hedges and rejuvenating cuts for mature hedges',
      'Disease check and thinning to promote internal sunlight penetration',
      'Complete removal and eco-friendly disposal of all hedge clippings',
    ],
    seasonalTiming: 'Early summer shape cuts and late summer finishing cuts',
    focusArea: 'Property lines, privacy screens, topiary & formal boundaries',
  },
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    tagline: 'Deep root cultivation, crisp edging, and resilient emerald green turf.',
    description:
      'Zürich weather alternates between wet spring mornings and warm alpine summer sun, placing specific demands on turf. Our lawn care services restore vigor to tired grass through precise mowing heights, regular edging, moss scarification, core aeration, and seasonal overseeding.',
    highlights: [
      'Regular mowing with sharp, clean blades for clean leaf cuts',
      'Precision edge trimming along stone borders, beds, and terraces',
      'Spring and autumn scarification to remove thatch and moss',
      'Overseeding with drought- and shade-adapted Swiss grass varieties',
    ],
    seasonalTiming: 'Spring awakening through late autumn dormancy prep',
    focusArea: 'Residential lawns, embankment turf & ornamental grass areas',
  },
  {
    id: 'seasonal-outdoor-work',
    title: 'Seasonal Outdoor Work',
    tagline: 'Synchronized horticultural tasks that protect and prepare your garden year-round.',
    description:
      'Gardening in Zürich follows the dynamic rhythms of the four Central European seasons. We perform high-labor outdoor tasks including spring garden bed awakening, autumn foliage gathering, winter tree and shrub protection, and storm debris clearing.',
    highlights: [
      'Comprehensive autumn leaf clearing from lawns, paths, and roofs',
      'Winter protection for frost-sensitive plants and container flora',
      'Spring bed rejuvenation, cutbacks, and natural stone cleaning',
      'Seasonal branch thinning and storm-damaged growth management',
    ],
    seasonalTiming: 'Active all 4 seasons with weather-timed intervention',
    focusArea: 'Full property grounds, terraces, courtyards & seasonal beds',
  },
];

export const SEASONAL_STORIES: SeasonStory[] = [
  {
    id: 'spring',
    season: 'Spring',
    monthRange: 'March – May',
    focusTitle: 'Awakening & Soil Revival',
    tagline: 'Laying the foundation for a vibrant, resilient summer garden.',
    description:
      'As snow melts across Zürich and temperatures warm, gardens require decisive awakening. We clear winter debris, cut back ornamental grasses, aerate and scarify lawns to clear moss build-up, and enrich garden beds with organic compost before new shoots emerge.',
    tasks: [
      'Scarification and lawn overseeding after winter frost',
      'Spring pruning of summer-flowering shrubs and fruit wood',
      'Edging and border redefinition along stone paving',
      'Fresh bark and compost mulch to conserve soil moisture',
    ],
    botanicalNote:
      'Spring interventions in Zürich are timed with ground soil temperatures exceeding 8°C to ensure optimal grass seed germination.',
  },
  {
    id: 'summer',
    season: 'Summer',
    monthRange: 'June – August',
    focusTitle: 'Growth Regulation & Form',
    tagline: 'Maintaining architectural crispness and balanced hydration during peak growth.',
    description:
      'During high summer, vigorous leaf and grass production can quickly overwhelm unstructured gardens. We conduct precise hedge shaping, maintain regular mowing intervals, deadhead spent blooms to encourage secondary flowering, and check plant health.',
    tasks: [
      'First major hedge trimming cycle for deciduous and evergreen borders',
      'Consistent lawn mowing at heights tailored to retain moisture',
      'Weed management before seeds disperse across beds',
      'Selective thinning to ensure air circulation and prevent mildew',
    ],
    botanicalNote:
      'Hedge cuts during hot periods are executed during cooler morning hours to protect newly exposed inner foliage from sun scorch.',
  },
  {
    id: 'autumn',
    season: 'Autumn',
    monthRange: 'September – November',
    focusTitle: 'Harvest, Pruning & Clean Gathering',
    tagline: 'Systematic leaf clearing and preparation for approaching alpine winter.',
    description:
      'Autumn brings heavy leaf falls from beech, maple, and birch across Zürich properties. If left on wet grass, leaf mats suffocate turf and foster fungus. We systematically gather fallen leaves, perform final seasonal hedge leveling, and nourish root systems.',
    tasks: [
      'Thorough foliage gathering from lawns, flowerbeds, and drainage channels',
      'Second architectural hedge trim for clean winter silhouettes',
      'Autumn lawn fertilisation high in potassium for root hardiness',
      'Perennial cutbacks and root crown protection',
    ],
    botanicalNote:
      'Collected organic garden foliage is segregated and composted sustainably, returning organic matter to local ecological cycles.',
  },
  {
    id: 'winter',
    season: 'Winter',
    monthRange: 'December – February',
    focusTitle: 'Dormancy Care & Structural Pruning',
    tagline: 'Protecting structural plants and executing essential winter cuts.',
    description:
      'While surface growth pauses under winter frost, this period is ideal for structural work on dormant deciduous trees and resilient shrubs. We safeguard delicate specimens from heavy snow loads and prepare tools for the upcoming spring season.',
    tasks: [
      'Winter pruning of dormant trees and resilient hedge varieties',
      'Frost protection wrapping for delicate garden specimens',
      'Clearing snow weight from fragile evergreen branches',
      'Early assessment and garden planning for the upcoming spring',
    ],
    botanicalNote:
      'Pruning while sap is dormant minimizes tree stress and promotes clean wound sealing before spring growth starts.',
  },
];

export const TRUST_POINTS = [
  {
    metric: '4.8 / 5',
    subtext: 'Google Rating',
    detail: 'Calculated from 27 public Google customer reviews in Zürich.',
  },
  {
    metric: '27',
    subtext: 'Verified Reviews',
    detail: 'Consistent local feedback commending meticulous work and reliable service.',
  },
  {
    metric: '100%',
    subtext: 'Swiss Cleanup Standard',
    detail: 'Every project ends with swept stone, bagged green waste, and immaculate paths.',
  },
  {
    metric: 'Direct',
    subtext: 'Owner-Led Contact',
    detail: 'Speak directly via +41 79 8949933 without call-center delays.',
  },
];

export const APPROACH_PILLARS = [
  {
    title: 'Horticultural Precision',
    description:
      'We do not rush through tasks with blunt tools. Pruning shears, hedge trimmers, and mower blades are kept razor-sharp to make surgical, clean plant cuts that heal quickly without disease entry.',
  },
  {
    title: 'Zürich Climate Awareness',
    description:
      'From lake breezes to elevation changes and heavy rainfalls, Zürich gardens face specific seasonal pressures. We align our work schedule with actual microclimate conditions.',
  },
  {
    title: 'Immaculate Site Cleanliness',
    description:
      'Quality gardening does not end when the trimmer stops. We take immense pride in thoroughly sweeping walkways, cleaning patios, and removing all organic cuttings before leaving your property.',
  },
  {
    title: 'Clear, Responsive Communication',
    description:
      'No complicated bureaucracy. Whether you need a one-off seasonal overhaul or recurring garden care, you reach us directly by phone or message for prompt arrangements.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'general',
    question: 'How do I arrange a garden service with GreenLin Gartenpflege?',
    answer:
      'You can call us directly at +41 79 8949933 or fill out the contact form on this website with your garden details. We will discuss your specific requirements and schedule an on-site consultation in Zürich to inspect your garden and provide an accurate proposal.',
  },
  {
    category: 'services',
    question: 'What types of hedges do you trim in Zürich?',
    answer:
      'We trim all common hedge varieties found in Zürich gardens, including hornbeam (Hainbuche), beech (Rotbuche), laurel (Kirschlorbeer), boxwood (Buchs), thuja, and yew (Eibe). We provide both geometric formal trimming and natural rejuvenation cuts.',
  },
  {
    category: 'services',
    question: 'Can you restore a lawn that has moss or bare patches?',
    answer:
      'Yes. Our lawn care includes thorough scarification to pull out moss and dead thatch, soil aeration, overseeding with quality grass seed suited to your site conditions, and seasonal nutrient feeding to foster thick, deep-rooted turf.',
  },
  {
    category: 'seasonal',
    question: 'When is the best time for seasonal outdoor cleanups?',
    answer:
      'Spring cleanups are typically scheduled in March and April to clear winter residue and revive lawns. Autumn leaf clearing and pre-winter hedge trimming take place between October and late November before the onset of continuous frost.',
  },
  {
    category: 'process',
    question: 'Do you take care of all green waste and hedge clippings?',
    answer:
      'Yes. Every service includes gathering, bagging, and removing all plant trimmings and organic waste. We sweep terraces, pathways, and driveways clean so your property is left in pristine condition.',
  },
  {
    category: 'general',
    question: 'Are your services available for both private gardens and residential properties?',
    answer:
      'Yes, we care for private family gardens, terraced houses, villa grounds, and residential condominium outdoor areas throughout Zürich.',
  },
];
