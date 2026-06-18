import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F1E5', sand: '#E7D3B1', sage: '#54664B', moss: '#2F3A2D', clay: '#B36B4A', honey: '#D9A441'
      },
      fontFamily: { serif: ['var(--font-serif)'], sans: ['var(--font-sans)'] },
      boxShadow: { soft: '0 24px 70px rgba(47,58,45,.13)' }
    }
  },
  plugins: []
};
export default config;
