// tailwind.config.js

const colors = require("./src/Lib/colors.cjs");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...colors.colors,
      },
    },
  },

  plugins: [require("daisyui")],
};
