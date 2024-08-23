/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d1f33", // Deep Navy Blue
        secondary: "#a0b1cc", // Slate Blue
        tertiary: "#1c2938", // Dark Slate Blue
        "black-100": "#0b1521", // Blackened Blue
        "black-200": "#050a12", // Very Dark Blue
        "white-100": "#e5e9f0", // Soft Blueish White
      },
      boxShadow: {
        card: "0px 35px 120px -15px #182533", // Dark Blue Shadow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/midnightbg.jpg')",
      },
    },
  },
  plugins: [],
};








