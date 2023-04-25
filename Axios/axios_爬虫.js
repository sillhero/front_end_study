// 导入 axios
const axios = require('axios');

(async () => {
    // 获取响应体
    let {data} = await axios.get('https://news.163.com/domestic/');
    // 正则匹配
    let reg = /<div><a href="(.*?)">(.*?)<\/a><\/div>/g;
    // 匹配超链接完整标签的正则


})