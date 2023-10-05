/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grass: '#74CB48',
        fire: '#F57D31',
        water: '#6493EB',
        ghost: '#70559B',
        eletric: '#F9CF30',
        bug: '#A7B723',
        normal: '#AAA67F',
        steel: '#B7B9D0'
      }
    },
  },
  plugins: [],
}
