import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import PublicationCard from '@/components/site/PublicationCard';
import { withBasePath } from '@/lib/utils';
import {
  EXPERIENCE,
  HONORS,
  PROFILE,
  PUBLICATIONS,
} from '@/lib/profile';

const firstAuthorCount = PUBLICATIONS.filter((p) => p.firstAuthor).length;

const SNAPSHOT = [
  { value: String(PUBLICATIONS.length), label: 'Preprints', sub: `${firstAuthorCount} as first / co-first author` },
  { value: 'Batch Topper Award', label: 'BSc Mathematics', sub: 'Shiv Nadar Univ., Batch of 2026' },
  { value: '2nd Prize', label: 'Best UG Thesis', sub: 'Generative models for Speech TSM' },
  { value: String(EXPERIENCE.length), label: 'Research positions', sub: 'IISc · AIISC · IIT KGP · UCSC · DRDO' },
];

const NOTE_TRACKS = [
  { slug: 'safety-alignment', title: 'Alignment & Safety in T2I and T2V Models', line: 'Inference-time safety for diffusion and flow matching; TRCE presentation and the depth-conditioned video project.' },
  { slug: 'interpretability-theory', title: 'Safety, Interpretability & Theory of LLMs', line: 'Attribution methods, enhancing trust in LLMs, transformers for non-parametric regression.' },
  { slug: 'ug-thesis', title: 'UG Thesis: Generative Models for Speech TSM', line: 'Thesis poster, write-ups and explainer video on speech time-scale modification.' },
  { slug: 'seminar-notes', title: 'Seminar & Lecture Notes', line: 'Notes on diffusion, flow matching, VAEs, ViT, contrastive learning and more.' },
] as const;

