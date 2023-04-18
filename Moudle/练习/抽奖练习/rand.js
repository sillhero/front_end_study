// 声明函数生成随机数
function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

// 暴露
module.exports = rand;