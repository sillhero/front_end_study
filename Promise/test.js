// const first = () => new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//         console.log(7);
//         setTimeout(() => {
//         console.log(5);
//         resolve(6);
//         }, 0)
//         resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//         console.log(arg);
//     });
//
// });
//
// first().then((arg) => {
//     console.log(arg);
// });
//
// console.log(4);
//

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
})
console.log('script end');