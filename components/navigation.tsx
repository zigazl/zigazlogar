"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["What I Do", "#what-i-do"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Values", "#values"],
  ["Contact", "#contact"],
] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = links.map(([, href]) => href.slice(1));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the topmost visible section
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive("#" + topmost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navigation() {
  const reduceMotion = useReducedMotion();
  const activeSection = useActiveSection();

  return (
    <motion.header
      initial={reduceMotion ? undefined : { opacity: 0, y: -20 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-[rgba(252,253,255,0.86)] backdrop-blur-2xl"
    >
      <div className="shell flex items-center justify-between gap-4 py-3 md:py-4">
        <a href="#hero" className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-text">
          ZZ
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors duration-300 hover:text-text ${
                activeSection === href ? "font-semibold text-text" : "text-muted"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-secondary px-4 py-2"
        >
          Contact
        </a>
      </div>
      <div className="shell -mx-5 overflow-x-auto px-5 pb-3 lg:hidden">
        <nav aria-label="Mobile section links" className="flex min-w-max gap-2">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`inline-flex min-h-10 items-center rounded-full border px-4 text-sm transition-colors duration-300 ${
                activeSection === href
                  ? "border-accent/50 bg-accent/10 font-semibold text-accentDeep"
                  : "border-slate-200 bg-white/90 text-muted hover:border-accent/50 hover:text-text"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
