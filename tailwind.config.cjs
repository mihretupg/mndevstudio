module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      colors: {
        // Parallel+ color palette
        'dark-bg': '#0D3A3E',
        'dark-navy': '#0F3E42',
        'lime-green': '#CCFF00',
        'lime-bright': '#D4FF00',
        // Fallback brand palette (for components still using these)
        'brand-1': '#FFFFFF',
        'brand-2': '#E0E0E0',
        'brand-3': '#0D3A3E',
        'brand-4': '#CCFF00',
        'accent-start': '#CCFF00',
        'accent-end': '#D4FF00',
        'cream-1': '#FFFFFF',
        'cream-2': '#F5F5F5',
        'accent-soft': '#CCFF0020',
        'accent-strong': '#CCFF00'
      }
    }
  },
  plugins: [],
}
