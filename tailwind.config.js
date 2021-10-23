const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: () => ({
        "screen-nav": "calc(100vh - 5rem)",
      }),
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      orange: colors.orange,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
