module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        chunkFilename: '[id].[hash].[name].[chunkhash].js'
    }
};

