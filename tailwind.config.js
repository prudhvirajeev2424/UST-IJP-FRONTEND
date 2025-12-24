/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ijp-amber': '#FFBF00',
        'ijp-white': '#FFFFFF',
        'ijp-light-gray': '#D7E0E3',
        'ijp-coral': '#FC6A59',
        'ijp-cream': '#ECECE1',
        'ijp-purple': '#881E87',
        'ijp-green': '#01B27C',
        'ijp-gray': '#7A7480',
        'ijp-medium-gray': '#C2BCBE',
        'ijp-tan': '#DBD3BD',
        'ijp-dark-blue': '#003C51',
        'ijp-teal-dark': '#006E74',
        'ijp-teal': '#0097AC',
        'ijp-black': '#000000',
        'ijp-near-black': '#231F20',
        'ijp-bg': '#F2F7F8',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
      },
      lineHeight: {
        '22': '22px',
        '24': '24px',
      },
    },
  },
  plugins: [],
}