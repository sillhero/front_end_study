// 导入npm安装的uniq包 作用是去重
const uniq = require('uniq');

// 声明一个数组
const arr = [1, 2, 1, 2, 5, 3, 2, 3, 4, 5];

// 调用函数
console.log(uniq(arr));

// 导入
let _ = require('lodash');

console.log(_.random(1, 100));

// momoent.js 如何将时间戳转换为时间格式 yyyy-mm-dd
// 导入
const moment = require('moment');

// 调用
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

