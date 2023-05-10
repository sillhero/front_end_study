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
    this.callbacks = []; // 存储成功和失败的回调函数 这里是一个数组，因为可能有多个回调函数 这就是用来处理异步的关键

    // success
    let success = value => {
        // 判断
        if (this.PromiseState !== 'pending') return;
        // 改变状态
        this.PromiseState = 'fulfilled';
        // 改变结果值
        this.PromiseResult = value;
        // 调用成功的回调函数
        this.callbacks.forEach(item => {
            item.ok(this.PromiseResult);
        });
    }

    // fail
    let fail = reason => {
        // 判断状态是否为pending
        if (this.PromiseState !== 'pending') return;
        // 改变状态
        this.PromiseState = 'rejected';
        // 改变结果值
        this.PromiseResult = reason;
        // 调用失败的回调函数
        this.callbacks.forEach(item => {
            item.ng(this.PromiseResult);
        });
    }

    try{
        // 执行 执行器函数
        executor(success, fail);
    }catch(error) {
        fail(error);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    return new Promise((resolve, reject) => { // 这里的promise就是调用上面声明的构造函数
        // 判断实例对象的状态是否为成功
        if (this.PromiseState === 'fulfilled') {
            try{
                // 调用回调函数， 获得返回值
                let res = onFulfilled(this.PromiseResult);
                if (res instanceof Promise){ // 也就是说 他在创建promise的时候 成功的回调是一个新的promise类型
                    // 如果是一个promise实例对象 根据promise决定then的返回值
                    res.then(v => {
                        resolve(v);
                    }, reason => {
                        reject(reason);
                    })
                } else {
                    resolve(res); // 不是promise对象就走正常的路径
                }
            } catch (e) {
                reject(e);
            }
        }
        if (this.PromiseState === 'rejected') {
            try {
                // 调用回调函数，获得返回值
                let res = onRejected(this.PromiseResult);
                if (res instanceof Promise) { // 这里的逻辑同上
                    res.then(v => {
                        resolve(v);
                    },r => {
                        reject(r);
                    });
                }else {
                    reject(res);
                }
            }catch (e){
                reject(e);
            }
        }
        // 状态为pending说明这里遇到了异步操作
        if (this.PromiseState === 'pending') {
            this.callbacks.push({
                ok: function (value) {
                    onFulfilled(value);
                },
                ng: function (reason) {
                    onRejected(reason);
                }
            })
        }
    })
}


// 步骤：