import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        savanna: {
          DEFAULT: "#1B3A2B",
          light: "#254B39",
          dark: "#122A1F",
        },
        amber: {
          DEFAULT: "#E8A33D",
          light: "#F2BE6E",
          dark: "#C6822A",
        },
        sand: {
          DEFAULT: "#F1E8D6",
          light: "#FBF7EE",
        },
        ink: "#201C16",
        rust: "#B5533C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/grain.svg')",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
