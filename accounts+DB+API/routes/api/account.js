var express = require('express');
var router = express.Router();


// 导入lowdb
const low = require('lowdb')
// 导入FileSync
const FileSync = require('lowdb/adapters/FileSync')
// 创建adapter实例
const adapter = new FileSync(__dirname + '/../../data/db.json');
// 创建lowdb实例
const db = low(adapter)


// 导入shortid
const shortid = require('shortid');
// 导入moment
const moment = require('moment');
// 导入模型文件
const AccountModel = require('../../model/account');


// 测试
console.log(moment('2019-01-01').toDate());


/* GET home page. */
// 记账本列表
router.get('/account', function(req, res, next) {
    // 获取所有的账单列表
    // 读取集合信息
    AccountModel.find().sort({time: -1}).then(data => {
        console.log(data);
        // res.render('list', {accounts: data, moment: moment});
        // 转换为标准的RESTful API
        res.json({
            code: 200,
            msg: 'success',
            data: data
        })
    }, err => {
        // restful API 失败样式
        // res.status(500).send('Server error');
        res.json({
            code: 500,
            msg: 'Server error',
            data: null
        });
    });
    console.log(req.query);
    // res.render('list', {msg: '添加记录成功'});
});


// 这里restful API的设计理念 是不需要的
// router.get('/account/create', function(req, res, next) {
//     res.render('create');
// });

// 添加账单
router.post('/account', (req, res) => {
    // 插入数据到数据库中
    // let id = shortid.generate();
    /// db.get('accounts').push({id:id, ...req.body}).write(); // 尾部插入
    // 这里的req.body是一个对象，...req.body是将对象展开，之后与id拼接，形成一个新的对象插入数据库中
    // db.get('accounts').unshift({id:id, ...req.body}).write(); // 头部插入

    // 主要是要将req.body中的数据插入到数据库中
    // 而req.body中的时间是一个字符串，需要转换成时间戳
    // 此时需要导入moment模块

    AccountModel.create({
        ...req.body,
        // 将字符串转换成时间戳
        time: moment(req.body.time).toDate()
    }).then(data => {
        // res.render('success', {msg: '添加记录成功'});
        res.json({
           code: '200',
           msg: '添加记录成功',
           data: data
        });

    }, err => {
        console.log(err);
        res.render('error', {msg: '添加记录失败'});
        return;
    });
    console.log(req.body);
    // res.send('添加记录');
});

// 删除账单
router.get('/account/delete/:id', (req, res) => {
    // 获得params中的id参数
    let id = req.params.id;
    // 删除
    // db.get('accounts').remove({id: id}).write();

    // 使用mongodb删除
    AccountModel.deleteOne({id: id}).then(data => {
        console.log(data);
        console.log('删除成功');
        // res.render('success', {msg: '删除成功'});
        res.json({
           code: '1003',
           msg: '删除成功',
           data: {}
        });
        return;
    }, err => {
        console.log(err);
        console.log('删除失败');
        // res.status(500).send('Server error');
        // return;
        res.json({
           code: '1003',
           msg: '删除失败',
           data: null
        });
    });

    // 提醒
    res.send('删除成功');
});

// 获取单个账单信息
router.get('/account/:id', (req, res) => {
   // 获取id
   let {id} = req.params;
   AccountModel.findById({_id: id}).then(data => {
         console.log(data);
         // res.render('edit', {account: data});
         res.json({
              code: '200',
              msg: 'success',
              data: data
         });
   }, err => {
         console.log(err);
         // res.status(500).send('Server error');
         res.json({
              code: '500',
              msg: 'Server error',
              data: null
         });
   })
});

// 更新单个账单信息
router.put('/account/:id', (req, res) => {
    // 获取id
    let {id} = req.params;
    // 更新数据库
    AccountModel.updateOne({_id: id}, req.body).then(data => {
        console.log(data);
        res.json({
            code: '200',
            msg: '更新成功',
            data: data
        });
    }, err => {
        console.log(err);
        res.json({
            code: '500',
            msg: '更新失败',
            data: null
        });
    })
});

module.exports = router;
