/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    screens: {
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1385px'
    },
    colors: {
      ...colors,
      brand: '#dc140a',
      'brand-grey-200': '#f5f5f5',
      'brand-grey-400': '#d2d2d2',
      'brand-grey-600': '#646464',
      'brand-grey-800': '#373634',
      'brand-green': '#2db300'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
