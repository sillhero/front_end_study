const fs = require('fs');

// 方式一 readFile
// 读取文件
let data = fs.readFileSync('./test.mp4', );

fs.writeFileSync('./test2.mp4', data);

// 方式二 流式操作
const rs = fs.createReadStream('./资料/笑看风云.mp4');
const ws = fs.createWriteStream('./资料/笑看风云2.mp4');

// 绑定data事件

rs.on('data', chunk => {
    ws.write(chunk);
})

// 文件重命名
fs.rename('./test.txt', './hello.txt', err => {
    if (err) {
        console.log('操作失败');
    }
    return;
});

