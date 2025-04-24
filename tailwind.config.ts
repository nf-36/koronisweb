import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#2563eb", // Bright blue
          hover: "#1d4ed8",
          light: "#60a5fa",
          dark: "#1e40af"
        },
        secondary: {
          DEFAULT: "#1e293b",
          hover: "#334155"
        },
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb"
        },
        border: "rgba(59, 130, 246, 0.2)", // Subtle blue border
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "background-shine": "background-shine 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
