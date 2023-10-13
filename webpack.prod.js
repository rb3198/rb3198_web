const { PATHS, commonConfig } = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: PATHS.BUILD_DIR,
    filename: "[name].[contenthash].js",
  },
  plugins: [new CleanWebpackPlugin()],
});
