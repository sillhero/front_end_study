(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const precent = require('./precent');
const rgbArr = require('./randColor');

// 抽奖按钮
let btn = document.querySelector('button');

btn.onclick = () => {
    let result = precent(30);
    alert(result ? '恭喜中奖了' : '谢谢参与');
}

// 随机修改背景颜色按钮
let btn2 = document.getElementById('background_color');
let body = document.querySelector('body');
btn2.onclick = () => {
    alert('修改背景颜色');
    alert(`(${rgbArr()}, ${rgbArr()}, ${rgbArr()})`);
    body.style.background = `rgb(${rgbArr()}, ${rgbArr()}, ${rgbArr()})`;
}


},{"./precent":2,"./randColor":4}],2:[function(require,module,exports){
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
},{"./rand.js":3}],3:[function(require,module,exports){
// 生成一个1~100的随机数
let num = Math.floor(Math.random() * 100) + 1;
let randNum = function (m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}



module.exports = randNum;

},{}],4:[function(require,module,exports){
const randNum = require('./rand');
const percent = require('./precent');

// 生成三个0~255的随机数
let randColor = function () {
    return randNum(100, 255);
}
module.exports = randColor;
},{"./precent":2,"./rand":3}]},{},[1]);
