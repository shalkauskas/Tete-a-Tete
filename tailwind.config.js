module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.jsx"],
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
  theme: {
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      90: "90%",
      full: "100%",
    },
  },
};
