module.exports = {
  entry: "./app/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test : /\.jsx?/, loader : 'babel' },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};