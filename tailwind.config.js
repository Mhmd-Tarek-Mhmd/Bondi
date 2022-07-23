/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      primary: "#00c6bf",
      "primary-alt": "#00c7c0",
      secondary: "#ffc501",
      red: "#ff3150",
      gray: "#a8b9c0",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ".cta": {
          color: "#ffc501",
          "font-weight": " 500",
          display: "inline-grid",
          "place-items": "center",
          "will-change": " opacity",
          "background-color": "#ff3150",
          "&:hover": {
            opacity: "0.8",
          },
          "&.md ": {
            width: "110px",
            height: "40px",
          },
          "&.lg ": {
            width: "190px",
            height: "45px",
          },
        },
        ".section-title": {
          padding: "60px 0",
          "text-align": "center",
          img: {
            display: "initial",
          },
          h2: {
            "font-size": "35px",
            "font-weight": 500,
            margin: "40px 0 12px",
            color: "#1a2940",
          },
          ".line": {
            height: "1px",
            width: "150px",
            margin: "15px auto 0",
            "background-color": "#00c6bf",
          },
        },
      });
      addUtilities({
        ".bg-dark": {
          "background-color": "#19283f",
        },
        ".bg-light": {
          "background-color": "#eff7fa",
        },
        ".title-dark": {
          color: "#1a2940",
        },
        ".title-light": {
          color: "#fff",
        },
      });
    }),
  ],
};
