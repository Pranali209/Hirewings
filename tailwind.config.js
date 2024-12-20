/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custombg : "#262626",
        customgray : "#7A7A7A",
        customblue : "#D6CFFD99",
        customWhite: '#FFFFF7', 
        customGrayText: '#727267',
        customheadertext:"#7D7F78",
        customButton : "#D6CFFD",
        custombox :"#161616",
        
      },
      boxShadow: { 'glow': '0 0 15px rgba(214, 207, 253, 0.7)', },
    },
  },
  plugins: [],
}

