/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans"],
      },
      colors: {
        "custom-black": "#181818",
        "custom-green": "#55E6A5",
        "custom-dark-green": "#47C08A",
      },
    },
  },
  plugins: [],
};
