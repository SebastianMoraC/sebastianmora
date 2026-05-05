export interface Job {
  company: string;
  companyUrl?: string;
  role: string;
  dates: string;
  location: string;
  blurb: string;
  tags: ReadonlyArray<string>;
}

export const experience: ReadonlyArray<Job> = [
  {
    company: 'Perficient',
    companyUrl: 'https://www.perficient.com/',
    role: 'Technical Lead · Lead Generative AI Engineer',
    dates: '2025 — Present',
    location: 'Remote',
    blurb:
      'Leading a GenAI team building an end-to-end AI quote-generation platform for enterprise clients — OCR, computer vision, multi-agent reasoning and ML pricing models over technical documents and blueprints.',
    tags: ['Azure AI Foundry', 'LangGraph', 'GPT-4 Vision', 'MCP', 'FastAPI'],
  },
  {
    company: 'DailyBot',
    companyUrl: 'https://www.dailybot.com/',
    role: 'AI Engineer & Full Stack Developer',
    dates: '2023 — 2025',
    location: 'Remote',
    blurb:
      "Architected the production multi-agent system serving 30k+ weekly users across Slack/Teams/Discord. Built RAG over team data with pgvector, cut 'I don't understand' responses ~30%, scaled to 80k+ intents/month.",
    tags: ['LangChain', 'LangGraph', 'pgvector', 'Whisper', 'Django'],
  },
  {
    company: 'Benky',
    companyUrl: 'https://benkypayments.com/',
    role: 'Tech Lead & Full Stack Developer',
    dates: '2022 — 2023',
    location: 'Pereira, CO',
    blurb:
      "Owned the full lifecycle of a crypto wallet & dashboard platform. Launched Benky's proprietary token on Solana. Promoted to Tech Lead within ~12 months.",
    tags: ['Solana', 'Node.js', 'React', 'Express'],
  },
  {
    company: 'Benky',
    companyUrl: 'https://benkypayments.com/',
    role: 'Full Stack Developer',
    dates: '2021 — 2022',
    location: 'Pereira, CO',
    blurb:
      'Built backend APIs and React frontend for a blockchain-enabled fintech platform. Optimized DB queries and shipped blockchain payment integrations.',
    tags: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    dates: '2020 — 2021',
    location: 'Pereira, CO',
    blurb:
      'Delivered responsive sites and custom CMS solutions for local businesses. End-to-end ownership: requirements, build, deploy.',
    tags: ['HTML/CSS', 'JavaScript', 'SEO'],
  },
];
