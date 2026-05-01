export interface CareerEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
  logo?: string;
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'frameworks' | 'tools' | 'design' | 'collaboration';
}

export interface GitHubProject {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stars: number;
  language: string;
  topics: string[];
  updated_at: string;
  readme: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
  duration: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  education: string;
}
