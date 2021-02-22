import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import PurgeCSSPlugin from 'purgecss-webpack-plugin';
import glob from 'glob';

export default {
    entry: {
        'main': path.resolve(__dirname, '../src/index.js')
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.jsx'],
            emitWarning: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(path.join(__dirname, '../src/**/*'), {nodir: true})
        })
    ],
    resolve: {
        alias: {

        },
        extensions: ['.js', '.jsx']
    }
}