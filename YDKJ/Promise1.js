// function add(getX, getY, cb){
//     var x, y;
//     getX( function (xVal){
//       x = xVal;
//       if (y !== undefined){
//         cb(x + y);
//       }
//     });
//
//     getY( function (yVal){
//         y = yVal;
//         if (x !== undefined){
//             cb(x + y);
//         }
//     });
// }
//
// add(fetchX, fetchY, function (sum){
//     console.log(sum);
// });

// Promise转化
function add(xPromise, yPromise){
    // Promise.all([ .. ])接受一个promise数组并且创建一个新的promise,当数组中的所有promise都成功时，这个新的promise才会成功
    // 返回的值也是一个数组，包含每个promise的成功值（返回值）
    return Promise.all([xPromise, yPromise])
        .then(function (values){
            return values[0] + values[1];
        });
}

// fetchX()和fetchY()返回的都是promise，可能已经就绪了

let fetchX = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

let fetchY = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}


add(fetchX(), fetchY()) // 我们得到一个这两个promise的和的promise，用链式调用 then来等待这个promise的完成
    .then(function (sum){
        console.log(sum);
    });

function foo(x) {
    // 开始做一些可能需要时间的事情

    // 构造并返回一个promise
    return new Promise(function (resolve, reject){
        // 当事情完成时，调用resolve(..)或者reject(..)
        if (x) {
            resolve(x);
        } else {
            reject(x);
        }
        // 这是这个promise的决议回调
    });
}

// 回调未调用
function timeoutPromise(delay) {
    return new Promise(function (resolve, reject){
       setTimeout(function (){
           reject('Timeout!');
       }, delay);
    });
}

// 设置foo()超时
// race与all逻辑运算相反，只要有一个promise完成，就完成这里就是如果foo()在200ms内没有完成，那么就会调用timeoutPromise(..)的reject(..)来完成promise，那么就会调用timeoutPromise(..)的reject(..)来完成promise
Promise.race([
    foo(100),
    timeoutPromise(2000)
]).then(
    function (){
        // foo(..)及时完成
    },
    function (err){
        // 或者foo()太慢了，或者发生了错误
        console.log(err);
    }
)

// 吞掉错误或异常
var p = new Promise(function (resolve, reject){
    foo.bar(); // foo.bar()不存在，会抛出错误
    resolve(42); // 永远不会到这里
});
p.then(
    function fulfilled(){
        // 永远不会到这里
    },
    function rejected(err){
        // 出错了！err将会是一个来自foo.bar()这一行的TypeError异常对象
    });

// Promise链中(Promise产生决议后)的错误
var p = new Promise(function (resolve, reject){
    resolve(42);
});

// 这里的出错不会不被捕获，因为它是在p.then(..)返回的也是一个promise对象，所以错误会被下一个错误处理函数捕获导致promise的决议失败
p.then(
    (msg) => {
        foo.bar();
        console.log(msg);
    },
    function rejected(err){
        // 永远不会到这里
        console.log(err);
    }
)

// Promise可信任问题
var p1 = new Promise(function (resolve, reject){
    resolve(42);
});

var p2 = Promise.resolve(42);

// p1和p2都是已经完成的promise，它们的值都是42 是等价的

/*********************/
// 如果向Promise.resolve(..)传递一个非promise的thenable值, 前者就会试图展开这个值，而且展开过程会持续到提取出一个具体的非Promise的最终值
var p = {
    then: function(cb) {
        cb(42);
    }
};

// 这可以工作，但只是因为幸运而已
p.then(function fulfilled(val){
    console.log(val); // 42
}, function rejected(err){
    // 永远不会到这里
});

/*********************/
var p = {
    then: function(cb, errcb) {
        cb(42);
        errcb("evil laugh");
    }
};

p.then(
    function fulfilled(val){
        console.log(val); // 42
    },
    function rejected(err){
        // 啊，这里是不该运行的
        console.log(err); // evil laugh 但是这里会运行 恶魔的笑声
    }
)
// 这样做都是不可信任的
// 规范后的操作
Promise.resolve(p).then(
    function fulfilled(val){
        console.log(val); // 42 走这里是因为resolve(p)返回的是一个新的promise，而不是p本身，并且该promise是已经完成的（肯定） q
    },
    function rejected(err){
        // 永远不会到这里
    }
);

/**********链式流************/
var p = Promise.resolve(21);
var p2 = p.then(v => {
    console.log(v); // 21
    return v * 2;
});

// 连接p2
p2.then(v => {
    console.log(v); // 42
});

/********没有决议消息的promise*********/
function delay(time) {
    return new Promise(function (resolve, reject){
        setTimeout(resolve, time);
    });
}

delay(100) // 第一步
    .then(function STEP2(){
        console.log("step 2 (after 100ms)");
        return delay(200);
    }).then(function STEP3(){
        console.log("step 3 (after another 200ms)");
    }).then(function STEP4(){
        console.log("step 4 (next Job)");
        return delay(50);
    }).then(function STEP5(){
        console.log("step 5 (after another 50ms)");
    }); // 可以一直循环下去

// 更实用的场景
function request(url) {
    return new Promise(function (resolve, reject){
        ajax(url, resolve);
    });
}

request("http://some.url.1/")
    .then(function (response1){
        return request("http://some.url.2/?v=" + response1);
    }).then(function (response2){
        console.log(response2);
    })    ;

