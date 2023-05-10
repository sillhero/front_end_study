var express = require('express');
const UserModel = require('../../models/UserModel');
var router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const {token_secret} = require('../../config/config');

//登录接口
router.post('/login', async (req, res, next) => {
  //对用户名和密码进行校验  phone   pass  
  let {phone, pass} = req.body;
  let result = await UserModel.findOne({phone: phone, pass: md5(pass) })
  //判断
  if(result){
    //账号密码正确
    let token = jwt.sign({phone: result.phone, user_id: result._id}, token_secret, {
      expiresIn: 7 * 24 * 60 * 60
    });
    res.json({
      msg: '登录成功',
      code: '0000',
      data: {
        token: token
      }
    })
  }else{
    //账号密码错误
    res.json({
      msg: '账号或密码错误',
      code: '2001',
      data: null
    })
  }
  
})

module.exports = router;