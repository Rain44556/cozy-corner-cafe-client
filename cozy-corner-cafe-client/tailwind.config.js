/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      titleFont: ["Rancho", "cursive"],
      paraFont: ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}
