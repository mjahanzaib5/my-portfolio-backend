import { useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Skills({ skills = [] }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { stagger: 0.08, offset: 36 });

  return (
    <section className="section section-skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow" data-animate>Expertise</span>
          <h2 className="section-title" data-animate>Skills & toolset</h2>
          <p className="section-lead" data-animate>
            A blend of product strategy, design systems, and production-ready engineering.
          </p>
        </div>
        <ul className="pill-list" data-animate-stagger=".pill">
          {skills.map((skill) => (
            <li key={skill} className="pill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
