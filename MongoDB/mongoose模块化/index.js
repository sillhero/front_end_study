
// 导入 db 文件
const db = require('./db/db');
const mongoose = require("mongoose");

// 导入模型对象
const BookModel = require('./model/BookMode');
// 调用函数
db(() => {

    BookModel.find().sort({price: 1}).exec((err,data) => {
        if (err) {
            console.log('查询失败');
            return;
        }
        console.log(data);
    });
    //console.log('数据库连接成功');
}, () => {
    console.log('数据库连接失败');
});