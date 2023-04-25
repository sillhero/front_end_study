const randNum = require('./rand');
const percent = require('./precent');

// 生成三个0~255的随机数
let randColor = function () {
    return randNum(100, 255);
}
module.exports = randColor;