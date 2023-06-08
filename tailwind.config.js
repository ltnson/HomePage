/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'rgb(255 255 255)',
      red: '#FF1C03',
      'red-dark': '#e21a22',
      'red-light-footer': '#C5181F',
    },
    extend: {
      backgroundImage: {
        'img-footer':
          'url("https://vinova.sg/wp-content/themes/Divi/assetsV2/img/bgFooter.png")',
      },
      backgroundColor: {
        gray: '#FAFAFA',
      },
    },
    fontFamily: {
      sans: ['Gotham'],
    },
  },
  plugins: [],
};
