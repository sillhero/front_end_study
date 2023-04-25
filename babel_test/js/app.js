//模块导入语句 放在代码的最前面
//导入
import percent from './percent.js';

//获取按钮
let btn = document.querySelector('button');

//绑定事件
btn.onclick = function(){
  //概率
  if(percent(40)){
    alert('恭喜恭喜~~');
  }else{
    alert('下次一定~~');
  }
}