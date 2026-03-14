"use client";

import { motion, useReducedMotion } from "framer-motion";

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
};

export function HeroSection({ hero }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="shell relative min-h-[calc(100vh-74px)] pt-10 md:pt-16">
      <div className="grid min-h-[calc(100vh-74px)] items-center gap-14 pb-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10 max-w-3xl">
          <motion.span
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.span>
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.03 }}
            className="mb-4 font-display text-2xl tracking-[-0.04em] text-text md:text-3xl"
          >
            {hero.name}
          </motion.p>
          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.04 }}
            className="font-display text-[3rem] font-semibold leading-[0.96] tracking-[-0.065em] text-text md:text-[5rem] xl:text-[5.45rem]"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-[1.18rem]"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="/ziga-zlogar-cv.pdf"
              download
              className="btn-primary"
            >
              Download CV
            </a>
            <a
              href="#experience"
              className="btn-secondary"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="btn-ghost"
            >
              Contact
            </a>
          </motion.div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.22 }}
            className="mt-14 grid gap-3 sm:grid-cols-3"
          >
            {hero.stats.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-white/88 px-4 py-4 text-sm leading-6 text-muted shadow-soft"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12 }}
          className="relative"
        >
          <div className="relative rounded-[38px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-4 shadow-soft ring-1 ring-slate-200/80 md:p-6">
            <div className="pointer-events-none absolute -right-10 top-2 opacity-40 md:-right-8 md:top-6">
              <EarthVisual />
            </div>
            <div className="relative z-10 overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,249,251,0.94))] p-5 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,167,209,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(184,203,230,0.1),transparent_32%)]" />
              <div className="relative space-y-5">
                <div className="overflow-hidden rounded-[30px] border border-white/80 bg-slate-100 shadow-[0_30px_60px_rgba(58,78,104,0.12)] ring-1 ring-slate-200/70">
                  <img
                    src={hero.profileImage}
                    alt="Portrait of Žiga Žlogar"
                    className="aspect-[4/4.6] w-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                <div className="rounded-[24px] border border-slate-200/90 bg-white/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted">A personal introduction</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    I enjoy working where business understanding, practical delivery, and thoughtful digitalization meet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
