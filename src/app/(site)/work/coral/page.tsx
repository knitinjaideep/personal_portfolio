import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Bot,
  CheckCircle2,
  ChevronRight,
  Database,
  FileSearch,
  Gauge,
  Lock,
  MessageSquareText,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  TableProperties,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Container from '@/components/ui/container';
import SecondaryButton from '@/components/ui/secondary-button';
import StatusBadge from '@/components/ui/status-badge';
import TextLink from '@/components/ui/text-link';
import CoralConceptVisual from '@/components/coral/coral-concept-visual';
import { buildPageMetadata } from '@/lib/metadata';

const NAV_ITEMS = [
  { id: 'problem', label: 'Problem' },
  { id: 'system', label: 'System' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'verification', label: 'Verification' },
];

const CAPABILITIES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Statement ingestion',
    body: 'Scans local statement folders, deduplicates files with SHA-256, and extracts structured records from PDFs.',
    icon: ScanSearch,
  },
  {
    title: 'Institution parsers',
    body: 'Routes statements through parser modules for Morgan Stanley, E*TRADE, Chase, Amex, Discover, and Bank of America.',
    icon: FileSearch,
  },
  {
    title: 'Financial dashboards',
    body: 'Surfaces banking trends, merchant spend, subscriptions, holdings, fees, balances, and allocation views.',
    icon: Gauge,
  },
  {
    title: 'Conversational analysis',
    body: 'Answers plain-English questions through deterministic query routing, with local LLMs used for classification and narration.',
    icon: MessageSquareText,
  },
  {
    title: 'Plan vs actual modeling',
    body: 'Keeps intended allocation targets separate from observed transactions so comparisons can stay auditable.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Local data store',
    body: 'Persists canonical accounts, documents, statements, transactions, holdings, fees, balances, and text chunks in SQLite.',
    icon: Database,
  },
];

const ARCHITECTURE_STEPS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Local files',
    body: 'Statement PDFs stay on the machine and can be uploaded or discovered from configured folders.',
    icon: Lock,
  },
  {
    title: 'FastAPI backend',
    body: 'A parser registry detects institution type, extracts structured rows, and exposes dashboard and chat APIs.',
    icon: TableProperties,
  },
  {
    title: 'SQLite source of truth',
    body: 'SQLModel tables, FTS5 search, and stored embeddings support deterministic retrieval without an external data service.',
    icon: Database,
  },
  {
    title: 'Local AI layer',
    body: 'Ollama models classify intent, assist extraction, and narrate computed facts while financial math stays deterministic.',
    icon: Bot,
  },
];

const VERIFICATION_POINTS = [
  'Parser, normalization, routing, dashboard, and financial-model behavior covered by focused backend tests.',
  'Chat answers are built from computed fact bundles, with guardrails that prevent LLM-generated totals.',
  'Frontend logic is tested around account values, banking drift, flow trees, and financial-period behavior.',
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Coral',
  description:
    'A local-first financial statement analyzer that turns personal statements into private dashboards and grounded financial answers.',
  path: '/work/coral',
});

