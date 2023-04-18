const fs = require('fs');

// 异步读取
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    }
    console.log(data.toString());
});

//文件读取流

const rs = fs.createReadStream('');

rs.on('data', chunk => {
    console.log(chunk.length);
});

rs.on('end', chunk=>{
    console.log('读取完成');
}) 