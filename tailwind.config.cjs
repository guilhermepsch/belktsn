/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa", "cursive"],
      nickainley: ["Nickainley", "sans-serif"],
    },
    extend: {
      colors: {
        darkpurple: "#543A76",
        lightpink: "#F1A2A6",
        darkpink: "#ED6E73",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
