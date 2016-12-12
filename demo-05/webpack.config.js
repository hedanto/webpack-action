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
            return `webpack2:///${info.resourcePath}?${info.loaders}`;
        }
    },
    module: {
        loaders:[
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
    //,devtool: 'eval'//每个模块被转化为字符串，在尾部添加//# souceURL（指明eval前文件）后，被eval包裹起来[打包信息]
    //,devtool: 'source-map'//这是最原始的 source-map 实现方式，其实现是打包代码同时创建一个新的 sourcemap 文件， 并在打包文件的末尾添加 //# sourceMappingURL注释行告诉 JS 引擎文件在哪儿
    //,devtool: 'hidden-source-map'//打包结果与source-map一致，但是.map文件结尾不显示//# sourceMappingURL
    //,devtool: 'inline-source-map'//为每一个文件添加 sourcemap 的 DataUrl，注意这里的文件是打包前的每一个文件而不是最后打包出来的，同时这个 DataUrl 是包含一个文件完整 souremap 信息的 Base64 格式化后的字符串，而不是一个 url。
    //,devtool: 'eval-source-map'//将每个模块转化为字符串，使用eval包裹，并将打包前每个模块的sourcemap信息转换为Base64编码，拼接在每个打包后文件的结尾
    //,devtool: 'cheap-source-map'//同source-map,但不包含列信息，不包含 loader 的 sourcemap，（譬如 babel 的 sourcemap）
    //,devtool: 'cheap-module-source-map'//不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的
    //,devtool: 'cheap-module-eval-source-map'//开发环境推荐
    ,devtool: 'cheap-module-source-map'//生产环境推荐

};
