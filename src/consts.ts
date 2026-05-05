export const SITE = {
  url: 'https://sebastianmora.com',
  title: 'Sebastián Mora Carmona — Lead Generative AI Engineer',
  description:
    'Lead Generative AI Engineer crafting agentic systems for the real world. Multi-agent, RAG, MCP, and the unglamorous engineering that keeps it all running.',
  locale: 'en',
  author: 'Sebastián Mora Carmona',
} as const;

export type Site = typeof SITE;
