const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            importLoader: 2
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        },
        'import-glob-loader'
      ]
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: "[id].css"
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}