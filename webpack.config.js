const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
    },
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          templateParameters: {
            env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
          },
          minify:
            process.env.NODE_ENV === 'production'
              ? {
                  collapseWhitespace: true,
                  removeComments: true,
                }
              : false,
        }),
        new CleanWebpackPlugin(),
      ],
};