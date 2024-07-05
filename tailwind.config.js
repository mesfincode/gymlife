/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#f36100"
      },
      fontFamily:{
        sans: ['sans-serif', 'sans'],
        oswald:['Oswald','sans-serif'],
        raleway:['Raleway','sans-serif']
      }
    },
  },
  plugins: [],
}

