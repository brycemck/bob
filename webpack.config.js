const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  devServer: {
    static: './dist'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.scss', '.html']
  }
};