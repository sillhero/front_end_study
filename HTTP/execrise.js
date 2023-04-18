// 访问该http时 将会返回对应的文件内容

const http = require('http');
const fs = require('fs');

// 结构？
const {resolve} = require('path');
const url = require('url');

// 创建服务对象
const server = http.createServer((request, response) => {
   // 获取路径
   let {pathname} = url.parse(request.url, true);
   // 判断
    if (pathname === '/') {
        let data = fs.readFileSync(resolve(__dirname, './_table.html'));
        response.end(data);
    }else if (pathname === '/index.css') {
        let data = fs.readFileSync(resolve(__dirname, 'index.css'));
        response.end(data);
        response.setHeader('Content-Type', ['text/css', 'hello']);
    }else {
        response.end('404');
    }
});

let port = 8080;
server.listen(port, '127.0.0.0.1' , () => {
    console.log(`server is running at ${port}`);
});