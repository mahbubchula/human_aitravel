// AI-generated cinematic background images
export const IMAGES = {
  hero: 'https://image.qwenlm.ai/generated-images/8a2ac7bb-80da-4288-ae8d-42257d1b00ef/_result.png',
  brain: 'https://image.qwenlm.ai/generated-images/9b3da661-0726-4d5d-b6a4-480feab43078/_result.png',
  travel: 'https://image.qwenlm.ai/generated-images/ef2f0ab2-eb5c-4bf8-8a80-424a69fcbd04/_result.png',
  data: 'https://image.qwenlm.ai/generated-images/ae97b057-6419-49bf-be09-d7414a34fee4/_result.png',
  interface: 'https://image.qwenlm.ai/generated-images/782c41dc-65eb-4724-9e56-b3b7a0627e3e/_result.png',
} as const;

// AI capabilities data
export const AI_CAPABILITIES = [
  {
    icon: '🧠',
    title: 'Neural Processing',
    description: 'Deep learning models analyze patterns from billions of travel decisions',
    metric: '10M+ data points/sec',
  },
  {
    icon: '🌍',
    title: 'Global Intelligence',
    description: 'Real-time access to weather, pricing, availability across 195 countries',
    metric: '195 countries',
  },
  {
    icon: '⚡',
    title: 'Instant Optimization',
    description: 'Multi-variable optimization finds the perfect balance of cost, time & experience',
    metric: '< 2 seconds',
  },
  {
    icon: '🎯',
    title: 'Personalization Engine',
    description: 'Learns your preferences from past behavior, social signals & stated desires',
    metric: '98.7% accuracy',
  },
  {
    icon: '🔮',
    title: 'Predictive Analytics',
    description: 'Forecasts price changes, crowd levels, and experience quality before you book',
    metric: '14-day forecast',
  },
  {
    icon: '🛡️',
    title: 'Risk Mitigation',
    description: 'Continuous monitoring of safety data, travel advisories & insurance optimization',
    metric: '24/7 monitoring',
  },
] as const;

// Human-AI collaboration steps
export const COLLAB_STEPS = [
  {
    side: 'left',
    human: 'I want a beach vacation',
    humanDetail: 'Warm water, good food, not too crowded',
    ai: 'Analyzing 2,847 destinations matching your criteria...',
    aiResult: 'Bali, Maldives, Seychelles — ranked by your preference score',
  },
  {
    side: 'right',
    human: 'Show me options under $3,000',
    humanDetail: 'Including flights, hotel, and activities',
    ai: 'Found 23 packages within budget. Optimizing for best value...',
    aiResult: 'Top pick: Bali 7-night package — $2,847 all-inclusive',
  },
  {
    side: 'left',
    human: 'What about the weather in March?',
    humanDetail: 'I want sunny days for photography',
    ai: 'Weather prediction: 92% sunny days. UV index optimal for outdoor shoots.',
    aiResult: 'Recommendation confirmed — March 15-22 has ideal conditions',
  },
  {
    side: 'right',
    human: 'Book it! But add a cooking class',
    humanDetail: 'I love learning local cuisine',
    ai: 'Added top-rated Balinese cooking experience. Total: $2,923.',
    aiResult: '✓ Booking confirmed. Itinerary sent to your device.',
  },
] as const;
