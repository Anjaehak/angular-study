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
    },
  },
  plugins: [],
}

