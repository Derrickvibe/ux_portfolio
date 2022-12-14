/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    colors: {
      black: '#292A2C',
      white: '#ffffff',
      gray:'#999999',
      yellow: '#FFFF00'
    },
    fontFamily: {
      gilroy: ['Gilroy'],
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}
