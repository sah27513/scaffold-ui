// External Dependencies
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');

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
        // query: {
        //   cacheDirectory: true,
        //   plugins: ['react-hot-loader/babel']
        // }
      }
    ]
  },
  stats: {
    children: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: `'${options.env}'`,
    //     BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
    //     VERSION: '1.0.0',
    //     DEBUG_INFO_ENABLED: options.env === 'development',
    //     SERVER_API_URL: `''`
    //   }
    // }),
    new CopyWebpackPlugin([
      { from: './src/web/content/', to: 'content' },
      { from: './src/web/favicon.ico', to: 'favicon.ico' },
      { from: './src/web/manifest.webapp', to: 'manifest.webapp' },
      { from: './src/web/robots.txt', to: 'robots.txt' }
    ]),
    new HtmlWebpackPlugin({
      template: './src/web/index.html',
      chunksSortMode: 'dependency',
      inject: 'body'
    })
    // new MergeJsonWebpackPlugin({
    //   output: {
    //     groupBy: [{ pattern: './src/i18n/en/*.json', fileName: './i18n/en.json' }]
    //   }
    // })
  ]
});
