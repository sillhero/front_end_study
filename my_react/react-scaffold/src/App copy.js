// import Style from './components/1-Style/Style';
//导入状态初体验的组件
// import StateTry from './components/2-State/1_Try';
// import StateCom from './components/2-State/4_ChangeBg';
// import StateCom from './components/2-State/5_Slider';
// import PropsCom from "./components/3-Props/1-Try";
// import Button from "./components/3-Props/Button";
import React from "react";
// import Toutiao from "./components/8-练习/2-Toutiao";
// import RefTry from "./components/4-Refs/1-RefTry";
// import {FormCom} from "./components/5-Form/FormCom";
// import Slider from "./components/2-State/5_Slider";
// import {FormCom} from "./components/5-Form/FormComSimple";
// import ColorPicker from './components/5-Form/ColorPicker';
// import EleClock from './components/6-LifeCycle/EleClock';
// import ForceUpdateCom from './components/6-LifeCycle/forceUpdateCom';
// import StateCom from './components/7-函数式组件/StateCom';
// import PropCom from "./components/7-函数式组件/2-props/PropCom";
// import EffectCom from "./components/7-函数式组件/4-effect/1-EffectCom";
import Clock from "./components/7-函数式组件/4-effect/2-Clock";
// 组件形式
import TodoList from "./components/8-练习/ToDoList/TodoList";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import HeroList from "./components/英雄列表/HeroList";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import News from "./page/News/News";
import Message from "./page/Message/Message";
import NotFound from "./page/NotFound/NotFound";
import "./App.css";
export default function App() {
	// let user = {
	//   name: '张三',s
	//   age: 18,
	//   gender: '男'
	// }
	// // console.log(...user);
	// console.log('扩展测试" + {...user});

	// render() {
	//   return <RefTry></RefTry>
	// }
	// render() {
	//   return <FormCom></FormCom>
	// }

	// render() {
	//     return <Slider></Slider>
	// }
	// state = {
	//   isShow: true
	// }

	// render() {
	//   return <div>
	//     <button onClick={() => {this.setState({isShow: true})}}>显示</button>
	//     <button onClick={() => this.setState({isShow: false})}>销毁</button>
	//     {this.state.isShow && <EleClock></EleClock>}
	//   </div>

	// }
	// render() {
	//   return <ForceUpdateCom></ForceUpdateCom>
	// }

	// render() {
	//   return <StateCom></StateCom>
	// }

	// render() {
	// 	//声明一个数组
	// 	let news = {
	// 		title: "苏州昆山房价 7 折被紧急叫停",
	// 		date: "2023-05-08",
	// 		content:
	// 			"近日,苏州昆山住建局发布一则通知,引起热议。昆山某开发商因降价销售现房被行政处罚,网签暂时关闭。 据中介介绍,参与本次降价活动的房源有300多套。之前的备案价格是18000-19000元/平方米",
	// 	};
	// 	return (
	// 		<PropCom title={news.title} date={news.date}>
	// 			{news.content}
	// 		</PropCom>
	// 	);
	// }
  // 渲染的方法


  // render() {
  //   return <div>
  //     <button onClick={() => {
  //       this.setState({
  //         isShow: !this.state.isShow
  //       })
  //     }}>切换</button>
  //     {this.state.isShow && <EffectCom></EffectCom>}
  //   </div>
  // }

//   render() {
//     return <Clock></Clock>
//   }

  	//  render() {
	// 	return <Toutiao></Toutiao>;
	// }

    // render() {
    //   return <TodoList></TodoList>
    // }

    // render() {
    //   return <HeroList></HeroList>
    // }



    // <div>
    //     <div className="row">
    //         <div className="col-xs-offset-2 col-xs-8">
    //             <div className="page-header">
    //                 <h2>React Router Demo</h2>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="row">
    //         <div className="col-xs-2 col-xs-offset-2">
    //             <div className="list-group">
    //                 <NavLink className="list-group-item" to="/about">About</NavLink>
    //                 <NavLink className="list-group-item" to="/home">Home</NavLink>
    //             </div>
    //         </div>
    //         <div className="col-xs-6">
    //             <Routes>
    //                 <Route path="/home" element={<Home></Home>} >
    //                     <Route path="/home/news" element={<News />}></Route>
    //                     <Route path="/home/message" element={<Message />}></Route>
    //                     {
    //                         <Route element={<h3>欢迎，你好</h3>} index={true}></Route>
    //                     }
    //                 </Route>
    //                 <Route path="/about" element={<About></About>} />
    //                 <Route path='/' element={<h1>welcome</h1>} />
    //                 <Route path="*" element={<NotFound />} />
    //             </Routes>
    //         </div>
    //     </div>
    //
    // </div>            <div>
    //     <div className="row">
    //         <div className="col-xs-offset-2 col-xs-8">
    //             <div className="page-header">
    //                 <h2>React Router Demo</h2>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="row">
    //         <div className="col-xs-2 col-xs-offset-2">
    //             <div className="list-group">
    //                 <NavLink className="list-group-item" to="/about">About</NavLink>
    //                 <NavLink className="list-group-item" to="/home">Home</NavLink>
    //             </div>
    //         </div>
    //         <div className="col-xs-6">
    //             <Routes>
    //                 <Route path="/home" element={<Home></Home>} >
    //                     <Route path="/home/news" element={<News />}></Route>
    //                     <Route path="/home/message" element={<Message />}></Route>
    //                     {
    //                         <Route element={<h3>欢迎，你好</h3>} index={true}></Route>
    //                     }
    //                 </Route>
    //                 <Route path="/about" element={<About></About>} />
    //                 <Route path='/' element={<h1>welcome</h1>} />
    //                 <Route path="*" element={<NotFound />} />
    //             </Routes>
    //         </div>
    //     </div>
    //
    // </div>

  return (
    <div className={'music-container'}>
        <ul className={'top-menu'}>
            <li>音乐馆</li>
            <li>我的音乐</li>
        </ul>
        <ul className="top-menu">
            <li>歌手</li>
            <li>新碟</li>
        </ul>

        <div className="banner">
            <h2>万千歌手，尽在眼前</h2>
        </div>
    </div>
  )

}
