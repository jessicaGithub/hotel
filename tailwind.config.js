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
      rating: '#feb42b',
      'background-default': '#f5f5f5',
      'border-default': '#646464'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
