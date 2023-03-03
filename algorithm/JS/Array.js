// 斐波那契应用
// const fibonacci = [];
// fibonacci[1] = 1;
// fibonacci[2] = 1;

// for (let i = 3; i < 20; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// for (let i = 0; i < fibonacci.length; i++) {
//     console.log(fibonacci[i]);
// }

Array.prototype.inssertFirtPosition = function(value) {
    for (let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirtPosition(-1)
