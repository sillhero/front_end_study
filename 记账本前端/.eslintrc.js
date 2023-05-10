module.exports = {
  rules: {  
    // eslint检查的规则  0 忽略 1 警告 2 错误
    "no-console": 0, // 不检查console
    eqeqeq: 0, // 要求使用 === 
    "no-alert": 0, // 不能使用alert
    "array-callback-return": 1
  },
  extends: "eslint:recommended", // 使用eslint推荐的默认规则
  parserOptions: { //解析选项
    ecmaVersion: "latest", // 支持es6   latest 最新的意思
    sourceType: "module", // 使用es6模块化
  },
  env: {
    // 环境 用来指定识别哪个环境的全局变量
    browser: true, // 支持浏览器中的全局变量
    node: true, // 支持node中的全局变量
    es6: true, // 支持ES6中的全局变量  Promise  Set  Map
  },
  globals: {
    // 声明使用的全局变量, 这样即使没有定义也不会报错了
    axios: "readonly", // 
  },
};