"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { EarthVisual } from "@/components/earth-visual";

type HeroProps = {
  hero: {
    name: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    stats: readonly string[];
    profileImage: string;
  };
  techStack: readonly string[];
};

export function HeroSection({ hero, techStack }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="shell relative pt-6 md:min-h-[calc(100vh-74px)] md:pt-16">
      <div className="grid items-start gap-10 pb-10 md:min-h-[calc(100vh-74px)] md:items-center md:gap-14 md:pb-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-[34px] border border-sky-500/15 bg-[linear-gradient(180deg,rgba(13,24,45,0.95),rgba(8,16,36,0.98))] p-3 shadow-soft ring-1 ring-sky-500/10 md:rounded-[38px] md:p-6">
            {/* Neon corner accent */}
            <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-tl-[34px] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_60%)]" />
            <div className="pointer-events-none absolute -right-16 -top-6 scale-[0.82] opacity-20 md:-right-8 md:top-6 md:scale-100 md:opacity-25">
              <EarthVisual />
            </div>
            <div className="relative z-10 overflow-hidden rounded-[28px] border border-sky-500/10 bg-[linear-gradient(180deg,rgba(13,24,45,0.8),rgba(8,16,36,0.9))] p-4 md:rounded-[32px] md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_32%)]" />
              <div className="relative space-y-4 md:space-y-5">
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[26px] border border-sky-500/15 bg-slate-950 shadow-[0_24px_44px_rgba(0,0,0,0.6),0_0_0_1px_rgba(56,189,248,0.08)] ring-1 ring-sky-900/40 md:aspect-[4/4.6] md:rounded-[30px]">
                  <Image
                    src={hero.profileImage}
                    alt="Portrait of Žiga Žlogar"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 460px"
                    priority
                    className="object-cover object-center"
                  />
                  {/* Subtle scanline overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,5,16,0.08)_50%,transparent_100%)] mix-blend-overlay"
                  />
                  {/* Top neon shimmer */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-[linear-gradient(180deg,rgba(56,189,248,0.18),transparent)]"
                  />
                </div>
                <div className="rounded-[22px] border border-sky-500/10 bg-slate-900/60 px-4 py-3 backdrop-blur-sm md:rounded-[24px] md:px-5 md:py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent/70">
                    <span className="mr-1 text-accent/40">$</span> whoami
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    I enjoy working where business understanding, practical delivery, and thoughtful digitalization meet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative z-10 order-2 max-w-3xl lg:order-1">
          <motion.span
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow max-w-[18rem] leading-5 md:max-w-none"
          >
            {hero.eyebrow}
          </motion.span>
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.03 }}
            className="mb-3 font-display text-[1.55rem] tracking-[-0.04em] text-text md:mb-4 md:text-3xl"
          >
            {hero.name}
          </motion.p>
          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.04 }}
            className="max-w-[12ch] font-display text-[2.35rem] font-semibold leading-[0.97] tracking-[-0.065em] text-text sm:max-w-none sm:text-[2.9rem] md:text-[5rem] xl:text-[5.45rem]"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 max-w-2xl text-[1.02rem] leading-7 text-muted md:mt-7 md:text-[1.18rem] md:leading-8"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="/ziga-zlogar-cv.pdf"
              download
              className="btn-primary w-full sm:w-auto"
            >
              Download CV
            </a>
            <a
              href="#experience"
              className="btn-secondary w-full sm:w-auto"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="btn-ghost w-full sm:w-auto"
            >
              Contact
            </a>
          </motion.div>
          {/* Tech stack badges */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22 }}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60 mr-1">Stack:</span>
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </motion.div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.28 }}
            className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-3"
          >
            {hero.stats.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-sky-500/10 bg-sky-950/20 px-4 py-3.5 text-sm leading-6 text-muted md:rounded-[24px] md:py-4"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
