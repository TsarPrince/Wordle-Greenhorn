/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        progress: 'progress 2s linear',
      },
      keyframes: {
        progress: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        }
      },
    },
  },
  plugins: [],
}