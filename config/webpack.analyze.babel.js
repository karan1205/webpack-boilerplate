import {merge} from 'webpack-merge';
import prodConfig from './webpack.prod.babel';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default merge(prodConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})