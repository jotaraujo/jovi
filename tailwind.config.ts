import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base:  '#F2E8D5',
        warm:  '#C8591A',
        drama: '#7D1A2E',
        ink:   '#1A0A00',
        gold:  '#B8882A',
        cream: '#FAF3E0',
        text:  '#2C1A0E',
      },
      fontFamily: {
        display:   ['"Playfair Display"', 'serif'],
        serif:     ['"DM Serif Display"', 'serif'],
        body:      ['Lora', 'serif'],
        handwrite: ['Caveat', 'cursive'],
        mono:      ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
