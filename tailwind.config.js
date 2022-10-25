/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "site-red": "#DB4437",
      "site-green": "#0F9D58",
      "site-blue": "#4285F4",
      "site-yellow": "#F4B400",
    },
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
