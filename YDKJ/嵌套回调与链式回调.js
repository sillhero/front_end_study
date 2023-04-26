let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    setTimeout(function(){
    });
});

// 过分信任输入
function addNumber(x, y) {
    // +是可以重载的，通过类型转换，也可以是字符串连接
    // 所以根据传入参数的不同，这个运算并不是严格安全的
    return x + y;
}

addNumber(1, 2); // 3
addNumber('1', '2'); // '12'

// 试图挽救回调1
function success(data) {
    console.log(data);
}

function failure(err) {
    console.error(err);
}

ajax('http://some.url.1', success, failure);

// 试图挽救回调2 error-first风格（Node 风格）
function response(err, data) {
    if (err) { // 出错
        console.error(err);
    } else { // 否则认为成功
        console.log(data);
    }
}

ajax('http://some.url.1', response);

// 解决回调函数完全不被调用的情况
function timeoutify(fn, delay) {
    var intv = setTimeout(function () {
        intv = null;
        fn( new Error('Timeout!') );
    }, delay);

    return function () {
        // 还没有超时？
        if (intv) {
            clearTimeout(intv);
            fn.apply(this, arguments);
        }
    }
}

// 异步回调验证
function asyncify(fn) {
    var orig_fn = fn,
    intv = setTimeout(function () {
        intv = null;
        if (fn) fn();
    }, 0);
    fn = null;

    return function () {
        // 触发太快，在定时器intv触发指示异步转换发生之前？
        if (intv) {
            fn = orig_fn.bind.apply(
                orig_fn,
                // 把封装器的this添加到bind（）调用的参数中，
                // 以及柯里化所有传入参数
                [this].concat([].slice.call(arguments))
            );
        }else {
            // 已经是异步
            // 调用原来的函数
            orig_fn.apply(this, arguments);
        }
    }
}

function foo(err, data){
    if (err) {
        console.error(err);
    }else {
        console.log(data);
    }
}

ajax('http://some.url.1', timeoutify(foo, 500));