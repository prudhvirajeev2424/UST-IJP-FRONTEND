/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: "#003C51",
          dark: "#006E74",
          DEFAULT: "#0097AC",
          bright: "#01B27C",
        },
        warning: "#FFBF00",
        danger: "#FC6A59",
        accent: "#881E87",
        dark: "#231F20",
        gray: {
          primary: "#7A7480",
          secondary: "#C2BCBE",
          light: "#D7E0E3",
          beige: "#DBD3BD",
        },
        background: {
          DEFAULT: "#F2F7F8",
          alt: "#ECECE1",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
      },
      lineHeight: {
        tight: "1.2",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.57",
      },
      borderRadius: {
        card: "12px",
        button: "8px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 4px 16px rgba(0, 0, 0, 0.12)",
      },
      transitionDuration: {
        200: "200ms",
        300: "300ms",
      },
    },
  },
  plugins: [],
};
