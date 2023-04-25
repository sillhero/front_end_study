//获取第二个按钮
let btn = document.querySelector('#change-bg');
// let rand = require('./rand')
import rand from './rand.js';

//绑定事件
btn.onclick = function(){
  document.body.style.background = `rgb(${rand(150, 255)},${rand(150, 255)},${rand(150, 255)})`;
}