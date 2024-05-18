/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koho: ["KoHo", "sans-serif"],
        krub: ["Krub", "sans-serif"],
      },
      colors: {
        spaceCadet: '#82337E',
        midnight: '#023047',
        sunrise: '#FA8400',
        midday: '#1CACD8',
        gray: '#DFDEF4'
      }
    },
  },
  plugins: [],
}
