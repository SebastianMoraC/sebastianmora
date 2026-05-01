interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  core?: boolean;
}

interface Edge {
  from: string;
  to: string;
}

const NODES: ReadonlyArray<Node> = [
  { id: 'in',   x: 60,  y: 110, label: 'Input' },
  { id: 'rag', x: 220, y: 50,  label: 'RAG' },
  { id: 'plan', x: 380, y: 110, label: 'Planner', core: true },
  { id: 'tool', x: 540, y: 50,  label: 'Tools' },
  { id: 'out',  x: 700, y: 110, label: 'Output' },
];

const EDGES: ReadonlyArray<Edge> = [
  { from: 'in',   to: 'rag'  },
  { from: 'in',   to: 'plan' },
  { from: 'rag',  to: 'plan' },
  { from: 'plan', to: 'tool' },
  { from: 'plan', to: 'out'  },
  { from: 'tool', to: 'out'  },
];

const node = (id: string) => NODES.find((n) => n.id === id);

function curve(from: Node, to: Node): string {
  const mx = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} Q ${mx} ${(from.y + to.y) / 2 - 24} ${to.x} ${to.y}`;
}

export default function AgentGraph() {
  return (
    <div className="pf-agent-graph" aria-hidden="true">
      <svg viewBox="0 0 760 220" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(56,189,248,0)" />
            <stop offset="50%"  stopColor="rgba(56,189,248,0.7)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
          <radialGradient id="node-glow">
            <stop offset="0%"   stopColor="rgba(56,189,248,0.6)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </radialGradient>
        </defs>

        <g className="ag-edges">
          {EDGES.map((e, i) => {
            const a = node(e.from);
            const b = node(e.to);
            if (!a || !b) return null;
            return <path key={i} d={curve(a, b)} fill="none" />;
          })}
        </g>

        <g className="ag-nodes">
          {NODES.map((n) => (
            <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
              <circle className="ag-glow" r="22" />
              <circle className={`ag-dot ${n.core ? 'ag-dot--core ag-pulse' : ''}`} r="6" />
              <text className="ag-label" y="28">{n.label}</text>
            </g>
          ))}
        </g>
      </svg>
      <div className="pf-agent-label">Agentic flow · multi-agent reasoning</div>
    </div>
  );
}
