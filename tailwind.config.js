module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},


  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0f766e",
          secondary: "#5eead4",
          accent: "#111827",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

}

