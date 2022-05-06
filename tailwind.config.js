module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		colors: {
			primary: '#4F46E5',
			secondary: '#111827',
			accent: '#EDECFC',
			white: '#FFFFFF',
			red: '#FF0000',
			green: '#66AA46',
			background: '#FBFBFB',
		},
		container: {
			center: true,
		},
		transition: {
			transition: 'all 0.2s ease-in-out',
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
