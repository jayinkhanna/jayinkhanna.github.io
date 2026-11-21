import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { COURSEWORK } from '@/lib/profile';

export const metadata: Metadata = {
  title: 'All coursework',
  description: 'Complete list of undergraduate coursework of Jayin Khanna.',
  robots: { index: false, follow: false },
};

export default function CourseworkPage() {
  const total = COURSEWORK.reduce((n, g) => n + g.courses.length, 0);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <Link href="/honors/#education" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to education
      </Link>

      <header className="mb-8 mt-4">
        <h1 className="font-headline text-4xl font-bold text-foreground">All coursework</h1>
        <p className="mt-2 max-w-3xl text-base text-foreground/80">
          BSc (Research) in Mathematics, Shiv Nadar Institution of Eminence, 2022 – 2026. {total} courses, grouped by area.
        </p>
      </header>

      <div className="space-y-6">
        {COURSEWORK.map((g) => (
          <section key={g.group} className="rounded-lg border border-border bg-card p-5">
            <h2 className="font-headline text-xl text-foreground">
              {g.group} <span className="font-sans text-sm font-normal text-muted-foreground">{g.courses.length}</span>
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-foreground/85 md:grid-cols-2">
              {g.courses.map((c) => (
                <li key={c.name} className="flex gap-2">
                  <span aria-hidden className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>
                    {c.name}
                    {c.note && <span className="ml-1 text-xs text-muted-foreground">({c.note})</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
