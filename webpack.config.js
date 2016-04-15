{
  module.exports = {
    entry: "./lib/index.js",
    output: {
      path: __dirname,
      filename: "./dist/react-material-social.js",
      libraryTarget: "var",
      library: "MaterialSocial"
    },
    externals: {
      "react": "React"
    }
  }
};