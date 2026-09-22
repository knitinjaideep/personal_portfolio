import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { profile } from '@/content/profile';

const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const requestLog = new Map<string, number[]>();

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Please enter your name.')
    .max(120, 'Please keep your name under 120 characters.'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email.')
    .email('Please enter a valid email address.')
    .max(254, 'Please keep your email under 254 characters.'),
  subject: z.string().trim().max(160, 'Please keep your subject under 160 characters.').optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Please enter a message with at least 10 characters.')
    .max(4000, 'Please keep your message under 4,000 characters.'),
  website: z.string().optional(),
});

type ContactFieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = request.headers.get('x-real-ip')?.trim();
  return forwardedFor || realIp || 'unknown';
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recentRequests = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(key, recentRequests);
    return true;
  }

  requestLog.set(key, [...recentRequests, now]);
  return false;
}

function formatFieldErrors(error: z.ZodError): ContactFieldErrors {
  return error.issues.reduce<ContactFieldErrors>((errors, issue) => {
    const field = issue.path[0];
    if (typeof field === 'string' && !(field in errors)) {
      errors[field as keyof ContactFieldErrors] = issue.message;
    }
    return errors;
  }, {});
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailHtml({
  name,
  email,
  subject,
  message,
  timestamp,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = subject ? escapeHtml(subject) : '';
  const safeTimestamp = escapeHtml(timestamp);
  const safeMessage = escapeHtml(message);

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #111827;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New portfolio contact message</h1>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Sender email:</strong> ${safeEmail}</p>
      ${safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ''}
      <p><strong>Timestamp:</strong> ${safeTimestamp}</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="white-space: pre-wrap;">${safeMessage}</p>
    </div>
  `;
}

function buildEmailText({
  name,
  email,
  subject,
  message,
  timestamp,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
}) {
  return [
    'New portfolio contact message',
    '',
    `Name: ${name}`,
    `Sender email: ${email}`,
    subject ? `Subject: ${subject}` : null,
    `Timestamp: ${timestamp}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Please check the highlighted fields and try again.',
        fieldErrors: formatFieldErrors(parsed.error),
      },
      { status: 400 },
    );
  }

  const { name, email, subject, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({
      ok: true,
      message: "Message sent.\n\nThanks — I'll get back to you when I can.",
    });
  }

  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json(
      {
        ok: false,
        message:
          'Too many messages were sent recently. You can also email me directly at nitin.kotcherlakota@gmail.com.',
      },
      { status: 429 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        ok: false,
        message:
          'Something went wrong while sending your message. You can also email me directly at nitin.kotcherlakota@gmail.com.',
      },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const recipient = profile.email ?? 'nitin.kotcherlakota@gmail.com';
  const timestamp = new Date().toISOString();
  const safeSubject = subject || 'Portfolio contact message';

  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>',
      to: recipient,
      replyTo: email,
      subject: safeSubject,
      html: buildEmailHtml({ name, email, subject, message, timestamp }),
      text: buildEmailText({ name, email, subject, message, timestamp }),
    });

    if (result.error) {
      return NextResponse.json(
        {
          ok: false,
          message:
            'Something went wrong while sending your message. You can also email me directly at nitin.kotcherlakota@gmail.com.',
        },
        { status: 500 },
      );
    }
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          'Something went wrong while sending your message. You can also email me directly at nitin.kotcherlakota@gmail.com.',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Message sent.\n\nThanks — I'll get back to you when I can.",
  });
}
