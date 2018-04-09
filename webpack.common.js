const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static')
      }
    ])
  ]
}
