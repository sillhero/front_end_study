import React, { Component } from 'react'
import './5-color.css';


export default class ColorPicker extends Component {

    state = {
        red: 0,
        green: 0,
        blue: 0
    }

    save = (type) => {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

  render() {
    let {red, green, blue} = this.state;
    return (
        <div className='color-wrapper'>
            {/* 显示颜色区域 */}
            <div className='color-show'style={{background: `rgb(${red}, ${green}, ${blue})`}}></div>
            {/* 颜色选择区域 */}
            <div className='color-choose'>
                红：<input type="range" min="0" max="255" onChange={this.save('red')} value={this.state.red}/><br/>
                绿：<input type="range" min="0" max="255" onChange={this.save('green')} value={this.state.green}/><br/>
                蓝：<input type="range" min="0" max="255" onChange={this.save('blue')} value={this.state.blue}/><br/>
                <hr />
                <input type="text" value={`颜色参数为${red}, ${green}, ${blue}`} />
            </div>
            <hr />
            

        </div>
        
    )
  }
}
