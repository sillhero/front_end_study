import localAxios from '../../until/myAxios';
import store from '../store';

let todoReducer = (state = [], action) => {
    let {type, payload} = action;

    switch (type) {
        case 'init':
            state = payload;
            return payload;
        case 'addTodo':
            return [...state, payload];
        case 'checkTodo':
            return state.map(item => {
                // 比较当前任务 id 与payload的id是否一致
                if (item.id === payload.id) {
                    item.isDone = payload.isDone;
                }
                return item;
            })
        // 移除某个任务
        case 'remoeTodo':
            return state.filter(item => item.id !== payload)
        // 批量更新任务的完成状态
        case 'checkAllTodo':
            return state.map(item => {
                item.isDone = payload;
                return item;
            })
        default:
            return state;
    }
}

// 暴露
export default todoReducer;

// 发送请求获取所有任务 异步的 action creator
export let asyncGetTodos = () => {
    return async dispatch => {
        let result = await localAxios.get('/todo');
        // 更新redux中任务状态
        dispatch({type: 'init', payload: result});
    }
}

// export let asyncAddTodos = () => {
//     return async dispatch => {
//         let result = await localAxios.post('/todo', );
//         // 更新redux中任务状态
//         dispatch({type: 'init', payload: result.data});
//     }
// }

export let asyncAddTodo = (title) => {
    return async dispatch => {
        let result = await localAxios.post('/todo', {title: title, isDone: false});
        // 更新redux中任务状态
        dispatch({type: 'addTodo', payload: result});
    }
}

// 声明异步的action creator 更新某个任务的完成状态
export let asyncCheckTodo = (id, isDone) => {
    return async dispatch => {
        // 发送AJAX 请求更新某个任务的完成状态
        let result = await localAxios.patch(`/todo/${id}`, {isDone: isDone})
        // 更新redux中指定id任务的完成状态
        dispatch({type: 'checkTodo', payload: {id, isDone}})
    }
}

// 声明异步 action creator 删除某个任务
export let asyncRemoveTodo = id => {
    return async dispatch => {
        // 发送AJAX请求删除某个任务
        await localAxios.delete(`/todo/${id}`);
        // 同步更新redux中的状态
        dispatch({type: 'remoeTodo', payload: id});
    }
}

// 更新所有任务的完成状态
export let asyncCheckAllTodo = isDone => {
    return async dispatch => {
        // 获取所有的任务
        let todos = store.getState().todo;
        // 处理成为 promise对象
        let promises = todos.map(item => {
            return localAxios.patch(`/todo/${item.id}`, {isDone: isDone});
        });
        // 批量处理
        await Promise.all(promises);
        // 如果成功
        dispatch({type: 'checkAllTodo', payload: isDone});
    }
}