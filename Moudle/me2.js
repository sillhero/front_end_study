// module.exports 可以暴露‘任意’数据
module.exports = 'hello world';

// 不能使用 exports = 'hello world'，因为 exports 是一个对象，不能直接赋值
// exports = module.exports = {}

exports = module.exports = {tiemo:tiemo}