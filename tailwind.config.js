/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    "./node_modules/nucleus-commons-ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['configCondensed', 'sans-serif', 'system-ui'],
        secondary: ['formaDJRMicro', 'serif', 'system-ui'],
      },  
      colors: {
        primary: {
          50:	'#EBEDF8',
          100:	'#D6DBF2',
          200:	'#AAB1E5',
          300:	'#7F87D9',
          400:	'#646CD4',
          500:	'#4850D5',
          600:	'#3A40A8',
          700:	'#2C3080',
          800:	'#1F2258',
          900:	'#111330'
        },
        secondary: {
          500:	'#9654C8',
        },
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
