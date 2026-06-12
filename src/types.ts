/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  type: string;
  description: string;
  tags: string[];
  liveUrl: string;
  sourceUrl?: string;
  accentColor: string;
  primaryImage: string; // The static thumbnail (usually of high-aesthetic value)
  previewVideoUrl?: string; // Optional real video URL
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExplorationTopic {
  id: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Deep Dive' | 'Completed' | 'Launch Phase';
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}
