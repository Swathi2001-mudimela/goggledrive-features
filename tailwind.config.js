/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "drive-green":'#00ac47',
        "drive-darkgreen":'#00832d',
        "drive-yellow":'#ffba00',
        "drive-red":'#ea4335',
        "drive-blue":'#2684fc',
        "drive-darkblue":'#0066da',
        "drive-gray":'#757575',
        "drive-white":'#ffffff'
      },
    },
    fontFamily:{
      sans:['Roboto','sans-serif'],

    },
  },
  
  plugins: [],
}
