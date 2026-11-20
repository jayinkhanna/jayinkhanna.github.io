import type { PubStatus } from '@/lib/profile';

const STYLES: Record<PubStatus, { badge: string; dot: string }> = {
  'Under Review': {
    badge: 'border-amber-500/50 bg-amber-500/10 text-amber-800 dark:text-amber-300',
    dot: 'bg-amber-500',
  },
  'arXiv Preprint': {
    badge: 'border-sky-500/50 bg-sky-500/10 text-sky-800 dark:text-sky-300',
    dot: 'bg-sky-500',
  },
  'In Preparation': {
    badge: 'border-violet-500/50 bg-violet-500/10 text-violet-800 dark:text-violet-300',
    dot: 'bg-violet-500',
  },
};

export default function StatusBadge({ status }: { status: PubStatus }) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${s.badge}`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${s.dot}`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${s.dot}`} />
      </span>
      {status}
    </span>
  );
}
