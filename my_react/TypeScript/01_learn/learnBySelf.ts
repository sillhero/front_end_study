let str: string = 'iloveyou';
console.log(str);

function add2(a: number, b: number):number {
    return a + b;
}

console.log(add2(1, 2));

let isDone: boolean = false;

let name2:string = 'tom';
name2 = 'jack';

let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 元组
let t1: [string, number] = ['james', 30];
console.log(t1[0].toUpperCase());

// 枚举
enum Gender{
    Female,
    Male,
    Secret
}
let me: object = {
    gender: Gender.Male
}

console.log(me);

let v1: number | string;
v1 = 5211314;
v1 = 'iloveyou';

function add(x: number, y: number): number {
    return x + y;
}

let sub = function(x: number, y: number): number {
    return x - y;
}

let times = (x: number, y: number): number => x * y;

let divide: (a: number, b: number) => number =
    function (a, b) {
        return a / b;
    }

function slice(str: string, start: number, end ?:number): string {
    return str.slice(start, end);
}

function add3(a: number, b: number, ...args: number[]) {
    // 求和
    args = [a, b, ...args]; // args现在就有了a和b元素
    return args.reduce((pre: number, cur: number) => pre + cur);
}

class Person {
    // 声明属性
    name: string;
    age: number;
    // 声明并赋值
    alias: string = 'iloveyou';

    // 构造函数
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 声明方法
    intro():void {
        console.log(`I am ${this.name}, I am ${this.age} years old.`);
    }
}

let me2: Person = new Person('james', 30);
me2.intro();


interface BoyFirend {
    name: string;
    age: number;
    readonly id: number;
    check: () => void;
}

let zhangsan:BoyFirend = {
    id: 1,
    name: 'zhangsan',
    age: 30,
    check: function (): void {
        throw new Error("Function not implemented.");
    }
}
console.log(zhangsan);

class Person2 implements BoyFirend{
    id: number;
    name: string;
    age: number;
    check(): void {
        throw new Error("Method not implemented.");
    }

    constructor(id:number, name: string, age: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

interface BasicInfo{
    name: string,
    age: number,
}

interface BoyFirend2 extends BasicInfo{
    readonly id: number;
    check: () => void;
    car ?: string;
}

interface A {
    a: number;
    b: number;
}

interface B {
    c: number;
}

interface D extends A, B {
    d: number;
}


/**
 *
 * @param count
 * @param value 任意类型的值
 */
function createArray(count:number, value:any):any[] { // 这里的any[]是返回一个任意类型的数组
    const  arr:any[] = []; // 这里是声明一个任意类型的数组并且赋值为空数组
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
function createArray2 <P>(count:number, value:P):P[]{
    const arr:P[] = [];
    for (let index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}

const arr03 = createArray2<string>(3, 'x');
const arr04 = createArray2<number>(3, 1);

// 泛型接口
// @ts-ignore
interface Response2<T>{
    // @ts-ignore
    status: number,
    header: object,
    data: T
}

interface Stu{
    id: number,
    name: string,
    age: number,
}

interface Book {
    id: number,
    title: string,
    price: number
}

let response: Response2<Book> = {
    status: 200,
    header: {},
    data: {
        id: 1,
        title: '西游记',
        price: 28
    }
}

let response2: Response2<Stu> = {
    status: 200,
    header: {},
    data: {
        id: 1,
        name: 'xx',
        age: 19
    }
}

interface Lengthwise {
    length: number;
}

function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
}

fn2('abc');


// 类型别名
{
    interface Person {
        name: string,
        age: number
    }

    type Person2 = {
        name: string,
        age: number

    }

    type Persons = Person[];

    //获取某个变量的类型
    let me: string = '尚硅谷';
    type SchoolType = typeof me;

    // 获取接口键名的联合类型
    function getInfo(obj: Person, key: keyof Person): void {
        console.log(obj[key]);;
    }


    // 获取函数的返回值类型
    type retType = ReturnType<typeof getInfo>;

    // 获取函数参数类型，返回类型为【元组】类型
    type ParamsType = Parameters<typeof getInfo>;
}