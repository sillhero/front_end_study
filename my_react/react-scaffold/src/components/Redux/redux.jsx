import React from "react";
// import store from '../../redux/store'
// import { addAction, subAction} from "../../redux/store";
import H2Com from "./H2";
import Buttons from "./Button";
import store from "../../redux/store";
import { increAction, decreAction } from "../../redux/reducers/zanReducer";

export default function ReduxCom() {
	// 新增
	// let add = () => {
	//     store.dispatch(addAction(1));
	// }S

	// let sub = () => {
	//     store.dispatch(subAction(1));
	// }

	let zan = () => {
		store.dispatch(increAction());
	};

	let cancelZan = () => {
		store.dispatch(decreAction());
	};

	return (
		<div>
			<h1>Redux</h1>
			<H2Com></H2Com>
			<hr />
			<Buttons></Buttons>

			<h2>点赞数: {store.getState().zan}</h2>
			<button onClick={zan}>点赞</button>
			<button onClick={cancelZan}>取消点赞</button>
		</div>
	);
}
