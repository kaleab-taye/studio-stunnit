
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#bc8028",//orange
        "primaryColor": "#f3f3f3",//darker white background
        "accentColor" : "#bc8028",//orange
        "secondaryColor":"#000000",//black
        "background2":"#e5e5e5",//gray background
        "darkGray":"#808080",//darker gray (footer background)
        "textFormbg":"#FFFFFF",//textform background color(light grey)
        "textFormBorderbg":"#C7C7C7",//textform background color(light grey)
        darkGray: "#808080",//darker gray (footer background)
        background: {
          100: "#ffffff",
          700: "#808080"
        },
        // text:'#',
        surface: "#f9f9f9",
        onPrimary: "#ffffff",
        onBackground: "#000000",
        onSurface: "#000000",
        "dangerColor":"#CC3333",
      },
      screens: {
        lg2: "1060px"
      },
      fontFamily: {
        'common_font': ['Montserrat']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ],
}
