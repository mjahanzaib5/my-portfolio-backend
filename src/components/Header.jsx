// src/components/Header.jsx
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const SocialIcon = ({ label }) => {
  const key = label.toLowerCase();
  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.58v-5.57c0-1.33 0-3.05-1.86-3.05s-2.14 1.45-2.14 2.96v5.66H9.29V9h3.43v1.56h.05a3.76 3.76 0 0 1 3.38-1.86c3.62 0 4.29 2.38 4.29 5.49Zm-13.9 0H3v-11h3.56Zm-1.78-12.5a2.06 2.06 0 1 1 2.06-2.06 2.05 2.05 0 0 1-2.06 2.06Z"
        />
      </svg>
    );
  }
  if (key === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        />
      </svg>
    );
  }
  return null;
};

const getSocialKey = (label = "") =>
  label.toLowerCase().trim().replace(/\s+/g, "-");

export default function Header({ name, socials = [], theme = "light", onToggleTheme = () => {} }) {
  const [open, setOpen] = React.useState(false);
  const isDark = theme === "dark";

  // Close menu when a link is clicked (nice for one-page sites)
  const handleLinkClick = () => setOpen(false);

      const handleToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const handleNav = (id) => (e) => {
    e.preventDefault();
    setOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // keep the URL hash without using the restricted global
      if (window?.history?.replaceState) {
        window.history.replaceState(null, "", "#top");
      }
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window?.history?.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
  };


  return (
    <header className="site-header">
      <div className="container header-wrap">
        <a href="#top" onClick={handleToTop} className="brand" aria-label="Home">{name}</a>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav">
            {/* <li><a href="#about" onClick={handleNav("about")}>About</a></li> */}
            <li><a href="#top" onClick={handleToTop}>About</a></li>
            <li><a href="#skills" onClick={handleNav("skills")}>Skills</a></li>
            <li><a href="#work" onClick={handleNav("work")}>Work</a></li>
            <li><a href="#experience" onClick={handleNav("experience")}>Experience</a></li>
            <li><a href="#contact" onClick={handleNav("contact")}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <ul className="socials nav-desktop">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  className={`icon-pill icon-pill--${getSocialKey(s.label)}`}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                >
                  <SocialIcon label={s.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile theme toggle and menu button */}
        <div className="mobile-header-actions">
          <button
            type="button"
            className="theme-toggle theme-toggle--mobile"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="menu-icon" aria-hidden="true"></span>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile"
      >
        <ul>
          <li><a onClick={handleLinkClick} href="#about">About</a></li>
          <li><a onClick={handleLinkClick} href="#skills">Skills</a></li>
          <li><a onClick={handleLinkClick} href="#work">Work</a></li>
          <li><a onClick={handleLinkClick} href="#experience">Experience</a></li>
          <li><a onClick={handleLinkClick} href="#contact">Contact</a></li>
          <li className="mobile-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className={`icon-pill icon-pill--${getSocialKey(s.label)}`}
              >
                <SocialIcon label={s.label} />
                <span className="sr-only">{s.label}</span>
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
