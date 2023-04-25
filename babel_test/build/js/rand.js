"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rand = rand;
//声明一个函数 生成随机数
function rand(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}