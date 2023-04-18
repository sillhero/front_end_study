require('http').createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html; charset=utf-8');
   res.end('你好');
}).listen(3000, () => {
    console.log('服务已经启动，监听3000端口');
});