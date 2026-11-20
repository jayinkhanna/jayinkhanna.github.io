import type { Metadata } from 'next';
import Link from 'next/link';
import ManuscriptRequestForm from '@/components/site/ManuscriptRequestForm';
import { PROFILE, PUBLICATIONS } from '@/lib/profile';

export const metadata: Metadata = {
  title: 'Request a manuscript',
  description: 'Request a manuscript by Jayin Khanna.',
};

export default function RequestManuscriptPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10 md:py-14">
      <h1 className="font-headline text-4xl font-bold text-foreground">Request a manuscript</h1>
      <p className="mt-2 text-base text-foreground/80">
        Enter your email and choose a paper. I will send it to you directly.
      </p>
      <div className="mt-6">
        <ManuscriptRequestForm
          email={PROFILE.email}
          options={PUBLICATIONS.map((p) => ({ id: p.id, label: p.title }))}
        />
      </div>
      <p className="mt-6 text-sm">
        <Link href="/publications" className="link">
          ← Back to publications
        </Link>
      </p>
    </div>
  );
}
