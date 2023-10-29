/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        color1:{
          DEFAULT: '#8386f5'
        },
        color2:{
          DEFAULT: '#3d43b4'
        },
        color3:{
          DEFAULT: '#041348'
        },
        color4:{
          DEFAULT: '#083e12'
        },
        color5:{
          DEFAULT: '#1afe49'
        },
        color6:{
          DEFAULT: '#a0ffe3'
        },
        color7:{
          DEFAULT: '#65dc98'
        }
      },
      boxShadow: {
          'custom': '0 20px 80px -20px #083e12',
        }
    },
  },
  plugins: [],
}

