/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'lg': {'max': '990px'},
      'md': {'max': '640px'},
      'sm': {'max': '540px'},
    },
    extend: {
      keyframes: {
        marqueehorizontal: {
          "from" : { transform: 'translateX(0)'},
          "to" : { transform: 'translateX(-50%)'}
        },
      },
      animation: {
        'horizontal': 'marqueehorizontal 90s linear infinite;',
      },
    },
  },
  plugins: [],
  purge: ['../index.html','./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
