import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B5838D",
        "gold-lt": "#C9A0A8",
        cream: "#FAF6F4",
        warm: "#F0E6E2",
        stone: "#E5DCDA",
        ink: "#1E1B19",
        muted: "#8C7E78",
        wa: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
