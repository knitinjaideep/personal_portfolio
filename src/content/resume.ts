/**
 * Single typed source of truth for résumé content. The web résumé, print
 * résumé, generated PDF, Markdown, and plain-text outputs all render from
 * this file so the formats cannot drift apart.
 *
 * Provenance and open questions for every fact below live in
 * resume/resume-content-audit.md (internal, not linked publicly).
 */

export interface ResumeContact {
  name: string;
  headline: string;
  location: string | null;
  email: string | null;
  phone: string | null;
  linkedinUrl: string;
  portfolioUrl: string;
  githubUrl: string | null;
}

export interface ResumeSkillGroup {
  title: string;
  skills: string[];
}

export interface ResumeExperienceEntry {
  company: string;
  title: string;
  dateRange: string;
  location: string | null;
  bullets: string[];
}

export interface ResumeProjectEntry {
  name: string;
  status: string;
  description: string;
  bullets: string[];
}

export interface ResumeEducationEntry {
  institution: string;
  credential: string;
  years: string;
}

export interface ResumeCertificationEntry {
  name: string;
  issuer: string;
}

export interface ResumeContent {
  contact: ResumeContact;
  summary: string;
  skills: ResumeSkillGroup[];
  experience: ResumeExperienceEntry[];
  projects: ResumeProjectEntry[];
  education: ResumeEducationEntry[];
  certifications: ResumeCertificationEntry[];
}

export const resume: ResumeContent = {
  contact: {
    name: 'Nitin Kotcherlakota',
    headline: 'Senior Software Engineer | Backend Systems | AI Applications',
    location: 'New York City Metropolitan Area',
    email: 'nitin.kotcherlakota@gmail.com',
    phone: null,
    linkedinUrl: 'https://www.linkedin.com/in/nitin-kotcherlakota/',
    portfolioUrl: 'https://nitinkotcherlakota.com',
    githubUrl: 'https://github.com/knitinjaideep',
  },

  summary:
    'Senior Software Engineer with 8+ years of experience building enterprise applications, backend services, event-driven workflows, and customer-facing financial capabilities. Experienced with Java, Spring, Kafka, PostgreSQL, AWS, and modern application development. Currently extending this foundation into AI systems engineering, agentic workflows, local AI, and human-centered product development.',

  skills: [
    {
      title: 'Languages',
      skills: ['Java', 'Kotlin', 'Python', 'TypeScript', 'JavaScript', 'C#', 'SQL'],
    },
    {
      title: 'Backend & Application Development',
      skills: ['Spring Boot', 'Next.js', 'React', 'Node.js'],
    },
    {
      title: 'Data & Messaging',
      skills: ['PostgreSQL', 'T-SQL', 'Kafka', 'SQS', 'SNS'],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Argo CD', 'AWS CloudFormation'],
    },
  ],

  experience: [
    {
      company: 'JPMorganChase',
      title: 'Senior Software Engineer',
      dateRange: 'June 2024 – Present',
      location: 'Jersey City, New Jersey',
      bullets: [],
    },
    {
      company: 'Intuit',
      title: 'Software Engineer II',
      dateRange: 'January 2022 – February 2024',
      location: 'Los Angeles, California',
      bullets: [
        'Built a streamlined onboarding capability for new money-in and money-out transaction types, reducing the time to add a new transaction type from about 45 minutes to a few seconds.',
        'Designed and deployed a dual Kafka consumer that resolved idempotency issues affecting 32 operational-risk rules.',
        'Created a reusable capability for collecting W-9 information, reducing developer time on related work by a reported 70%.',
        "Led implementation of recurring cryptocurrency purchases and supported development and scaling of the platform's cryptocurrency buy, sell, and hold capabilities.",
        'Supported continuous integration with Jenkins and continuous delivery with Argo CD on Kubernetes, and enabled customer tax-form delivery through AWS Batch workflows.',
        'Implemented PagerDuty alerting integrated with AWS Lambda, S3, Batch, and CloudFormation to improve operational reliability.',
      ],
    },
    {
      company: 'IGT',
      title: 'Software Engineer III',
      dateRange: 'October 2021 – January 2022',
      location: 'United States',
      bullets: [],
    },
    {
      company: 'Sagitec Solutions',
      title: 'Software Engineer',
      dateRange: 'August 2016 – October 2021',
      location: 'Baltimore, Maryland area',
      bullets: [
        'Built features for unemployment-insurance systems using C#, Python, JavaScript, and a proprietary .NET framework, including user registration, wage submission, claim submission, and self-service reporting.',
        'Developed correspondence-generation and BPM workflow capabilities, including scheduled batch jobs, and deployed changes to staging and UAT environments.',
        'Analyzed query plans and data models, using T-SQL and entity-relationship diagrams, to identify and improve slow-running database queries.',
      ],
    },
    {
      company: 'Pitney Bowes',
      title: 'Software Engineering Intern, Data Analytics',
      dateRange: 'January 2016 – June 2016',
      location: 'Danbury, Connecticut area',
      bullets: [
        'Built Python scripts using Pandas and XLRD to transform Excel data into structured formats for daily ad hoc reporting.',
        'Wrote T-SQL stored procedures to support reporting workflows.',
      ],
    },
  ],

  projects: [
    {
      name: 'Home Journey',
      status: 'Active Development',
      description:
        'A notes-first platform designed to help households organize buying, owning, and maintaining a home as one continuous record.',
      bullets: [
        'Designing Home Journey, a notes-first product concept for organizing home buying, owning, and maintenance as one continuous household record.',
        "Building the product's site and information architecture — problem framing, buyer and owner journeys, capabilities, and roadmap — with Next.js, TypeScript, and Tailwind CSS.",
        'Maintaining a public status roadmap that distinguishes active-development capabilities from planned directions as the product evolves.',
      ],
    },
  ],

  education: [
    {
      institution: 'Northern Illinois University',
      credential: 'Master of Science, Computer Science',
      years: '2014 – 2016',
    },
    {
      institution: 'Jawaharlal Nehru Technological University',
      credential: 'Bachelor of Engineering, Computer Science',
      years: '2010 – 2014',
    },
  ],

  // No certification issuer could be verified from the available source data,
  // so none are published here. See resume/resume-content-audit.md.
  certifications: [],
};
