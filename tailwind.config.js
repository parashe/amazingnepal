// tailwind.config.js

const colors = require("./src/Lib/colors.cjs");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors.colors,
      },
    },
  },

  plugins: [require("daisyui")],
};
