// 导入lowdb
const low = require('lowdb')
// 导入FileSync
const FileSync = require('lowdb/adapters/FileSync')
// 创建adapter实例
const adapter = new FileSync('db.json')
// 创建lowdb实例
const db = low(adapter)

// 初始化数据
// db.defaults({ posts: [], user: {} }).write()

// 写入数据
// db.get('posts').push({ id: 1, title: 'lowdb is awesome'}).write();
// db.get('posts').unshift({ id: 1, title: 'lowdb is awesome'}).write();

// 获取数据
console.log(db.get('posts').value());

// 获取单条数据
let res = db.get('posts').find({ id: 1 }).value();
console.log(res);

// 更新数据
db.get('posts').find({ id: 1}).assign({ title: 'lowdb is awesome!!!' }).write();