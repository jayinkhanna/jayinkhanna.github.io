import { Star, FileText, Github, ExternalLink } from 'lucide-react';
import { ME, type Publication } from '@/lib/profile';
import StatusBadge from './StatusBadge';

export default function PublicationCard({ pub, compact = false }: { pub: Publication; compact?: boolean }) {
  const links = pub.links ?? {};
  const linkItems = [
    links.pdf && { href: links.pdf, label: 'PDF', icon: FileText },
    links.arxiv && { href: links.arxiv, label: 'arXiv', icon: ExternalLink },
    links.code && { href: links.code, label: 'Code', icon: Github },
    links.poster && { href: links.poster, label: 'Poster', icon: FileText },
  ].filter(Boolean) as { href: string; label: string; icon: typeof FileText }[];

  return (
    <article id={pub.id} className={`rounded-lg border border-border bg-card ${compact ? "p-4" : "p-5"} scroll-mt-20`}>
      {pub.firstAuthor && (
        <p className="mb-1.5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-foreground/70">
          <Star className="h-3 w-3 fill-current" />
          {pub.firstAuthor === 'first' ? 'First Author' : 'Co-First Author'}
        </p>
      )}
      <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">{pub.title}</h3>
      <p className="mt-2 text-sm text-foreground/85">
        {pub.authors.map((a, i) => (
          <span key={a}>
            {a === ME ? (
              <span className="rounded bg-primary/15 px-1 font-bold text-foreground underline decoration-primary decoration-2 underline-offset-4">
                {a}
              </span>
            ) : (
              a
            )}
            {pub.equalContribution?.includes(a) && <sup>*</sup>}
            {i < pub.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      {pub.equalContribution && (
        <p className="mt-1 text-xs text-muted-foreground">* Equal contribution</p>
      )}
      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-muted-foreground">
        <span className="italic">{pub.venue}</span>
        <StatusBadge status={pub.status} />
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{pub.tldr}</p>
      {(linkItems.length > 0 || (pub.note && !compact)) && (
        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          {linkItems.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-medium text-primary hover:bg-primary/10"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
          {pub.note && linkItems.length === 0 && (
            <span className="text-xs text-muted-foreground">📄 {pub.note}</span>
          )}
        </p>
      )}
    </article>
  );
}
