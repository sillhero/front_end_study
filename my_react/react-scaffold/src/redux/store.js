// store 仓库的意思
// 导入createStore方法 用于创建store
import {createStore, applyMiddleware, combineReducers} from 'redux';
// 导入thunk中间件
import thunk from 'redux-thunk';
import countReducer from './reducers/countReducer';
import zanReducer from './reducers/zanReducer';
import todoReducer from './reducers/todoReducer';

import {composeWithDevTools} from 'redux-devtools-extension';
import { asyncGetTodos } from './reducers/todoReducer';

// 合并reducer 合并reducer之后， redux 内部保存的状态值就回称为一个对象
let reducer = combineReducers({
    count: countReducer,
    zan: zanReducer,
    todo: todoReducer
})

// 2. 创建store对象 reducer函数
// let store = createStore((state, action) => { // 该回调是一个同步回调
//     switch (action.type) {
//         case 'add':
//             return state + action.payload;
//         case 'sub':
//             return state - action.payload;
//         default:
//             return state;
//     }
// }, 100, applyMiddleware(thunk)); // 该回调是一个同步回调

// export default store;
// export function addAction(payload){
//     return {
//       type: 'add',
//       payload: payload
//     }
//   }

// export let subAction = payload => ({type: 'sub', payload});

// export let asyncAddAction = (payload) =>{
//     return dispatch => {
//         setTimeout(() => {
//             dispatch({type: 'add', payload: payload});
//         }, 1000);
//     }
// }
// console.log(store.getState());

let store = createStore(reducer, composeWithDevTools({trace: true})(applyMiddleware(thunk)));

// 测试 asyncGetTodos
// store.dispatch(asyncGetTodos());

export default store;