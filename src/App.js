import React, { useEffect, useState } from "react";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, SOCIALS } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import PortfolioGrid from "./components/PortfolioGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header
        name={PROFILE.name}
        socials={SOCIALS}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero profile={PROFILE} />
        {/* <About profile={PROFILE} /> */}
        <Skills skills={SKILLS} />
        <PortfolioGrid projects={PROJECTS} />
        <Experience items={EXPERIENCE} />
        <Contact profile={PROFILE} socials={SOCIALS} />
      </main>
      <BackToTop />
      <Footer  profile={PROFILE} />
    </>
  );
}
