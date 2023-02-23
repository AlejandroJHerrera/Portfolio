/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      spacing: {
        big: '44rem',
        bigger: '52rem',
      },
    },
  },
  plugins: [],
};
