/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "disabled-background-color": "#ecedf5",
      "allgrey-background-color": "#f6f7fb",
      "disabled-text-color": "#32333861",
      "color-wolf-gray": "#c3c6d4",
    },
    
  },
  plugins: [],
});
