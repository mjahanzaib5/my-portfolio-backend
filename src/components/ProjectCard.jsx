export default function ProjectCard({ project, className = "", ...rest }) {
  return (
    <article className={`card ${className}`.trim()} {...rest}>
      <div className="card-thumb">
        <img src={project.thumbnail} alt={`${project.name} thumbnail`} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="card-text">{project.details}</p>
        <a
          className="btn btn-sm"
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit Project ↗
        </a>
      </div>
    </article>
  );
}
