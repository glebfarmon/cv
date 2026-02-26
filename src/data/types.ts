import type { ReactNode } from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  resumeLink: string;
  bio: string;
  shortBio: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string[];
  date: string;
  githubLink: string | null;
  liveLink: string | null;
  category: string;
  image: string;
}

export interface SkillItem {
  name: string;
  icon: ReactNode;
}

export interface Skills {
  languages: SkillItem[];
  frameworksAndLibraries: SkillItem[];
  uiStyling: SkillItem[];
  databases: SkillItem[];
  testing: SkillItem[];
  toolsAndPlatforms: SkillItem[];
  softSkills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  points: string[];
}

export interface SocialLink {
  url: string;
  icon: ReactNode;
}

export interface SocialLinks {
  linkedin: SocialLink;
  github: SocialLink;
  email: SocialLink;
}
