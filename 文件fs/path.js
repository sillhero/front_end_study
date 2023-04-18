const fs = require('fs');

const path = require('path');

// 第二个参数 有/表示绝对路径 没有表示相对路径
console.log(path.resolve(__dirname, 'index.html', './test'));

// sep 分隔符
console.log(path.sep); // windows \  Linux /

// parse 方法 __dirname '全局变量'
//
let str = 'D:\\前端学习\\JS\\Node\\文件 fs\\index.html\\test';