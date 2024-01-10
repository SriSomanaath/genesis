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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        textGradientStart: "#b65cdd",
        textGradientVia: "#d84c98",
        textGradientFrom: "#fb3c55",
        perk1: "#ae60c4",
        perk2: "#b755a8",
        perk3: "#c64f90",
        perk4: "#ca4572"
      }
    },
  },
  plugins: [],
}

export default config
