const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    content: "./src/content.ts",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: "eslint-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      "_locales/**/*",
      "assets/icons/**/*",
      "manifest.json"
    ])
  ],
};
