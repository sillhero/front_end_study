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
	this.PromiseState = "pending";
	this.PromiseResult = undefined;
	this.callbacks = []; // 存储成功和失败的回调函数 这里是一个数组，因为可能有多个回调函数 这就是用来处理异步的关键

	// success
	let success = (value) => {
		// 判断
		if (this.PromiseState !== "pending") return;
		// 改变状态
		this.PromiseState = "fulfilled";
		// 改变结果值
		this.PromiseResult = value;
		// 调用成功的回调函数
		this.callbacks.forEach((item) => {
			item.ok(this.PromiseResult);
		});
	};

	// fail
	let fail = (reason) => {
		// 判断状态是否为pending
		if (this.PromiseState !== "pending") return;
		// 改变状态
		this.PromiseState = "rejected";
		// 改变结果值
		this.PromiseResult = reason;
		// 调用失败的回调函数
		this.callbacks.forEach((item) => {
			item.ng(this.PromiseResult);
		});
	};

	try {
		// 执行 执行器函数
		// success 对应调用时的resolve
		// fail 对应调用时的reject
		executor(success, fail);
	} catch (error) {
		fail(error);
	}
}

Promise.prototype.then = function (successCallback, failCallback) {
	return new Promise((resolve, reject) => {
		// 这里的new Promise就是 根据原生的Promise.then方法返回promise对象的特性来实现的 自定义then返回的promise对象
		// 这里要对failCallback进行判断，因为有可能没有传入失败的回调函数也就是undefined, 会导致异常穿透
		if (typeof failCallback !== "function") {
			// 给failCallback一个默认的回调函数
			failCallback = (reason) => {
				throw reason;
			};
		}
		// 该处做一个函数的封装简化操作
		let callback = (type) => {
			// 这里使用箭头函数是因为要将函数里面的this指向上面的new promise对象 而不是window
			try {
				let res = type.then(this.PromiseResult);
				if (res instanceof Promise) {
					res.then(
						(v) => {
							resolve(v);
						},
						(r) => {
							reject(r);
						}
					);
				} else {
					resolve(res);
				}
			} catch (e) {
				reject(e);
			}
		};

		// 判断实例对象的状态

		// 成功是调用的回调函数
		if (this.PromiseState === "fulfilled") {
			// 调用回调函数获得返回值
			// try{
			//     let res = successCallback(this.PromiseResult);
			//     // 如果不是promise 成功
			//     if (res instanceof Promise) {
			//         // 如果是promise 那么根据promise的结果来决定then的返回值
			//         res.then(v => {
			//             resolve(v); // 在这里返回的res调用的是成功
			//         }, r => {
			//             reject(r);
			//         });
			//     } else {
			//         resolve(res);
			//     }
			//     // 是promise 根据promise决定then的返回值
			//     // 抛出结果
			// } catch(error) {
			//     reject(error);
			// }

			callback(successCallback);
			// 失败时的回调函数
		} else if (this.PromiseState === "rejected") {
			// 这个时候和上面的逻辑处理相似， 只是要是前面调用是在失败函数里面抛错的话，那么就会走到这里
			// 前面的调用对象就是reject
			// try{
			//     let res = failCallback(this.PromiseResult); // 这里的this.PromiseResult就是前面调用的reject的参数 有可能是是一个promise对象
			//     if (res instanceof Promise) {
			//         res.then(v => {
			//             resolve(v);
			//         }, r => {
			//             reject(r);
			//         });
			//     } else { // 不是promise对象 就直接返回成功类型
			//         resolve(res);
			//     }
			// } catch(error) {
			// }
			// failCallback(this.PromiseResult);
			callback(failCallback);
		} else {
			// 等待状态
			// 将成功回调函数和失败回调函数存储起来
			this.callbacks.push({
				// ok: successCallback,
				// ng: failCallback
				ok: function () {
					// 这里添加异步任务处理
					// 调用成功的回调
					callback(successCallback);
					// successCallback(value);
				},
				ng: function () {
					callback(failCallback); // 这里不用传参是因为 在调用的时候已经将value值保存在promise对象里面，callback里面的this指向的就是该promise对象
				},
			});
		}
	});
};

// catch exceptions
// 只是then方法的一半
Promise.prototype.catch = function (failCallback) {
	return this.then(undefined, failCallback);
};
