const { PATHS, commonConfig } = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: PATHS.BUILD_DIR,
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name].[contenthash][ext]",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Ronit Bhatia",
      filename: "index.html",
      template: path.resolve(PATHS.SOURCE_DIR, "index.html"),
      favicon: "assets/icons/favicon.ico",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
});
