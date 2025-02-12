/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1100px',
    },
    extend: {
      // backgroundImage: {
      //   'background': "url(../assets/img/bg.png)",
      // },
      colors: {
        "accent": "rgba(178, 31, 36, 1)",
        "accentHover": "rgba(192, 39, 36, 1)",
        "darkHeader": "rgba(97, 77, 73, 1)",
        "header": "#E8E1E0",
        "mainBlock": "rgba(242, 242, 242, 1)",
        "darkText": "rgb(80, 61, 58, 1)",
        "darkText1/2": "rgba(80,61,58,0.5)",
        "text": "rgba(170, 146, 122, 1)",
        "button": "#311311",
      },
      textUnderlineOffset: {
        '1px': '0.0521vw'
      },
      backdropBlur: {
        'base': '0.4167vw'
      },
      opacity: {
        '10': '.10',
        '32': '.32',
        '38': '.38',
        '42': '.42',
        '79': '.79',
      },
      fontFamily: {
        'pfdin': ['pfdin'],
      },
    },
  },
  plugins: [],
}

