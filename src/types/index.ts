export type CategoryType = 
  | 'ALL'
  | 'REEL'
  | 'COMMERCIAL & BRAND FILMS'
  | 'REAL ESTATE'
  | 'MUSIC VIDEO'
  | 'WEDDING FILMS'
  | 'CORPORATE VIDEO'
  | 'EVENTS & CELEBRATIONS'
  | 'PHOTOS'
  | 'BEHIND THE SCENES';

export interface Project {
  id: string;
  title: string;
  category: CategoryType;
  year: string;
  location: string;
  role: string;
  description: string;
  client?: string;
  coverImage: string;
  youtubeId?: string;
  gallery?: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  location: string;
  title: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  description: string;
  image: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}
