const ejs = require('ejs');
const xiyou = [ '孙悟空', '猪八戒', '沙和尚', '唐僧' ];

// 原生JS
// let str = '<ul>';
//
// xiyou.forEach(item => {
//     str += `<li>${item}</li>`;
// });
//
// // 闭合ul标签
// str += '</ul>';
//
// console.log(str);

// EJS实现
const fs = require('fs');
let html = fs.readFileSync('西游.html').toString();
let result = ejs.render(html, { xiyou : xiyou });

console.log(result);