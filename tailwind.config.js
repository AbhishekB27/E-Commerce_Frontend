/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancingScript :['Dancing Script', 'cursive'],
        poppins :['Poppins', 'sans-serif'],
        ubuntu :['Ubuntu', 'sans-serif'],
        rubik :['Rubik Puddles', 'sans-serif']
      }
    },
  },
  plugins: [],
}