import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
  render() {
    let {isloading} = this.props;
    // 返回虚拟DOM对象
    return (
        // 使用组件标签中的文本设置按钮文本
        <button className={`btn btn-${this.props.type}`}>
        {isloading && <img width="20" src="https://img.zcool.cn/community/0196fa582abab6a84a0d304f899eaf.gif" alt="" />}
        {this.props.children}
        </button>
    )
  }
}
