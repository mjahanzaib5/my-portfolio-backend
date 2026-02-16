import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function Hero({ profile }) {
  const heroRef = useRef(null);
  const roleRef = useRef(null);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/JahanzaibKhan_CV.pdf";
    link.download = "JahanzaibKhan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(TextPlugin);
      const q = gsap.utils.selector(heroRef);

      gsap.from(q(".hero-badge"), {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.from(q(".hero-headline"), {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.from(q(".hero-description"), {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.from(q(".hero-cta > *"), {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.from(q(".hero-meta li"), {
        y: 12,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.06,
        ease: "power3.out",
      });
      gsap.from(q(".hero-card"), {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.45,
        ease: "power2.out",
      });

      gsap.set(roleRef.current, { text: "" });
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
        defaults: { ease: "power1.inOut" },
      });
      tl.to(roleRef.current, {
        duration: 1.2,
        text: { value: "Frontend Developer" },
        delay: 0.1,
      })
        .to(
          roleRef.current,
          {
            duration: 0.3,
            text: { value: "" },
          },
          "+=0.4"
        )
        .to(roleRef.current, {
          duration: 1.2,
          text: { value: "UI/UX Developer" },
        })
        .to(
          roleRef.current,
          {
            duration: 0.3,
            text: { value: "" },
          },
          "+=0.4"
        )
        .to(roleRef.current, {
          duration: 1.2,
          text: { value: "WordPress Developer" },
        })
        .to(
          roleRef.current,
          {
            duration: 0.3,
            text: { value: "" },
          },
          "+=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="container hero-inner">
        <div className="hero-copy">
          {/* <span className="hero-badge">Designing delightful digital products</span> */}
          <h1 className="hero-headline">
            <span ref={roleRef} className="hero-role"></span>
          </h1>
          <p className="hero-description lead">{profile.shortBio}</p>
          <div className="hero-cta">
            <a href="#work" className="btn">
              {profile.heroCTA}
            </a>
            <button
              type="button"
              onClick={handleDownloadResume}
              className="btn btn-outline cursor-pointer"
            >
              Download Resume
            </button>
            <a href="#contact" className="link-quiet">
              Get in touch →
            </a>
          </div>
          {/* <ul className="hero-meta">
            <li>
              <span>Location</span>
              <strong>
                {profile.city}, {profile.country}
              </strong>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
          </ul> */}
          <ul className="meta">
            <li>📍   {profile.city}, {profile.country}</li>
            <li>
              ✉️{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              📞  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
          </ul>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <span className="hero-card-badge">Currently available</span>
            <div className="hero-card-summary">
              <h2>Frontend - UI/UX Developer</h2>
              <p>
                I partner with startups and teams to craft polished experiences
                from concept to launch.
              </p>
            </div>
            <div className="hero-stats">
              <div>
                {/* <strong>12+</strong> */}
                <span>Working in UI/UX and Frontend Development
                  <br />
                  CMS Development</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Products shipped</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Client satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
