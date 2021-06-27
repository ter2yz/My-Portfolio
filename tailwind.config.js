module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          'primary': '#111111',
          'text': '#0c0c0c',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce-light': 'bouncelight 2s linear infinite',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        bouncelight: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px)  scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px)  scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px)  scale(1)',
          },
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
      flexDirection: ['hover', 'focus', 'odd'],
      animation: ['motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
}
