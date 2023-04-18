const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
app.get('/login', (req, res) => {
   // res.send('登录页面');
   res.sendFile(__dirname + '/form.html');
});

app.post('/login', (req, res) => {
   res.send('获取用户的数据');
});

app.listen(3000, () => {
   console.log('server is running on 3000');
});