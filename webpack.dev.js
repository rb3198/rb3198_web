const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ronit Bhatia",
      filename: "index.html",
      template: path.resolve(PATHS.SOURCE_DIR, "index.html"),
    }),
  ],
});
