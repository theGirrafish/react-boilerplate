const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const parentDir = path.join(__dirname, '../');

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    path.join(parentDir, 'src/index.jsx')
  ],
  output: {
    path: path.join(parentDir, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
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
        test: /\.(html)$/,
        loader: 'html-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|ico|eot|ttf|woff|woff2)$/,
        include: /images/,
        loader: 'url-loader',
        options: {
          limit: 51200
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: './index.html',
      favicon: './favicon.ico'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.jsx$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    port: process.env.PORT || 5000,
    compress: true,
    contentBase: parentDir,
    historyApiFallback: true
  }
};
