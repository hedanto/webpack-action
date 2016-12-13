var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port:9000
    }
};
