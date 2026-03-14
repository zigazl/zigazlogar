"use client";

import { motion, useReducedMotion } from "framer-motion";

export function EarthVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(138,167,209,0.18),rgba(255,255,255,0.1)_42%,transparent_65%)] blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="0 0 520 520"
        className="relative h-full w-full"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="earthFill" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="45%" stopColor="rgba(174, 197, 216, 0.5)" />
            <stop offset="100%" stopColor="rgba(246, 247, 244, 0.08)" />
          </radialGradient>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(138, 167, 209, 0.3)" />
            <stop offset="100%" stopColor="rgba(184, 203, 230, 0.14)" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="260" r="132" fill="url(#earthFill)" opacity="0.85" />
        <circle cx="260" cy="260" r="130" fill="none" stroke="rgba(28,39,48,0.12)" strokeWidth="1.5" />
        <ellipse cx="260" cy="260" rx="210" ry="92" fill="none" stroke="url(#ring)" strokeWidth="1.2" />
        <ellipse cx="260" cy="260" rx="184" ry="184" fill="none" stroke="rgba(138,167,209,0.16)" strokeWidth="1" />
        <ellipse cx="260" cy="260" rx="116" ry="132" fill="none" stroke="rgba(28,39,48,0.1)" strokeWidth="1" />
        <path d="M130 260h260" stroke="rgba(28,39,48,0.08)" strokeWidth="1" />
        <path d="M260 128c40 34 64 82 64 132s-24 98-64 132c-40-34-64-82-64-132s24-98 64-132Z" fill="none" stroke="rgba(28,39,48,0.1)" strokeWidth="1.2" />
        <path d="M260 132c-22 20-42 48-52 86 16 12 24 28 23 50 28-8 42-5 66 10 13-26 32-34 57-36-6-43-22-78-42-110-18 6-34 6-52 0Z" fill="rgba(255,255,255,0.55)" stroke="rgba(138,167,209,0.16)" strokeWidth="1" />
        <circle cx="168" cy="188" r="3" fill="rgba(98,112,125,0.4)" />
        <circle cx="316" cy="162" r="3" fill="rgba(98,112,125,0.4)" />
        <circle cx="352" cy="286" r="3" fill="rgba(98,112,125,0.4)" />
        <circle cx="200" cy="336" r="3" fill="rgba(98,112,125,0.4)" />
        <path d="M168 188l148-26 36 124-152 50" fill="none" stroke="rgba(125,156,198,0.18)" strokeWidth="1.2" strokeDasharray="5 8" />
      </motion.svg>
    </div>
  );
}
