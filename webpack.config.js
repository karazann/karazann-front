const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    context: __dirname + '/src',
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
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/assets/'),
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }
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
                            outputPath: './assets/',
                            publicPath: './assets/'
                        }
                    }
                ]
            }
        ]
    }
};