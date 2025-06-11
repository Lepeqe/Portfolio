// Tipos principales para el portfolio de PM/PO
export interface Project {
  id: string;
  title: string;
  description: string;
  role: 'Product Manager' | 'Product Owner' | 'PM/PO' | 'Scrum Master';
  company: string;
  duration: string;
  technologies: string[];
  methodologies: string[];
  achievements: string[];
  metrics?: ProjectMetrics;
  images?: string[];
  url?: string;
  status: 'completed' | 'ongoing' | 'concept';
}

export interface ProjectMetrics {
  userGrowth?: string;
  revenue?: string;
  efficiency?: string;
  satisfaction?: string;
  teamSize?: number;
  timeToMarket?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  thumbnail?: string;
  fullImage?: string;
  category: 'agile' | 'product' | 'data' | 'leadership' | 'technical';
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  teamSize?: number;
}

export interface Skill {
  name: string;
  category: 'product' | 'agile' | 'data' | 'technical' | 'leadership';
  proficiency: 1 | 2 | 3 | 4 | 5;
  description?: string;
}

export interface Methodology {
  name: string;
  description: string;
  experience: string;
  icon?: string;
  category: 'agile' | 'lean' | 'design' | 'data' | 'product';
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}

export interface ThemeConfig {
  theme: 'light' | 'dark';
  primaryColor?: string;
  animations?: boolean;
}

// Estados de carga y error
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

// Event listeners y callbacks
export type EventCallback = (event: Event) => void;
export type ThemeChangeCallback = (theme: 'light' | 'dark') => void; 