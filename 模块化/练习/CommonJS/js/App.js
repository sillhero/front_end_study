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

