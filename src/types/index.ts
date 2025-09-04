// Core data primitives for the personal website
// These types define the clean interfaces between components

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isHighlight?: boolean;
  year: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export type ThemeMode = 'light' | 'dark';
