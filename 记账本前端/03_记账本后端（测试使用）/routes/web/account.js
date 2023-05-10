var express = require('express');
var router = express.Router();
//导入 momentjs
const moment = require('moment');
//导入模型
const AccountModel = require('../../models/AccountModel');
//导入检测登录的中间件
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');

//显示表单页面
router.get('/create', checkLoginMiddleware, function (req, res, next) {
  //响应 html 内容
  res.render('account/create');
});

//插入数据库
router.post('/', checkLoginMiddleware, function (req, res, next) {
  //获取请求体数据  2023-04-15 => new Date(2023,3,15) 
  const momentDate = moment(req.body.date, 'YYYY-MM-DD').toDate();
  //更新 req.body.date 
  req.body.date = momentDate;
  //调整插入数据库的数据
  let body = {
    ...req.body,
    user_id: req.session._id
  }
  //插入数据库
  AccountModel.create(body, (err, data) => {
    //判断
    if (err) {
      return res.status(500).send('操作失败~~');
    }
    res.render('notice/success', {
      msg: '添加成功',
      url: '/account',
      time: 5
    });
  })
});

//获取所有
router.get('/', checkLoginMiddleware, function (req, res, next) {
  //获取所有账单
  AccountModel.find({user_id: req.session._id},(err, data) => {
    if(err){
      return res.status(500).send('操作失败~~');
    }
    res.render('account/list', {data, moment});
  })
});

//删除某个账单
router.get('/:id/delete', checkLoginMiddleware, function (req, res, next) {
  //获取 id 参数
  let {id} = req.params;
  //删除
  AccountModel.deleteOne({_id: id}, (err, data) => {
    if(err){
      return res.status(500).send('删除失败~~');
    }
    //成功的响应
    res.render('notice/success', {url: '/account', msg: '删除成功', time: 3})
  })
});

//显示某个账单的详情页面
router.get('/:id/edit', checkLoginMiddleware, (req, res, next) => {
  //获取 id
  let {id} = req.params;
  //获取账单
  AccountModel.findById(id, (err, data) => {
    if(err) {
      return res.status(500).send('更新失败~~');
    }
    res.render('account/edit', {data, moment});
  })
});

//显示某个账单的详情页面
router.post('/:id/update', checkLoginMiddleware, (req, res, next) => {
  //获取 id
  let {id} = req.params;
  //获取表单数据
  let {body} = req;
  //获取请求体数据  2023-04-15 => new Date(2023,3,15) 
  const momentDate = moment(req.body.date, 'YYYY-MM-DD').toDate();
  //更新 req.body.date 
  body.date = momentDate;
  AccountModel.updateOne({_id: id}, body, (err, data) => {
    if(err) {
      return res.status(500).send('更新失败~~');
    }
    res.render('notice/success', {msg: '更新成功', url: `/account`, time: 3});
  })
})

module.exports = router;