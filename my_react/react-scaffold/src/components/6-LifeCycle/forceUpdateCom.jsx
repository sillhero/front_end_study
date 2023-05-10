import React, { Component } from "react";

export default class forceUpdateCom extends Component {
    state = {
        counter: 0
    }
	render() {
		return <div>
            <h1>{this.state.counter}</h1>
            <hr />
            <button onClick={() => {
                this.state.counter += 1; // 这样生命周期里是不会走重新渲染组件的
                // 强制更新
                this.forceUpdate();
            }}>新增</button>
        </div>;
	}
}
