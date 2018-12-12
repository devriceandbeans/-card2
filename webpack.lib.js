'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        card2: './src/index.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './lib'),
        library: 'card2'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|mts|js|jsx|mjs)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: require.resolve('ts-loader')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: require.resolve('file-loader'),
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: [ '.mjs', '.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx' ]
    },
    plugins: [
        new CleanWebpackPlugin(['lib']),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
}