// const tiemo = require('tiemo');
//
// const {add} = require('./math');

// const me = require('./me2.js');
// console.log(me);\

// 导入模块  这里建议是使用相对路径 因为不受路径的影响
//
const tiemo = require('./me.js');

// 省略后缀 JS
const tiemo = require('./me');

// 导入json文件
const duanzi = require('./duanzi');    // 3、这里的.json后缀可以省略 内部规则：js > json > node
console.log(duanzi); // 2、对象 不是一个字符串

// 4、导入其他类型的文件，会以js文件的形式导入

// 如果导入的路径是一个文件夹， 则会首先检测该文件夹下package.json文件中的main属性对应的文件，
// 如果存在则导入，反之如果没有main属性或者package.json文件不存在，则会导入该文件夹下的index.js文件，如果没有index.js文件，则会报错




// 调用函数
tiemo();