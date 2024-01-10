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
        buttonBackground: '#ff4820',
        appBackgroundFrom: "#0d4260",
        appBackgroundTo: "#021731",
        textGradientStart: "#b65cdd",
        textGradientVia: "#d84c98",
        textGradientFrom: "#fb3c55",
        contentTextColor:"#81afdd",
        inputBoxColor:"#052d56",
        AboutBackgroundColor: "#083361"
      }
    },
  },
  plugins: [],
}
export default config
