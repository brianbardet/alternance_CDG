module.exports = {
  purge: {
    enabled: true,
    content: [
        './app/*.html',
        './app/**/*.html'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
      center:true,
    },
    extend: {
      colors: {
        primary: {
          light: '#86d7f2',
          DEFAULT:'#117da0',
          dark:'#0f7090',
        },
        secondary:{
          light: '#fdde97',
          DEFAULT:'#f2aa04',
          dark:'#d99903',
        },
        third: {
          light: '#f6b3b3',
          DEFAULT: '#ea4343',
          dark: '#e62727',
        },
      }
    },
    fontFamily: {
        "roboto": ['Roboto', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
