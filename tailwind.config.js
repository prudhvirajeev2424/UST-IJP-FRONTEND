/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ust-primary': '#003C51',
        'ust-secondary': '#0097AC',
        'ust-teal': '#006E74',
        'ust-green': '#01B27C',
        'ust-coral': '#FC6A59',
        'ust-purple': '#881E87',
        'ust-yellow': '#FFBF00',
        'ust-gray': '#7A7480',
        'ust-light-gray': '#C2BCBE',
        'ust-bg': '#F2F7F8',
        'ust-white': '#FFFFFF',
        'ust-beige': '#DBD3BD',
        'ust-off-white': '#ECECE1',
        'ust-light-blue': '#D7E0E3',
        'ust-text': '#231F20',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '14': '14px',
      },
      lineHeight: {
        '17': '17px',
      },
      letterSpacing: {
        '0': '0px',
      },
    },
  },
  plugins: [],
}