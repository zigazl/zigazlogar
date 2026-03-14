"use client";

import { motion } from "framer-motion";

const links = [
  ["About", "#about"],
  ["What I Do", "#what-i-do"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Values", "#values"],
  ["Contact", "#contact"],
] as const;

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-[rgba(252,253,255,0.86)] backdrop-blur-2xl"
    >
      <div className="shell flex items-center justify-between gap-6 py-4">
        <a href="#hero" className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-text">
          ZZ
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors duration-300 hover:text-text"
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
    </motion.header>
  );
}
