/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        accent: 'MuseoModerno',
      },
    },
    colors: {
      shark: '#181A20',
      charade: '#262A34',
      mercury: '#E7E6E6',
      'river-bed': '#434A5B',
      hopbush: '#D680B9',
      chetwode: '#84A2D8',
      aquamarine: '#69FFC2',
    },
  },
  plugins: [],
};
