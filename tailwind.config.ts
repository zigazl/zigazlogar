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
        canvas: "#050c1a",
        surface: "#0d1829",
        line: "rgba(56, 189, 248, 0.1)",
        text: "#e2e8f0",
        muted: "#94a3b8",
        accent: "#38bdf8",
        accentDeep: "#0ea5e9",
        accentBlue: "#7dd3fc",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 0, 0, 0.5)",
        glow: "0 0 40px rgba(56, 189, 248, 0.18)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.09), transparent 40%), radial-gradient(circle at 80% 5%, rgba(14,165,233,0.07), transparent 35%), linear-gradient(180deg, #050c1a 0%, #08132a 100%)",
        grid:
          "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Optima", "Avenir Next", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
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
