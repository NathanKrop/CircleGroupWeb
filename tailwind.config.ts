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
          DEFAULT: "#204020",
          light: "#2A4A2A",
          dark: "#183018",
        },
        amber: {
          DEFAULT: "#A8D038",
          light: "#C0E060",
          dark: "#8AB030",
        },
        sand: {
          DEFAULT: "#F8F8F8",
          light: "#FFFFFF",
        },
        ink: "#100100",
        rust: "#60B048",
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