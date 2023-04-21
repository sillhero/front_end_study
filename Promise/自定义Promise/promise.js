// function Promise(executor) {
//     // 为实例对象添加属性
//     this.PromiseState = 'pending';
//     this.PromiseResult = undefined;
//     // successCallback
//     let successCallback = (value) => {
//         // 1. 改变结果值
//         this.PromiseResult = value;
//         // 2. 改变状态
//         this.PromiseState = 'fulfilled';
//     }
//     // failCallback
//     let failCallback = (reason) => {
//         // 1. 改变结果值
//         this.PromiseResult = reason;
//         // 2. 改变状态
//         this.PromiseState = 'rejected';
//     }
//     // 执行执行器函数
//     executor(successCallback, failCallback);
// }
//
// Promise.prototype.then = (onFulfilled, onRejected) => {
//     // 判断实例对象状态是否为成功
//     if (this.PromiseState === 'fulfilled') {
//         onFulfilled(this.PromiseResult);
//     } else if (this.PromiseState === 'rejected') {
//         onRejected(this.PromiseResult);
//     }
// }

// 步骤
/**
 * 1、声明构造函数，天啊机执行器函数形参
 * 2、添加原型上的then方法，并且添加两个形参
 * 3、执行器函数是一个同步函数，所以在Promise构造函数中直接调用
 * 4、执行executor传入两个实参，并声明两个函数success与fail
 * 5、resolve(success)函数的作用：1、改变状态 2、改变结果值
 * 6、注意success函数的this指向
 * 7、then方法重对状态进行判断，根据状态调用对应的回调函数
 */

function Promise(executor) {
    // 初始化状态 和 结果值
    this.PromiseState = 'pending';
    this.PromiseResult = undefined;
    this.callbacks = [];
    // 声明成功的回调函数
    let success = (value) => {
        if (this.PromiseState !== 'pending') return;
        // 1. 改变状态
        this.PromiseState = 'fulfilled';
        // 2. 改变结果值
        this.PromiseResult = value;
        // 遍历回调函数
        this.callbacks.forEach(item => {
            item.ok(value);
        });
    }
    // 声明失败的回调函数

    let fail = (reason) => {
        if (this.PromiseState !== 'pending') return;
        // 1. 改变状态
        this.PromiseState = 'rejected';
        // 2. 改变结果值
        this.PromiseResult = reason;
        // 遍历回调函数
        this.callbacks.forEach(item => {
            item.ng(reason);
        });
    }

    // 调用执行器函数
    try {
        executor(success, fail);
    }catch (e){
        fail(e);
    }
}

// 定义then方法
Promise.prototype.then = function (onFulfilled, onRejected){
    console.log(this, this.PromiseState, this.PromiseResult)
    // 这里的this指向的是实例对象
    if (this.PromiseState === 'fulfilled') {
        onFulfilled(this.PromiseResult);
    }else if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }else if (this.PromiseState === 'pending') {
        // 将回调函数添加到callbacks中
        this.callbacks.push({
            ok: onFulfilled,
            ng: onRejected
        });
    }
}

// 异步任务执行的回调的流程
/**
 * 1、在实例身上添加 callbacks 属性
 * 2、在then方法重检测pending状态，如果是pending状态，将回调函数添加到callbacks中
 * 3、在success和fail函数中添加回调函数的调用代码，遍历callbacks数组，调用数组中的每一个回调函数
 */