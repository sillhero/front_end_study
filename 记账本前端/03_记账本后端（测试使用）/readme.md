#

## 功能说明
* 显示添加账单的表单
* 服务端保存账单数据(数据库)
* 列表呈现所有的账单
* 删除某个账单的信息

## 路由规则
* GET   /account/create    显示表单
* POST  /account           新增
* GET   /account           显示所有账单
* GET  /account/1/delete   删除某个账单  
* GET  /account/1/edit     显示修改页面
* POST  /account/1/update  更新账单数据

## 操作步骤
1. 创建模板文件 views/account/create.ejs.  
2. 将 create.html 的文件内容复制到 create.ejs 中
3. 在 account/create 路由回调中, 渲染模板
```js
//显示表单页面
router.get('/create', function(req, res, next) {
  //响应 html 内容
  res.render('account/create');
});
```
4. 复制 js 和 css 目录到 public 下
5. 修改 create.ejs 文件中 css 和 js 的请求路径, 变为绝对路径

## 文档属性
* 事项     title                          String
* 时间     date                           Date
* 类型     type   支出 -1   收入 1         Number
* 金额     money                          Number
* 备注     note                           String

## 操作步骤
1. 确定文档的属性以及属性值的类型
2. 复制 `config`, `db`, `models` 文件夹至当前项目
3. 创建模型文件 `models/accountModel`, 修改文档结构
4. 修改 `views/account/create.ejs`, form 属性 `method action`, 修改表单元素的 `name` 属性
5. post /account 路由规则中, 使用 `req.body` 收集请求体数据

## 插入数据库操作步骤
1. `bin/www` 中导入 db/db.js
2. 调用 db 函数, 将 express 启动服务代码传入 db 的成功回调中. 设置失败回调
3. 安装包 mongoose@6   moment
4. account.js 中, 导入 `moment`
5. 修改 `models/AccountModel.js` 设置属性与属性值类型
6. post  /account 路由回调处理 req.body.date    (处理方式参考 chatGPT)
7. 在 post /account 路由回调中, 使用 AccountModel.create 插入数据库

## 列表展示数据
1. get /account 路由中通过 AccountModel 读取所有的账单
2. render('account/list', {data, moment})


