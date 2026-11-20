import { Github, Linkedin, Mail } from 'lucide-react';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import { PROFILE } from '@/lib/profile';

const Footer = () => (
  <footer className="print:hidden mt-16 border-t border-border bg-background py-8">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row">
      <p>
        © {PROFILE.name} · Last updated {PROFILE.lastUpdated}
      </p>
      <div className="flex items-center gap-4">
        <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 hover:text-primary">
          <Mail className="h-4 w-4" /> {PROFILE.email}
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
          <Github className="h-5 w-5" />
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
    <ScrollToTopButton />
  </footer>
);

export default Footer;
