const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const combineLoaders = require('webpack-combine-loaders');

const Dotenv = require('dotenv-webpack');
const { log } = require('console');

const SRC_DIR = path.join(__dirname, '/src');
const PUB_DIR = path.join(__dirname, '/public');
const DIST_DIR = path.join(__dirname, '/dist');

const PRODUCTION = 'production';
const isDevelopment = process.argv.indexOf(PRODUCTION) === -1;

module.exports = {
  entry: { main: `${SRC_DIR}/index.js` },
  output: {
    path: DIST_DIR,
    chunkFilename: '[chunkhash].[id].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
        },
      },

      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      shared: path.resolve(__dirname, 'src/components/shared'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/components/containers'),
      utils: path.resolve(__dirname, 'src/utils'),
      app: path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        css: {
          test: /\.(css|sass|scss)$/,
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),

    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'react-boilerplate-with-redux-sass',
      template: `${PUB_DIR}/index.html`,
      filename: 'index.html',
      favicon: `${PUB_DIR}/favicon.ico`,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new WebpackMd5Hash(),
    new Dotenv(),
  ],
  devServer: {
    port: process.env.PORT || 3000,
    contentBase: SRC_DIR,
    historyApiFallback: true,
    watchContentBase: true,
    overlay: true,
    hot: true,
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
  },
};
