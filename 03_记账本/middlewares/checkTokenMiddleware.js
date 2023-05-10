// 导入检验token的函数
const {
    verifyToken
} = require('../utils/token');

module.exports = async (req, res, next) => {
    // 获取请求报文中的token
    let token = req.get('token'); // req.headers.token
    if (!token) {
        return res.json({
            msg: 'token缺失',
            code: '2002',
            data: null
        })
    }
    try {
        // 校验token
        let data = await verifyToken(token);
        req.user = data; // 这里就把用户信息（用来加密token的）挂载到了req上
        next();
    }catch (e){
        return res.json({
            msg: 'token校验失败',
            code: '2003',
            data: null
        })
    }
}