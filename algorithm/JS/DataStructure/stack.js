// 栈的声明
// 这是基于JavaScript内置函数帮助实现的
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    // 查看栈顶元素
     peek() {
        return this.items[this.items.length - 1];
     }



     // 检查栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // 返回栈的的长度
    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    pop() {
        return this.items.pop();
    }
}

// 使用自己的方式来实现的Stack
class StackBySelf {
    constructor() {
        this.count = 0;
        this.item = {}; // 这里是用对象来进行的
    }

    push(element) {
        this.item[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        // 判断是否为空，为空的话直接返回未定义
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        // 这里this.count不减一 是因为上面减了1
        const result = this.item[this.count];
        delete this.item[this.count];
        return result;
    }

    // 查看栈顶元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[this.count - 1];
    }

    clear() {
        this.item = {};
        this.count = 0;
    }

    // 或者使用暴力法 LIFO原则
    // clear() {
    //     while (!this.isEmpty()) {
    //         this.pop();
    //     }
    // }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = '${this.item[0}';
        for (let i = 0; i < this.count; i++) {
            objString = '${objString},${this.item[i]}';
        }
        return objString;
    }
}
const stack = new StackBySelf();
stack.push(5);
stack.push(8);
console.log(stack.item);


// 使用栈类
// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
//
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
//
// console.log(stack.pop());