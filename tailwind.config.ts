import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      headings: ['var(--font-raleway)'],
      body: ['var(--font-open-sans)'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.625rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
    },
    extend: {
      colors: {
        darkBlue: 'hsla(200, 100%, 7%, 1)',
        accent: 'hsl(168, 100%, 50%)'
      }
    },
  },
  plugins: [],
};
export default config;
