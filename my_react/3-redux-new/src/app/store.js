// 导入 create 创建 slice切片 configure配置 store仓库
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 创建 slice切片
let slice = createSlice({
  // 状态的名称
  name: 'counter',
  // 状态的初始值
  initialState: 20,
  // 定义reducer内部的功能
  reducers: {
    // 新增操作
    add: (state, action) => {
      return state + action.payload;
    },
    sub: (state, action) => {
      return state - action.payload;
    }
  }
});

// 通过切片对象，获得同步的action creator
let { add, sub } = slice.actions;

// 通过切片对象，获得当前状态的reducer函数
let reducer = slice.reducer;

// 配置 redux的store对象
let store = configureStore({
  reducer: reducer
});

// subscribe订阅状态的变化
store.subscribe(() => {
  console.log('状态更新了');
});

// 获得store中的状态
console.log(store.getState());

// 更新状态
store.dispatch(add(10));

// 查看新的状态
console.log(store.getState());