// 导入http模块
const http = require('http');
const qs = require('querystring');

// 创建服务对象
const server = http.createServer((req, res) => {
    // 声明一个字符串的变量
    let body = '';
    // request 是个可读流对象
    // 这里的chunk就是请求体的数据 也就是requestBody里面的内容
    req.on('data', chunk => { // 这里都是异步的
       // 解析请求体的数据
        // 拼接
        body += chunk.toString();
    });
    req.on('end', () => {
        // 解析请求体的数据
        let {username, password} = qs.parse(body);
        console.log(username, password);
    });

    // 获取路径
    res.end('<h1>body</h1>');
});

let port = 8080;
server.listen(port, '127.0.0.1', () => {
    console.log(`服务已经启动, 端口号为: ${port}`);
});