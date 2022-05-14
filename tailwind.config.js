module.exports = {
  Mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        red: "#fff",
      },
      screens: {
        'msm': {'max': '767px'},
      },
    },

  },
  plugins: [],
}
