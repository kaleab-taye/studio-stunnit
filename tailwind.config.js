/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors : {
        "accentColor" : "#bc8028",//orange
        "primaryColor" : "#f3f3f3",//white background
        "secondaryColor":"#000000",//black
        "background2":"#e5e5e5",//gray background
        "darkGray":"#808080",//darker gray (footer background)

      }
    },
  },
  plugins: [],
}
