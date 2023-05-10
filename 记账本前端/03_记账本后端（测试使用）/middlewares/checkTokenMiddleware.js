//导入校验 token 的函数
const {
  verifyToken
} = require('../utils/token');

module.exports = async (req, res, next) => {
  //获取请求报文中的 token
  let token = req.get('token'); // req.headers.token
  if (!token) {
    return res.json({
      msg: 'token缺失',
      code: '2002',
      data: null
    })
  }
  try{
    //校验 token
    let data = await verifyToken(token);
    req.user = data;
    next();
  }catch(e){
    return res.json({
      msg: 'token 校验失败',
      code: '2003',
      data: null
    })
  }
}