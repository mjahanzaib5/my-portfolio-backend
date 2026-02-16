import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionReveal(ref, options = {}) {
  const {
    start = "top 80%",
    stagger = 0.12,
    offset = 40,
    duration = 0.8,
  } = options;

  useEffect(() => {
    if (!ref?.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);
      const baseElements = gsap.utils.toArray(q("[data-animate]"));

      if (!baseElements.length) return;

      gsap.set(baseElements, { opacity: 0, y: offset, willChange: "transform, opacity" });

      gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start,
        },
        defaults: { ease: "power3.out", duration },
      }).to(baseElements, {
        opacity: 1,
        y: 0,
        stagger,
        clearProps: "transform,opacity,willChange",
      });

      const staggerContainers = gsap.utils.toArray(q("[data-animate-stagger]"));

      staggerContainers.forEach((node) => {
        const selector = node.dataset.animateStagger || ":scope > *";
        const targets = gsap.utils.toArray(
          selector === ":scope > *" ? node.children : node.querySelectorAll(selector)
        );

        if (!targets.length) return;

        gsap.set(targets, { opacity: 0, y: offset * 0.7, willChange: "transform, opacity" });

        gsap.timeline({
          scrollTrigger: {
            trigger: node,
            start,
          },
          defaults: { ease: "power3.out", duration: duration * 0.9 },
        }).to(targets, {
          opacity: 1,
          y: 0,
          stagger: stagger * 0.8,
          clearProps: "transform,opacity,willChange",
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, start, stagger, offset, duration]);
}

