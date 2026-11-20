import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import {
  CV_PROJECTS,
  EDUCATION,
  EXPERIENCE,
  HONORS,
  ME,
  OTHER_EXPERIENCE,
  PROFILE,
  PUBLICATIONS,
  SERVICE,
  SKILLS,
  TEACHING,
} from '@/lib/profile';
import { withBasePath } from '@/lib/utils';
import PrintButton from '@/components/site/PrintButton';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum vitae of Jayin Khanna.',
};

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-2 mt-6 border-b border-foreground/40 pb-0.5 font-headline text-base font-bold uppercase tracking-wide text-foreground print:mt-4">
    {children}
  </h2>
);

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-[0.92rem] leading-snug print:max-w-none print:px-0 print:py-0 print:text-[9pt]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <h1 className="font-headline text-4xl font-bold text-foreground">CV</h1>
        <div className="flex flex-wrap gap-3">
          <a
            href={withBasePath('/cv/Jayin_Khanna_CV.pdf')}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-foreground print:border-0 print:bg-transparent print:p-0">
        <header className="text-center">
          <h1 className="font-headline text-2xl font-bold">{PROFILE.name}</h1>
          <p className="mt-1 text-sm text-foreground/80">
            {PROFILE.position}, {PROFILE.affiliation}
          </p>
          <p className="mt-0.5 text-sm text-foreground/80">
            {PROFILE.email} · {PROFILE.linkedin.replace('https://www.', '')} · {PROFILE.github.replace('https://', '')}
          </p>
        </header>

        <H>Education</H>
        {EDUCATION.map((e) => (
          <div key={e.degree} className="mb-2">
            <p className="flex justify-between gap-4 font-semibold">
              <span>
                {e.degree}, {e.school}
              </span>
              <span className="shrink-0 font-normal">{e.period}</span>
            </p>
            <ul className="list-disc pl-5 text-foreground/90">
              {e.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}

        <H>Publications</H>
        <ol className="list-decimal space-y-1.5 pl-5">
          {PUBLICATIONS.map((p) => (
            <li key={p.id}>
              {p.authors.map((a, i) => (
                <span key={a}>
                  {a === ME ? <strong>{a}</strong> : a}
                  {p.equalContribution?.includes(a) ? '*' : ''}
                  {i < p.authors.length - 1 ? ', ' : '. '}
                </span>
              ))}
              {p.title}. <em>{p.venue}</em> [{p.status}]
              {p.equalContribution && <span className="text-foreground/70"> (*equal contribution)</span>}
            </li>
          ))}
        </ol>

        <H>Research experience</H>
        {EXPERIENCE.map((e) => (
          <div key={e.id} className="mb-3 break-inside-avoid">
            <p className="flex justify-between gap-4 font-semibold">
              <span>
                {e.org}, {e.place}
              </span>
              <span className="shrink-0 font-normal">{e.period}</span>
            </p>
            <p className="italic text-foreground/85">
              {e.role} · Advisor: {e.advisor}
            </p>
            <ul className="list-disc pl-5 text-foreground/90">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
        <ul className="list-disc pl-5 text-foreground/90">
          {OTHER_EXPERIENCE.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>

        <H>Selected projects</H>
        <ul className="list-disc space-y-1 pl-5 text-foreground/90">
          {CV_PROJECTS.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              {p.period && <span> ({p.period})</span>}. {p.line}
            </li>
          ))}
        </ul>

        <H>Honors & awards</H>
        <ul className="list-disc space-y-0.5 pl-5 text-foreground/90">
          {HONORS.map((h) => (
            <li key={h.text}>
              {h.text}
              {h.detail && <span className="text-foreground/70"> — {h.detail}</span>}
            </li>
          ))}
        </ul>

        <H>Service, teaching & talks</H>
        <ul className="list-disc space-y-0.5 pl-5 text-foreground/90">
          {[...SERVICE, ...TEACHING].map((h) => (
            <li key={h.text}>
              {h.text}
              {h.detail && <span className="text-foreground/70"> — {h.detail}</span>}
            </li>
          ))}
        </ul>

        <H>Skills</H>
        <ul className="space-y-0.5 text-foreground/90">
          {SKILLS.map((s) => (
            <li key={s.label}>
              <strong>{s.label}:</strong> {s.items}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
