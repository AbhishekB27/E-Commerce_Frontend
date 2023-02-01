/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  })
})
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
  plugins: [MyClass],
}