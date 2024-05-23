/** @type {import('tailwindcss').Config} */
module.exports = {
  content : [ "./src/**/*.{js,jsx,ts,tsx}" ],
  "important" : "#root",
  theme : {
    extend : {
      colors : {
        background : "rgba(var(--background))",
        primary : "rgba(var(--primary))",
        secondary : "rgba(var(--secondary))",
        highlight : "rgba(var(--highlight)) !important",
      },
    },
  },
  plugins : [],
};
