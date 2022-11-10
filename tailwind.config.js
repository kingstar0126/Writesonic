/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
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
