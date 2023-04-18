// 安装EJS
const ejs = require('ejs');
const fs = require('fs');

let str = 'hello world';

let china = `${str}中国`;


// 使用ejs渲染
let result = ejs.render(fs.readFileSync('ejs_test.html').toString(), { china : china });

console.log(result);