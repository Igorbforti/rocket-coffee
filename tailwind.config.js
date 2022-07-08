module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257E5"
        },
        gray: {
          500: "#29292E"
        }
      }
    },
    backgroundImage: {
      'arrow': "url('./src/assets/arrow.svg')",
      'arrowMobile': "url('./src/assets/arrowMobile.svg')",
      'blurMobile': "url('./src/assets/blur-mobile.png')"
    }
  },
  plugins: [],
}
