var express = require('express');
var router = express.Router();
// 导入lowdb
const low = require('lowdb')
// 导入FileSync
const FileSync = require('lowdb/adapters/FileSync')
// 创建adapter实例
const adapter = new FileSync(__dirname + '/../data/db.json');
// 创建lowdb实例
const db = low(adapter)
// 导入shortid
const shortid = require('shortid');

/* GET home page. */
// 记账本列表
router.get('/account', function(req, res, next) {
  res.render('list');
});

router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req, res) => {
  // 插入数据到数据库中
  let id = shortid.generate();
  /// db.get('accounts').push({id:id, ...req.body}).write(); // 尾部插入
  // 这里的req.body是一个对象，...req.body是将对象展开，之后与id拼接，形成一个新的对象插入数据库中
  db.get('accounts').unshift({id:id, ...req.body}).write(); // 头部插入
  console.log(req.body);
  res.send('添加记录');
});


module.exports = router;
