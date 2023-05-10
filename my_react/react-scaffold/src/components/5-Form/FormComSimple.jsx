import React, {Component} from "react";

export class FormCom extends Component {
	// 声明状态
	state = {
		email: '',
		pass: ''
	}

	login = (e) => {
		e.preventDefault();
		console.log(`用户名为: ${this.state.email}   密码为: ${this.state.pass}`);
		this.reset(e);
	}

	reset = (e) => {
		e.preventDefault();
		// 更新状态
		this.setState({
			email: '',
			pass: ''
		})
	}

	// 3.email 的 onchange 事件回调
	saveEmail = (e) => {
		// console.log(e.target.value);
		// 改变状态
		this.setState({
			email: e.target.value
		})
	}

	savePass = (e) => {
		this.setState({
			pass: e.target.value
		})
	}

    // save = (e) => {
    //     console.log('实例对象名字' + e.target.name);
    //     console.log('实例对象的值' + e.target.value);
    //     // console.log(this[e.target.name]);
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

	save = (type) => {
		return (e) => {
			this.setState({
				[type]: e.target.value
			})
		}
	}

	render() {
		return (
			<div>
				<h2>登录</h2>
				<hr/>
				<form>
				{/*	使用状态值作为input的value值*/}
					邮箱: <input type="text" onChange={this.save('email')} name="email" value={this.state.email}/><br/>
					密码: <input type="text" onChange={this.save('pass')} name="pass" value={this.state.pass}/><br/>
					{/* <input type="text" name="email" ref={el => this.email = el}/> */}
					<hr/>
					{/*这里按钮默认行为里面有提交动作*/}
					<button onClick={this.login}>登录</button>
					<button onClick={this.reset}>重置</button>
				</form>
			</div>
		)
	}
}