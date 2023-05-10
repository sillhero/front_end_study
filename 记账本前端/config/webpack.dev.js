const {
  resolve
} = require('path');
// 导入ESLint插件
const ESLintPlugin = require('eslint-webpack-plugin');
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

//暴露数据  只能使用 commonJS 的模块化规范语法
module.exports = {
  //配置入口
  entry: {
    main: './src/main.js',
    login: './src/login.js'
  },
  //配置出口
  output: {
    //输出的文件夹路径
    path: resolve(__dirname, './build'), // resolve 的作用根据路径片段生成绝对路径
    //输出的文件名
    filename: 'js/[name].[contenthash:8].js',
    //自动清理打包文件夹
    clean: true,
    // 设置引入打包文件的基础路径，默认是相对路径
    publicPath: '/'
  },
  //配置模式
  mode: 'development',
  //配置 loader 加载器
  module: {
    rules: [
      //loader 的规则 
      {
        test: /\.css$/,
        use: [
          'style-loader', //作用: 将 CommonJS 模块生成一个 style 标签插入到最终的文档中
          'css-loader' // 作用: 将 css 资源转为 CommonJS 的 JS 模块
          // 先执行 css-loader 再执行 style-loader
        ]
      },
      // less 规则
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // js 规则
      {
        test: /\.js$/,
        exclude: /node_modules/, // exclude 排除
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // 只打包使用的ES6新API的实现代码
                  corejs: {
                    version: 2
                  } // 指定core-js的版本号为2
                }
              ]
            ], // 指定bebel预设包
          }
        }
      },
      //图片处理
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset", //asset 资产
        // 解析器
        parser: {
          // 指定进行图片base64编码最大文件大小
          dataUrlCondition: {
            maxSize: 1 * 1024, // 5kb    默认8k
          }
        },
        // 打包生成的文件
        generator: {
          filename: 'images/[hash:8][ext]',
        },
      },
      // 配置 html 的 loader
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      // 打包字体图标
      {
        test: /\.(eot|svg|woff|woff2|ttf)$/,
        type: 'asset',
        // 解析器
        parser: {
          // 指定进行base64编码最大文件大小
          dataUrlCondition: {
            maxSize: 5 * 1024, // 5kb
          }
        },
        generator: {
          filename: 'fonts/[hash:8][ext]',
        },
      },
    ]
  },
  //插件配置
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 指定html模板文件。
      inject: "body", // 将打包生成的JS文件放置在body尾部
      hash: true, // 
      filename: 'index.html',
      chunks: ['main'],
      minify: {
        removeAttributeQuotes: true, // 移除属性中的双引号
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 去除空格与换行
      }
    }),
      new HtmlWebpackPlugin({
        template: "./public/login.html", // 指定html模板文件。
        inject: "body", // 将打包生成的JS文件放置在body尾部
        hash: true, //
        filename: 'index.html',
        chunks: ['main'],
        minify: {
          removeAttributeQuotes: true, // 移除属性中的双引号
          removeComments: true, // 移除注释
          collapseWhitespace: true, // 去除空格与换行
        }
      })
  ],
  //配置开发服务
  devServer: {
    port: 3000,
    open: true
  },
  // 配置 devtool
  // devtool: 'source-map' // 资源映射
  devtool: 'cheap-module-source-map' // 资源映射

}