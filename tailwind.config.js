// tailwind.config.js

const colors = require("./src/Lib/colors.cjs");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", /* dark mode disabled: app never adds .dark, so only light theme is used */
  theme: {
    extend: {
      colors: {
        ...colors.colors,
      },
    },
  },

  plugins: [require("daisyui")],
};
