// tailwind.config.js (ESM)
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#003C51",
          medium: "#006E74",
          light: "#0097AC",
        },
        accent: {
          orange: "#FC6A59",
          purple: "#881E87",
          green: "#01B27C",
          yellow: "#FFBF00",
        },
        text: {
          primary: "#231F20",
          secondary: "#7A7480",
        },
        background: {
          light: "#F2F7F8",
          beige: "#ECECE1",
          grey: "#D7E0E3",
        },
        tag: {
          beige: "#DBD3BD",
          grey: "#C2BCBE",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
