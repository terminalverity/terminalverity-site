/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-brown": "#231724",
        "custom-brown2": "#38202C",
        "custom-orange": "#F47373",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#231724",
        secondary: "#F47373",
      },
    },
  },
  plugins: [],
};
