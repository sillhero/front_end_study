// 手动删除第一个元素并重新排序
Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray[newArray.length] = myArray[i];
        }
    }
    return newArray;
}

// 手动删除第一个元素并重新排序
Array.prototype.removeFirstPositions = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    console.log(this === numbers);
    return this.reIndex(this);
};

numbers = [1,2,3,4,5,6];
numbers = numbers.removeFirstPositions();
console.log(numbers)

// delete 相当于让数组对象赋值undefined

/**
 * 迭代器函数
 */

// ES5遍历操作数组
// 这里实现一个找偶数的需求
function isEven(x) {
    // 如果x是2的倍数，就返回true
    console.log(x);
    return x % 2 === 0 ? true : false;
}

numbers = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12];


// ES6写法 箭头函数
const isEven2 = x => x % 2 === 0;

// 迭代方法 every方法 every会迭代数组中的每一个元素，直到返回false  every参数是一个传递一个方法
console.log(numbers.every(isEven2));

numbers.forEach(x => console.log(x % 2 === 0));

const evenNumbers = numbers.filter(isEven);

for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

let evens = Array.from(numbers, x => (x % 2 === 0));
console.log(evens);