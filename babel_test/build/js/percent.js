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