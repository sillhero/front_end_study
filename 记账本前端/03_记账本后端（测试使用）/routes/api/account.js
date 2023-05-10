var express = require('express');
var router = express.Router();
const AccountModel = require('../../models/AccountModel');
const moment = require('moment');
//导入检测 token 的中间件函数
let checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware');

//返回所有的账单
router.get('/', checkTokenMiddleware, async function (req, res, next) {
  try {
    //读取数据库, 获取所有账单
    let accounts = await AccountModel.find({
      user_id: req.user.user_id
    });
    //获取文档的总数量
    let total = await AccountModel.count({
      user_id: req.user.user_id
    });
    //响应结果
    res.json({
      msg: '获取成功', //提示语
      code: '0000', //200  0000   状态码
      data: {
        accounts: accounts,
        total: total
      }
    });
  } catch (e) {
    console.log(e);
    res.json({
      msg: '获取失败',
      code: '0001', //数据库操作失败
      data: null
    });
  }
});

//获取单个账单的接口
router.get('/:id', checkTokenMiddleware, async (req, res, next) => {
  //获取 id
  let {
    id
  } = req.params;
  if (!id) {
    return res.json({
      msg: 'ID 缺失',
      code: '1005',
      data: null
    });
  }
  try {
    //查询数据库获取账单信息
    let data = await AccountModel.findOne({
      _id: id
    });
    if (data) {
      res.json({
        msg: '获取成功',
        data: data,
        code: '0000'
      })
    } else {
      res.json({
        msg: '获取失败',
        data: null,
        code: '1006'
      })
    }
  } catch (e) {
    return res.json({
      msg: '获取失败~',
      data: null,
      code: '0001'
    })
  }


})

//新增一个账单
router.post('/', checkTokenMiddleware, async function (req, res, next) {
  //对表单数据进行检测
  let {
    title,
    date,
    type,
    money,
    note
  } = req.body;
  //检测表单数据
  if (!title) {
    return res.json({
      msg: '账单名称不能为空',
      code: '1001',
      data: null
    })
  }

  //判断日期
  let dateReg = /^\d{4}-\d{2}-\d{2}$/; // 2023-10-10
  if (!dateReg.test(date)) {
    return res.json({
      msg: '日期格式不正确',
      code: '1002',
      data: null
    })
  }

  //判断类型
  let arr = [1, -1];
  if (!arr.includes(type * 1)) {
    return res.json({
      msg: '类型值不合法, 必须是 1 或者是 -1',
      code: '1003',
      data: null
    })
  }

  //money 必填
  if (!money) {
    return res.json({
      msg: '金额不能为空',
      code: '1004',
      data: null
    })
  }

  //获取请求体数据  2023-04-15 => new Date(2023,3,15) 
  const momentDate = moment(req.body.date, 'YYYY-MM-DD').toDate();
  //更新 req.body.date 
  req.body.date = momentDate;
  //调整插入数据库的数据
  let body = {
    ...req.body,
    user_id: req.user.user_id
  }

  try {
    //插入数据库
    let result = await AccountModel.create(body);
    //成功的响应
    res.json({
      msg: '创建成功',
      code: '0000',
      data: result
    });
  } catch (e) {
    res.json({
      msg: '创建失败',
      code: '0001', //数据库操作失败
      data: null
    });
  }
});

//删除一个账单
router.delete('/:id', checkTokenMiddleware, async (req, res, next) => {
  //获取要删除账单的 id
  let {
    id
  } = req.params;
  //判断 id
  if (!id) {
    return res.json({
      msg: 'ID 缺失',
      code: '1005',
      data: null
    })
  }

  try {
    //数据库操作
    await AccountModel.deleteOne({
      _id: id
    })

    res.json({
      msg: '删除成功',
      code: '0000',
      data: null
    })
  } catch (e) {
    res.json({
      msg: '删除失败',
      code: '0001', //数据库操作失败
      data: null
    });
  }

});

//更新一个账单
router.patch("/:id", checkTokenMiddleware, async (req, res, next) => {
  //获取要删除账单的 id
  let {
    id
  } = req.params;
  //判断 id
  if (!id) {
    return res.json({
      msg: '账单名称不能为空',
      code: '1005',
      data: null
    })
  }
  //
  //对表单数据进行检测
  let {
    title,
    date,
    type,
    money,
    note
  } = req.body;
  //检测表单数据
  if (!title) {
    return res.json({
      msg: '账单名称不能为空',
      code: '1001',
      data: null
    })
  }

  //判断日期
  let dateReg = /^\d{4}-\d{2}-\d{2}$/; // 2023-10-10
  if (!dateReg.test(date)) {
    return res.json({
      msg: '日期格式不正确',
      code: '1002',
      data: null
    })
  }

  //判断类型
  let arr = [1, -1];
  if (!arr.includes(type * 1)) {
    return res.json({
      msg: '类型值不合法, 必须是 1 或者是 -1',
      code: '1003',
      data: null
    })
  }

  //money 必填
  if (!money) {
    return res.json({
      msg: '金额不能为空',
      code: '1004',
      data: null
    })
  }
  //更新数据库
  await AccountModel.updateOne({
    _id: id
  }, req.body)
  //查询数据库获取更新后的文档
  let account = await AccountModel.findById(id);
  res.json({
    msg: '更新成功',
    code: '0000',
    data: account
  })

})

module.exports = router;