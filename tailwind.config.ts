import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: "#2E8B57",
        forest: "#1F5C3E",
        amber: {
          DEFAULT: "#A8D038",
          light: "#C0E060",
          dark: "#8AB030",
        },
        sand: {
          DEFAULT: "#F7F5EE",
          light: "#FFFFFF",
        },
        ink: "#17170F",
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