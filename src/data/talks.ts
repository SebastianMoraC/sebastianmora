export interface Talk {
  event: string;
  title: string;
  date: string;
  kind: string;
  href?: string;
  description?: string;
}

export const talks: ReadonlyArray<Talk> = [
  {
    event: 'Pereira Tech Talks',
    title: 'The Future of AI: Code, Hardware & Agents',
    date: '2025',
    kind: 'Talk',
    href: 'https://www.youtube.com/watch?v=WnEjgd8c2GE',
    description:
      'How AI is reshaping software development — agents, LLM orchestration, RAGs, MCPs, and the toolkit defining the modern AI engineer. Co-presented with Sergio Flórez.',
  },
  {
    event: 'AI Tinkerers · Pereira',
    title: 'Bringing RAGs to Postgres with pgvector',
    date: '2024',
    kind: 'Meetup',
    href: 'https://pereira.aitinkerers.org/talks/rsvp_K4F3mhoSEwM',
    description:
      'Storing, updating, and deleting embeddings in real time with Postgres + pgvector — building user-isolated RAG with FastAPI, LangChain, and OpenAI.',
  },
  {
    event: 'TribuAI Community',
    title: 'Build an AI with Personality',
    date: '2024',
    kind: 'Workshop',
    href: 'https://luma.com/da9wjhzs',
    description:
      'Customizing open-source LLMs with fine-tuning — LoRA and QLoRA in practice, when to fine-tune vs use RAG, and adding style without heavy infrastructure.',
  },
  {
    event: 'Pereira Tech Talks',
    title: 'AI in Action: Train and Customize Your Own Model from Home',
    date: '2024',
    kind: 'Workshop',
    href: 'https://www.pereiratechtalks.org/304127870-ia-en-accin-aprende/',
    description:
      'A hands-on intro to building Retrieval-Augmented Generation systems from scratch — from the basics to the gotchas. Co-presented with Jesús David Rivera.',
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
