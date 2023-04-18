const http = require('http');
const url = require('url');

// 创建服务对象
const server = http.createServer((req, res) => {
   // 完整的url
    console.log('这里的url是连接后面的参数：' + req.url);
    // 方法一 解析
    let {pathname, query} = url.parse(req.url, true);
    console.log('解构之后的数据' + pathname, query);

    // 方法二 实例化对象 更加安全
    let u = new URL(req.url, 'http://localhost:8080');

    res.end(req.url);
});

let port = 8080;
server.listen(port, '127.0.0.1', () => {
    console.log(`服务已经启动, 端口号为: ${port}`);
});