const { PATHS, commonConfig } = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: PATHS.BUILD_DIR,
    filename: "[name].[contenthash].js",
  },
});
