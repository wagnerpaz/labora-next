/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: 'var(--color-primary)',
            'primary-a11y': 'var(--color-primary-a11y)',
            'secondary-light': 'var(--color-secondary-light)',
            'secondary-light-a11y': 'var(--color-secondary-light-a11y)',
            'secondary-dark': 'var(--color-secondary-dark)',
            'secondary-dark-a11y': 'var(--color-secondary-dark-a11y)',
         },
         backgroundImage: {
            pattern1: `url('/imgs/vecteezy_geometric-pattern-technology-green-background_4689400.jpg')`,
         },
         listStyleType: {
            circle: 'circle',
         },
      },
   },
   plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
   variants: {
      extend: {
         display: ['group-hover'],
      },
   },
}
