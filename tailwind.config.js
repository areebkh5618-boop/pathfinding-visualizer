module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'start': '#4CAF50',
        'end': '#FF6B6B',
        'obstacle': '#333333',
        'visited': '#B3E5FC',
        'path': '#FFD54F',
        'exploring': '#81C784'
      },
      spacing: {
        'cell': '25px'
      }
    }
  },
  plugins: []
}
