/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      primary: {
        light: '#d206531c',
        DEFAULT: '#D20653',
        lighten: '#c21963',
        darken: '#b40044',
        mauve: '#610060',
        pink: '#FF3939'
      },
      secondary: {
        DEFAULT: '#FDBC01',
        light: '#fdbc0121',
        orange: '#F45B14'
      },
      tertiary: {
        DEFAULT: '#44215D',
        light: '#b876e86b'
      },
      dark: {
        DEFAULT: '#414141'
      },
      grey: {
        DEFAULT: '#707070',
        light: '#7070701a'
      },
      white: '#FFF',
      black: '#000'
    },
    extend: {
      boxShadow: {
        card: '0 0 16px 5px #e8e8e8'
      },
      backgroundImage: {
        shippingbg: "url('assets/imgs/shipping.png')"
      }
    }
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [],
}
