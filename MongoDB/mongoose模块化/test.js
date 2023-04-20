// 导入db
const db = require('./db/db');
// 导入模型对象
const MovieModel = require('./model/MovieMode');

// 调用函数
db(() => {
    // 创建电影对象
    MovieModel.create({title: '复仇者联盟', director: '姜文'}, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    console.log('数据库插入成功');
});