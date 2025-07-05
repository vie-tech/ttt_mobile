// tailwind.config.js
module.exports = {
  content: [
    "./App.js",
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "media", 
  theme: {
    extend: {
      colors: {
        primary: "#6849a7",
        warning: "#cc475a",
        light: {
          text: "#625f72",
          title: "#201e2b",
          background: "#e0dfe8",
          nav: "#e8e7ef",
          icon: "#686477",
          iconFocused: "#201e2b",
          ui: "#d6d5e1",
        },
        dark: {
          text: "#d4d4d4",
          title: "#ffffff",
          background: "#252231",
          nav: "#201e2b",
          icon: "#9591a5",
          iconFocused: "#ffffff",
          ui: "#2f2b3d",
        },
      },
    },
  },
  plugins: [],
};
