import webpack from 'webpack';
import {merge} from 'webpack-merge';
import commonConfig from './webpack.common.babel';

export default merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        },
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        disableHostCheck: true,
        historyApiFallback: true,
        compress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});