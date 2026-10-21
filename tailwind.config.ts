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
          DEFAULT: "#A6CE39",
          light: "#A6CE39",
          dark: "#A6CE39",
        },
        sand: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
        },
        ink: "#17170F",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
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