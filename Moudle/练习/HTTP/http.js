// 暴露
module.exports = (cb, port) => {
    const http = require('http');
    const server = http.createServer(cb);

    server.listen(port, () => {
        console.log(`服务已经启动，监听${port}端口`);
    });
}
