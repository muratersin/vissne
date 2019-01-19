const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SCR_DIR = path.resolve(__dirname, '../src');
const BUILD_DIR = path.resolve(__dirname, '../../server/public/dist');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
  },
  entry: {
    app: `${SCR_DIR}/app/index.jsx`,
    auth: `${SCR_DIR}/auth/index.jsx`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
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
          'css-loader',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
        },
      },
    },
  },
};

module.exports = config;
