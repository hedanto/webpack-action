var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:9000',
            './src/main.js'],
    output: {
        filename: 'js/bundle.[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    module: {
        loaders: [
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=img/[name].[hash].[ext]'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=img/[name].[hash].[ext]'}
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        //noInfo: true,
        port: 9000,
        hot:true,
        inline:true,
        open:true,
        contentBase: "./dist"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热部署
        new HtmlWebpackPlugin({//生成 HTML 文件
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            title:'webpack demo'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
      //  new webpack.optimize.DedupePlugin(),//是查找相等或近似的模块，避免在最终生成的文件中出现重复的模块，比如可以用它去除依赖中重复的插件
       // new webpack.optimize.OccurenceOrderPlugin(),//是为组件和模块分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID，通过分析ID，可以建议降低总文件的大小
      /*  new webpack.DefinePlugin({//通过配置了DefinePlugin，那么这里面的标识就相当于全局变量，你的业务代码可以直接使用配置的标识
            'process.env':'test'
        }),*/
        /*new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),*/
        new webpack.NoErrorsPlugin(),//来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        /*new webpack.optimize.UglifyJsPlugin({//压缩插件
            compress: {
                warnings: false
            }
        })*/
    ]
};

/*

css-loader 是处理css文件中的url()等

style-loader 将css插入到页面的style标签顺便告诉你

less-loader 是将less文件编译成css

sass-loader 是将sass文件编译成css*/
