import React, { Component } from "react";
import "./changeBg.css";
import {random as r} from 'lodash';

export default class ChangeBg extends Component {
    state = {
        color: 'rgb(0, 0, 0)'
    }

    // 声明事件方法
    ChangeBg = () => {
        // setState 执行之后， render方法会重新执行
        this.setState({
            color: `rgb(${r(0, 255)}, ${r(0, 255)}, ${r(0, 255)})`
        });
    }

	render() {
		return <div style={{background: this.state.color}} className="box" onClick={this.ChangeBg}></div>;
	}
}
