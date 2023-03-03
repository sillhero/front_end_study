
// let 和 const的变量作用域

let movie = 'Lord of the Rings';

function starWarsFan() {
    const movie = 'Star Wars';
    return movie;
}

function marvelFan() {
    movie = 'The Avengers';
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);
    if (isFan) {
        let phrase = 'initial text';
        phrase = 'For the Horder!';
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!';
    console.log('After if: ' + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();


// 模板字面量
const book = {
    name: '学习JavaScript 数据结构与算法'
};
console.log(`你正在阅读${book.name}`);

// 箭头函数
var circleAreaES5 = function circleArea(r) {
    var PI = Math.PI;
    var area = PI * r * r;
    return area;
}

var circleArea = r => {
    const PI = Math.PI;
    const area = PI * r * r;
    return area;
}

console.log(circleArea(2));

const hello = () => console.log('hello');
hello()



// 声明展开和剩余参数
function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', 'world', 'json'));

// 对象解构
let [x, y] = ['a', 'b'];
[x, y] = [y, x];
let obj = {x, y};
console.log(obj);

// 简写方法名
const hello2 = {
    name: 'hello',
    printHello() {
        console.log('Hello');
    }
};
console.log(hello2.printHello());


//  面向对象编程 类似java建立对象
// function Book(title, pages, isbn) {
//     this.title = title;
//     this.pages = pages;
//     this.isbn = isbn;
// }
// Book.prototype.printTitle = function () {
//     console.log(this.title);
// };

// Book.prototype.printTitle();

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printTitle() {
        console.log(this.isbn);
    }
}

let book2 = new Book('title', 'page', 'isbn');
console.log(book2.title);
book2.title = 'new title';
console.log(book2.title);

class ITBook extends Book {
    constructor (title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('学习JS算法', '200', '1234567890', 'JavaScript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());


class Person {
    constructor (name) {
        this._name = name;
    }
    get name() { 
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}