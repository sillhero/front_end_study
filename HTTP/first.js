const http = require('http');

const server = http.createServer((request, response) => {

    let {url, method} = request; // 对象的解构赋值
    response.setHeader('content-type', 'text/html;charset=utf-8');


    response.end('Hello HTTP Server');
});

server.listen(8080, () => {
    console.log('服务已经启动, 端口号为8080');
});


