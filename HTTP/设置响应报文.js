// 导入http模块

const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
    // 设置响应状态码
    response.statusCode = 200;
    // response.statusCode = 404;

    // 设置响应状态描述
    // 不能使用中文
    response.statusMessage = 'OK';

    // 设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8');
    // response.setHeader('abc', 'xxx');

    // 设置响应体 response是一个可写流对象
    response.write('从来如此，便对吗？');
    response.end(`<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                  <style>
                    h1{
                      color: yellowgreen;
                    }
                  </style>
                </head>
                <body>
                  <h1>难道不是么????</h1>
                  <script>
                    let h1 = document.querySelector('h1');
                    h1.onclick = function(){
                      this.style.color = '#333';
                    }
                  </script>
                </body>
                </html>`);
});

let port = 8080;
server.listen(port, '127.0.0.1', () => {
    console.log(`服务已经启动, 端口号为: ${port}`);
});