import { useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Experience({ items = [] }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { offset: 48 });

  return (
    <section className="section section-experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--stack">
          <span className="section-eyebrow" data-animate>Experience</span>
          <h2 className="section-title" data-animate>Career chapters</h2>
          <p className="section-lead" data-animate>
            Leading multidisciplinary teams and delivering outcomes across agencies, startups, and enterprise projects.
          </p>
        </div>
        <div className="timeline" data-animate-stagger=".timeline-item">
          {items.map((job, index) => (
            <article key={job.company + job.period} className="timeline-item">
              <header className="timeline-head">
                <div className="timeline-badge">{index + 1}</div>
                <div>
                  <h3>{job.role}</h3>
                  <span className="muted fw-600">{job.company}</span>
                </div>
                <span className="timeline-period">{job.period}</span>
              </header>
              <ul className="timeline-body">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
