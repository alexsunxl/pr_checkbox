const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const apiMocker = require('mocker-api');

module.exports = (env) => {
    return {
        entry: {
            main: './src/App.tsx',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            alias: {
                '@component': path.resolve(__dirname, 'src/component'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@model': path.resolve(__dirname, 'src/model'),
                '@services': path.resolve(__dirname, 'src/services'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@hooks': path.resolve(__dirname, 'src/hooks')
            }
        },
        mode: 'development',
        devtool: 'source-map',
        output: {
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: '[name].chunk.js'
        },
        devServer: {
            port: 19000,
            historyApiFallback: {
                disableDotRule: true
            },
            static: {
                directory: path.join(__dirname, 'public')
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?|jsx?$/,
                    use: {
                        loader: require.resolve('swc-loader'),
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'typescript',
                                    jsx: true
                                },
                                transform: {
                                    react: {
                                        runtime: 'automatic',
                                        // runtime: 'classic',
                                        pragma: 'React.createElement',
                                        pragmaFrag: 'React.Fragment',
                                        throwIfNamespace: true,
                                        development: false,
                                        useBuiltins: false
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    test: /\.(css)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                publicPath: '/',
                chunks: ['main', 'vendor']
            })
        ]
    };
};
