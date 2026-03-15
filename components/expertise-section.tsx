"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ExpertiseItem = {
  title: string;
  description: string;
};

export function WhatIDoSection({ items }: { items: readonly ExpertiseItem[] }) {
  return (
    <section id="what-i-do" className="section">
      <div className="section-divider" />
      <SectionIntro
        eyebrow="What I Do"
        title="The kind of work I focus on"
        copy="My work combines project coordination, business understanding, and solution thinking in a way that stays practical and clear."
      />
      <div className="grid gap-3.5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="panel interactive-card group h-full overflow-hidden p-6 md:p-8"
            >
              <div className="mb-6 h-px w-14 bg-gradient-to-r from-accent via-accentBlue to-transparent transition-all duration-300 group-hover:w-24 md:mb-8 md:w-16" />
              <h3 className="font-display text-[1.45rem] font-semibold tracking-[-0.04em] text-text md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted md:mt-4 md:text-base md:leading-8">{item.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
