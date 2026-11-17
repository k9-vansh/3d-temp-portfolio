import { ReactNode } from "react";

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  youtube?: string;
  discord?: string;
  twitch?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  [key: string]: string | undefined;
}

export interface CtaButton {
  label: string;
  href: string;
}

export interface HeroConfig {
  greeting?: string;
  title?: string;
  subtitle?: string;
  cta?: {
    primary?: CtaButton;
    secondary?: CtaButton;
  };
}

export interface SectionsToggle {
  hero: boolean;
  skills: boolean;
  experience: boolean;
  projects: boolean;
  contact: boolean;
}

export interface SeoDescription {
  short: string;
  long: string;
}

export interface PortfolioConfig {
  // Author & Display
  author: string;
  displayName?: string;
  greeting?: string;
  subtitle?: string;
  title: string;
  description: SeoDescription;
  keywords: string[];
  email: string;
  site: string;

  // Assets & Links
  resumeUrl?: string;
  resumePdfPath?: string;
  profileImage?: string;

  // GitHub Stars Button
  githubUsername?: string;
  githubRepo?: string;

  // Social Links
  social: SocialLinks;

  // Hero Section
  hero?: HeroConfig;

  // Section Toggles
  sections?: SectionsToggle;

  // Computed properties
  readonly ogImg: string;
}
