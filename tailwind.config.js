/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    // borderRadius: {
    //   '3xl': '24px',
    //   '4xl': '32px',
    //   'full': '9999px'
    // },
    screens: {
      'xxl': {'max': '1200px'},
      'lg': {'max': '990px'},
      'md': {'max': '640px'},
      'sm': {'max': '540px'},
      'xl': {'max': '430px'},
      'mxl':{'min': '430px'}
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
        'arrow-right': "url('https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6132245c9d8_left-slider.svg')",
        'feature-hero-2': "url('https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e63f3f45c9a9_bg-gradient-2.png')"
    },
    },
  },
  plugins: [],
  purge: ['../index.html','./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
