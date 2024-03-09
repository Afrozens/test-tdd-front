/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F5F5F5',
        secondary: '#FF9110'
      },
      colors: {
        primary: '#F5F5F5',
        secondary: '#FF9110'
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated')],
}