//导入 percent 函数
import percent from './percent.js';
import * as changeBg from './changeBg.js';
// const percent = require('./percent');
//导入 toastr

const sweetalert = require('sweetalert');
//导入 changeBg.js
// require('./changeBg');


//获取按钮
let btn = document.querySelector('button');

btn.onclick = function(){
  //执行 percent 函数
  if(percent(30)){
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    }).then( r => {}, e => {});
    // toastr.success('恭喜恭喜');
  }else{
    swal({
      title: "Failed!",
      text: "Thanks for clicking",
      icon: "warning",
      button: "Awwyiss!",
    }).then( r => {}, e => {});
    // toastr.success('恭喜恭喜');
  }
}