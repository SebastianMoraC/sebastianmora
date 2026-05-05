export interface Talk {
  event: string;
  title: string;
  date: string;
  kind: string;
  href?: string;
}

export const talks: ReadonlyArray<Talk> = [
  {
    event: 'YouTube',
    title: 'The Future of AI: Code, Hardware & Agents',
    date: '2025',
    kind: 'Talk',
    href: 'https://www.youtube.com/watch?v=WnEjgd8c2GE',
  },
  {
    event: 'AI Tinkerers · Pereira',
    title: 'Bringing RAGs to Postgres with pgvector',
    date: '2024',
    kind: 'Meetup',
    href: 'https://pereira.aitinkerers.org/p/ai-tinkerers-pereira-inaugural-meetup-april',
  },
  {
    event: 'TribuAI Community',
    title: 'Build an AI with Personality',
    date: '2024',
    kind: 'Workshop',
    href: 'https://luma.com/da9wjhzs',
  },
  {
    event: 'Pereira Tech Talks',
    title: 'AI in Action: Train and Customize Your Own Model from Home',
    date: '2024',
    kind: 'Workshop',
    href: 'https://www.pereiratechtalks.org/304127870-ia-en-accin-aprende/',
  },
];

export interface WritingItem {
  title: string;
  where: string;
  date: string;
  href?: string;
}

export const writing: ReadonlyArray<WritingItem> = [
  {
    title: "Designing agentic systems that don't fall over",
    where: 'LinkedIn',
    date: 'Coming soon',
  },
  {
    title: 'RAG over Postgres: pgvector lessons from 30k users',
    where: 'LinkedIn',
    date: 'Coming soon',
  },
  {
    title: 'MCP in the wild: tools, not magic',
    where: 'LinkedIn',
    date: 'Coming soon',
  },
];
