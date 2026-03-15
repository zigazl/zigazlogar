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
    <section id="hero" className="shell relative pt-6 md:min-h-[calc(100vh-74px)] md:pt-16">
      <div className="grid items-start gap-10 pb-10 md:min-h-[calc(100vh-74px)] md:items-center md:gap-14 md:pb-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-[34px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-3 shadow-soft ring-1 ring-slate-200/80 md:rounded-[38px] md:p-6">
            <div className="pointer-events-none absolute -right-16 -top-6 scale-[0.82] opacity-35 md:-right-8 md:top-6 md:scale-100 md:opacity-40">
              <EarthVisual />
            </div>
            <div className="relative z-10 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,249,251,0.94))] p-4 md:rounded-[32px] md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,167,209,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(184,203,230,0.1),transparent_32%)]" />
              <div className="relative space-y-4 md:space-y-5">
                <div className="overflow-hidden rounded-[26px] border border-white/80 bg-slate-100 shadow-[0_24px_44px_rgba(58,78,104,0.12)] ring-1 ring-slate-200/70 md:rounded-[30px] md:shadow-[0_30px_60px_rgba(58,78,104,0.12)]">
                  <img
                    src={hero.profileImage}
                    alt="Portrait of Žiga Žlogar"
                    className="aspect-[4/4.2] w-full object-cover object-center md:aspect-[4/4.6]"
                    loading="eager"
                  />
                </div>
                <div className="rounded-[22px] border border-slate-200/90 bg-white/82 px-4 py-3 backdrop-blur-sm md:rounded-[24px] md:px-5 md:py-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted">A personal introduction</p>
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
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.22 }}
            className="mt-10 grid gap-2.5 sm:mt-14 sm:grid-cols-3 sm:gap-3"
          >
            {hero.stats.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-slate-200 bg-white/88 px-4 py-3.5 text-sm leading-6 text-muted shadow-soft md:rounded-[24px] md:py-4"
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
