//1. 安装 mongoose    npm i mongoose@6
//2. 导入 mongoose
const mongoose = require('mongoose');
const {DBHOST, DBPORT, DBNAME} = require('../config/config');

module.exports = function(cb1, cb2){
  mongoose.set('strictQuery', true);
  //3. 连接 mongodb 的服务              
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  //4. 设置连接回调
  mongoose.connection.on('open', () => {
    cb1();
  });
  //简写
  // mongoose.connection.on('open', cb1);

  mongoose.connection.on('error', () => {
    cb2();
  });
}

