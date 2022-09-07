/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Tomorrow: ["Tomorrow", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-background-color": "#14172B",
      },
    },
  },
  plugins: [],
};
