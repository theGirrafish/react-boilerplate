const path = require('path');
const webpack = require('webpack');
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
    filename: '[name].bundle.js',
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
  optimization: {
    minimize: true,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
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
    port: process.env.PORT,
    compress: true,
    contentBase: path.join(parentDir, 'dist'),
    historyApiFallback: true
  }
};
