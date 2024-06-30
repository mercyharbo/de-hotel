/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#F4694C',
      grey: '#EBF3F7',
      white: '#FFFFFF',
      black: '#000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      small_mobile: '375px',
      mobile: '320px',
      tablet: '768px',
      laptop: '1024px',
      large_laptop: '1440px',
      desktop: '1920px',
      special: '1280px',
    },
  },
  plugins: [],
}
