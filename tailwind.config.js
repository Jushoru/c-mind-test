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
      backgroundImage: {
        'bg1': "url(@/assets/img/bg1.png)",
        'bg2': "url(@/assets/img/bg2.png)",
      },
      colors: {
        "accent": "rgba(178, 31, 36, 1)",
        "accentHover": "rgba(192, 39, 36, 1)",
        "darkHeader": "rgba(97, 77, 73, 1)",
        "header": "rgba(232, 225, 224, 1)",
        "mainBlock": "rgba(242, 242, 242, 1)",
        "textDarkest": "rgba(49, 19, 17, 1)",
        "textDark": "rgb(80, 61, 58, 1)",
        "textDark1/2": "rgba(80,61,58,0.5)",
        "text": "rgba(170, 146, 122, 1)",
        "textArticle": "rgba(124, 110, 107, 1)",
        "button": "rgba(49, 19, 17, 1)",
        "gradientFrom": "rgba(235, 232, 229, 1)",
        "gradientTo": "rgba(211, 200, 187, 1)",
      },
      fontFamily: {
        'pfdin': ['pfdin'],
      },
    },
  },
  plugins: [],
}

