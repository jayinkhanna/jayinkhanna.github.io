import type { Metadata } from 'next';
import Link from 'next/link';
import PublicationCard from '@/components/site/PublicationCard';
import { PUBLICATIONS } from '@/lib/profile';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Papers and preprints by Jayin Khanna on safe diffusion models, LLM trustworthiness and speech.',
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <p className="mb-6 text-sm text-muted-foreground">
        Looking for write-ups, lecture notes and thesis material? See{' '}
        <Link href="/articles" className="link">
          Research Work
        </Link>
        .
      </p>

      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-foreground">Publications</h1>
        <p className="mt-2 max-w-3xl text-base text-foreground/80">
          My papers and preprints. I would be happy to share the manuscripts; they will be on arXiv by the end of the
          month. To request a manuscript,{' '}
          <Link href="/request-manuscript" className="link font-medium">
            click here
          </Link>
          .
        </p>
      </header>

      <div className="space-y-4">
        {PUBLICATIONS.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}
