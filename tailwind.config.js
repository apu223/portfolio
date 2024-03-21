/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
        colors:{
          apus:"#115e59",
          bff:"#e5e7eb"
        }
      }
    },
  },
  plugins: [],
}