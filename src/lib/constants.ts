import { PROFILE } from './profile';

export const NAV_LINKS = [
  { href: '/', label: 'About' },
  { href: '/articles', label: 'Research Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/experience', label: 'Experience' },
  { href: '/honors', label: 'Honors' },
  { href: '/resume', label: 'CV' },
];

export const SOCIAL_LINKS = {
  github: PROFILE.github,
  linkedin: PROFILE.linkedin,
  email: `mailto:${PROFILE.email}`,
};
