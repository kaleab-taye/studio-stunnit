
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "accentColor": "#bc8028",//orange
        "primaryColor": "#f3f3f3",//darker white background
        "secondaryColor": "#000000",//black
        "background1": "#ffffff",//white
        "background2": "#f9f9f9",//gray background
        "darkGray": "#808080",//darker gray (footer background)
      },

      fontFamily: {
        'common_font': ['Montserrat']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
