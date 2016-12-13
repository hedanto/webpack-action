var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ['webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:9000',
            './src/main.js'],
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
        //noInfo: true,
        port: 9000,
        hot:true,
        inline:true,
        open:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
