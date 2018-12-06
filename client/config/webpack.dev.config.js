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
    extensions: ['.js', '.jsx', '.json'],
  },
  entry: {
    site: `${SCR_DIR}/site/index.js`,
    login: `${SCR_DIR}/login/index.js`,
    register: `${SCR_DIR}/register/index.js`,
    dashboard: `${SCR_DIR}/dashboard/index.js`,
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
            loader: 'cache-loader',
          },
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
};

module.exports = config;
