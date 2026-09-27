export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  seasonalTiming: string;
  focusArea: string;
}

export interface SeasonStory {
  id: string;
  season: string;
  monthRange: string;
  focusTitle: string;
  tagline: string;
  description: string;
  tasks: string[];
  botanicalNote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'seasonal' | 'process';
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  gardenSize?: string;
  message: string;
  preferredContact: 'phone' | 'email';
}
