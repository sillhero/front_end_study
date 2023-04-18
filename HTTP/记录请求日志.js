// 导入 http 模块
const http = require('http');
// 导入 fs 模块
const fs = require('fs');

function getClientIp(req) {
	return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
		req.connection.remoteAddress || // 判断 connection 的远程 IP
		req.socket.remoteAddress || // 判断后端的 socket 的 IP
		req.connection.socket.remoteAddress;
}

// 创建服务对象
const server = http.createServer((req, res) => {
	// 获取IP地址
	let ip = getClientIp(req);
	// 获取请求的方法和url
	console.log(req);
	let {method, url} = req;
	// 解析中文
	url = decodeURI(url);
	// 获取当前时间
	let date = new Date();
	// 拼接时间字符串
	let timeStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	fs.appendFileSync('./log.log', `[${timeStr}] ${method} ${url} ${ip} \r\n`);
	res.end('ok');
});

// 监听端口
let port = 8080;
server.listen(port, () => {
	console.log(`服务已经启动, 端口号为: ${port}`);
});