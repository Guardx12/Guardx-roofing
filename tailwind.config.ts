import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#b9dcff",
          300: "#8bc6ff",
          400: "#55a7ff",
          500: "#2b86ff",
          600: "#1463e6",
          700: "#114fb9",
          800: "#123f8f",
          900: "#0f2f68",
          950: "#0b1d3f",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
