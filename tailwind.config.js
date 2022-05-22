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
          primary: "#14b8a6",
          secondary: "#5eead4",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

}

