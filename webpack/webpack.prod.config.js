const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(parentDir, 'src/index.jsx')
  ],
  output: {
    path: path.join(parentDir, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }, {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.s[a|c]ss$/,
        loaders: ['sass-loader', 'style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif|svg|ico|eot|ttf|woff|woff2)$/,
        include: /images/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new ExtractTextPlugin('bundle.css', {allChunks: false}),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    port: 5000,
    host: 'localhost',
    public: 'localhost',
    contentBase: parentDir,
    historyApiFallback: true
  }
};
