// count的reducer 函数
let reducer = (state = 100, action) => {
    console.log(action);
    // 对action type属性进行判断
    switch(action.type){
        case 'add':
            return state + action.payload;
        case 'sub':
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;

// 创建 action creator 创造者
export function addAction(payload){
    return {
        type: 'add',
        payload: payload
    }
}

export let subAction = payload => ({type: 'sub', payload});

// 封装函数返回回调函数
// 异步的action creator
export let asyncAddAction = (payload) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: 'add', payload: payload});
        }, 1000);
    }
}