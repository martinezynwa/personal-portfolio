module.exports = {
  mode: 'jit',
  content: ['./src/**/*.js', '../public/*.html'],
  theme: {
    extend: {
      colors: {
        backdrop: '#090a1a',
        containerColor: '#171b3c',
        darkerWhite: '#b7c7d8',
        highlighted: '#647bff',
        hoverHighlighted: '#556cee',
        borderColor: '#1a2940',
        buttonColor: '#2c3d9e',
        buttonTextColor: '#FFFFFF',
        buttonHoverColor: '#647bff',
      },
      fontSize: {
        nav: '17px',
        headMobile: '38px',
        head: '40px',
        containerHeadMobile: '24px',
        containerHead: '25px',
        containerTextMobile: '17px',
        containerText: '17px',
        containerTextSmaller: '15px',
        containerTextSmallerMobile: '15px',
        buttonMobile: '19px',
        button: '19px',
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
