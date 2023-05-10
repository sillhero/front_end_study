const mongoose = require('mongoose');
//创建文档的结构
let AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: Number,
    default: 1
  },
  money: {
    type: Number,
    required: true,
  },
  note: {
    type: String
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: '643dfed43bd2d5108bb43495'
  }
});

//创建模型对象   模型对象可以完成文档的增删改查操作  create   updateOne   remove   find
let AccountModel = mongoose.model('accounts', AccountSchema);

//暴露
module.exports = AccountModel;