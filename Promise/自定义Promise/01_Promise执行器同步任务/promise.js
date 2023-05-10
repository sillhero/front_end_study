// function Promise(executor) {
//     // 为实例对象添加属性
//     this.PromiseState = 'pending';
//     this.PromiseResult = undefined;
//     // successCallback和failCallback是数组，因为可能有多个回调函数
//     let success = value => {
//         // 判断
//         if (this.PromiseState !== 'pending') return;
//         // 改变状态
//         this.PromiseState = 'fulfilled';
//         // 改变结果值
//         this.PromiseResult = value;
//     }
//     // fail
//     let fail = reason => {
//         // 判断
//         if (this.PromiseState !== 'pending') return;
//         // 改变状态
//         this.PromiseState = 'rejected';
//         // 改变结果值
//         this.PromiseResult = reason;
//     }
//
//     // 同步调用【执行器函数】
//     try {
//         executor(success, fail);
//     } catch (error) {
//         // 捕获异常
//         fail(error);
//     }
// }
//
// // 原型对象中添加then方法
// Promise.prototype.then = function (successCallback, failCallback) {
//     // 判断实例对象的状态是否为fulfilled
//     if (this.PromiseState === 'fulfilled') {
//         successCallback(this.PromiseResult);
//     } else if (this.PromiseState ==='rejected') { // 判断实例对象的状态是否为rejected
//         failCallback(this.PromiseResult);
//     }
// }
//
// // 此时的步骤是：
// // 1、声明构造函数，添加执行器函数的形参 executor
// // 2、添加原型上的then方法，并且添加两个形参 此时不能使用箭头函数，使用了箭头函数，this指向就会发生改变 从而指向window对象
// // 3、执行器函数是一个同步回调，所以在Promise构造函数中，直接调用执行器函数
// // 4、执行executor 传入两个实参，并声明两个函数success与fail
// // 5、resolve(success)函数作用：1、改变状态，2、改变结果值
// // 6、注意success的this指向，所以在执行器函数中，需要使用箭头函数
// // 7、then方法中对状态进行判断，如果是fulfilled，就调用成功的回调函数，如果是rejected，就调用失败的回调函数

function Promise(executor) {
    // 为实例对象添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = undefined;
    // success
    let success = value => {
        // 判断
        if (this.PromiseState !== 'pending') return;
        // 改变状态
        this.PromiseState = 'fulfilled';
        // 改变结果值
        this.PromiseResult = value;
    }

    let fail = reason => {
        // 判断状态是否为pending
        if (this.PromiseState !== 'pending') return;
        // 改变状态
        this.PromiseState = 'rejected';
        // 改变结果值
        this.PromiseResult = reason;
    }

    try {
        executor(success, fail);
    }catch (error) {
        fail(error);
    }
}

// 原型对象中添加then方法
Promise.prototype.then = function (onFulfilled, onRejected) {
    // 判断实例对象的状态是否为成功
    if (this.PromiseState === 'fulfilled') {
        onFulfilled(this.PromiseResult);
    } else if (this.PromiseState === 'rejected') { // 判断实例对象的状态是否为失败
        onRejected(this.PromiseResult);
    }
}