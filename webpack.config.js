const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin"); // 在生产环境将样式表抽成单独的文件，不依赖js
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/assets/'),
      to: path.resolve(__dirname, 'dist/assets/')
    }])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: "[name]-[hash:5].min.[ext]",
            outputPath: "assets/img"
          }
        }]
      },
    ]
  },
  devServer: {
    open: false, // 是否自动打开浏览器
    port: 8080,
    historyApiFallback: true, // 使用h5 history api
  },
  mode: 'development',
  stats: {
    colors: true
  },
  devtool: 'source-map'
};