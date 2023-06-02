//声明点赞数对应的 reducer 函数   payload 是一个可选项, 不是必填, 甚至名字都可以改
let reducer = (state=0, action) => {
    //根据 action 对 state 状态进行更新
    let {type, payload} = action;
    //判断
    switch(type){
      case 'incre':
        return state + 1;
      case 'decre':
        return state - 1;
      default: 
        return state;
    }
  };
  
  //暴露
  export default reducer;
  
  //封装 action creator
  export let increAction = () => {
    return {
      type: 'incre'
    }
  }
  
  //减少点赞数的 action creator
  export let decreAction = () => ({type: 'decre'});
  