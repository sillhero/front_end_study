/**
 * 记录每个请求的url与IP地址
 */

const express = require('express');
const fs = require('fs');
const port = 5000;

// 创建应用对象
const app = express();
const homeRouter = require('./routers/homeRouter');

// 创建全局中间件
function reqMiddle(req, res, next) {
    console.log(req.url);
    console.log(req.ip);
    next();
}
app.use(homeRouter);
// app.use((req, res, next) => {
//     fs.appendFile('./log.log', `${req.url} ${req.ip} ${new Date()}\n`, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         next();
//     });
// });

// 创建路由
app.get('/home2', (req, res) => {
    res.send('前台首页');
});

app.get('/admin', (req, res) => {
    res.send('后台首页');
});

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});

app.listen(5000, () => {
    console.log(`server is running on ${port}`);
});