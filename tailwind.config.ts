import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B8960C",
        "gold-lt": "#D4AF37",
        cream: "#FAF8F5",
        warm: "#F2EDE6",
        stone: "#E8E1D8",
        ink: "#2C2620",
        muted: "#7A6E65",
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
