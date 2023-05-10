module.exports = {
  //数据库相关的配置
  DBHOST: '127.0.0.1',
  DBPORT: 27017,
  DBNAME: 'games',
  secret: 'atguigu',
  session_max_age: 7 * 24 * 60 * 60 * 1000,
  //jwt生成用的秘钥
  token_secret: 'atguigu_cd230202'
}