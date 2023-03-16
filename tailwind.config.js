
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#bc8028",//orange
        "primaryColor": "#f3f3f3",//darker white background
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
