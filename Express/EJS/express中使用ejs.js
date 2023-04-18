// 导入express
const express = require('express');
const path = require('path');
// 创建应用对象
const app = express();
// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

// 创建路由规则
app.get('/server', (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('HELLO Server');
});

app.get('/home', (req, res) => {
   let title = '我是标题';
   res.render('home', {title});
});

// 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中....');
});