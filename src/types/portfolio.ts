export type ProjectStatus = 'Production' | 'Active Prototype' | 'Benchmarked' | 'Open Source' | 'In Development';

export type EvidenceCategory = 'Source Code' | 'Live Demos' | 'Architecture' | 'Testing & QA';

export interface ProofItem {
  id: string;
  category: EvidenceCategory;
  title: string;
  description: string;
  verificationStatus: 'Verified' | 'Pending Verification' | 'Unverified Placeholder';
  verificationMethod: string;
  link?: string;
  artifactHash?: string;
  notes?: string;
}

export interface Project {
  id: string;
  title: string;
  headline: string;
  description: string;
  category: 'Distributed Systems' | 'Full-Stack Web' | 'Developer Tooling' | 'AI & ML Engineering';
  status: ProjectStatus;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  architectureNotes: string[];
  proofItems: ProofItem[];
  reproducibleCommand?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Expertise' | 'Proficient' | 'Familiar';
    context: string;
    verifiedInProject?: string;
  }[];
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
  verificationLink?: string;
  verified: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  status: 'Verified' | 'In Progress' | 'Self-Certified';
}

export interface DeveloperProfile {
  name: string;
  roleTitle: string;
  tagline: string;
  headline: string;
  location: string;
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  resumeUrl: string;
  availability: {
    status: string;
    preferredRoles: string[];
    timeline: string;
  };
  summary: string[];
  philosophy: {
    title: string;
    statement: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
    highlights: string[];
  };
}
