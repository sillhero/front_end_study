// 导入express
const express = require('express')

// 创建应用对象
const app = express();
const port = 3000;
// 创建路由
app.get('/:id/hello', (req, res) => {
    // 原生操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers)
    res.send('Hello World');

    // express 操作
    console.log(req.path);
    console.log(req.query); // 获取URL上的参数
    console.log(req.ip); // 获取IP
    console.log(req.params.id);

})

// 监听端口
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
