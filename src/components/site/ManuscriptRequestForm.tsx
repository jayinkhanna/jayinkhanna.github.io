'use client';

import { useForm } from '@formspree/react';
import { CheckCircle, Loader2, Send } from 'lucide-react';

// Same Formspree endpoint as the contact form; submissions reach the owner's inbox
// and are stored in the Formspree dashboard.
const FORMSPREE_FORM_ID = 'mldnjqqn';

type Option = { id: string; label: string };

export default function ManuscriptRequestForm({ options, email }: { options: Option[]; email: string }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="rounded-lg border border-border bg-card p-6" role="status">
        <p className="flex items-center gap-2 text-base font-semibold text-foreground">
          <CheckCircle className="h-5 w-5 text-primary" /> Request received
        </p>
        <p className="mt-2 text-sm text-foreground/80">
          Thank you. I will send the manuscript to the address you gave as soon as I can.
        </p>
      </div>
    );
  }

  const fieldClass =
    'mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/25';

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6">
      <input type="hidden" name="_subject" value="Manuscript request (website)" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Your email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="name@university.edu" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="manuscript" className="text-sm font-medium text-foreground">
          Which manuscript
        </label>
        <select id="manuscript" name="manuscript" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a manuscript
          </option>
          {options.map((o) => (
            <option key={o.id} value={o.label}>
              {o.label}
            </option>
          ))}
          <option value="All manuscripts">All manuscripts</option>
        </select>
      </div>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          Something went wrong. Please check the email address, or write to {email} directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
      >
        {state.submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Request manuscript
      </button>
    </form>
  );
}
