export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-ml' | 'full-stack' | 'nlp' | 'security' | 'featured';
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architectureDetails?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageBgGradient: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; tags?: string[]; highlighted?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  type: 'work' | 'education' | 'leadership';
}

export interface Certification {
  title: string;
  issuer: string;
  badgeColor?: string;
  date?: string;
  credentialId?: string;
  skillsCovered?: string[];
}

export interface LeadershipActivity {
  role: string;
  organization: string;
  achievement: string;
  period?: string;
}
