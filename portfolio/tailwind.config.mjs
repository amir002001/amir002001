/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Custom breakpoint at 375px
      },
      fontFamily: {
        sans: ["PPEditorialNew", ...defaultTheme.fontFamily.serif],
        title: ["PPNeueWorld", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
