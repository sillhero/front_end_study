"use strict";
let str = 'iloveyou';
console.log(str);
function add2(a, b) {
    return a + b;
}
console.log(add2(1, 2));
let isDone = false;
let name2 = 'tom';
name2 = 'jack';
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
// 元组
let t1 = ['james', 30];
console.log(t1[0].toUpperCase());
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Secret"] = 2] = "Secret";
})(Gender || (Gender = {}));
let me = {
    gender: Gender.Male
};
console.log(me);
let v1;
v1 = 5211314;
v1 = 'iloveyou';
function add(x, y) {
    return x + y;
}
let sub = function (x, y) {
    return x - y;
};
let times = (x, y) => x * y;
let divide = function (a, b) {
    return a / b;
};
function slice(str, start, end) {
    return str.slice(start, end);
}
function add3(a, b, ...args) {
    // 求和
    args = [a, b, ...args]; // args现在就有了a和b元素
    return args.reduce((pre, cur) => pre + cur);
}
class Person {
    // 构造函数
    constructor(name, age) {
        // 声明并赋值
        this.alias = 'iloveyou';
        this.name = name;
        this.age = age;
    }
    // 声明方法
    intro() {
        console.log(`I am ${this.name}, I am ${this.age} years old.`);
    }
}
let me2 = new Person('james', 30);
me2.intro();
let zhangsan = {
    id: 1,
    name: 'zhangsan',
    age: 30,
    check: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(zhangsan);
class Person2 {
    check() {
        throw new Error("Method not implemented.");
    }
    constructor(id, name, age) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
/**
 *
 * @param count
 * @param value 任意类型的值
 */
function createArray(count, value) {
    const arr = []; // 这里是声明一个任意类型的数组并且赋值为空数组
    for (let index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}
const arr01 = createArray(3, 'x');
const arr02 = createArray(3, 1);
/**
 * 泛型
 * @param count
 * @param value 这里的泛型 其实一定程度上代替了any
 */
function createArray2(count, value) {
    const arr = [];
    for (let index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}
const arr03 = createArray2(3, 'x');
const arr04 = createArray2(3, 1);
let response = {
    status: 200,
    header: {},
    data: {
        id: 1,
        title: '西游记',
        price: 28
    }
};
let response2 = {
    status: 200,
    header: {},
    data: {
        id: 1,
        name: 'xx',
        age: 19
    }
};
function fn2(x) {
    console.log(x.length);
}
fn2('abc');
