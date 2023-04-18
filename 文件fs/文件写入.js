// const fs = require('fs');
const fs = require('fs');
// fs.writeFile('./test.txt', 'Hello World', (err) => {
// 	// 如果出错了，err里面就有错误信息 是个错误对象 写入成功:null
// 	if (err) {
// 		console.log('写入失败');
// 		return;
// 	}
// });

// 追加写入
fs.appendFile('./test.txt', 'Hello World', (err) => {
	// 如果出错了，err里面就有错误信息 是个错误对象 写入成功:null
	if (err) {
		console.log('写入失败');
		return;
	}
	console.log('追加写入成功');
});

// writeFile也能追加写入
// 程序的日志
fs.writeFile('./test.txt', 'Hello World', {flag: 'a'}, (err) => {
	// 如果出错了，err里面就有错误信息 是个错误对象 写入成功:null
	if (err) {
		console.log('写入失败');
		return;
	}
	console.log('追加写入成功');
});

