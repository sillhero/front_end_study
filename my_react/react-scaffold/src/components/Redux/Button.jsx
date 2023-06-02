import React from "react";
import store from '../../redux/store'
import { addAction, subAction, asyncAddAction} from "../../redux/reducers/countReducer";

export default function Buttons() {
    // 声明点击新增的函数
    let add = () => {
        store.dispatch(addAction(1));
    }
    let sub = () => {
        store.dispatch(subAction(1));
    }

    let addTen = () => {
        store.dispatch(asyncAddAction(10));
    }
    return (
        <>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <button onClick={addTen}>1秒后状态加10</button>
        </>
    );
}