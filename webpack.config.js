const path = require("path");
const babelOptions = require("./babel/babel.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getPath = (pathName) => {
  return path.join(__dirname, pathName);
};

const PATHS = {
  SOURCE_DIR: getPath("src"),
  BUILD_DIR: getPath("build"),
  THEME_DIR: getPath("theme"),
};

module.exports = {
  mode: "development",
  devtool: "source-map",
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
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss"],
    alias: {
      rb3198: PATHS.SOURCE_DIR,
      theme: PATHS.THEME_DIR,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader" }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },
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
};
