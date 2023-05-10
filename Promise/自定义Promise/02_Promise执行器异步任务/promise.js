// // 首先还原之前同步的Promise情况
// function Promise(executor) {
//     this.PromiseState = 'pending';
//     this.PromiseResult = undefined;

//     // 定义成功 和 失败的回调函数
//     let success = value => {
//         if (this.PromiseState === 'pending') return;
//         this.PromiseState = 'fulfilled';
//         this.PromiseResult = value;
//     }

//     let fail = reason => {
//         if (this.PromiseState === 'pending') return;
//         this.PromiseState = 'rejected';
//         this.PromiseResult = reason;
//     }

//     // 同步调用【执行器函数】
//     try {
//         executor(success, fail);
//     } catch (error) {
//         fail(error);
//     }
// }

// // 原型对象中添加then方法
// Promise.prototype.then = function (successCallback, failCallback) {
//     // 判断实例对象的状态是否为fulfilled
//     if (this.PromiseState === 'fulfilled') {
//         successCallback(this.PromiseResult);
//     } else if (this.PromiseState ==='rejected') { // 判断实例对象的状态是否为rejected
//         failCallback(this.PromiseResult);
//     }
// }

// 上面的代码是同步的，下面的代码是异步的
function Promise(executor) {
    // 为实例对象添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = undefined;
    this.callbacks = []; // 用来存储异步的回调函数

    // success
    let success = value => {
        // 判断
        if (this.PromiseState !== 'pending') {
            return;
        }

        // 改变状态
        this.PromiseState = 'fulfilled';
        this.PromiseResult = value;
        // 执行成功的回调
        this.callbacks.forEach(obj => {
            // 执行成功的回调
            obj.ok(this.PromiseResult);
        })
    }

    let fail = reason => {
        // 判断状态是否为pending
        if (this.PromiseState !== 'pending') return;
        // 改变状态
        this.PromiseState = 'rejected';
        // 获取结果值
        this.PromiseResult = reason;
        // 执行一下回调
        this.callbacks.forEach(obj => {
            obj.ng(this.PromiseResult); // 执行失败的回调
        })
    }

    try{
        // 执行 执行器函数
        executor(success, fail); // 这里的resolve, reject  调用的时候先到先得
    }catch (e) {
        // 改变promise实例对象的状态为失败
        fail(e);
    }
}

// 主要操作是在then方法中
// 异步的时候 先走then方法，后面再去找回调，所以要先存着 标志就是promise的状态情况
//
Promise.prototype.then = function(onFulfilled, onRejected) {
    // 判断实例对象的状态是否为成功
    if (this.PromiseState === 'fulfilled') {
        onFulfilled(this.PromiseResult);
    }
    // 判断实例对象的状态是否为失败
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
    // 判断pending状态，这里如果遇到的是pending说明此时已经进入了异步，导致一轮执行完状态没有进行改变
    if (this.PromiseState === 'pending') { // 在同步的时候，这个状态说明已经执行过，而异步
      // 将回调函数保存在实例对象的数组中
        this.callbacks.push({
            ok: function (value) { // 这里的ok 和 ng都是函数对象，这里调用的时候 其实等价于同步的时候
                onFulfilled(value);
            },
            ng: function (reason) {
                onRejected(reason);
            }
        })
    }
}