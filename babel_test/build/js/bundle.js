(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    alert('恭喜恭喜~~');
  } else {
    alert('下次一定~~');
  }
};
},{"./percent.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = percent;
var _rand = require("./rand.js");
//声明一个函数 生成概率结果
function percent(n) {
  //生成一个随机数
  var num = (0, _rand.rand)(1, 100);
  //判断
  if (num <= n) {
    return true;
  } else {
    return false;
  }
}
},{"./rand.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rand = rand;
//声明一个函数 生成随机数
function rand(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}
},{}]},{},[1]);
