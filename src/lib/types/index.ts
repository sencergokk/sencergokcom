export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  url?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    github?: string;
  };
} 