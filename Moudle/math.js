function add(a,b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function cheng(a, b){
    return a * b;
}

function chu(a, b){
    return a * b;
}

function getPI(){
    console.log(PI);
}


let PI = 3.14;

// 暴露数据
module.exports = add;

module.exports = {
    add,
    sub,
    getPI
}