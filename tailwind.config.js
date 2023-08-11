/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'black-linear-gradient': 'linear-gradient(to top, rgba(0, 0, 0, 0.986), transparent 70%),linear-gradient(to bottom, rgba(0, 0, 0, .986), transparent 30%)'
    
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'gt-america-regular':['"GT America Regular"', 'Arial'],
        'rod-chenko':['"RodchenkoCond W08 Regular"', 'Arial']
      },
    },
  },
  plugins: [],
}
