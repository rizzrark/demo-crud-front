module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // overrite tailwindcss defaults to match the design
    colors: {
      white: '#FFFFFF',
      purple: '#6B59CC',
      gray: '#ECEEF5',
      darkgray: '#8083A3',
    },
    fontFamily: {
      lato: 'Lato, sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
