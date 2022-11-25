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
      backgroundImage: {
        'feature-hero': "url('https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e621b745c9a8_bg-gradient.png')",
    },
    },
  },
  plugins: [],
  purge: ['../index.html','./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
