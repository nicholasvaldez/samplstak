/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      green: "#1DB954",
      black: "#0B0101",
      darkgrey: "#1F1F1F",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      abc: ["32px", "33px"],
      xl: ["120px", "97px"],
    },

    extend: {
      fontFamily: {
        main: ["Koulen", "sans-serif"],
        primary: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
