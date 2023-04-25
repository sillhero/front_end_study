// 导入随机数概率模块
const random = require('./CommonJS/js/rand.js');

// 导入概率模块
const precent = require('./CommonJS/js/precent.js');

// 运行100次
for (let i = 0; i < 100; i++) {
    if (random()) {
        console.log('中奖了');
    } else {
        console.log('未中奖');
    }
}