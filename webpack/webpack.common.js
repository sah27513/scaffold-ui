// External Dependencies
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

// Default Export
module.exports = options => ({
  cache: options.env !== 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      app: path.join(__dirname, '..', 'src/app'),
      web: path.join(__dirname, '..', 'src/web'),
      content: path.join(__dirname, '..', 'src/web/content'),
      images: path.join(__dirname, '..', 'src/web/content/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/
      }
    ]
  },
  stats: {
    children: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        SANDBOX: true
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/web/favicon.ico', to: 'favicon.ico' },
      { from: './src/web/manifest.webapp', to: 'manifest.webapp' },
      { from: './src/web/robots.txt', to: 'robots.txt' }
    ]),
    new HtmlWebpackPlugin({
      template: './src/web/index.html',
      chunksSortMode: 'dependency',
      inject: 'body'
    })
  ]
});
