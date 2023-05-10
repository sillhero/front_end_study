module.exports = (req, res, next) => {
  //判断当前用户是否已经登录
  if(!req.session.phone) {
    return res.redirect('/login')
  }
  next();
}