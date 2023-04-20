/**
 * email
 * password
 */

// 1. 安装mongoose
// 2. 导入mongoose
const mongoose = require('mongoose');

// 3. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connection.on('open', () => {
    console.log('数据库连接成功');

    let novelSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:String,
        is_hot:Boolean,
    })
    // 创建模型对象
    let BookModel = mongoose.model('book', novelSchema);

    // 条件查询
    // BookModel.find({price : {$lt: 20}},(err,data) => {
    //     if(err) throw err;
    //     console.log(data);
    //     mongoose.connection.close();
    // });

    /// 设置返回字段
    // BookModel.find().select({name: 1, author: 1}).exec((err,data) => {
    //     if (err) {
    //         console.log('查询失败');
    //         return;
    //     }
    //     console.log(data);
    // });

    // 数据排序
    BookModel.find().sort({price: 1}).exec((err,data) => {
        if (err) {
            console.log('查询失败');
            return;
        }
        console.log(data);
    });
});



