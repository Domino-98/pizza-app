const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      orange: colors.orange,
      white: colors.white,
      black: colors.black,
    },
    backgroundImage: {
      "header-img": "url('/src/assets/img/home-img.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
