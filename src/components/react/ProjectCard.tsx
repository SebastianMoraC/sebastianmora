import type { Project } from '../../data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--cmx', `${e.clientX - r.left}px`);
    el.style.setProperty('--cmy', `${e.clientY - r.top}px`);
  };

  return (
    <article className="pf-card" onMouseMove={onMove}>
      <div className="pf-card-meta">
        <span>{project.kind}</span>
        <span>{project.year}</span>
      </div>
      <div className="pf-card-title">{project.title}</div>
      <div className="pf-card-blurb">{project.blurb}</div>
      <div className="pf-card-highlight">{project.highlight}</div>
      <div className="pf-card-stack">
        {project.stack.map((s) => (
          <span key={s} className="pf-tag">{s}</span>
        ))}
      </div>
    </article>
  );
}
