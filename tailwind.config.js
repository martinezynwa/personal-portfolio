module.exports = {
  mode: 'jit',
  content: ['./src/**/*.js', '../public/*.html'],
  theme: {
    extend: {
      colors: {
        backdrop: '#090a1a',
        container: '#171b3c',
        txtDarkerWhite: '#b7c7d8',
        txtHighlighted: '#647bff',
        borders: '#1a2940',
        button: '#2c3d9e',
        btnHover: '#647bff',

        testContainerFrom: '#0f2d54',
        testContainerTo: '#53789561',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
