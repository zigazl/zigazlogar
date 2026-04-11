"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ExpertiseItem = {
  title: string;
  description: string;
};

const icons: Record<string, string> = {
  "Software Development": "⌨",
  "IT Project Coordination": "◈",
  "Business Analysis": "◎",
  "Solution Design": "⬡",
  "Digitalization Support": "⟁",
  "Data and Reporting": "▦",
};

export function WhatIDoSection({ items }: { items: readonly ExpertiseItem[] }) {
  const [featured, ...rest] = items;

  return (
    <section id="what-i-do" className="section">
      <div className="section-divider" />
      <SectionIntro
        eyebrow="What I Do"
        title="The kind of work I focus on"
        copy="My work combines project coordination, business understanding, and solution thinking in a way that stays practical and clear."
      />

      {/* Featured card — Software Development */}
      <Reveal className="mb-3.5 md:mb-6">
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-[36px] border border-accent/20 bg-[linear-gradient(135deg,rgba(13,24,45,0.95),rgba(8,16,36,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(56,189,248,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-accent/35 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(56,189,248,0.1)] md:p-10"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.07),transparent_45%)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.05),transparent_60%)]" />
          {/* Grid overlay */}
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:gap-10 md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl text-accent" aria-hidden="true">{icons[featured.title]}</span>
                <span className="tech-badge">Currently building</span>
              </div>
              <h3 className="font-display text-[1.8rem] font-semibold tracking-[-0.04em] text-text md:text-[2.4rem]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[1.02rem] leading-7 text-muted md:text-[1.1rem] md:leading-8">
                {featured.description}
              </p>
            </div>
            {/* Terminal visual */}
            <div className="hidden md:block">
              <div className="w-[260px] rounded-[20px] border border-sky-500/15 bg-slate-950/80 p-4 font-mono text-[12px]">
                <div className="mb-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <p className="text-green-400/80"><span className="text-accent/60">~</span> npm run dev</p>
                <p className="mt-1 text-muted/60">▶ Next.js 15 ready</p>
                <p className="text-muted/60">○ Compiled in 842ms</p>
                <p className="mt-1 text-accent/70">● localhost:3000</p>
              </div>
            </div>
          </div>
        </motion.article>
      </Reveal>

      {/* Rest of the cards */}
      <div className="grid gap-3.5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="panel interactive-card group h-full overflow-hidden p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className="text-xl text-accent/70" aria-hidden="true">{icons[item.title] ?? "◇"}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-accent/20 via-accentBlue/10 to-transparent transition-all duration-300 group-hover:from-accent/40" />
              </div>
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