const SectionHead = ({ title, href, cta, placeholder }: { title: string; href?: string; cta?: string; placeholder?: boolean }) => (
  <div className="mb-5 flex items-end justify-between gap-4">
    <h2 className="font-headline text-2xl text-foreground md:text-3xl">
      {placeholder && <span className="font-sans text-base font-semibold text-red-600 dark:text-red-400">[PLACEHOLDER] </span>}
      {title}
    </h2>
    {href && (
      <Link href={href} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline">
        {cta ?? 'See all'} <ArrowRight className="h-4 w-4" />
      </Link>
    )}
  </div>
);

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-8 pt-10 md:pt-14">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-10">
        <div className="mx-auto w-full max-w-[220px] md:mx-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={withBasePath('/images/my-photo.jpeg')}
              alt="Portrait of Jayin Khanna"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center font-headline text-sm font-bold tracking-wider text-gradient-dreams">
            A HEAD FULL OF DREAMS
          </p>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">{PROFILE.name}</h1>
          <p className="mt-2 text-lg text-foreground/80">{PROFILE.headline}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {PROFILE.position},{' '}
            <a href={PROFILE.affiliationUrl} target="_blank" rel="noopener noreferrer" className="link">
              {PROFILE.affiliation}
            </a>
          </p>
          {PROFILE.status && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {PROFILE.status}
            </p>
          )}

          <div className="mt-5 space-y-3 text-left text-base leading-relaxed text-foreground/90">
            <p>Currently, I work on making <strong className="font-semibold text-foreground">generative models safer and more trustworthy</strong>.</p>
            <div>
              <p>Overall, my research interests are:</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-primary">
                <li>
                  <strong className="font-semibold text-foreground">Generative models</strong> (diffusion and flow matching): their applications and core theory.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">Representation learning for vision</strong>: problems and applications that analyse and use the geometry of
                  latent spaces.
                </li>
                <li><strong className="font-semibold text-foreground">Interpretability &amp; safety of generative models</strong>.</li>
              </ul>
            </div>
            <p className="text-[0.95rem] text-foreground/85">
              I am advised by{' '}
              <a href="https://prathosh.in/" target="_blank" rel="noopener noreferrer" className="link">
                Prof. Prathosh A. P.
              </a>{' '}
              (IISc) at the{' '}
              <a href="https://prathosh.in/group.html" target="_blank" rel="noopener noreferrer" className="link">
                Deep Rep Lab
              </a>{' '}
              (IISc, ECE), where I work on <strong className="font-semibold text-foreground">joint audio-visual generative models</strong> and on <strong className="font-semibold text-foreground">diffusion models for nanobody affinity optimisation</strong>.
            </p>
            <p className="text-[0.95rem] text-foreground/85">
              I hold a BSc (Research) in Mathematics from Shiv Nadar Institution of Eminence (Batch Topper, 2026), and
              I am concurrently completing an online BS in Data Science from IIT Madras.
            </p>
            <p className="text-[0.95rem] font-medium text-foreground">
              I am actively looking for fully funded PhD programs for Fall 2027.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href={PROFILE.cvUrl}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <FileText className="h-4 w-4" /> CV
            </Link>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section aria-label="At a glance" className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {SNAPSHOT.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-4">
            <p className={`font-headline font-bold text-primary [font-variant-numeric:lining-nums] ${s.value.length > 10 ? 'whitespace-nowrap text-lg md:text-xl lg:text-[1.35rem]' : 'text-2xl md:text-3xl'}`}>{s.value}</p>
            <p className="mt-0.5 text-sm font-semibold text-foreground">{s.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </section>

      {/* Publications */}
      <section className="mt-14" id="publications">
        <SectionHead title="Publications" href="/publications" cta="Details" />
        <p className="-mt-2 mb-5 max-w-3xl text-sm text-foreground/80">
          I would be happy to share the manuscripts; they will be on arXiv by the end of the month. To request a
          manuscript,{' '}
          <Link href="/request-manuscript" className="link font-medium">
            click here
          </Link>
          .
        </p>
        <div className="space-y-4">
          {PUBLICATIONS.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} compact />
          ))}
        </div>
      </section>

      {/* Notes & talks */}
      <section className="mt-14" id="notes">
        <SectionHead title="Research Work" href="/articles" cta="Browse all" />
        <p className="-mt-2 mb-5 max-w-3xl text-sm text-foreground/80">
          Beyond papers, I write up what I learn and build: lecture notes, paper presentations, a thesis poster and
          explainer videos on generative models, diffusion and flow matching, and the trustworthiness of language
          models. All of it is open to read.
        </p>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {NOTE_TRACKS.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/articles/${t.slug}/`}
                className="block h-full rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="text-sm font-semibold text-foreground">{t.title}</span>
                <span className="mt-1 block text-sm text-foreground/75">{t.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-14">
        <SectionHead title="Research experience" href="/experience" cta="Full details" />
        <ol className="space-y-3">
          {EXPERIENCE.slice(0, 4).map((e) => (
            <li key={e.id} className="rounded-lg border border-border bg-card p-4">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-base font-semibold text-foreground">
                  {e.role} <span className="font-normal text-foreground/70">
                    ·{' '}
                    {e.orgUrl ? (
                      <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" className="link">
                        {e.org}
                      </a>
                    ) : (
                      e.org
                    )}
                  </span>
                </p>
                <p className="shrink-0 text-sm text-muted-foreground">{e.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Advisor:{' '}
                {e.advisorUrl ? (
                  <a href={e.advisorUrl} target="_blank" rel="noopener noreferrer" className="link">
                    {e.advisor}
                  </a>
                ) : (
                  e.advisor
                )}
              </p>
              <p className="mt-1.5 text-sm text-foreground/85">{e.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Honors */}
      <section className="mt-14">
        <SectionHead title="Selected honors" href="/honors" cta="All honors, service & teaching" />
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 md:grid-cols-2">
          {HONORS.slice(0, 6).map((h) => (
            <li key={h.text} className="text-sm leading-snug text-foreground/90">
              {h.url ? (
                <a href={h.url} target="_blank" rel="noopener noreferrer" className="link font-medium">
                  {h.text}
                </a>
              ) : (
                <span className="font-medium">{h.text}</span>
              )}
              {h.detail && <span className="block text-xs text-muted-foreground">{h.detail}</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="mt-14 rounded-lg border border-border bg-card p-6 text-center">
        <h2 className="font-headline text-2xl text-foreground">Get in touch</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/80">
          I’m happy to discuss research, collaborations or opportunities.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <Mail className="h-4 w-4" /> {PROFILE.email}
        </a>
      </section>
    </div>
  );
}
