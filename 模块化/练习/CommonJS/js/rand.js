// 生成一个1~100的随机数
let num = Math.floor(Math.random() * 100) + 1;
let randNum = function (m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}



module.exports = randNum;
