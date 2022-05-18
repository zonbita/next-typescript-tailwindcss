module.exports = {
  Mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './private/**/*.{js,ts,jsx,tsx}',
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
