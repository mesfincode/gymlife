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
          "2":"#151515",
          "3":"#0a0a0a",
          "4":"#333333"
        },
        "black-text":"#a9a9a9"
        
      },
      fontFamily:{
        sans: ['sans-serif', 'sans'],
        oswald:['Oswald','sans-serif'],
        raleway:['Raleway','sans-serif']
      },
      screens: {
        xsm:"300px"
      }
    },
  },
  plugins: [],
}

