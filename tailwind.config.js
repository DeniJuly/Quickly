module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"plus-jakarta-sans": ["plus-jakarta-sans"],
			},
			colors: {
				primary: "#B8E4DA",
				"primary-light": "#DCF2ED",
				"pale-gray": "#FAFAFA",
				dark: "#072125",
				"dark-green": "#20484F",
				border: "rgba(32, 72, 79, 0.1)",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
				sm: "3rem",
				lg: "5rem",
				xl: "7rem",
				"2xl": "7rem",
			},
		},
	},
	plugins: [],
};
