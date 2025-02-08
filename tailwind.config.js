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
        "darkHeader": "#614D49",
        "header": "#E8E1E0",
        "darkText": "#503D3A",
        "darkText0.5": "rgba(80,61,58,0.5)",
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

