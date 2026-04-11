"use client";

import { motion, useReducedMotion } from "framer-motion";

export function EarthVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" style={{ contain: "layout paint" }}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.22),rgba(14,165,233,0.08)_42%,transparent_65%)] blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="0 0 520 520"
        className="relative h-full w-full"
        style={{ willChange: "transform" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="earthFill" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="45%" stopColor="rgba(14, 165, 233, 0.12)" />
            <stop offset="100%" stopColor="rgba(3, 8, 20, 0)" />
          </radialGradient>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.45)" />
            <stop offset="100%" stopColor="rgba(125, 211, 252, 0.1)" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="260" r="132" fill="url(#earthFill)" opacity="0.9" />
        <circle cx="260" cy="260" r="130" fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="1" />
        <ellipse cx="260" cy="260" rx="210" ry="92" fill="none" stroke="url(#ring)" strokeWidth="1" />
        <ellipse cx="260" cy="260" rx="184" ry="184" fill="none" stroke="rgba(56,189,248,0.16)" strokeWidth="1" />
        <ellipse cx="260" cy="260" rx="116" ry="132" fill="none" stroke="rgba(56,189,248,0.12)" strokeWidth="1" />
        <path d="M130 260h260" stroke="rgba(56,189,248,0.1)" strokeWidth="1" />
        <path d="M260 128c40 34 64 82 64 132s-24 98-64 132c-40-34-64-82-64-132s24-98 64-132Z" fill="none" stroke="rgba(56,189,248,0.14)" strokeWidth="1" />
        <circle cx="168" cy="188" r="3" fill="rgba(56,189,248,0.7)" />
        <circle cx="316" cy="162" r="3" fill="rgba(56,189,248,0.7)" />
        <circle cx="352" cy="286" r="3" fill="rgba(125,211,252,0.7)" />
        <circle cx="200" cy="336" r="3" fill="rgba(56,189,248,0.7)" />
        <path d="M168 188l148-26 36 124-152 50" fill="none" stroke="rgba(56,189,248,0.22)" strokeWidth="1" strokeDasharray="5 8" />
      </motion.svg>
    </div>
  );
}
