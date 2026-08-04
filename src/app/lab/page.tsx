import type { Metadata } from 'next';
import { Cpu, FileSearch, Sparkles, Workflow } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/section-header';
import LabExperimentCard from '@/components/lab/lab-experiment-card';
import ComingSoonNav from '@/components/coming-soon/coming-soon-nav';
import { buildPageMetadata } from '@/lib/metadata';

const EXPERIMENTS = [
  {
    title: 'Local model experiments',
    description: 'Exploring how local models run and perform on personal hardware.',
    icon: Cpu,
  },
  {
    title: 'Agentic workflows',
    description: 'Testing multi-step, tool-using workflows for everyday tasks.',
    icon: Workflow,
  },
  {
    title: 'Document understanding',
    description: 'Working through structured extraction from real-world documents.',
    icon: FileSearch,
  },
  {
    title: 'AI interface prototypes',
    description: 'Prototyping interface patterns for interacting with AI systems.',
    icon: Sparkles,
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Lab',
  description:
    'A place for smaller experiments in local AI, agentic workflows, document understanding, and developer tools.',
  path: '/lab',
});

export default function LabPage() {
  return (
    <>
      <Container className="py-16 sm:py-24">
        <SectionHeader
          title="Lab"
          description="A place for smaller experiments in local AI, agentic workflows, document understanding, and developer tools."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {EXPERIMENTS.map((experiment) => (
            <LabExperimentCard key={experiment.title} {...experiment} />
          ))}
        </div>
      </Container>
      <ComingSoonNav
        message="Nothing here has shipped yet — Home Journey is the active, complete case study right now."
        backHref="/work"
        backLabel="Back to all work"
        relatedHref="/work/home-journey"
        relatedLabel="View the Home Journey case study"
      />
    </>
  );
}
