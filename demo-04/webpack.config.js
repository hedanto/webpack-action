var path = require("path");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath:'../dist/',
        pathinfo:true
    },
    module: {
        loaders:[
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};

