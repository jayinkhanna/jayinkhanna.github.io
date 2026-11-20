import type { Metadata } from 'next';
import { EDUCATION, HONORS, SERVICE, TEACHING } from '@/lib/profile';

export const metadata: Metadata = {
  title: 'Honors, Service & Teaching',
  description: 'Awards, education, reviewing, teaching and talks of Jayin Khanna.',
};

type Row = { text: string; detail?: string; url?: string };

const List = ({ items }: { items: Row[] }) => (
  <ul className="space-y-3">
    {items.map((h) => (
      <li key={h.text} className="text-sm leading-snug text-foreground/90">
        {h.url ? (
          <a href={h.url} target="_blank" rel="noopener noreferrer" className="link font-medium">
            {h.text}
          </a>
        ) : (
          <span className="font-medium">{h.text}</span>
        )}
        {h.detail && <span className="mt-0.5 block text-xs text-muted-foreground">{h.detail}</span>}
      </li>
    ))}
  </ul>
);

const Card = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-20 rounded-lg border border-border bg-card p-5">
    <h2 className="font-headline text-xl text-foreground">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
);

export default function HonorsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Honors, education & service</h1>
        <p className="mt-2 max-w-3xl text-base text-foreground/80">
          Links open the supporting certificates.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card title="Honors & awards" id="honors">
          <List items={HONORS} />
        </Card>

        <div className="space-y-5">
          <Card title="Education" id="education">
            <ul className="space-y-5">
              {EDUCATION.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-semibold text-foreground">{e.degree}</p>
                  <p className="text-sm text-foreground/80">
                    {e.school} · <span className="text-muted-foreground">{e.period}</span>
                  </p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {e.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  {e.link && (
                    <a href={e.link.url} target="_blank" rel="noopener noreferrer" className="link mt-1.5 inline-block text-sm">
                      {e.link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Academic service" id="service">
            <List items={SERVICE} />
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card title="Teaching, talks & programs" id="teaching">
            <div className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
              <List items={TEACHING.slice(0, 3)} />
              <List items={TEACHING.slice(3)} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
