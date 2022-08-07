/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
   		extend: {
			colors: {
				primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        white: 'var(--white)',
				grey: 'var(--grey)',
				light_grey: 'var(--light_grey)',
				divider: 'var(--divider)'
			}
		}
  },
  plugins: []
}
