import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f7fb",
        surface: "#ffffff",
        line: "rgba(72, 92, 118, 0.12)",
        text: "#1a2533",
        muted: "#637285",
        accent: "#8aa7d1",
        accentDeep: "#4f6790",
        accentBlue: "#b8cbe6",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(33, 48, 61, 0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 15% 15%, rgba(138, 167, 209, 0.18), transparent 32%), radial-gradient(circle at 85% 0%, rgba(184, 203, 230, 0.18), transparent 26%), linear-gradient(180deg, #fcfdff, #f3f6fb)",
        grid:
          "linear-gradient(rgba(99, 114, 133, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 114, 133, 0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Optima", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
