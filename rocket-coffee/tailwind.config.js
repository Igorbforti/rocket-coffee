module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257E5"
        }
      }
    },
    dropShadow: {
      '3xl': "0 0 1px rgba(130, 87, 229, 1)"
    },
    backgroundImage: {
      'arrow': "url('./src/assets/arrow.svg')"
    }
  },
  plugins: [],
}
