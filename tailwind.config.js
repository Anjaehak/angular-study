/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, ts}'
  ],
  theme: {
    extend: {
      flex: {
        '2': '1 0 0%'
      },
      colors:{
        primary:'#283266',
        secondary:'#0F766E',
      },
      boxShadow: {
        '3xl': '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}

