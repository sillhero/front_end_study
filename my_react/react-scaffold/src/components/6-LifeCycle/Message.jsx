import React, { Component } from "react";

export default class Message extends Component {
	state = {
         v: '', // input元素值的状态
         msgs: ['a', 'b', 'c'] // 所有信息的状态
    };

    send = () => {
        let {v, msgs} = this.state;
        if (v === '') return;
        this.setState({
            msgs: [...msgs, v]
        });
    }

	render() {
        let {v, msgs} = this.state;
		return <div>
            <input type="text" value={v} onChange={(e) => {this.setState({v: e.target.value})}}/>
            <button onClick={this.send}>发送</button>
            <hr />
            <div rel={el => this.div = el} style={{width: 400, height: 300, border: 'soild 1px #521', overflowY: 'scroll'}}>
                <ul>
                    {
                        msgs.map((msg, index) => {
                            return <li key={index}>{msg}</li>
                        })
                    }
                </ul>
            </div>
        </div>;
	}

    componentDidUpdate() {
        this.div.scrollTop = this.div.scrollHeight;
    }
}
