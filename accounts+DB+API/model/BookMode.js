const mongoose = require('mongoose');

let novelSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:String,
    is_hot:Boolean,
})
// 创建模型对象
let BookModel = mongoose.model('book', novelSchema);

module.exports = BookModel;