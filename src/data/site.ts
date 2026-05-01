export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  email: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export const site = {
  name: 'Sebastián Mora Carmona',
  role: 'Lead Generative AI Engineer',
  company: 'Perficient',
  location: 'Pereira, Colombia',
  email: 'moracarmonasebastian2@gmail.com',
  tagline: 'Lead Generative AI Engineer crafting agentic systems for the real world.',
  subtitle: 'Building production AI systems · Multi-agent · RAG · MCP',
  asideTagline:
    'Building production AI systems — multi-agent, RAG, MCP. Based in Pereira, Colombia.',
  status: 'Available for talks & collaborations',
  about: [
    "I'm a generative AI and full-stack engineer with 5+ years shipping production systems. Today I lead a Generative AI team at Perficient, where we architect agentic workflows that combine RAG, MCP, OCR and computer vision to automate the document-heavy work that actually moves enterprise businesses.",
    'My day-to-day lives across the modern AI stack — LangChain, LangGraph, Azure AI Foundry, OpenAI, pgvector — backed by Python, FastAPI, Node.js and Vue/React on AWS and Azure. I care about the boring parts: latency, cost, evals, and the line where probabilistic systems meet deterministic UX.',
    'Outside of work I speak and teach across the Latin American AI community — TribuAI, Pereira Tech Talks, AI Tinkerers Pereira — covering fine-tuning, RAG over Postgres, and agent design.',
  ],
} as const;

export const social: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/sebastianmorac/',
  github: 'https://github.com/SebastianMoraC',
  twitter: 'https://x.com/SebastianMoraCa',
  email: `mailto:${site.email}`,
};

export const nav: ReadonlyArray<NavItem> = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];
