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
        "accent": "#B21F24",
        "header": "#614D49",
        "text": "#AA927A",
        "button": "#311311"
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

