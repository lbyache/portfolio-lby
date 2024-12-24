/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
		  colors: {
			accent: "var(--color-accent)",
			"accent-light": "var(--color-accent-light)",
		  },
		},
	  },
	plugins: [],
}
