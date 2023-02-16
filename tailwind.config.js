/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        serif: ["Bellefair", "serif"],
        sanCondensed: ["Barlow Condensed", "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
