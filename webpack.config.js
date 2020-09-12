const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  bail: true,
  entry: {
    content: "./src/content.ts",
    options: "./src/options.ts",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: {
          loader: "eslint-loader",
          options: { fix: true },
        },
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
    new CopyPlugin({
      patterns: [
        "_locales/**/*",
        "assets/icons/**/*",
        "manifest.json",
        {
          from: "**/*.html",
          context: "src"
        },
      ]
    })
  ],
};
