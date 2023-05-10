var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel');
const md5 = require('md5');
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');

//显示注册页面
router.get('/reg', function (req, res, next) {
  res.render('auth/reg');
});

//新增用户信息
router.post('/reg', function (req, res, next) {
  //表单验证
  let {
    pass,
    repass,
    phone
  } = req.body;
  //检测两次密码是否一致
  if (pass !== repass) {
    return res.send('两次密码不一致');
  }

  //检测手机号是否合法
  let reg = /^1[3-9]\d{9}$/;

  //检测手机号
  if (!reg.test(phone)) {
    return res.send('手机号格式不正确');
  }

  //检测密码长度格式是否正确
  let passReg = /^\S{6,20}$/; // 6-20 位的非空白字符
  if (!passReg.test(pass)) {
    return res.send('密码格式不正确');
  }
  //唯一性检测
  UserModel.find({
    phone: phone
  }).count().exec((err, data) => {
    if (err) {
      return res.status(500).send('服务端错误');
    }
    //该手机号已经被占用
    if (data !== 0) {
      return res.send('手机号已经注册');
    }
    //插入到数据库中
    UserModel.create({
      phone,
      pass: md5(pass)
    }, (err, data) => {
      //如果数据库操作异常
      if (err) {
        return res.status(500).send('服务端错误');
      }
      res.render('notice/success', {
        msg: '注册成功',
        time: 3,
        url: '/login'
      })
    })
  })


});

//显示登录页面
router.get('/login', (req, res, next) => {
  //显示登录页面
  res.render('auth/login');
});

//登录操作
router.post('/login', (req, res, next) => {
  let {phone, pass} = req.body;
  //查询数据库
  UserModel.findOne({$and: [{phone: phone}, {pass: md5(pass)}]}, (err, data) => {
    //检测
    if(err) {
      return res.status(500).send('服务端错误');
    }
    //检测 data 是否有值
    if(!data){
      return res.send('手机号或密码错误');
    }
    // session 操作
    req.session.phone = phone;
    req.session._id = data._id;
    //成功的提示与跳转
    res.render('notice/success', {msg: '登录成功', time: 3, url: '/account'});
  });
  
})

//退出登录
router.post('/logout', checkLoginMiddleware, (req, res, next) => {
  req.session.destroy(() => {
    res.render('notice/success', {msg: '退出成功', time: 3, url: '/login'});
  })
});

module.exports = router;