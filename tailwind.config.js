module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0F1729",
          secondary: "#2A303C",
          accent: "#E9E7E7",
          neutral: "#3d4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};