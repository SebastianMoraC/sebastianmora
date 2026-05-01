export interface Talk {
  event: string;
  title: string;
  date: string;
  kind: string;
  href?: string;
}

export const talks: ReadonlyArray<Talk> = [
  {
    event: 'TribuAI Community',
    title: 'Fine-Tuning, LoRA & QLoRA in Practice',
    date: '2024',
    kind: 'Talk series',
  },
  {
    event: 'Pereira Tech Talks',
    title: 'Bringing RAGs to Postgres with pgvector',
    date: '2024',
    kind: 'Talk',
  },
  {
    event: 'AI Tinkerers · Pereira',
    title: 'Agents, MCPs & AI engineering in production',
    date: '2025',
    kind: 'Meetup',
  },
  {
    event: 'Workshop',
    title: 'IA en acción — entrena y personaliza tu propio modelo',
    date: '2024',
    kind: 'Hands-on',
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
