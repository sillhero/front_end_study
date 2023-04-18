const http = require('http');

// 创建服务对象
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('content-type', 'text/html;charset=utf-8');
    console.log(res.method); // 获取请求的方法
    console.log(res.url); // 只获取url中的路径与查询字符串
    console.log(res.httpVersion); // 获取http版本
    res.headers // 获取请求头
    res.end('你好');
    res.end('hello world');

});

// 监听端口
server.listen(9000, ()=>{
    console.log('服务已经启动');
});

