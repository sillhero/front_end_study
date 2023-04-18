module.exports = (dir, port) => {
    // d导入 http 模块
    const http = require('http');
    const fs = require('fs');
    const {
        resolve
    } = require('path'); // 解构赋值
    const url = require('url');

    // 创建服务对象
    const server = http.createServer((req, res) => {
        // 获取请求路径
        let {pathname} = url.parse(req.url, true);
        // 解码 URL路径 解决中文匹配不成功的问题
        pathname = decodeURI(pathname);
        // 判断
        if (pathname === '/') {
            pathname = '/index.html';
        }

        // 声明一个文件夹路径
        let root = dir; // 网站的根目录，静态资源文件夹（目录）
        // 拼接对应的文件路径
        // resolve(root, pathname);
        let filePath = resolve(__dirname, root +　pathname);
        console.log(filePath);

        // 异步读取文件
        fs.readFile(filePath, (err, data) => {
            // 判断是否出错
            if (err) {
                res.end('404 Not Found');
                return;
            }
            // 响应文件内容
            res.end(data);
        });
    });

    // 监听端口，启动服务
    server.listen(port, () => {
        console.log(`服务已经启动，监听${port}端口`);
    });
}
