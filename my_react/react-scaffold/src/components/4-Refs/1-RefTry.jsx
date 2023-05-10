// ref的字符串表示方式
import React, { Component } from 'react'

export default class RefTry extends Component {

    // 声明实例的方法作为事件回调
    show = () => {
        // 获取 input元素中的值
        let v = this.refs.input.value;
        this.refs.div.innerHTML = v;
    }

  render() {
    return (
      <div>
        <input ref="input" type="text" />
        <button onClick={this.show}>点我显示输入的内容</button>
        <hr />
        <div ref="div" style={{width: 300, height: 200, border: 'solid 1px #258'}}></div>
      </div>
    )
  }
}
