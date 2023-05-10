const mongoose = require('mongoose');
//创建文档的结构
let UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true
  },
  reg_time: {
    type: Date,
    default: new Date()
  }
});

//创建模型对象   模型对象可以完成文档的增删改查操作  create   updateOne   remove   find
let UserModel = mongoose.model('users', UserSchema);

//暴露
module.exports = UserModel;