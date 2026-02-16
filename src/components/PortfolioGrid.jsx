import { useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSectionReveal } from "../hooks/useSectionReveal";

const PREVIEW_COUNT = 6;

export default function PortfolioGrid({ projects = [] }) {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { stagger: 0.1, offset: 48 });

  const visibleProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, PREVIEW_COUNT)),
    [projects, showAll]
  );

  const hiddenCount = Math.max(projects.length - PREVIEW_COUNT, 0);
  const hasMore = hiddenCount > 0;

  return (
    <section className="section section-portfolio" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow" data-animate>Selected Work</span>
            <h2 className="section-title" data-animate>Portfolio</h2>
          </div>
          <p className="section-lead" data-animate>
            High-impact product and marketing experiences delivered across SaaS, fintech, and eCommerce.
          </p>
        </div>
        <div className="grid portfolio-grid" data-animate data-animate-stagger=".card">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${project.name}-${index}`}
              project={project}
            />
          ))}
        </div>
        {hasMore && (
          <div className="section-actions" data-animate>
            <button
              type="button"
              className="btn btn-outline cursor-pointer"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show less" : `See more`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
