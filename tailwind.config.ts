
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0c1a33", // Keeping the base color but it will appear less intense with more transparency in Background.tsx
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#1976D2", // Slightly less bright blue
          hover: "#1565C0",
          light: "#90CAF9", // Lighter, less intense blue
          dark: "#0D47A1"
        },
        secondary: {
          DEFAULT: "#0d2042",
          hover: "#16325f"
        },
        accent: {
          DEFAULT: "#64B5F6", // Less intense accent blue
          hover: "#42A5F5"
        },
        border: "rgba(33, 150, 243, 0.15)", // More subtle blue border
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
