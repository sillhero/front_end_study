/**
 * 连接数据库模块
 * @param success 成功的回调函数
 * @param fail 失败的回调函数
 */
const mongoose = require("mongoose");
// 导入配置变量
const {DBHOST, DBPORT, DBNAME} = require('../config/config');

module.exports =  (success, error) => {
    // 优化判断
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败')
        };
    }

    // 1. 安装mongoose
// 2. 导入mongoose
    const mongoose = require('mongoose');

// 设置strictQuery的值为ture
    mongoose.set('strictQuery', true);

// 3. 连接数据库
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    mongoose.connection.on('open', () => {
        // console.log('数据库连接成功');
        success();
    });


// 设置连接错误的回调
    mongoose.connection.on('error', (err) => {
        // console.log('数据库连接失败', err);
        error();
    });

// 设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('数据库连接关闭');
    });
}




