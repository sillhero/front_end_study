var express = require('express');
var router = express.Router();

/* GET home page. */
// 记账本列表
router.get('/account', function(req, res, next) {
  res.render('list');
});

router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req, res) => {
  console.log(req.body);
  res.send('添加记录');
});


module.exports = router;
