import React from "react";

//声明类式组件
export default class StateTry extends React.Component {
	//构造方法
	//   constructor(){
	//     //必须要调用 super 函数
	//     super();
	//     //为实例对象添加 state 属性
	//     this.state = {
	//       isNight: true, //是否是晚上
	//       counter: 0
	//     }
	//   }

       //解决方法2：使用 bind 函数
       constructor(){
        //必须要调用 super 函数
        super();
        //为实例对象添加 state 属性
        this.state = {
            isNight: true, //是否是晚上
            counter: 0
        }
        //使用 bind 函数，绑定 this
        
        // 将 handleClick 函数的 this 指向实例化对象
        // fn();
        console.log('测试this', this.handleClick);
        this.handleClick = this.handleClick.bind(this); //bind 改变this 并且函数的返回值是一个新的函数

        this.handleClick2 = this.handleClick2.bind(this); //bind 改变this 并且函数的返回值是一个新的函数
    }

	//简化写法
	state = {
		isNight: true, //是否是晚上
		counter: 0,
	};

    //定义一个方法
    // 这里的this还是undifined
    // 申请到原型对象上去了
    handleClick() {
        //更新 isNight 的状态值
        this.setState({
            isNight: !this.state.isNight,
        });
    }

    // 第二步 声明函数 此时是在原型对象上
    handleClick2() {
        // 更新counter的状态值
        this.setState({
            counter: this.state.counter + 1
        }); 
    }
    //解决方法1：使用箭头函数
    // handleClick = () => {
    //     //更新 isNight 的状态值
    //     this.setState({
    //         isNight: !this.state.isNight,
    //     });
    // }

 

	// render 方法是由『实例化对象』调用的
	render() {
		return (
			<div>
				<h1>至尊宝, 我是{this.state.isNight ? "紫霞仙子" : "青霞仙子"} </h1>
				<button
					onClick={this.handleClick.bind(this)}
				>
					切换白天与黑夜
				</button>
				<hr />
				<h2>{this.state.counter}</h2>
				<button
                    // 这里是第一步 this 是指向实例化对象的
					onClick={this.handleClick2}
				>
					自增
				</button>
			</div>
		);
	}
}
