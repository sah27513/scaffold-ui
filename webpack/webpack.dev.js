const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const commonConfig = require('./webpack.common.js');

const ENV = 'development';

const host = '127.0.0.1';

module.exports = options =>
  webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'cheap-module-source-map', // https://reactjs.org/docs/cross-origin-errors.html
    mode: ENV,
    entry: ['react-hot-loader/patch', './src/app/index.jsx'],
    output: {
      path: path.resolve(__dirname, '..', '..', 'ui-server', 'build'),
      filename: 'app/[name].bundle.js',
      chunkFilename: 'app/[id].chunk.js'
    },
    devServer: {
      publicPath: '/',
      historyApiFallback: true,
      stats: options.stats,
      hot: true,
      watchContentBase: true,
      contentBase: './build',
      proxy: [
        {
          context: ['/cdx', '/logout'],
          target: `http://${host}:3000/`,
          secure: false
        },
        {
          context: ['/file'],
          target: `http://${host}:9001/api/v1/`,
          secure: false,
          proxyTimeout: 10 * 60 * 1000
        },
        {
          context: ['/folder'],
          target: `http://${host}:9002/api/v1/`,
          secure: false
        },
        {
          context: ['/user'],
          target: `http://${host}:9005/api/v1/`,
          secure: false
        }
      ],
      watchOptions: {
        ignored: /node_modules/
      }
    },
    plugins: [
      new SimpleProgressWebpackPlugin({
        format: options.stats === 'minimal' ? 'compact' : 'expanded'
      }),
      new FriendlyErrorsWebpackPlugin(),
      new BrowserSyncPlugin(
        {
          host: '127.0.0.1',
          open: 'external',
          port: 9000,
          proxy: {
            target: 'http://127.0.0.1:9060'
          }
        },
        {
          reload: false
        }
      ),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new writeFilePlugin(),
      new webpack.WatchIgnorePlugin([path.resolve(__dirname, 'test')]),
      new WebpackNotifierPlugin({
        title: 'Portfolio',
        contentImage: path.join(__dirname, 'logo.png')
      })
    ]
  });
