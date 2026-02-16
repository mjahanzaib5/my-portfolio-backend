import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const codeSnippets = [
  { text: "const create = () => {", color: "#3b82f6" },
  { text: "function design() {", color: "#10b981" },
  { text: "<Component />", color: "#f59e0b" },
  { text: "import { React }", color: "#8b5cf6" },
  { text: "export default", color: "#ec4899" },
  { text: "useEffect(() => {", color: "#06b6d4" },
  { text: "className='hero'", color: "#14b8a6" },
  { text: "const [state]", color: "#f97316" },
  { text: "return <div>", color: "#6366f1" },
  { text: "npm install", color: "#a855f7" },
  { text: "git commit", color: "#22d3ee" },
  { text: "const api =", color: "#34d399" },
  { text: "async function", color: "#60a5fa" },
  { text: "useState()", color: "#f472b6" },
  { text: "tailwind.css", color: "#38bdf8" },
];

export default function AnimatedCodeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const container = containerRef.current;
    const snippets = container.querySelectorAll(".code-snippet");
    
    // Create floating animation for each snippet
    snippets.forEach((snippet, index) => {
      const duration = 15 + Math.random() * 10; // 15-25 seconds
      const delay = index * 0.5;
      const x = (Math.random() - 0.5) * 200; // Random horizontal movement
      const y = (Math.random() - 0.5) * 200; // Random vertical movement
      
      // Set initial random position
      gsap.set(snippet, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.1 + Math.random() * 0.2, // 0.1-0.3 opacity
        scale: 0.8 + Math.random() * 0.4, // 0.8-1.2 scale
      });

      // Create floating animation
      gsap.to(snippet, {
        x: `+=${x}`,
        y: `+=${y}`,
        rotation: Math.random() * 360,
        duration: duration,
        delay: delay,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Fade in/out animation
      gsap.to(snippet, {
        opacity: 0.15 + Math.random() * 0.15,
        duration: 3 + Math.random() * 2,
        delay: delay,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => {
      gsap.killTweensOf(snippets);
    };
  }, []);

  return (
    <div ref={containerRef} className="animated-code-background">
      {codeSnippets.map((snippet, index) => (
        <span
          key={index}
          className="code-snippet"
          style={{ color: snippet.color }}
        >
          {snippet.text}
        </span>
      ))}
    </div>
  );
}

