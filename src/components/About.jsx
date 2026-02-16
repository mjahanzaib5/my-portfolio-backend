import { useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function About({ profile }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);

  return (
    <section className="section section-about" id="about" ref={sectionRef}>
      <div className="container about-layout">
        <div className="about-copy">
          <span className="section-eyebrow" data-animate>About</span>
          <h2 className="section-title" data-animate>
            WordPress, Shopify & React — crafted with UI/UX leadership
          </h2>
          <p className="section-lead" data-animate>
            {profile.shortBio}
          </p>
        </div>
        <div className="about-panels">
          <div className="about-panel about-panel--accent" data-animate>
            <h3>What I do</h3>
            <p>
              I design and build modern websites and web apps using WordPress, Shopify and React.
              From custom themes and plugins to pixel-perfect frontends, I focus on clean,
              scalable code and delightful user experiences.
            </p>
          </div>
          <div className="about-panel" data-animate>
            <h3>How I work</h3>
            <p>
              I lead UI/UX and frontend teams with a hands-on approach — translating business goals
              into clear user flows, responsive layouts and reusable component systems. Collaboration,
              performance and maintainability are always at the center.
            </p>
          </div>
          <div className="about-panel about-panel--list" data-animate>
            <h3>What you get</h3>
            <ul>
              <li>Custom WordPress & Shopify solutions tailored to your brand</li>
              <li>High-performing, SEO‑friendly React and frontend implementations</li>
              <li>Pixel-perfect, responsive UI with a strong focus on UX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
