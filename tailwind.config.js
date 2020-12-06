module.exports = {
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
    purge: ["./pages/**/*.js", "./components/**/*.js"],
  },
  experimental: {
    additionalBreakpoint: true,
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
  },
};
