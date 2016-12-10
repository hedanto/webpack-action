module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    chunkFilename:'[name].[chunkhash].js'
  }
};
