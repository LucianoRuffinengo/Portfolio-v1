/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-brown': '#f0bf65',
        'brown': '#C19B53',
        'dark-brown': '#705a30',
        'dark': '#131313'
      },
      keyframes: {
        fadeBorderDark: {
          '0%': {
            borderColor: '#131313'
          },

          '100%': {
            borderColor: '#C19B53'
          }
        }
      },
      animation: {
        fadeBorderDark: 'fadeBorderDark 3s infinite alternate forwards',
        fadeBorderDarkDelay: 'fadeBorderDark 3s 1s infinite alternate',
        fadeBorderDarkDelay2: 'fadeBorderDark 3s 2s infinite alternate'
      }
    },
    plugins: [],
  }
}