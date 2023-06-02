// 声明createStore 函数
function createStore(reducer, initvalue) {
    // 声明一个状态变量
    let state = initvalue;
    let cbs = [];

    // 声明一个getState 返回当前内部保存的状态值
    let getState = () => {
        return state;
    }

    // dispatch 方法用来分发任务
    let dispatch = (action) => {
        // 判断 action是否为一个函数
        if (typeof action === 'function') {
            action(dispatch);
        }else{
            // 调用reducer函数完成状态的更新
            let result = reducer(state, action);
            // 更新内部的状态值
            state = result;
            // 执行cbs中的订阅的回调函数
            cbs.forEach(cb => cb());
        }
    }

    // subscribe 方法用来订阅状态的变化
    let subscribe = (cb) => {
        // 保存这个cb函数
        cbs.push(cb);
    }

    // 同步调用reducer函数一次
    dispatch({type: '@@REDUX_INIT'});

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}

// 测试
let store = createStore((state=100, action) => {
    switch (action.type) {
        case 'add':
            return state + action.payload;
        case 'sub':
            return state - action.payload;
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log('状态更新了~');
});

// 更新状态
// store.dispatch({type: 'add', payload: 200});

// 获取当前状态
// console.log(store.getState());

store.dispatch(
    dispatch => {
        setTimeout(() => {
            dispatch({type: 'add', payload: 200});
        }, 1000);
    }
)