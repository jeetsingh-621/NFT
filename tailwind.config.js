/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'dark-blue':"#0D0B0C",
        'purple':"#6C16B0",
        'light-purple':"#DD24E1"


      },
      colors:{
        'purple':"#6C16B0",
        'light-purple':"#DD24E1"
      }
    },
  },
  plugins: [],
}

