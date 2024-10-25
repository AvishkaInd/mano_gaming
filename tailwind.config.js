/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        themeBlue: '#002147',
        themeYellow: '#efe911',
        themeWhite: '#ffffff',
      },
    },
  },
  plugins: [],
}
