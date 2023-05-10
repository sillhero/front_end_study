 import React, { Component } from 'react'

export default class RefCB extends Component {

    show = () => {
        let v = this.input.value;
        this.div.innerHTML = v;
    }

  render() {
    return (
      <div>
        <input type="text" ref={(el) => {
            // el 就是当前元素对象
            console.log(el);
            this.input = el;
        }}/>
        <button onClick={this.show}>
            显示
        </button>
        <div ref={el => this.div = el} style={{width: 300, height: 200, border: 'solid 1px #258'}}>

        </div>
      </div>
    )
  }
}
