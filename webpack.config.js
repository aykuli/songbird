const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'];

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Song bird',
        favicon: 'public/favicon.png',
        template: 'public/index.html'
      })
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'style-[hash:8].css'
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',

    entry: './src/index.jsx',

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.(png|gif|ico|jpeg|jpg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },
        {
          test: /\.(s[ac]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: getPlugins(),
    devServer: {
      open: true
    }
  };
};
