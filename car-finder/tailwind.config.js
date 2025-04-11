/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        driveCar: {
          '0%': { left: '-100px' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        driveCar: 'driveCar 1s linear forwards',
      },
    },
  },
  plugins: [],
}