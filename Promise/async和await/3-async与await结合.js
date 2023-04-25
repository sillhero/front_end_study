const fs = require('fs/promises');

// 定义为异步函数
async function main() {
	try{
		// 读取文件
		let data1 = await fs.readFile('./resource/1.html');
		let data2 = await fs.readFile('./resource/2.html');
		let data3 = await fs.readFile('./resource/3.html');
		console.log(data1 + data2 + data3);
	} catch(e) {
		console.log(e);
	}
}


// 回调地狱模式
fs.readFile('./resource/1.html', (err, data1) => {
	fs.readFile('./resource/2.html', (err, data2) => {
		fs.readFile('./resource/3.html', (err, data3) => {
			console.log(data1 + data2 + data3);
		})
	})
});

// promise模式
const fs = require('fs');
let p = new Promise((resolve, reject) => {
	fs.readFile('./resource/1.html', (err, data) => {
		if(err) reject(err);
		resolve(data);
	});
});

p.then(data1 => {
	return new Promise((resolve, reject) => {
		fs.readFile('./resource/2.html', (err, data2) => {
			if(err) throw err;
			resolve([data1, data2]);
		});
	});
}).then(data2 => {
	return new Promise((resolve, reject) => {
		fs.readFile('./resource/3.html', (err, data) => {
			if(err) throw err;
			data2.push(data);
			resolve(data2);
		});
	});
}).then(data => {
	console.log(data.join(''));
});