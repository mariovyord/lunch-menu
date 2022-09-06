const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': colors.lime[700],
				'primary-focus': colors.lime[800],
				'primary-content': colors.white,
				'accent': colors.orange[500],
				'accent-focus': colors.orange[600],
				'accent-content': colors.white,
			}
		},
	},
	plugins: [],
}
