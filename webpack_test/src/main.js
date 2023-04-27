// 导入模块
// import {test} from './js/app.js';
//
// test();
//
// //导入 JSON 文件
// import duanzi from './json/duanzi.json';
//
// console.log(duanzi);


// 编写ES新语法
let fn = () => {
    console.log('fnfnfn xxx');
}
fn();

import './css/headerCss.css';

// 导入less资源
import './less/app.less';


// let a = 100;

//全局变量
axios.get('http://api.xiaohigh.com/duanzi').then(v => {
    console.log(v);
});

