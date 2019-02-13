const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: 4,
            cache: './.build_cache/terser',
            terserOptions: {
                keep_fnames: false,
                warnings: false,
                ie8: false
            }
        })],
    },
    output: {
        path: __dirname + '/dist',
        chunkFilename: '[name].[hash:10].js',
        filename: '[name].[hash:10].js',
    },
    devServer: {
        contentBase: './dist',
        hotOnly: true,
        historyApiFallback: true,
        hot: true,
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            template: __dirname + '/public/index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
                resolve: {
                    extensions: [".js", ".jsx"]
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash:10].[ext]',
                        }
                    }
                ]
            },
        ]
    }
};