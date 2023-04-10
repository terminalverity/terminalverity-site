/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

      'display': ['Menlo'],
      'body': ['"Menlo"'],
    },
    extend: {
      backgroundColor: {
        "custom-brown": "#18181b",
        "custom-brown2": "#2A2A2D",
        "custom-orange": "#e0e1dd",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#18181b",
        secondary: "#e0e1dd",
      },
    },
  },
  plugins: [],
};
