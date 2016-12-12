var path = require("path");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath:'../dist/',
        pathinfo:true,
        sourceMapFilename:'[file].map',
        chunkFilename: '[id].[chunkhash].js',
        devtoolModuleFilenameTemplate: info => {
            return `webpack:///${info.resourcePath}?${info.loaders}`;
        }
    },
    module: {
        loaders:[
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        /*contentBase: path.join(__dirname, "dist"),*/
        compress: true,
        port: 9000,
        clientLogLevel:'none',
        hot:true
    }

};
