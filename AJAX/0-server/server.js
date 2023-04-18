const express = require('express');
const app = express();
const _ = require('lodash');
//获取客户端 ip 地址
app.use(function (request, response, next) {
    // access 访问进入  control 控制  allow 允许  origin 源
    response.setHeader('Access-Control-Allow-Origin', "*"); //允许跨域请求
    response.setHeader('Access-Control-Allow-Headers', "*"); //该响应头 允许客户端可以设置『自定义』请求头
    response.setHeader('Access-Control-Allow-Methods', "*"); //允许各种请求方式进行跨域请求
    response.setHeader('Access-Control-Expose-Headers', "*"); //暴露响应头信息
    response.setHeader("Access-Control-Max-Age", 60); // 设置有效时间 单位是『秒』,最大值为 600
    next();
});

app.options('*', (req, res) => {
    res.status(200).send('');
})

//创建路由规则
app.all('/server', (req, res) => {
    res.send('HELLO AJAX');
});

//创建路由规则
app.all('/server/:id', (req, res) => {
    console.log(req.params.id);
    res.send('HELLO AJAX it`s me');
});

let arr = [
    '15842657732',
    '15842657722',
    '15842657721',
];

//创建路由规则
app.all('/checkPhone', (req, res) => {
    //接收手机号
    let phone = req.query.phone;
    //检测数组中是否包含该手机号
    if(arr.includes(phone)){
        //响应 JSON 数据
        return res.json({
            available: 0,
            msg: '该手机号已经注册'
        });
    }else{
        return res.json({
            available: 1,
            msg: '该手机号可用'
        })
    }

});

app.listen(8080, () => {
    console.log('服务已经启动....');
});