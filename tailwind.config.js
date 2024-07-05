/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#f36100",
        "black":{
          "1":"#0a0a0a",
          "2":"#15151",
          "3":"#0a0a0a"
        }
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

