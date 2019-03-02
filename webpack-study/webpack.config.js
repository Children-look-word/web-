
var path = require('path');


// 在内存中，根据指定的页面 ，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
//如果配置插件 需要在导出的对象中 挂载一个plugin 节点
var htmlWebpackPlugin = require('html-webpack-plugin');

//导出配置对象 进行打包构建
module.exports = {
    mode: 'production',  //告知 webpack 使用相应模式的内置优化  控制不会出现 警告 可加可不加
    entry: path.join(__dirname, './src/main.js'),  //入口文件
    output: {
        path: path.join(__dirname, './dist'),  //输出路径
        filename: 'bundle.js'  //指定输出文件的名称
    },
    plugins: [  //所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件路径
            filename: 'index.html'  // 设置生成的内存页面的名称
        })
    ],
    module: { //配置第三方 loader模块
        rules: [  //第三方模块的匹配规则     //引入 css 需要 下载 style-loader  css-loader 模块
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' }
        ]
    }
}