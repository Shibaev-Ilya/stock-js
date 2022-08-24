// path — встроенный в Node.js модуль
const path = require('path');

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './_source/main.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, '_assets'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};
