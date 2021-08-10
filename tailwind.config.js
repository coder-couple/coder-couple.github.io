const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      green: colors.green[300],
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      display: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
