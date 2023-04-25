import {rand} from './rand.js';

//声明一个函数 生成概率结果
export default function percent(n) {
  //生成一个随机数
  let num = rand(1, 100);
  //判断
  if(num <= n){
    return true;
  }else{
    return false;
  }
}

