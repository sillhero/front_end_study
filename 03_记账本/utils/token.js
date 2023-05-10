//导入 jsonwebtoken 
const jwt = require('jsonwebtoken');
//导入 token 秘钥
const {token_secret} = require('../config/config');

//校验 token 的函数
function verifyToken(token){
  //返回一个 promise 对象
  return new Promise((resolve, reject) => {
    jwt.verify(token, token_secret, (err, data) => {
      if(err) reject(err);
      resolve(data);
    })
  })
}

module.exports = {
  verifyToken
}