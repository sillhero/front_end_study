import React from 'react';

//声明类式组件
export default class StateTry extends React.Component{
  //构造方法
  constructor(){
    //必须要调用 super 函数
    super();
    //为实例对象添加 state 属性
    this.state = {
      isNight: true, //是否是晚上
      counter: 0
    }
  }

  // render 方法是由『实例化对象』调用的
  render(){
    return <div>
              <h1>至尊宝, 我是{ this.state.isNight ? '紫霞仙子' : '青霞仙子'} </h1>
              <button onClick={() => {
                //更新 isNight 的状态值
                this.setState({
                  isNight: !this.state.isNight
                })
              }}>切换白天与黑夜</button>
              <hr />
              <h2>{this.state.counter}</h2>
              <button onClick={() => {
                this.setState({
                  counter: this.state.counter + 1
                })
              }}>自增</button>
            </div>;
  }
}