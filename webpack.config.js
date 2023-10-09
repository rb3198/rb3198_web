const path = require("path");

const getPath = (pathName) => {
  return path.join(__dirname, pathName);
};

const PATHS = {
  SOURCE_DIR: getPath("src"),
  BUILD_DIR: getPath("build"),
};

module.exports = {
  mode: "development",
  entry: path.resolve(PATHS.SOURCE_DIR, "index.js"),
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
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: "babel-loader", //loader which we are going to use
      },
    ],
  },
};
