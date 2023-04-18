const rand = require('./rand');

function percent(p) {
    // 获取随机数
    let n = rand(1, 100); // 1 - 100
    // 判断
    // if (n <= p) {
    //     return true;
    // } else {
    //     return false;
    // }
    //
    // 简便写法
    return n <= p;
}

module.exports = percent;