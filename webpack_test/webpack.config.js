const {resolve} = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HttpWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 配置入口
    entry: './src/main.js',
    // 配置出口
    output: {
        // 输出的文件夹路径
        path: resolve(__dirname, './build'), // resolve 的作用根据路径片段生成绝对路径
        // 输出的文件名
        filename: 'js/bundle.js',
        // 自动清理打包文件夹
        clean: true
    },
    // 配置模式
    mode: 'development',
    module: {
        rules: [
            // loader 的规则
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 作用: 将 CommonJS 模块生成一个 style 标签插入到最终的文档中
                    'css-loader' // 作用: 将 css 资源转为 CommonJS 的 JS 模块
                // 先执行 css-loader 再执行 style-loader
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader' // 作用: 将 less 资源转为 css 资源
                ]
            },
            // JS 规则
            {
                test: /\.js$/,
                exclude: /node_modules/, // exclude 排除
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // 指定 bebel 预设包
                    }
                }
            }
        ]
    },
    plugins: [
        new ESLintPlugin(),
        new HttpWebpackPlugin({
            template: './public/index.html', // 指定模板文件路径
            inject: 'head', // 指定插入的位置
            hash: true, // 是否为引入的文件添加 hash 值
            minify: {
                removeAttributeQuotes: true, // 去除属性双引号
                collapseWhitespace: true, // 折叠空行
                removeComments: true // 去除注释
            }
        })
    ]
}