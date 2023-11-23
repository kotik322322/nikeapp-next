import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "bgNotFound": "/logo.svg"
      },
      colors: {
        grey: "#e5e5e5",
        main: "#f6f6f6",
        bgHover: "#4b4b4b"
      }
    },
  },
  plugins: [],
}
export default config
