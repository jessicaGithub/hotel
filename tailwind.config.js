/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    colors: {
      brand: '#dc140a',
      rating: '#feb42b',
      'background-default': '#f5f5f5',
      'border-default': '#646464'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      spacing: {}
    }
  },
  plugins: []
};
