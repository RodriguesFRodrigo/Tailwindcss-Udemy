/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    // colors: {
    //   // Ao adicionar uma regra neste nível sobrescreve as demais.
    //   black: 'purple',
    // },
    // screens: {
    //   'tablet': '640px',
    //   'cel': { 'max': '400px' },
    // },
    // Ao adicionar uma regra em extend estende o framework.
    extend: {
      colors: {
        'new-red': 'red',
        gray: {
          // Mantém as outras cores.
          ...colors.gray,
          'new-gray': 'gray',
        }
      }
    },
  },
  plugins: [],
}

