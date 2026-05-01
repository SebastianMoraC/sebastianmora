export interface Project {
  title: string;
  year: string;
  kind: string;
  blurb: string;
  stack: ReadonlyArray<string>;
  highlight: string;
  href?: string;
}

export const projects: ReadonlyArray<Project> = [
  {
    title: 'AI Quote-Generation Platform',
    year: '2025',
    kind: 'Enterprise · Perficient',
    blurb:
      'Multi-agent system that ingests technical drawings and PDFs, extracts structured data via OCR and GPT-4 Vision, and produces priced quotes grounded in client knowledge bases.',
    stack: ['Azure AI Foundry', 'GPT-4 Vision', 'LangGraph', 'MCP', 'FastAPI'],
    highlight: 'Replaces days of manual quoting with minutes.',
  },
  {
    title: 'DailyBot Multi-Agent System',
    year: '2024',
    kind: 'Product · DailyBot',
    blurb:
      'Production AI agent serving 30k+ weekly users. ReAct loop with intent classification, tool calling and dynamic routing. RAG over team data via pgvector.',
    stack: ['LangChain', 'LangGraph', 'pgvector', 'RAG', 'LangSmith'],
    highlight: "~30% drop in 'I don't understand' responses.",
  },
  {
    title: 'Multimodal Check-ins',
    year: '2024',
    kind: 'Feature · DailyBot',
    blurb:
      '~170 image uploads/week and growing voice-note adoption shortly after launch.',
    stack: ['OpenAI Vision', 'Whisper', 'AWS S3', 'Node.js'],
    highlight: 'New interaction patterns for remote teams.',
  },
  {
    title: 'Benky Token & Wallet',
    year: '2023',
    kind: 'Crypto · Benky',
    blurb:
      "Launched Benky's proprietary token on Solana alongside the wallet and admin dashboards that run it.",
    stack: ['Solana', 'Node.js', 'React', 'Express'],
    highlight: 'Token + wallet shipped to production.',
  },
];
