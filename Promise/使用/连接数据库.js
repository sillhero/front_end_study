const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    email: String,
    pass: String
})

let UserModel = mongoose.model('user', UserSchema);

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/shop')
    .then(() => {
        // 插入文档
        UserModel.create({
            email: 'abc@qq.com',
            pass: new Object()
        }).then(data => {
            console.log(data);
        }, error => {
            console.log(error._message);
        })
    }, () => {
        console.log('连接失败');
    });

// 普通方式
mongoose.connection.on('open', () => {})
mongoose.connection.on('error', () => {})

(
    async () => {
        // 连接数据库
        await mongoose.connect('mongodb://127.0.0.1:27017/shop');
        // 插入数据库
        let data = await UserModel.create({
           email: 'abc@qq.com',
           pass: 'abc'
        });
        // 输出结果
        console.log(data);
    }
)();