export default function CoralPage() {
  return (
    <>
      <section id="overview" className="relative scroll-mt-28 overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(closest-side, var(--purple-glow), transparent)' }}
        />

        <Container className="relative pb-16 pt-8 sm:pb-20 sm:pt-10">
          <Breadcrumb items={[{ label: 'Work', href: '/work' }, { label: 'Coral' }]} />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-10">
            <div className="max-w-2xl">
              <StatusBadge>Active Development</StatusBadge>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Coral
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
                A local-first financial statement analyzer that turns private PDFs into structured
                dashboards and grounded answers without sending financial data to cloud services.
              </p>

              <div className="mt-8 grid max-w-xl gap-3 text-sm text-text-muted sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <p className="font-semibold text-text-primary">Role</p>
                  <p className="mt-1 leading-6">Product engineering, backend, frontend, AI flow</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <p className="font-semibold text-text-primary">Stack</p>
                  <p className="mt-1 leading-6">FastAPI, SQLite, Next.js, Ollama</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <p className="font-semibold text-text-primary">Focus</p>
                  <p className="mt-1 leading-6">Private financial intelligence</p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#problem"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Read case study
                </Link>
                <SecondaryButton href="/work">Back to all work</SecondaryButton>
              </div>
            </div>

            <CoralConceptVisual />
          </div>
        </Container>
      </section>

      <nav
        aria-label="Case study sections"
        className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-3 text-sm">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className="inline-block border-b-2 border-transparent pb-0.5 font-medium text-text-muted transition hover:text-text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="problem" className="scroll-mt-28 bg-background py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            The Problem
          </p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start lg:gap-14">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Personal finance data is rich, but most of it is trapped in statements.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
                Bank, card, and investment statements contain the facts people need for everyday
                decisions, but the information is scattered across PDFs, portals, categories, and
                time periods. Coral turns that private archive into a local workbench for analysis,
                questions, and planning.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm">
              <ShieldCheck className="text-accent" size={28} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                The product constraint shaped the system.
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">
                Financial data should stay local. That pushed the architecture toward SQLite,
                deterministic SQL, local file processing, and local models rather than hosted data
                pipelines or general-purpose cloud AI calls.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="system" className="scroll-mt-28 bg-surfaceElevated py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Product System
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            A private finance workbench, not a generic chatbot.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
            Coral combines statement ingestion, canonical financial records, dashboards, and chat
            into one local application.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accentTint text-accent">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="architecture" className="scroll-mt-28 bg-background py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Architecture
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Deterministic first, AI where it adds leverage.
          </h2>

          <ol className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {ARCHITECTURE_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-1 items-center gap-3 lg:flex-col lg:items-stretch"
              >
                <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accentTint text-accent">
                    <step.icon size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      <span className="text-text-muted">{index + 1}.</span> {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-muted">{step.body}</p>
                  </div>
                </div>

                {index < ARCHITECTURE_STEPS.length - 1 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="hidden shrink-0 text-border lg:block"
                    size={20}
                  />
                ) : null}
                {index < ARCHITECTURE_STEPS.length - 1 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="shrink-0 rotate-90 text-border lg:hidden"
                    size={20}
                  />
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-text-primary">Answer strategy</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted">
              Coral&apos;s chat pipeline classifies intent, selects a route, executes known SQL
              handlers or document retrieval, builds a computed fact bundle, and then asks the local
              model to narrate those facts. The LLM does not write SQL or calculate financial
              totals.
            </p>
          </div>
        </Container>
      </section>

      <section id="privacy" className="scroll-mt-28 bg-surfaceElevated py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Privacy Model
          </p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start lg:gap-14">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                The safest financial assistant is one that can work without exporting your data.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                Coral is designed around local execution: PDFs, extracted data, embeddings, chat
                context, and analysis stay in the local project. This makes the product more
                constrained, but those constraints are the point.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'No cloud APIs for financial data',
                'SQLite as the local system of record',
                'Local Ollama models for AI-assisted flows',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} />
                  <p className="text-sm font-medium leading-6 text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="verification" className="scroll-mt-28 bg-background py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Verification
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Financial software needs boring guarantees.
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {VERIFICATION_POINTS.map((point) => (
              <article key={point} className="rounded-[1.5rem] border border-border bg-surface p-6">
                <CheckCircle2 className="text-accent" size={22} aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-text-muted">{point}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-14 sm:py-16">
        <Container className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg font-medium leading-8 text-text-primary sm:text-xl">
            Coral is the active finance case study: a private, local-first path from statements to
            decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <SecondaryButton href="/work">Back to all work</SecondaryButton>
            <TextLink href="/work/home-journey" className="inline-flex items-center gap-1.5">
              View Home Journey <ChevronRight size={16} aria-hidden="true" />
            </TextLink>
          </div>
        </Container>
      </section>
    </>
  );
}
