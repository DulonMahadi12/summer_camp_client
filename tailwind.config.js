/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['Carter One', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
};
