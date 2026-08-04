import { Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { profile } from '@/content/profile';

export interface ContactLink {
  id: 'email' | 'linkedin' | 'github';
  label: string;
  href: string;
  accessibleLabel: string;
  icon: LucideIcon;
  external: boolean;
}

export function getContactLinks(): ContactLink[] {
  const links: ContactLink[] = [];

  if (profile.email) {
    links.push({
      id: 'email',
      label: 'Email',
      href: `mailto:${profile.email}`,
      accessibleLabel: `Email ${profile.name} at ${profile.email}`,
      icon: Mail,
      external: false,
    });
  }

  if (profile.linkedinUrl) {
    links.push({
      id: 'linkedin',
      label: 'LinkedIn',
      href: profile.linkedinUrl,
      accessibleLabel: `${profile.name} on LinkedIn`,
      icon: Linkedin,
      external: true,
    });
  }

  if (profile.githubUrl) {
    links.push({
      id: 'github',
      label: 'GitHub',
      href: profile.githubUrl,
      accessibleLabel: `${profile.name} on GitHub`,
      icon: Github,
      external: true,
    });
  }

  return links;
}
