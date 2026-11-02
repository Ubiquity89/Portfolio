// src/types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  repo: string;
  image?: string; // relative path in public folder
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string; // e.g., "May 2024"
  endDate: string; // e.g., "Jul 2024" or "Present"
  responsibilities: string[];
  projectLinks?: { name: string; url: string }[];
}

export interface ContactInfo {
  name?: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin: string;
  github: string;
  leetcode?: string;
  gfg?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialId?: string;
  credentialUrl?: string;
}
