const fs = require('fs');

// 非递归创建
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// });
//
// // 递归创建
// fs.mkdir('./a/b/c', {recursive: true}, err => {
//     if (err) {
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// });


// 读取文件夹
// 相对路径参照物：命令行的工作目录
fs.readdir('./', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    }
    console.log(data);
});

console.log(__dirname);
