/**
 * email
 * password
 */

// 1. 安装mongoose
// 2. 导入mongoose
const mongoose = require('mongoose');

// 3. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/users');

mongoose.connection.on('open', () => {
    console.log('数据库连接成功');

    let userSchema = new mongoose.Schema({
        type:String,
        password: String
    })
    // 创建模型对象
    let User = mongoose.model('User', userSchema);

    User.create({
        email: '123@163.com',
        password: '123456'
    }, (err, data) => {
        if (err) throw err;
        console.log(data);
        mongoose.connection.close();
    });
});



