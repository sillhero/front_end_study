"use strict";

var _percent = _interopRequireDefault(require("./percent.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//模块导入语句 放在代码的最前面
//导入

//获取按钮
var btn = document.querySelector('button');

//绑定事件
btn.onclick = function () {
  //概率
  if ((0, _percent["default"])(40)) {
    locationbar
    alert('恭喜恭喜~~');
  } else {
    alert('下次一定~~');
  }
};