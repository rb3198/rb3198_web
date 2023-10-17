const path = require("path");
const babelOptions = require("./babel/babel.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const getPath = (pathName) => {
  return path.join(__dirname, pathName);
};

const PATHS = {
  SOURCE_DIR: getPath("src"),
  BUILD_DIR: getPath("build"),
  THEME_DIR: getPath("theme"),
};

const commonConfig = {
  entry: path.resolve(PATHS.SOURCE_DIR, "index.tsx"),
  target: "web",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss"],
    alias: {
      rb3198: PATHS.SOURCE_DIR,
      theme: PATHS.THEME_DIR,
    },
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, // to create a CSS file
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
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
};

module.exports = {
  PATHS,
  commonConfig,
};
