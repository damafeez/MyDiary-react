const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
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
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './src/assets/[name].[ext]',
            limit: 10000,
          },
        },
        'img-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
