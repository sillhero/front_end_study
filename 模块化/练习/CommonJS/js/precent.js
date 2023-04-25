// 声明概率
const rand = require('./rand.js');
// 导入概率模块
let percent = function (n) {
    let num = rand(1, 100);
    if (num <= n) {
        return true;
    } else {
        return false;
    }
}

module.exports = percent;