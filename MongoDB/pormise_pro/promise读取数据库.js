// 导入 mongoose
const mongoose = require('mongoose');
// const {mongo} = require("mongoose")
// const movieModel = require('../mongoose模块化/model/MovieMode');

// 创建文档结构
const MovieSchema = new mongoose.Schema({
    title: String,
    director: String
});

// 创建模型对象
const MovieModel = mongoose.model('movie', MovieSchema);

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log('数据库连接成功');
    // 说明返回结果是一个promise对象
    MovieModel.create({title: '让子弹飞', director: '姜文'}).then(data => {
        console.log(data);
    }, (error) => {
        console.log(error);
    });
}, () => {
    console.log('数据库连接失败');
});

