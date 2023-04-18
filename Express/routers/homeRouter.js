const express = require('express');

// 创建应用对象
const router = express.Router();

// 创建路由规则
// 创建路由
router.get('/home', (req, res) => {
    res.send('前台首页');
});

// 创建路由
router.get('/admin', (req, res) => {
    res.send('后台首页');
});

// 暴露router
module.exports = router;