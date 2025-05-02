/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBG: '#FCFCFA',
        darkBG: '#2C3F50',
        ppYellow: '#E5B94B',
        softBG: '#F2E5D7',
      },
      fontFamily: {
        heading: ['"Fraunces"', 'serif'],
        body: ['"Amarante"', 'serif'],
      },
    },
  },
  plugins: [],
};
