/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/dist/assets/componets/*.{html,jsx,js,ts}"],

  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        robot: ["Roboto", "sans-serif"],
        'Silkscreen':['Silkscreen', 'sans-serif'],
        'hertical':['hertical'],
      },
      colors: {
        primary: "#3498db", // Blue
        secondary: "#e74c3c", // Red
        accent: "#2ecc71", // Green
        neutral: "#bdc3c7", // Gray
        background: "#ecf0f1", // Light Gray
      },
    },
    plugins: [],
  },
};
