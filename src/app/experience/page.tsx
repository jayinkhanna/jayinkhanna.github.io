import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { EXPERIENCE, OTHER_EXPERIENCE, PUBLICATIONS } from '@/lib/profile';
import { withBasePath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Research Experience',
  description: 'Research positions of Jayin Khanna at IISc, AIISC, IIT Kharagpur, DRDO and UC Santa Cruz.',
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Research experience</h1>
        <p className="mt-2 max-w-3xl text-base text-foreground/80">
          Most recent first. Each entry lists the advisor and the concrete outcome.
        </p>
      </header>

      <ol className="space-y-5">
        {EXPERIENCE.map((e) => (
          <li key={e.id} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-4">
              {e.logo && (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-1">
                  <Image
                    src={withBasePath(e.logo)}
                    alt={`${e.org} logo`}
                    width={56}
                    height={56}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-lg font-semibold text-foreground">{e.role}</h2>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {e.period}
                    {e.current && (
                      <span className="ml-2 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        Current
                      </span>
                    )}
                  </p>
                </div>
                <p className="text-sm font-medium text-foreground/85">
                  {e.orgUrl ? (
                    <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" className="link">
                      {e.org}
                    </a>
                  ) : (
                    e.org
                  )}{' '}
                  <span className="font-normal text-muted-foreground">· {e.place}</span>
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  Advisor:{' '}
                  {e.advisorUrl ? (
                    <a href={e.advisorUrl} target="_blank" rel="noopener noreferrer" className="link">
                      {e.advisor}
                    </a>
                  ) : (
                    e.advisor
                  )}
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm font-medium text-foreground">{e.summary}</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {e.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                  {t}
                </span>
              ))}
              {e.paperIds?.map((id) => {
                const p = PUBLICATIONS.find((x) => x.id === id);
                return p ? (
                  <Link
                    key={id}
                    href={`/publications/#${id}`}
                    className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/10"
                  >
                    Paper: {p.short}
                  </Link>
                ) : null;
              })}
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12">
        <h2 className="font-headline text-2xl text-foreground">Other experience</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/85">
          {OTHER_EXPERIENCE.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
