const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

var config = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/index.js'),
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "react": "preact/compat",
            "react-dom": "preact/compat",
            "@libs": path.resolve(__dirname, 'src/libs'),
            "@components": path.resolve(__dirname, 'src/components'),
            "@containers": path.resolve(__dirname, 'src/containers'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
            '@store': path.resolve(__dirname, 'src/store')
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: './assets/js/[name].[hash:10].js',
        filename: './assets/js/[name].[hash:10].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        })
    ],
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
                resolve: {
                    extensions: [".js", ".jsx"]
                },
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash:10].[ext]',
                        outputPath: './assets/',
                        publicPath: './assets/'
                    }
                }]
            }
        ]
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
        config.devServer = {
            contentBase: path.resolve(__dirname, 'dist/assets/'),
            publicPath: '/',
            historyApiFallback: true,
            port: 8080
        }
    }

    if (argv.mode === 'production') {
        config.optimization = {
            minimizer: [new TerserPlugin({
                parallel: 6,
                cache: './.build_cache/terser',
                terserOptions: {
                    keep_fnames: false,
                    warnings: false,
                    ie8: false
                }
            })]
        }
    }

    return config;
};