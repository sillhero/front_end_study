import React, { Component } from 'react'

export default class PropsCom extends Component {
  render() {
    // 接受外部传递过来的数据
    console.log(this.props);
    return (
      <ul>
        <li>姓名：{this.props.user.name}</li>
        <li>年龄：{this.props.user.age}</li>
        <li>性别：{this.props.user.gender}</li>
      </ul>
    )
  }
}
