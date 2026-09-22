'use client';

import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

type FieldName = 'name' | 'email' | 'subject' | 'message';

type FieldErrors = Partial<Record<FieldName | 'website', string>>;

type ContactResponse = {
  ok: boolean;
  message: string;
  fieldErrors?: FieldErrors;
};

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;

  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-500 dark:text-red-300">
      {children}
    </p>
  );
}

export default function ContactForm() {
  const formId = useId();
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const updateField = (field: keyof typeof INITIAL_FORM, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
  };

  const sendAnotherMessage = () => {
    setFormValues(INITIAL_FORM);
    setFieldErrors({});
    setStatus('idle');
    setStatusMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setStatusMessage('');
    setFieldErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });
      const result = (await response.json()) as ContactResponse;

      if (!response.ok || !result.ok) {
        setStatus('error');
        setFieldErrors(result.fieldErrors ?? {});
        setStatusMessage(result.message);
        return;
      }

      setStatus('success');
      setStatusMessage(result.message);
    } catch {
      setStatus('error');
      setStatusMessage(
        'Something went wrong while sending your message. You can also email me directly at nitin.kotcherlakota@gmail.com.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm sm:p-8">
        <div aria-live="polite" className="rounded-2xl bg-accentTint p-5">
          <p className="text-lg font-semibold text-text-primary">Message sent.</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-text-muted">
            Thanks — I&rsquo;ll get back to you when I can.
          </p>
        </div>
        <button
          type="button"
          onClick={sendAnotherMessage}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-border bg-surfaceElevated px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="block text-sm font-semibold text-text-primary"
          >
            Your name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? `${formId}-name-error` : undefined}
            className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-text-primary outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Full name"
            disabled={status === 'sending'}
          />
          <FieldError id={`${formId}-name-error`}>{fieldErrors.name}</FieldError>
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-sm font-semibold text-text-primary"
          >
            Your email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
            className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-text-primary outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="you@example.com"
            disabled={status === 'sending'}
          />
          <FieldError id={`${formId}-email-error`}>{fieldErrors.email}</FieldError>
        </div>

        <div>
          <label
            htmlFor={`${formId}-subject`}
            className="block text-sm font-semibold text-text-primary"
          >
            Subject <span className="font-normal text-text-muted">(optional)</span>
          </label>
          <input
            id={`${formId}-subject`}
            name="subject"
            type="text"
            value={formValues.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? `${formId}-subject-error` : undefined}
            className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-text-primary outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="What should we talk about?"
            disabled={status === 'sending'}
          />
          <FieldError id={`${formId}-subject-error`}>{fieldErrors.subject}</FieldError>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            id={`${formId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formValues.website}
            onChange={(event) => updateField('website', event.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block text-sm font-semibold text-text-primary"
          >
            Message
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={6}
            value={formValues.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? `${formId}-message-error` : undefined}
            className="mt-2 w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-base text-text-primary outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Tell me what's on your mind..."
            disabled={status === 'sending'}
          />
          <FieldError id={`${formId}-message-error`}>{fieldErrors.message}</FieldError>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentHover disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <div aria-live="polite" className="mt-4 min-h-6">
        {statusMessage ? (
          <p
            className={`text-sm leading-6 ${
              status === 'error' ? 'text-red-500 dark:text-red-300' : 'text-text-muted'
            }`}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
