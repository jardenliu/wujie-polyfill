const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
const config = {
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [resolve(__dirname, './webpack.config.js'), resolve(__dirname, '../../pnpm-lock.yaml'), resolve(__dirname, './package.json')],
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [resolve(__dirname, 'src'), 'node_modules'],
    },
    entry: {
        main: ['./src/main.tsx'],
        app1: ['./src/app1.tsx'],
    },
    output: {
        path: resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015',
                },
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'stylus-lader'],
            },
            {
                test: /\.less?$/,
                use: ['style-loader', 'css-loader', 'less-lader'],
            },
            {
                test: /\.(woff2?|eot|tff|otf)(\?.*)$/,
                type: 'asset',
                generator: {
                    filename: 'font/[name].[hash7].[ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024,
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash7].[ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024,
                    },
                },
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false,
            },
            hash: true,
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'app1.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false,
            },
            hash: true,
            chunks: ['app1'],
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}

module.exports = config
