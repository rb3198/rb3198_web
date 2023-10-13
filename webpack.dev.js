const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const { PATHS, commonConfig } = common;
module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  output: {
    path: PATHS.BUILD_DIR,
    filename: "[name].js",
  },
  devServer: {
    port: "9500",
    static: PATHS.BUILD_DIR,
    open: true,
    hot: true,
    liveReload: true,
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
});
