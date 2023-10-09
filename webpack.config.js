const path = require("path");
const babelOptions = require("./babel/babel.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getPath = (pathName) => {
  return path.join(__dirname, pathName);
};

const PATHS = {
  SOURCE_DIR: getPath("src"),
  BUILD_DIR: getPath("build"),
};

module.exports = {
  mode: "development",
  entry: path.resolve(PATHS.SOURCE_DIR, "index.tsx"),
  output: {
    path: PATHS.BUILD_DIR,
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "9500",
    static: PATHS.BUILD_DIR,
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
          {
            loader: "ts-loader",
          },
        ], //loader which we are going to use
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ronit Bhatia",
      filename: "index.html",
      template: path.resolve(PATHS.SOURCE_DIR, "index.html"),
    }),
  ],
};
