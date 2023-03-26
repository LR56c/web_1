/** @type {import('tailwindcss').Config} */
const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
