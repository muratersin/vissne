const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SCR_DIR = path.resolve(__dirname, '../app/assets/javascript');
const BUILD_DIR = path.resolve(__dirname, '../public/dist');

const config = {
  mode: 'production',
  devtool: false,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
  },
  entry: {
    app: [
      '@babel/polyfill',
      `${SCR_DIR}/app/index.jsx`,
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.j(sx|s)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: true },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: /fonts/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    nodeEnv: 'production',
    splitChunks: {
      automaticNameDelimiter: '.',
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        commons: {
          test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = config;
